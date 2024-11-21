import { linkProperties } from "./utils";
import $ from './dom';
export default class CellSelection{
    constructor(instance){
        this.instance = instance

        linkProperties(this, this.instance, [
            'options', 'datamanager', 'columnmanager', 'cellmanager',
            'header', 'footer', 'bodyScrollable', 'datatableWrapper',
            'getColumn', 'bodyRenderer','observer','autocomplete'
        ]);

        this.startCell = null
        this.end = null
        this.cellChoosingMode = false
        this.selectedCells = []
        this.direction = null
        this.observer.subscribe(this.handleUpdate.bind(this))

        this.currentValue = ""
    }

    handleUpdate(newValue){
        // redraw of cell can take place here    
    }

    selectCell($cell) {
        if(!this.startCell){
            this.currentValue = this.cellmanager.currentCellEditor.getValue()
        }
        if ($cell === this.cellmanager.$editingCell) {
            console.trace();
            return;
        }
    
        const { colIndex, rowIndex } = $.data($cell);
    

        this.drawCellSelection($cell);
        this.setChosenCell($cell);
        this.addtoCell($cell)
    }
    
    setChosenCell($cell) {
        console.log(this)
        if (this.startCell) {
            if ($cell !== this.startCell) {
                console.log(this.selectedCells)
                this.startCell = null 
                if (this.selectedCells.length > 1) {
                    this.cleanup(this.selectedCells);
                    this.selectedCells = [];
                } else {
                    this.startCell= null;
                }
            }
        }
    
        this.startCell = $cell;
    }
    
    groupSelectCells($selectionCursor){
        
        if (this.cellmanager._selectArea(this.startCell, $selectionCursor)) {
            // valid selection
            this.$selectionCursor = $selectionCursor;
        }
        

    }

    addRangetoCell(selectCells){
    let startCell = this.rowcolToA1(selectCells[0][1],selectCells[0][0])

    let endCell = this.rowcolToA1(selectCells[selectCells.length -1][1],selectCells[selectCells.length -1][0])

    this.autocomplete.updateEditor(`${startCell}:${endCell}`)
    }
    drawCellSelection($cell) {
        if (this.startCell) {
            this.startCell.classList.remove("dt-cell--cellSelected");
        }
    
        $cell.classList.add('dt-cell--cellSelected');
       


    }

    addtoCell($cell){
        const {rowIndex,colIndex} = $.data($cell)
        let key = this.rowcolToA1(rowIndex,colIndex)
        let value = this.cellmanager.currentCellEditor.getValue()
        console.log(`${key}`)
        this.autocomplete.updateEditor(`${key}`)
        // if(this.autocomplete.confirmedValue){
        //     this.cellmanager.currentCellEditor.setValue(`=${this.autocomplete.confirmedValue}${key}`)
        // }else{
        //     this.cellmanager.currentCellEditor.setValue(`${this.currentValue}${key}`)
        // }
    }

    findDirection($cell1,$cell2){
        // 
        const cell1 = $.data($cell1);
        const cell2 = $.data($cell2);

        let rowIndex1 = parseInt(cell1.rowIndex)
        let colIndex1 = parseInt(cell1.colIndex)
        let rowIndex2 = parseInt(cell2.rowIndex)
        let colIndex2 = parseInt(cell2.colIndex)
        
        let direction = ""
        if(rowIndex1 == rowIndex2){
            direction = "Horizontal"
        }else if(colIndex1 == colIndex2){
            direction = "Vertical"
        }else{
            direction ={ 
                dir:"Diagonal",
                width:Math.abs(colIndex2- colIndex1),
                height: Math.abs(rowIndex2 -rowIndex1)
            }
        }
        this.direction = direction
        return direction
    }
    
    drawGroupCells(){
        if(typeof this.direction !== "object"){
            this.selectedCells[0].classList.add(`dt-cell--cellRange-${this.direction}-Top`)
            this.selectedCells[this.selectedCells.length -1].classList.add(`dt-cell--cellRange-${this.direction}-Bottom`)
            this.selectedCells.slice(1,-1).map(cell => cell.classList.add(`dt-cell--cellRange-${this.direction}`))
        }else{
            let corners = this.findCorners(this.selectedCells,this.direction.width,this.direction.height)
            let cornerDirs = ["Top","Right","Bottom","Left"]
            corners.forEach((corner,index) =>{
                corner.classList.add(`dt-cell--cellRange-DiagonalCorner-${cornerDirs[index]}`)
            })
            this.selectedCells.slice(1,this.direction.width).map(cell => cell.classList.add("dt-cell--cellRange-Diagonal-Top"))
            this.selectedCells.slice((this.selectedCells.length-1)- this.direction.width + 1, this.selectedCells.length-1).map(cell => cell.classList.add("dt-cell--cellRange-Diagonal-Bottom"))
            for (let index = this.direction.width + 1; index < this.selectedCells.length; index = index + (this.direction.width + 1) ) {
                if(index-1 > this.direction.width ){
                    this.selectedCells[index - 1].classList.add("dt-cell--cellRange-Diagonal-Right")
                }
                if(index < this.selectedCells.length - this.direction.width - 1){
                    this.selectedCells[index].classList.add("dt-cell--cellRange-Diagonal-Left")
                }
            }
        }
    }

    cleanup(cells){
        let direction = ["Vertical", "Horizontal"]
        let cornerDirs = ["Top","Right","Bottom","Left"]
        cells.map((cell) =>{
            cornerDirs.forEach((cornerDir) =>{
                cell.classList.remove(`dt-cell--cellRange-Diagonal-${cornerDir}`)
                cell.classList.remove(`dt-cell--cellRange-DiagonalCorner-${cornerDir}`)
            })
            direction.forEach(direction =>{
                cell.classList.remove(`dt-cell--cellRange-${direction}-Top`)
                cell.classList.remove(`dt-cell--cellRange-${direction}-Bottom`)
                cell.classList.remove(`dt-cell--cellRange-${direction}`)
            })
        })
    }

    findCorners(cells,width,height){
        // arr = [1,3,4,4,4,5,6,6,6]

        let top = cells[0]
        let bottom = cells[cells.length -1]
        let right = cells[width]
        let left = cells[cells.length - width - 1] 

        return [top,right,bottom,left]
    }
    // null varibles and remove styles on single ce
    reset(){
        this.startCell = null
        this.selectedCells = []
        this.direction = null
        this.autocomplete.confirmedValue = null
        this.autocomplete.hasSelected = false
    }

    a1torowcol(cell){
        return {
          row : parseInt(cell.replace(/\D/g, "")) - 1,
          col : cell.charCodeAt(0) - 64
        }
    }
    
    rowcolToA1(row,col){
        row = parseInt(row)
        col = parseInt(col)
        return `${String.fromCharCode(64+col)}${row+1}`
    }
}