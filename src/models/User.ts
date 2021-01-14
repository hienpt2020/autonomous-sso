export default class User {
    expiresIn: number = -1;
    redirectUri: string = '';
    refreshToken: string = '';
    scope: string = '';
    tokenType: string = '';
    userId: number = -1;
    //User information
    dateCreated: string = '';
    dateModified: string = '';
    email: string = '';
    status: string = '';
    fullName: string = '';
    address: string = '';
    userAvatar: string = '';
    phone: string = '';
    code: string = '';
    referralCode: string = '';
    accountBirthday: string = '';
    source: string = '';
    isVerifiedEmail: string = '';
    accessToken?: string;
    isValidToken?: boolean = false;
}
