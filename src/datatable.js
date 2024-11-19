import $ from './dom';
import DataManager from './datamanager';
import CellManager from './cellmanager';
import ColumnManager from './columnmanager';
import RowManager from './rowmanager';
import BodyRenderer from './body-renderer';
import Style from './style';
import Keyboard from './keyboard';
import TranslationManager from './translationmanager';
import getDefaultOptions from './defaults';
import AutoComplete from './autocomplete';

let defaultComponents = {
    DataManager,
    CellManager,
    ColumnManager,
    RowManager,
    BodyRenderer,
    Style,
    Keyboard,
    AutoComplete
};

class DataTable {
    constructor(wrapper, options) {
        DataTable.instances++;

        if (typeof wrapper === 'string') {
            // css selector
            wrapper = document.querySelector(wrapper);
        }
        this.wrapper = wrapper;
        this.$ = $
        if (!(this.wrapper instanceof HTMLElement)) {
            throw new Error('Invalid argument given for `wrapper`');
        }

        this.initializeTranslations(options);
        this.setDefaultOptions();
        this.buildOptions(options);
        this.prepare();
        this.initializeComponents();
        this.refreshonWindowResize();

        if (this.options.fullHeight) {
            this.makeFullheight();
        }
        if(this.options.reactive){
            this.initReactivity()
        }
        if (this.options.data) {
            this.refresh();
            this.columnmanager.applyDefaultSortOrder();
        }


    }

    initReactivity(){
        const that = this
        const handler = {
            get(target, key) {
              if (key == 'isProxy')
                return true;
          
              const prop = target[key];
          
              if (typeof prop == 'undefined')
                return;
          
              if (!prop.isProxy && typeof prop === 'object')
                target[key] = new Proxy(prop, handler);
          
              return target[key];
            },
            set(target, key, value) {
          
              target[key] = value;
          
              return true;
            }
          };

        this.options.data = new Proxy(this.options.data, handler);
    }
    
    initializeTranslations(options) {
        this.language = options.language || 'en';
        this.translationManager = new TranslationManager(this.language);

        if (options.translations) {
            this.translationManager.addTranslations(options.translations);
        }
    }

    setDefaultOptions() {
        this.DEFAULT_OPTIONS = getDefaultOptions(this);
    }

    buildOptions(options) {
        this.options = this.options || {};

        this.options = Object.assign(
            {}, this.DEFAULT_OPTIONS,
            this.options || {}, options
        );

        options.headerDropdown = options.headerDropdown || [];
        this.options.headerDropdown = [
            ...this.DEFAULT_OPTIONS.headerDropdown,
            ...options.headerDropdown
        ];

        // custom user events
        this.events = Object.assign(
            {}, this.DEFAULT_OPTIONS.events,
            this.options.events || {},
            options.events || {}
        );
        this.fireEvent = this.fireEvent.bind(this);

    }

    prepare() {
        this.prepareDom();
        this.unfreeze();
    }

    initializeComponents() {
        let components = Object.assign({}, defaultComponents, this.options.overrideComponents);
        let {
            // Style,
            Keyboard,
            DataManager,
            RowManager,
            ColumnManager,
            CellManager,
            BodyRenderer,
            AutoComplete
        } = components;

        this.style = new Style(this);
        this.keyboard = new Keyboard(this.wrapper);
        this.datamanager = new DataManager(this.options);
        this.rowmanager = new RowManager(this);
        this.columnmanager = new ColumnManager(this);
        this.autocomplete = new AutoComplete(this);
        this.cellmanager = new CellManager(this);
        this.bodyRenderer = new BodyRenderer(this);

    }

    prepareDom() {
        this.wrapper.innerHTML = `
            <div class="datatable" dir="${this.options.direction}">
                <div class="dt-header"></div>
                <div class="dt-scrollable"></div>
                <div class="dt-footer"></div>
                <div class="dt-freeze">
                    <span class="dt-freeze__message">
                        ${this.options.freezeMessage}
                    </span>
                </div>
                <div class="dt-toast"></div>
                <div class="dt-dropdown-container"></div>
                <textarea class="dt-paste-target"></textarea>
            </div>
        `;

        this.datatableWrapper = $('.datatable', this.wrapper);
        this.header = $('.dt-header', this.wrapper);
        this.footer = $('.dt-footer', this.wrapper);
        this.bodyScrollable = $('.dt-scrollable', this.wrapper);
        this.freezeContainer = $('.dt-freeze', this.wrapper);
        this.toastMessage = $('.dt-toast', this.wrapper);
        this.pasteTarget = $('.dt-paste-target', this.wrapper);
        this.dropdownContainer = $('.dt-dropdown-container', this.wrapper);
    }

    refresh(data, columns) {
        this.datamanager.init(data, columns);
        this.render();
        this.setDimensions();
    }

    destroy() {
        this.wrapper.innerHTML = '';
        this.style.destroy();
        this.fireEvent('onDestroy');
    }

    appendRows(rows) {
        this.datamanager.appendRows(rows);
        this.rowmanager.refreshRows();
    }

    refreshRow(row, rowIndex) {
        this.rowmanager.refreshRow(row, rowIndex);
    }

    render() {
        this.renderHeader();
        this.renderBody();
    }

    renderHeader() {
        this.columnmanager.renderHeader();
    }

    renderBody() {
        this.bodyRenderer.render();
    }

    setDimensions() {
        this.style.setDimensions();
    }

    showToastMessage(message, hideAfter) {
        this.bodyRenderer.showToastMessage(message, hideAfter);
    }

    clearToastMessage() {
        this.bodyRenderer.clearToastMessage();
    }

    getColumn(colIndex) {
        return this.datamanager.getColumn(colIndex);
    }

    getColumns() {
        return this.datamanager.getColumns();
    }

    getRows() {
        return this.datamanager.getRows();
    }

    getCell(colIndex, rowIndex) {
        return this.datamanager.getCell(colIndex, rowIndex);
    }

    getColumnHeaderElement(colIndex) {
        return this.columnmanager.getColumnHeaderElement(colIndex);
    }

    getViewportHeight() {
        if (!this.viewportHeight) {
            this.viewportHeight = $.style(this.bodyScrollable, 'height');
        }

        return this.viewportHeight;
    }

    sortColumn(colIndex, sortOrder) {
        this.columnmanager.sortColumn(colIndex, sortOrder);
    }

    removeColumn(colIndex) {
        this.columnmanager.removeColumn(colIndex);
    }

    scrollToLastColumn() {
        this.datatableWrapper.scrollLeft = 9999;
    }

    freeze() {
        $.style(this.freezeContainer, {
            display: ''
        });
    }

    unfreeze() {
        $.style(this.freezeContainer, {
            display: 'none'
        });
    }

    updateOptions(options) {
        this.buildOptions(options);
    }

    fireEvent(eventName, ...args) {
        // fire internalEventHandlers if any
        // and then user events
        const handlers = [
            ...(this._internalEventHandlers[eventName] || []),
            this.events[eventName]
        ].filter(Boolean);

        for (let handler of handlers) {
            handler.apply(this, args);
        }
    }

    on(event, handler) {
        this._internalEventHandlers = this._internalEventHandlers || {};
        this._internalEventHandlers[event] = this._internalEventHandlers[event] || [];
        this._internalEventHandlers[event].push(handler);
    }

    log() {
        if (this.options.logs) {
            console.log.apply(console, arguments);
        }
    }

    translate(str, args) {
        return this.translationManager.translate(str, args);
    }

    makeFullheight() {
        var r = document.querySelector(':root');
        r.style.setProperty('--dt-scroll-height', '100vh');
    }

    refreshonWindowResize() {
        const that = this;
        window.addEventListener('resize', function (event) {
            that.refresh();
        }, true);
    }

    startCellChoosing(){
        this.cellmanager.cellChoosingMode = true
    }

    getCellChoosing(){
        return this.cellmanager.cellChoosingMode
    }

    stopCellChoosing(){
        this.cellmanager.cellChoosingMode = false
    }

    getCurrentCellEditor(){
        this.cellmanager.currentCellEditor
    }

    getCellChoosen(){
        return this.cellmanager.choosenCell
    }

    createFormulaSuggest(){
        let formulaSuggest = document.createElement("div")
        formulaSuggest.setAttribute("class","formula-suggest")
        this.wrapper.appendChild(formulaSuggest)
    }
}

DataTable.instances = 0;

export default DataTable;
