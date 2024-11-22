import { linkProperties } from "./utils";
import $ from './dom';
import { rowcolToA1, getIndexfromHTML, getCellfromA1 } from "./sheetutils";

// Object .
export default class DrawManager{

    constructor(instance){
        this.instance = instance
        linkProperties(this, this.instance, [
            'options', 'datamanager', 'columnmanager', 'cellmanager',
            'header', 'footer', 'bodyScrollable', 'datatableWrapper',
            'getColumn', 'bodyRenderer','observer','autocomplete'
        ]);
        const that = this
        this.defaults = { 
            textAlign: "center",
            borderCell: "",
            backgroundColor: "",
            
        }
        this.supportedStyles = {
            textAlign: {
                click: (alignment) => {
                    let index= getIndexfromHTML(this.cellmanager.$focusedCell)
                    let cellKey = rowcolToA1(index.row, index.col)
                    let eventData = {
                        cell :cellKey,
                        type: 'textAlign',
                        value: alignment
                    }
                    this.throwEvent(eventData)
                },
                draw: (alignment) => {
                    this.cellmanager.$focusedCell.style.textAlign = alignment
                },
                redraw: (cell, alignment) => { 
                    console.log("Redrawing")
                    let fetchedCell  = getCellfromA1(cell)
                    fetchedCell.style.textAlign = alignment
                }
            },
            textDecoration: {
                click: (decoration) => {
                    let index= getIndexfromHTML(this.cellmanager.$focusedCell)
                    let cellKey = rowcolToA1(index.row, index.col)
                    let eventData = {
                        cell : cellKey,
                        type: 'textDecoration',
                        value: [decoration]
                    }
                    this.throwEvent(eventData)
                },
                draw: (decoration) => {
                    let cell = this.cellmanager.$focusedCell
                    this.decorateCell(cell,decoration)
                },
                redraw: (cell, decoration) => { 
                    console.log("Redrawing")
                    let fetchCell = getCellfromA1(cell)
                    this.decorateCell(fetchCell,decoration)
                }
            },
            borderCell: {
                type: "borderCell",
                fetch: true,
                click: (cells) => this.borderCell(cells),
                draw: (cells) => this.drawBorder(cells)
            },
            backgroundColor: {
                type: "backgroundColor",
                click: (cellKey, color) => this.colorBGCell(cellKey, color),
                draw: (cellKey, color) => this.applyBackgroundColor(cellKey, color)
            },
            merge: {
                type: "merge",
                fetch: true,
                click: (cellKey, range) => this.mergeCells(cellKey, range),
                draw: (cellKey, range) => this.drawMergedCells(cellKey, range)
            },
        }
    }


    throwEvent(styleData){
        const addStyleEvent = new CustomEvent("addStyle",{
            detail: {
                styleData
            }
        })

        this.instance.wrapper.dispatchEvent(addStyleEvent)
    }

    decorateCell(cell,d){
        if(d === "underline") {
            cell.style.textDecoration = d
         } else if (d === "bold") {
             if (!cell.children[0].innerHTML.includes("<b>")) {
               cell.children[0].innerHTML = `<b>${cell.children[0].innerHTML}</b>`;
             }
         }else if (d === "italic") {
             if (!cell.children[0].innerHTML.includes("<i>")) {
               cell.children[0].innerHTML = `<i>${cell.children[0].innerHTML}</i>`;
             }
         }
    }

    drawCellStyles(styles,type){
        if(Object.keys(styles).length == 0) return
        let styledCells = Object.keys(styles)
        console.log("Styles recived", styledCells)
        styledCells.forEach( cell => {
            let appliedStyles = Object.keys(styles[cell])
            console.log(appliedStyles)
            appliedStyles.forEach(style =>{
                    let appliedProps = styles[cell][style] 
                    if(Array.isArray(appliedProps)){
                        // handles this textDecoration : ["bold", ittlaic ]
                        appliedProps.forEach(value => {
                            console.log(value)
                            if(type === "draw") this.supportedStyles[style].draw(value)
                            if(type === "redraw") this.supportedStyles[style].redraw(cell,value)
                        })
                    }else{
                        if(type === "draw") this.supportedStyles[style].draw(styles[cell][style])
                        if(type === "redraw") this.supportedStyles[style].redraw(cell,styles[cell][style] )
                    }

                    
            })
        }
        )

    }

    drawSheetStyles(){
        console.log("Sheet styles are being drawn")
    }

    draw(cellStyles,sheetStyles,type){
        this.drawCellStyles(cellStyles,type)
        this.drawSheetStyles(sheetStyles,type)
    }


    getIndexfromHTML(cell){
        let {rowIndex,colIndex } = $.data(cell)
        return {
          row: rowIndex,
          col: colIndex
        }
  }
}