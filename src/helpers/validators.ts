export interface Validator {
    isValid(params: string): boolean;
}
export class EmailValidator implements Validator {
    public isValid(params: string): boolean {
        let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(params)
    }
}
export class PasswordValidator implements Validator {
    public isValid(params: string): boolean {
        return params.length >= 6
    }
}