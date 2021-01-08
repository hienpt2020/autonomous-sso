export interface Validator {
    isValid(params: string): boolean;
}
export class EmailValidator implements Validator {
    public isValid(params: string): boolean {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return reg.test(params)
    }
}
export class PasswordValidator implements Validator {
    public isValid(params: string): boolean {
        return params.length >= 6
    }
}