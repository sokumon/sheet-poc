import $ from "./dom"

export function getIndexfromHTML(cell){
    let {rowIndex,colIndex } = $.data(cell)
    return {
      row: rowIndex,
      col: colIndex
    }
}

export function createLetterHeadings() {
    let columns = [];
    for (let n = 0; n < 26; n++) {
      columns.push({
        name: String.fromCharCode(65 + n),
        width: 100,
        dropdown: false,
      });
    }
    return columns;
}

export function getCellviaRowCol(row,col){
    return document.querySelector(`[data-row-index="${row}"][data-col-index="${col}"]`)
}

export function a1torowcol(cell){
    return {
      row : parseInt(cell.replace(/\D/g, "")) - 1,
      col : cell.charCodeAt(0) - 64
    }
}

export function getCellfromA1(cellKey){
    let cellIndex = a1torowcol(cellKey);
    let cell = getCellviaRowCol(cellIndex.row,cellIndex.col)
    return cell
}



export function rowcolToA1(row,col){
      row = parseInt(row)
      col = parseInt(col)
      return `${String.fromCharCode(64+col)}${row+1}`
  }
  