export class User {
    // Shortcut to declare and initialize class property at the same time
    constructor(public email: string,
                public password: string,
                public firstName?: string,
                public lastName?: string) {}
}