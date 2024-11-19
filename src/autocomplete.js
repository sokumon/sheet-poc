import { linkProperties } from "./utils";
import $ from './dom';
export default class AutoComplete{
    constructor(instance){
        this.instance = instance

        linkProperties(this, this.instance, [
            'options', 'datamanager', 'columnmanager', 'cellmanager',
            'header', 'footer', 'bodyScrollable', 'datatableWrapper',
            'getColumn', 'bodyRenderer'
        ]);

        this.avaliableFormulas = this.options.formulas
        this.allFormulas = Object.keys(this.avaliableFormulas)
        this.argSuggestion = this.options.argSuggestion
        this.formulas = []
        const that = this
        this.autoCompletehandler = {
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
          
              that.suggest()
              return true;
            }
          };
        this.create()
        this.choosenFormula = null
    }

    create(){
        this.formulaSuggest = document.createElement('div')
        this.formulaSuggest.classList.add("formula-suggest")
        this.instance.wrapper.insertBefore(this.formulaSuggest, this.instance.datatableWrapper);
    }

    display(toggle){
        if(toggle == "on"){
            let style = getComputedStyle(this.formulaSuggest)
            this.originalDimensions = {width: style.width, height: style.width}
            
            let editor = this.cellmanager.$editingCell.getBoundingClientRect();
            Object.assign(this.formulaSuggest.style, {
                display: "block",
                position: "absolute",
                left: `${editor.left}px`,
                top: `${editor.top + editor.height}px`
            });
        }else if(toggle == "off"){
            Object.assign(this.formulaSuggest.style, {
                display: "none"
            });
        }
    }

    search(q){
        q = q.split("(")[0]
        console.log("Search Term is", q)
        this.formulas = []
        this.formulas = Object.keys(this.avaliableFormulas).filter(value => value.startsWith(q.toLowerCase()));
    }

    renderOptions(){
        this.formulaSuggest.innerHTML = " "
        this.formulas.forEach(formula => {
            let formulaDesc = this.avaliableFormulas[formula].desc
            let div = document.createElement('div');
            div.setAttribute('class', 'formula');
            div.setAttribute("id",formula)
            let name = document.createTextNode(formula);
            div.appendChild(name);
            let inside_div = document.createElement('div');
            let para = document.createElement('p');
            para.setAttribute('class', 'formula-description');
            para.textContent = formulaDesc;
            inside_div.appendChild(para);
    
            let hr = document.createElement('hr');
            inside_div.appendChild(hr);
            div.appendChild(inside_div);

            $.on(div, 'click', '.formula', (e) => {
                this.handleClick(e)
            });
            this.formulaSuggest.appendChild(div)
        })

    }

    // Will be called from the componeent 
    suggest(){
        if(!this.cellmanager.currentCellEditor) return;
        this.changeDimensions("500px", "300px")
        let value = this.cellmanager.currentCellEditor.getValue()
        let cellContent = this.cellmanager.cellContent.value
        if(value.charAt(0) === "="){
            if(!this.instance.getCellChoosen()){
                this.instance.startCellChoosing()
            }
            if(value.length > 1){
                // =S
                value = value.replace("=","")
                cellContent = value
    
                this.tokens = this.options.scanner(value)

                if(this.hasSelected){
                    this.choosenFormula = this.getFormulaName()
                    this.createArgSuggestion(this.choosenFormula)
                    this.suggestArgs()
                    return;
                }
                
    
                this.display("on")
                this.search(value)
                this.renderOptions()
                if(this.hasOpenBracket()){
                    this.choosenFormula = this.getFormulaName()
                    console.log("Choosen Formula", this.choosenFormula)
                    this.createArgSuggestion(this.choosenFormula)
                    this.suggestArgs()
                    this.choosenFormula = null
                }else{
                    console.log("hello")
                    this.changeDimensions("500px", "300px")
                }
            }
        }else{
            this.display("off")
            this.instance.stopCellChoosing()
        }
    }

    hasOpenBracket(){
        return this.tokens.find(token => token.type === 17)
    }

    hasCloseBracket(){
        return this.tokens.find(token => token.type === 18)
    }

    noOfCommas(){
        return this.tokens.filter(token => token.type === 22)
    }

    selectOption(formulaName){
        this.choosenFormula = formulaName
        this.hasSelected = true
        let cellContent = this.instance.cellmanager.cellContent.value
        let formulaCompletion = this.avaliableFormulas[formulaName].completion
        this.cellmanager.currentCellEditor.setValue(`=${cellContent}${formulaCompletion}`)
        cellContent = `=${cellContent}${formulaCompletion}`
    }

    createArgSuggestion(formulaName){
        this.formulaSuggest.innerHTML = " "

        let div = document.createElement("div")
        div.setAttribute("class","argSuggestConatainer")
        let fName = document.createTextNode(`${formulaName}(`)
        div.appendChild(fName)

        let finalSuggestion = this.filterArgSuggestion(formulaName)
        finalSuggestion.parameters.forEach((param, i) => {
            console.log(param, i);
            const span = document.createElement("span");
            span.innerText = param.name;
            
            div.appendChild(span);
        
            if (i !== finalSuggestion.parameters.length - 1) {
                const commaSpan = document.createTextNode(", ");
                div.appendChild(commaSpan);
            }
        });        
        let cParen = document.createTextNode(")")
        div.appendChild(cParen)

        this.formulaSuggest.appendChild(div)
    }

    getFormulaName(){
        return  this.tokens.find(token => token.type === 15).value
    }
    suggestArgs(){
        let commas = this.noOfCommas()
        this.changeDimensions("500px","30px")
        let argContainer = this.formulaSuggest.children[0].children
        let args = Array.prototype.slice.call(argContainer)
        args.map(arg => arg.classList.remove("arg-suggest"))
        argContainer[-2 + commas.length + 2].classList.add("arg-suggest")
        if(this.hasCloseBracket()){
            this.display("off")
        }

    }

    filterArgSuggestion(formulaName){
        return this.argSuggestion.find(suggest => suggest.name ===  formulaName)
    }

    changeDimensions(width, height){
        Object.assign(this.formulaSuggest.style,{
            height: height,
            width: width
        })
    }
    handleClick(event){
        this.selectOption(event.target.id)
    }
}