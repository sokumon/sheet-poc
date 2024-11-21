export class ContentOberserver{

    constructor(){
        this.subscribers = []
    }

    notify(newValue){
        this.subscribers.forEach(subcriber => subcriber(newValue))
    }

    subscribe(subcriber){
        this.subscribers.push(subcriber)
    }
}
