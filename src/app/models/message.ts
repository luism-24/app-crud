export class Message {
    id: string
    escritor: string
    message: string

    constructor(id = '', escritor = '', message = ''){
        this.id = id; 
        this.escritor = escritor
        this.message = message; 
    }
}
