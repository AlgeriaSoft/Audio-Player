import UserException from './UserException';

export default class Validator {
    static checkValueType(value, type, message = '', exception = true) {
        let typeofValue = new String(typeof value).toUpperCase();
        let typeofType = new String(typeof type).toUpperCase();
        let typeofMessage = new String(typeof message).toUpperCase();
        let typeofException = new String(typeof exception).toUpperCase();

        if (typeofValue === 'UNDEFINED') {
            throw new UserException('Value is undefined');
            return false;
        }
        if (typeofType === 'UNDEFINED') {
            throw new UserException('Type is undefined');
            return false;
        }

        if (typeofType !== 'STRING' && new RegExp(/^[A-Za-z]$/).test(type) === false) {
            throw new UserException('Type must be String');
            return false;
        }

        if (typeofMessage !== 'STRING' && new RegExp(/^[A-Za-z]$/).test(message) === false) {
            throw new UserException('Message must be String');
            return false;
        }
        if (typeofException !== 'BOOLEAN') {
            throw new UserException('Exception must be Boolean');
            return false;
        }

        switch (new String(type).toUpperCase()) {
            case 'REQUIRED':
                if (value.length > 0) {
                    if (exception === false) return {
                        result: true,
                        message: ''
                    }
                    else return true;
                } else {
                    if (exception === false) return {
                        result: false,
                        message: `${message} is required`
                    }
                    else {
                        throw new UserException(`${message} is required`);
                        return false;
                    }
                }
                break;
            case 'NULL':
                if (typeofValue === 'OBJECT' && value === null) {
                    if (exception === false) return {
                        result: true,
                        message: ''
                    }
                    else return true;
                } else {
                    if (exception === false) return {
                        result: false,
                        message: `${message} must be Null`
                    }
                    else {
                        throw new UserException(`${message} must be Null`);
                        return false;
                    }
                }
                break;
            case 'NAN':
                if (isNaN(value) === true) {
                    if (exception === false) return {
                        result: true,
                        message: ''
                    }
                    else return true;
                } else {
                    if (exception === false) return {
                        result: false,
                        message: `${message} must be not a Number`
                    }
                    else {
                        throw new UserException(`${message} must be not a Number`);
                        return false;
                    }
                }
                break;
            case 'MIXED':
                if ((typeofValue === 'NUMBER') || (typeofValue === 'BOOLEAN') || (typeofValue === 'STRING' && new RegExp(/^[A-Za-z]{1}$/).test(value) === true) || (typeofValue === 'STRING') || (Array.isArray(value)) || (typeofValue === 'OBJECT' && !Array.isArray(value))) {
                    if (exception === false) return {
                        result: true,
                        message: ''
                    }
                    else return true;
                } else {
                    if (exception === false) return {
                        result: false,
                        message: `${message} must be a Mixed Types (Integer | Float | String | Boolean | Array | Object | Date | Time | Date-Time)`
                    }
                    else {
                        throw new UserException(`${message} must be a Mixed Types (Integer | Float | String | Boolean | Array | Object | Date | Time | Date-Time)`);
                        return false;
                    }
                }
                break;
            case 'NUMBER':
                if (typeofValue === 'NUMBER') {
                    if (exception === false) return {
                        result: true,
                        message: ''
                    }
                    else return true;
                } else {
                    if (exception === false) return {
                        result: false,
                        message: `${message} must be Number`
                    }
                    else {
                        throw new UserException(`${message} must be Number`);
                        return false;
                    }
                }
                break;
            case 'INTEGER':
                if (parseInt(value) === value) {
                    if (exception === false) return {
                        result: true,
                        message: ''
                    }
                    else return true;
                } else {
                    if (exception === false) return {
                        result: false,
                        message: `${message} must be Integer`
                    }
                    else {
                        throw new UserException(`${message} must be Integer`);
                        return false;
                    }
                }
                break;
            case 'FLOAT':
                if (parseFloat(value) === value) {
                    if (exception === false) return {
                        result: true,
                        message: ''
                    }
                    else return true;
                } else {
                    if (exception === false) return {
                        result: false,
                        message: `${message} must be Float`
                    }
                    else {
                        throw new UserException(`${message} must be Float`);
                        return false;
                    }
                }
                break;
            case 'BOOLEAN':
                if (typeofValue === 'BOOLEAN') {
                    if (exception === false) return {
                        result: true,
                        message: ''
                    }
                    else return true;
                } else {
                    if (exception === false) return {
                        result: false,
                        message: `${message} must be Boolean`
                    }
                    else {
                        throw new UserException(`${message} must be Boolean`);
                        return false;
                    }
                }
                break;
            case 'CHAR':
                if (typeofValue === 'STRING' && new RegExp(/^[A-Za-z]{1}$/).test(value) === true) {
                    if (exception === false) return {
                        result: true,
                        message: ''
                    }
                    else return true;
                } else {
                    if (exception === false) return {
                        result: false,
                        message: `${message} must be Character`
                    }
                    else {
                        throw new UserException(`${message} must be Character`);
                        return false;
                    }
                }
                break;
            case 'STRING':
                if (typeofValue === 'STRING') {
                    if (exception === false) return {
                        result: true,
                        message: ''
                    }
                    else return true;
                } else {
                    if (exception === false) return {
                        result: false,
                        message: `${message} must be String`
                    }
                    else {
                        throw new UserException(`${message} must be String`);
                        return false;
                    }
                }
                break;
            case 'STRING-NUM':
                if (typeofValue === 'STRING' && new RegExp(/^[0-9]{2,}$/).test(value) === true) {
                    if (exception === false) return {
                        result: true,
                        message: ''
                    }
                    else return true;
                } else {
                    if (exception === false) return {
                        result: false,
                        message: `${message} must be String Numeric Character`
                    }
                    else {
                        throw new UserException(`${message} must be String Numeric Character`);
                        return false;
                    }
                }
                break;
            case 'STRING-ALPHA':
                if (typeofValue === 'STRING' && new RegExp(/^[A-Za-z]{2,}$/).test(value) === true) {
                    if (exception === false) return {
                        result: true,
                        message: ''
                    }
                    else return true;
                } else {
                    if (exception === false) return {
                        result: false,
                        message: `${message} must be String Alphabetic Character`
                    }
                    else {
                        throw new UserException(`${message} must be String Alphabetic Character`);
                        return false;
                    }
                }
                break;
            case 'STRING-ALNUM':
                if (typeofValue === 'STRING' && new RegExp(/^[A-Za-z0-9]{2,}$/).test(value) === true) {
                    if (exception === false) return {
                        result: true,
                        message: ''
                    }
                    else return true;
                } else {
                    if (exception === false) return {
                        result: false,
                        message: `${message} must be String Alphanumeric Character`
                    }
                    else {
                        throw new UserException(`${message} must be String Alphanumeric Character`);
                        return false;
                    }
                }
                break;
            case 'ARRAY':
                if (Array.isArray(value) === true) {
                    if (exception === false) return {
                        result: true,
                        message: ''
                    }
                    else return true;
                } else {
                    if (exception === false) return {
                        result: false,
                        message: `${message} must be Array`
                    }
                    else {
                        throw new UserException(`${message} must be Array`);
                        return false;
                    }
                }
                break;
            case 'ARRAYBUFFER':
                if (value instanceof ArrayBuffer) {
                    if (exception === false) return {
                        result: true,
                        message: ''
                    }
                    else return true;
                } else {
                    if (exception === false) return {
                        result: false,
                        message: `${message} must be ArrayBuffer`
                    }
                    else {
                        throw new UserException(`${message} must be ArrayBuffer`);
                        return false;
                    }
                }
                break;
            case 'OBJECT':
                if (typeofValue === 'OBJECT' && !Array.isArray(value)) {
                    if (exception === false) return {
                        result: true,
                        message: ''
                    }
                    else return true;
                } else {
                    if (exception === false) return {
                        result: false,
                        message: `${message} must be Object`
                    }
                    else {
                        throw new UserException(`${message} must be Object`);
                        return false;
                    }
                }
                break;
            case 'JSON-STRING':
                if (typeofValue === 'STRING') {
                    try {
                        JSON.parse(value);
                    } catch (e) {
                        if (exception === false) {
                            return {
                                result: false,
                                message: `${message} must be String JSON`
                            }
                        } else {
                            throw new UserException(`${message} must be String JSON`);
                            return false;
                        }
                    }
                    return true;
                } else {
                    if (exception === false) return {
                        result: false,
                        message: `${message} must be String JSON`
                    }
                    else {
                        throw new UserException(`${message} must be String JSON`);
                        return false;
                    }
                }
                break;
            case 'JSON-OBJECT':
                if (typeofValue === 'OBJECT' && !Array.isArray(value)) {
                    try {
                        JSON.stringify(value);
                    } catch (e) {
                        if (exception === false) {
                            return {
                                result: false,
                                message: `${message} must be Object JSON`
                            }
                        } else {
                            throw new UserException(`${message} must be Object JSON`);
                            return false;
                        }
                    }
                    return true;
                } else {
                    if (exception === false) return {
                        result: false,
                        message: `${message} must be Object JSON`
                    }
                    else {
                        throw new UserException(`${message} must be Object JSON`);
                        return false;
                    }
                }
                break;
            case 'BASE64':
                if (typeofValue === 'STRING' && new RegExp(/src=\'data:image\/([a-zA-Z]*);base64,([^\"]*)\'/g).test(value) === true) {
                    if (exception === false) return {
                        result: true,
                        message: ''
                    }
                    else return true;
                } else {
                    if (exception === false) return {
                        result: false,
                        message: `${message} must a valid Image`
                    }
                    else {
                        throw new UserException(`${message}  must a valid Image`);
                        return false;
                    }
                }
                break;
            case 'DIRECTORY':
                if (new RegExp(/^(^((((\/)?)([^:?*<>|\\:/])((\/)?))+)$)|(^(([A-ZA-z]:)?)((((\\)?)([^:?*<>|\\:/])((\\)?))+)$)$/).test(value) === true) {
                    if (exception === false) return {
                        result: true,
                        message: ''
                    }
                    else return true;
                } else {
                    if (exception === false) return {
                        result: false,
                        message: `${message} must be valide Directory`
                    }
                    else {
                        throw new UserException(`${message} must be valide Directory`);
                        return false;
                    }
                }
                break;
            case 'FILE':
                if (new RegExp(/^(^((((\/)?)([^:?*<>|\\:/]))+)(([^:?*<>|\\:/])+\.([A-Za-z0-9]){1,8})$)|(^(([A-ZA-z]:)?)((((\\)?)([^:?*<>|\\:/]))+)(([^:?*<>|\\:/])+\.([A-Za-z0-9]){1,8})$)$/).test(value) === true) {
                    if (exception === false) return {
                        result: true,
                        message: ''
                    }
                    else return true;
                } else {
                    if (exception === false) return {
                        result: false,
                        message: `${message} must be valide File`
                    }
                    else {
                        throw new UserException(`${message} must be valide File`);
                        return false;
                    }
                }

                break;
            case 'READABLE':
                if (typeofValue === 'READABLE') {
                    if (exception === false) return {
                        result: true,
                        message: ''
                    }
                    else return true;
                } else {
                    if (exception === false) return {
                        result: false,
                        message: `${message} must be Readable File`
                    }
                    else {
                        throw new UserException(`${message} must be Readable File`);
                        return false;
                    }
                }
                break;
            case 'WRITABLE':
                if (typeofValue === 'WRITABLE') {
                    if (exception === false) return {
                        result: true,
                        message: ''
                    }
                    else return true;
                } else {
                    if (exception === false) return {
                        result: false,
                        message: `${message} must be Writable File`
                    }
                    else {
                        throw new UserException(`${message} must be Writable File`);
                        return false;
                    }
                }
                break;
            case 'DATE':
                if (moment(value, 'YYYY MM DD').isValid() && new RegExp(/^((\d){4})\/((\d){2})\/((\d){2})$/).test(value)) {
                    if (exception === false) return {
                        result: true,
                        message: ''
                    }
                    else return true;
                } else {
                    if (exception === false) return {
                        result: false,
                        message: `${message} must be Date YYYY/MM/DD (2016/07/05 not 2016/7/5)`
                    }
                    else {
                        throw new UserException(`${message} must be Date YYYY/MM/DD (2016/07/05 not 2016/7/5)`);
                        return false;
                    }
                }
                break;
            case 'TIME':
                if (moment(value, 'H m').isValid() && new RegExp(/^((\d){2}):((\d){2})$/).test(value)) {
                    if (exception === false) return {
                        result: true,
                        message: ''
                    }
                    else return true;
                } else {
                    if (exception === false) return {
                        result: false,
                        message: `${message} must be Time H:m (05:01 not 5:1 )`
                    }
                    else {
                        throw new UserException(`${message} must be Time H:m (05:01 not 5:1 )`);
                        return false;
                    }
                }
                break;
            case 'DATETIME':
                if (moment(value, 'YYYY DD MM H m').isValid() && new RegExp(/^((\d){4})\/((\d){2})\/((\d){2})\ ((\d){2}):((\d){2})$/).test(value)) {
                    if (exception === false) return {
                        result: true,
                        message: ''
                    }
                    else return true;
                } else {
                    if (exception === false) return {
                        result: false,
                        message: `${message} must be Date-Time YYYY/MM/DD H:m (2016/07/05 05:01 not 2016/7/5 5:1)`
                    }
                    else {
                        throw new UserException(`${message} must be Date-Time YYYY/MM/DD H:m (2016/07/05 05:01 not 2016/7/5 5:1)`);
                        return false;
                    }
                }
                break;
            case 'REGEXP':
                if (value.constructor === RegExp) {
                    if (exception === false) return {
                        result: true,
                        message: ''
                    }
                    else return true;
                } else {
                    if (exception === false) return {
                        result: false,
                        message: `${message} must be Regular expression`
                    }
                    else {
                        throw new UserException(`${message} must be Regular expression`);
                        return false;
                    }
                }
                break;
            case 'FUNCTION':
                if (typeofValue === 'FUNCTION') {
                    if (exception === false) return {
                        result: true,
                        message: ''
                    }
                    else return true;
                } else {
                    if (exception === false) return {
                        result: false,
                        message: `${message} must be Function`
                    }
                    else {
                        throw new UserException(`${message} must be Function`);
                        return false;
                    }
                }
                break;
            case 'E-MAIL':
                if (typeofValue === 'STRING' && new RegExp(/^([A-Za-z]{1})([A-Za-z0-9_#.-]{1,30})@([A-Za-z]{3,15})\.([A-Za-z]{2,4})$/).test(value)) {
                    if (exception === false) return {
                        result: true,
                        message: ''
                    }
                    else return true;
                } else {
                    if (exception === false) return {
                        result: false,
                        message: `${message} must be valide E-mail Address like this (example@hotmail.com)`
                    }
                    else {
                        throw new UserException(`${message} must be valide E-mail Address like this (example@hotmail.com)`);
                        return false;
                    }
                }
                break;
            case 'PASSWORD':
                if (typeofValue === 'STRING') {
                    let messages = [];
                    if (new RegExp(/(?=^.{8,30}$)(?![.\n]).*$/).test(value)) messages[0] = '';
                    else messages[0] = `${message} length must be greater than or equal to 8`;

                    if (new RegExp(/(?=^.{8,30}$)(?=.*[A-Z])(?![.\n]).*$/).test(value)) messages[1] = '';
                    else messages[1] = `${message} must contain one or more uppercase characters`;

                    if (new RegExp(/(?=^.{8,30}$)(?=.*[A-Z])(?![.\n])(?=.*[a-z]).*$/).test(value)) messages[2] = '';
                    else messages[2] = `${message} must contain one or more lowercase characters`;

                    if (new RegExp(/(?=^.{8,30}$)(?=.*[A-Z])(?![.\n])(?=.*[a-z])(?=.*\d).*$/).test(value)) messages[3] = '';
                    else messages[3] = `${message} must contain one or more numeric values`;

                    if (new RegExp(/(?=^.{8,30}$)(?=.*[A-Z])(?![.\n])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]+).*$/).test(value)) messages[4] = '';
                    else messages[4] = `${message} must contain one or more special characters (@#$%^&*)`;
                    let index = messages.findIndex(msg => {
                        return msg.length > 0;
                    });
                    if (index === -1) {
                        if (exception === false) return {
                            result: true,
                            message: ''
                        }
                        else return true;
                    } else {
                        if (exception === false) return {
                            result: false,
                            message: messages[index]
                        }
                        else {
                            throw new UserException(messages[index]);
                            return false;
                        }
                    }
                } else {
                    if (exception === false) return {
                        result: false,
                        message: `The ${message} must String`
                    }
                    else {
                        throw new UserException(`The ${message} must String`)
                        return false;
                    }
                }

                break;
            case 'TEL':

                if (typeofValue === 'STRING' && new RegExp(/^\+{1}([0-9]){1,4}([0-9]{10})$/).test(value.toString())) {
                    if (exception === false) return {
                        result: true,
                        message: ''
                    }
                    else return true;
                } else {
                    if (exception === false) return {
                        result: false,
                        message: `${message} must be valide Telephone Number like this 'contry_number your_number' (+213 0123456789)`
                    }
                    else {
                        throw new UserException(`${message} must be valide Telephone Number like this 'contry_number your_number' (+213 0123456789)`);
                        return false;
                    }
                }
                break;
            case 'FNAME':
                if (typeofValue === 'STRING' && new RegExp(/^[A-Za-z ]{3,}$/).test(value)) {
                    if (exception === false) return {
                        result: true,
                        message: ''
                    }
                    else return true;
                } else {
                    if (exception === false) return {
                        result: false,
                        message: `${message} must be valide First Name like this (KHALED)`
                    }
                    else {
                        throw new UserException(`${message} must be valide First Name like this (KHALED)`);
                        return false;
                    }
                }
                break;
            case 'LNAME':
                if (typeofValue === 'STRING' && new RegExp(/^[A-Za-z ]{3,}$/).test(value)) {
                    if (exception === false) return {
                        result: true,
                        message: ''
                    }
                    else return true;
                } else {
                    if (exception === false) return {
                        result: false,
                        message: `${message} must be valide Family Name like this (LAKEHEL)`
                    }
                    else {
                        throw new UserException(`${message} must be valide Family Name like this (LAKEHEL)`);
                        return false;
                    }
                }
                break;
            case 'FULLNAME':
                if (typeofValue === 'STRING' && new RegExp(/^([A-Za-z ]{3,})\ ([A-Za-z ]{3,})$/).test(value)) {
                    if (exception === false) return {
                        result: true,
                        message: ''
                    }
                    else return true;
                } else {
                    if (exception === false) return {
                        result: false,
                        message: `${message} must be valide Full Name like this (KHALED LAKEHEL)`
                    }
                    else {
                        throw new UserException(`${message} must be valide Full Name like this (KHALED LAKEHEL)`);
                        return false;
                    }
                }
                break;
            case 'ZIPCODE':
                if (typeofValue === 'STRING' && new RegExp(/^[0-48]{2}[0-9]{3}$/).test(value)) {
                    if (exception === false) return {
                        result: true,
                        message: ''
                    }
                    else return true;
                } else {
                    if (exception === false) return {
                        result: false,
                        message: `${message} must be valide Postal Code like this (21002)`
                    }
                    else {
                        throw new UserException(`${message} must be valide Postal Code like this (21002)`);
                        return false;
                    }
                }
                break;
            case 'HTMLELEMENT':
                if (typeofValue === 'OBJECT' && value instanceof HTMLElement) {
                    if (exception === false) return {
                        result: true,
                        message: ''
                    }
                    else return true;
                } else {
                    if (exception === false) return {
                        result: false,
                        message: `${message} must be HTMLElement like <a></a>`
                    }
                    else {
                        throw new UserException(`${message} must be HTMLElement like <a></a>`);
                        return false;
                    }
                }
                break;
            default:
                throw new UserException(`Type ${type} invalide`);
                return false;
                break;
        }
    }
    static checkFileType(file, type) {
        let typeofFile = new String(typeof file).toUpperCase();
        let typeofType = new String(typeof type).toUpperCase();
        if (typeofFile === 'UNDEFINED') {
            throw new UserException('File is undefined');
            return false;
        }
        if (typeofType === 'UNDEFINED') {
            throw new UserException('Value is undefined');
            return false;
        }
        if (typeofType !== 'STRING' && new RegExp(/^[A-Za-z]{1,}$/).test(type) === false) {
            throw new UserException('Type must be String');
            return false;
        }
        if (checkValueType(file, 'FILE')) {
            typeofFile = path.extname(file).toUpperCase();
            typeofFile = typeofFile.slice(1, typeofFile.length);
            switch (new String(type).toUpperCase()) {
                case 'CSS':
                    if (typeofFile === 'CSS') return true;
                    else {
                        throw new UserException('File must be Cascading Style Sheets file (*.CSS)');
                        return false;
                    }
                    break;
                case 'JS':
                    if (typeofFile === 'JS') return true;
                    else {
                        throw new UserException('File must be JavaScript file (*.JS)');
                        return false;
                    }
                    break;
                case 'HTML':
                    if (typeofFile === 'HTML') return true;
                    else {
                        throw new UserException('File must be Hyper-Text Markup Language file (*.HTML)');
                        return false;
                    }
                    break;
                case 'HTM':
                    if (typeofFile === 'HTM') return true;
                    else {
                        throw new UserException('File must be Hyper-Text Markup Language file (*.HTM)');
                        return false;
                    }
                    break;
                case 'XHTML':
                    if (typeofFile === 'XHTML') return true;
                    else {
                        throw new UserException('File must be Extensible Hyper-Text Markup Language file (*.XHTML)');
                        return false;
                    }
                    break;
                case 'XML':
                    if (typeofFile === 'XML') return true;
                    else {
                        throw new UserException('File must be Extensible Markup Language file (*.XML)');
                        return false;
                    }
                    break;
                case 'EJS':
                    if (typeofFile === 'EJS') return true;
                    else {
                        throw new UserException('File must be Embedded JavaScript template file (*.EJS)');
                        return false;
                    }
                    break;
                case 'JSON':
                    if (typeofFile === 'JSON') return true;
                    else {
                        throw new UserException('File must be JavaScript Object Notation file (*.JSON)');
                        return false;
                    }
                    break;
                case 'TXT':
                    if (typeofFile === 'TXT') return true;
                    else {
                        throw new UserException('File must be Text file (*.TXT)');
                        return false;
                    }
                    break;
                case 'MP3':
                    if (typeofFile === 'MP3') return true;
                    else {
                        throw new UserException('File must be MPEG-1/2 Audio Layer 3 file (*.MP3)');
                        return false;
                    }
                    break;
                case 'MP4':
                    if (typeofFile === 'MP4') return true;
                    else {
                        throw new UserException('File must be MPEG-4 video file (*.MP4)');
                        return false;
                    }
                    break;
                case 'C':
                    if (typeofFile === 'C') return true;
                    else {
                        throw new UserException('File must be C source file (*.C)');
                        return false;
                    }
                    break;
                case 'C++':
                    if (typeofFile === 'C++') return true;
                    else {
                        throw new UserException('File must be C++ source file (*.C++)');
                        return false;
                    }
                    break;
                case 'JAVA':
                    if (typeofFile === 'JAVA') return true;
                    else {
                        throw new UserException('File must be Java source file (*.JAVA)');
                        return false;
                    }
                    break;
                case 'JAR':
                    if (typeofFile === 'JAR') return true;
                    else {
                        throw new UserException('File must be file (*.JAR)');
                        return false;
                    }
                    break;
                case 'PHP':
                    if (typeofFile === 'PHP') return true;
                    else {
                        throw new UserException('File must be Hyper-Text Preprocessor file (*.PHP)');
                        return false;
                    }
                    break;
                case 'PHP3':
                    if (typeofFile === 'PHP3') return true;
                    else {
                        throw new UserException('File must be Hyper-Text Preprocessor 3 file (*.PHP3)');
                        return false;
                    }
                    break;
                case 'PHP4':
                    if (typeofFile === 'PHP4') return true;
                    else {
                        throw new UserException('File must be Hyper-Text Preprocessor 4 file (*.PHP4)');
                        return false;
                    }
                    break;
                case 'PHP5':
                    if (typeofFile === 'PHP5') return true;
                    else {
                        throw new UserException('File must be Hyper-Text Preprocessor 5 file (*.PHP5)');
                        return false;
                    }
                    break;
                case 'PHP7':
                    if (typeofFile === 'PHP7') return true;
                    else {
                        throw new UserException('File must be Hyper-Text Preprocessor 7 file (*.PHP7)');
                        return false;
                    }
                    break;
                case 'PHPS':
                    if (typeofFile === 'PHPS') return true;
                    else {
                        throw new UserException('File must be Hyper-Text Preprocessor file (*.PHPS)');
                        return false;
                    }
                    break;
                case 'PHTML':
                    if (typeofFile === 'PHTML') return true;
                    else {
                        throw new UserException('File must be Hyper-Text Preprocessor file (*.PHTML)');
                        return false;
                    }
                    break;
                case 'INI':
                    if (typeofFile === 'INI') return true;
                    else {
                        throw new UserException('File must be Configuration text file (*.INI)');
                        return false;
                    }
                    break;
                case 'SQL':
                    if (typeofFile === 'SQL') return true;
                    else {
                        throw new UserException('File must be Structured Query Language file (*.SQL)');
                        return false;
                    }
                    break;
                case 'DLL':
                    if (typeofFile === 'DLL') return true;
                    else {
                        throw new UserException('File must be Dynamic Link Library file (*.DLL)');
                        return false;
                    }
                    break;
                case 'BAT':
                    if (typeofFile === 'BAT') return true;
                    else {
                        throw new UserException('File must be BATCH file (*.BAT)');
                        return false;
                    }
                    break;
                case 'EXE':
                    if (typeofFile === 'EXE') return true;
                    else {
                        throw new UserException('File must be Executable file (*.EXE)');
                        return false;
                    }
                    break;
                case 'TEX':
                    if (typeofFile === 'TEX') return true;
                    else {
                        throw new UserException('File must be LaTex format file (*.TEX)');
                        return false;
                    }
                    break;
                case 'JPG':
                    if (typeofFile === 'JPG') return true;
                    else {
                        throw new UserException('File must be Joint Photographic Group file (*.JPG)');
                        return false;
                    }
                    break;
                case 'JPEG':
                    if (typeofFile === 'JPEG') return true;
                    else {
                        throw new UserException('File must be Joint Photographic Experts Group file (*.JPEG)');
                        return false;
                    }
                    break;
                case 'PNG':
                    if (typeofFile === 'PNG') return true;
                    else {
                        throw new UserException('File must be Portable Network Graphics file (*.PNG)');
                        return false;
                    }
                    break;
                case 'GIF':
                    if (typeofFile === 'GIF') return true;
                    else {
                        throw new UserException('File must be Graphics Interchange Format (*.GIF)');
                        return false;
                    }
                    break;
                case 'ICO':
                    if (typeofFile === 'ICO') return true;
                    else {
                        throw new UserException('File must be Icon file (*.ICO)');
                        return false;
                    }
                    break;
                case 'BMP':
                    if (typeofFile === 'BMP') return true;
                    else {
                        throw new UserException('File must be Bitmap file (*.BMP)');
                        return false;
                    }
                    break;
                case 'MD':
                    if (typeofFile === 'MD') return true;
                    else {
                        throw new UserException('File must be Markdown file (*.MD)');
                        return false;
                    }
                    break;
                case 'MARKDOWN':
                    if (typeofFile === 'MARKDOWN') return true;
                    else {
                        throw new UserException('File must be Markdown file (*.MARKDOWN)');
                        return false;
                    }
                    break;
                case 'ZIP':
                    if (typeofFile === 'ZIP') return true;
                    else {
                        throw new UserException('File must be Popular Compression format (*.ZIP)');
                        return false;
                    }
                    break;
                case 'RAR':
                    if (typeofFile === 'RAR') return true;
                    else {
                        throw new UserException('File must be Proprietary Archive file format (*.RAR)');
                        return false;
                    }
                    break;
                case '7Z':
                    if (typeofFile === '7Z') return true;
                    else {
                        throw new UserException('File must be 7-Zip compressed file (*.7Z)');
                        return false;
                    }
                    break;
                case 'PDF':
                    if (typeofFile === 'PDF') return true;
                    else {
                        throw new UserException('File must be Portable Document Format (*.PDF)');
                        return false;
                    }
                    break;
                case 'DOC':
                    if (typeofFile === 'DOC') return true;
                    else {
                        throw new UserException('File must be Microsoft Word document file (*.DOC)');
                        return false;
                    }
                    break;
                case 'DOCX':
                    if (typeofFile === 'DOCX') return true;
                    else {
                        throw new UserException('File must be Office Open XML document file (*.DOCX)');
                        return false;
                    }
                    break;
                case 'CVS':
                    if (typeofFile === 'CVS') return true;
                    else {
                        throw new UserException('File must be Comma-separated values file (*.CVS)');
                        return false;
                    }
                    break;
                case 'OTF ':
                    if (typeofFile === 'OTF ') return true;
                    else {
                        throw new UserException('File must be OpenType Font file (*.OTF )');
                        return false;
                    }
                    break;
                case 'TTF ':
                    if (typeofFile === 'TTF ') return true;
                    else {
                        throw new UserException('File must be TrueType Font file (*.TTF )');
                        return false;
                    }
                    break;
                case 'TTC ':
                    if (typeofFile === 'TTC ') return true;
                    else {
                        throw new UserException('File must be TrueType Font file (*.TTC )');
                        return false;
                    }
                    break;
                case 'WOFF ':
                    if (typeofFile === 'WOFF ') return true;
                    else {
                        throw new UserException('File must be Web Open Font Format (*.WOFF )');
                        return false;
                    }
                    break;
                case 'SVG ':
                    if (typeofFile === 'SVG ') return true;
                    else {
                        throw new UserException('File must be Scalable Vector Graphics file (*.SVG )');
                        return false;
                    }
                    break;
                default:
                    throw new UserException(`File type (*.${type}) not supported in this app`);
                    return false;
                    break;
            }
        } else return false;
    }
    static checkDirectoryExists(dir) {
        let typeofDir = new String(typeof dir).toUpperCase();
        if (typeofDir === 'UNDEFINED') {
            throw new UserException('Directory is undefined');
            return false;
        }
        return true;
        // if (checkValueType(dir, 'DIRECTORY')) {
        //     let res = null;
        //     try {
        //         res = fs.statSync(dir);
        //     } catch (err) {
        //         res = false;
        //     }
        //     if (res) return true;
        //     else {
        //         throw new UserException('Directory ( ' + dir + ' ) not exists');
        //         return false;
        //     }
        // }
        // return false;
    }
    static checkFileExists(file) {
        let typeofFile = new String(typeof file).toUpperCase();
        if (typeofFile === 'UNDEFINED') {
            throw new UserException('File is undefined');
            return false;
        }
        return true;
        // if (this.checkValueType(file, 'FILE')) {
        //     let res = null;
        //     try {
        //         res = fs.statSync(file);
        //     } catch (err) {
        //         res = false;
        //     }
        //     if (res) return true;
        //     else {
        //         throw new UserException('File ( ' + file + ' ) not exists');
        //         return false;
        //     }
        // }
        // return false;
    }
}
