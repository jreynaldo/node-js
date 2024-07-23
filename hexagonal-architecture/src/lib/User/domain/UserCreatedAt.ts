export class UserCreatedAt{
    value:  Date;
    constructor(value: Date) {
        this.value = value;
        this.ensureIsValid();
    }
    private ensureIsValid(){
        if( this.value > new Date() ){
            throw new Error('UserCreated must be in the past');
        }
    }
}