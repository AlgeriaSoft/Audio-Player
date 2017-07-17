export default class UserException {
    constructor(message) {
        let typeofMessage = new String(typeof message).toUpperCase();
        let error = new Error();
        this.name = 'UserException';
        this.stack = error.stack;
        this.fileName = error.fileName; // not working
        this.lineNumber = error.lineNumber; // not working
        if (typeofMessage === 'STRING') {
            this.message = message;
        } else {
            this.message = 'Message must be String';
        }
    }
}
