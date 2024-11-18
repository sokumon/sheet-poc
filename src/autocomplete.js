import { linkProperties } from "./utils";

export default class AutoComplete{
    constructor(instance){
        this.instance = instance


        linkProperties(this, this.instance, [
            'options', 'datamanager', 'columnmanager',
            'header', 'footer', 'bodyScrollable', 'datatableWrapper',
            'getColumn', 'bodyRenderer'
        ]);

        this.avaliableFormulas = this.options.formulas
        this.argSuggestion = this.options.argSuggestion
        this.formulaSuggest = document.createElement('div')
        this.formulaSuggest.classList.add("formula-suggest")
        instance.wrapper.insertBefore(this.formulaSuggest, instance.datatableWrapper);
    }

}