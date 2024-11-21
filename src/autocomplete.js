import { linkProperties } from "./utils";
import $ from './dom';
export default class AutoComplete{
    constructor(instance){
        this.instance = instance

        linkProperties(this, this.instance, [
            'options', 'datamanager', 'columnmanager', 'cellmanager',
            'header', 'footer', 'bodyScrollable', 'datatableWrapper',
            'getColumn', 'bodyRenderer','observer'
        ]);

        this.avaliableFormulas = this.options.formulas
        this.allFormulas = Object.keys(this.avaliableFormulas)
        this.argSuggestion = this.options.argSuggestion
        this.observer.subscribe(this.handleValueUpdate.bind(this))
        this.formulas = []
        const that = this
        this.confirmedValue = null
        this.create()
        this.choosenFormula = null
        this.tokens = []
    }


    handleValueUpdate(newValue){
        this.suggest()
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
        // let cellContent = this.cellmanager.cellContent.value
        if(value.charAt(0) === "="){
            if(!this.instance.getCellChoosen()){
                this.instance.startCellChoosing()
            }
            if(value.length > 1){
                value = value.replace("=","")
    
                this.tokens = this.options.scanner(value)
                // if(this.tokens.length > 1){
                //     if(!this.tokens[this.tokens.length -1].type == 3){

                //     }
                // }


                if(this.hasSelected){
                    this.choosenFormula = this.getFormulaName()
                    this.createArgSuggestion(this.choosenFormula)
                    this.suggestArgs()
                    return;
                }
                
                this.search(value)
                if(this.formulas.length > 1){
                    this.display("on")
                
                    this.renderOptions()
                    if(this.hasOpenBracket()){
                        this.writeConfirmedValue(value)
                        this.choosenFormula = this.getFormulaName()
                        // console.log("Choosen Formula", this.choosenFormula)
                        this.createArgSuggestion(this.choosenFormula)
                        this.suggestArgs()
                        this.choosenFormula = null
                    }else{
                        // console.log("hello")
                        this.changeDimensions("500px", "300px")
                    }
                }else{
                    // no formulas found
                    this.display("off")
                }
            }
        }else{
            this.display("off")
            this.instance.stopCellChoosing()
        }
    }

    updateEditor(newValue){
        let currentTokens = this.tokens 
        let currentValue = this.cellmanager.currentCellEditor.getValue()
        let lastToken = null

        if(currentTokens){
            lastToken = this.tokens[this.tokens.length - 1]
        }

        
        let incomingTokens = this.options.scanner(newValue)
        let newEditorValue = null
        // if this its a completion SUM( 
        if(incomingTokens[0].type == 15){
            newEditorValue = currentValue.charAt(0) + newValue
            this.cellmanager.currentCellEditor.setValue(newEditorValue)
            return;
        }

        // handling Cell 
        if(incomingTokens[0].type == 3){
            console.log("last Token", lastToken)
            if(currentTokens.length < 1){
                newEditorValue  = currentValue.charAt(0) + newValue
                this.cellmanager.currentCellEditor.setValue(newEditorValue)
                return;
            }
            if(lastToken.type == 3){
                if(this.hasOpenBracket()){
                    console.log("Serious Business")
                    newEditorValue  = currentValue.charAt(0) + this.stringfyTokens() + newValue
                    this.cellmanager.currentCellEditor.setValue(newEditorValue)
                    return
                }
                newEditorValue  = currentValue.charAt(0) + newValue
                this.cellmanager.currentCellEditor.setValue(newEditorValue)

            }

            if(lastToken.type == 22){
                newEditorValue  = currentValue.charAt(0) + this.stringfyTokens() + newValue
                this.cellmanager.currentCellEditor.setValue(newEditorValue)
            }
            if(lastToken.type == 17){
                newEditorValue =  currentValue + newValue
                this.cellmanager.currentCellEditor.setValue(newEditorValue)
            }
    
        }

    }

    stringfyTokens(){
        let finalString = ""
        let bracketIndex = this.tokens.indexOf(this.hasOpenBracket())
        console.log(this.hasCommas())
        let commas = this.hasCommas()
        let maxIndex = bracketIndex;
        if (commas.length > 0) {
            let lastComma = commas[commas.length - 1];
            let lastCommaIndex = this.tokens.indexOf(lastComma)
            maxIndex = Math.max(bracketIndex, lastCommaIndex);
        }

        for (let i = 0; i <= maxIndex; i++) {
            finalString += this.tokens[i].value;
        }
        return finalString
    }
    hasOpenBracket(){
        return this.tokens.find(token => token.type === 17)
    }

    hasCloseBracket(){
        return this.tokens.find(token => token.type === 18)
    }

    hasCommas(){
        return this.tokens.filter(token => token.type === 22)
    }

    writeConfirmedValue(value){
        let lastToken = this.tokens[this.tokens.length - 1]
        // console.log(lastToken)
        if(lastToken.type === 17 || lastToken){
            this.confirmedValue = value
        }
    }
    selectOption(formulaName){
        this.choosenFormula = formulaName
        this.hasSelected = true
        let cellContent = this.cellmanager.currentCellEditor.getValue()
        let formulaCompletion = this.avaliableFormulas[formulaName].completion
        // this.cellmanager.currentCellEditor.setValue(`=${formulaCompletion}`)
        console.log(`${formulaCompletion}`)
        this.updateEditor(`${formulaCompletion}`)
        // cellContent = `=${cellContent}${formulaCompletion}`
    }

    createArgSuggestion(formulaName){
        this.formulaSuggest.innerHTML = " "

        let div = document.createElement("div")
        div.setAttribute("class","argSuggestConatainer")
        let fName = document.createTextNode(`${formulaName}(`)
        div.appendChild(fName)

        let finalSuggestion = this.filterArgSuggestion(formulaName)
        finalSuggestion.parameters.forEach((param, i) => {
            // console.log(param, i);
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
        let commas = this.hasCommas()
        this.changeDimensions("500px","30px")
        let argContainer = this.formulaSuggest.children[0].children
        let args = Array.prototype.slice.call(argContainer)
        args.map(arg => arg.classList.remove("arg-suggest"))
        argContainer[-2 + commas.length + 2].classList.add("arg-suggest")
        if(this.hasCloseBracket()){
            this.display("off")
            this.hasSelected = false
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