export class UserEmail {
    value: string;

    constructor(value: string) {
        this.value = value;
        this.ensureIsValid();
    }

    private ensureIsValid() {
        if (!this.value.includes("@") || !this.value.includes('.')) {
            throw new Error('Mail must be at least 5 characters long');
        }
    }
}