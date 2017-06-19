import { User } from './user';

export class UserToken {
    private _user: User;

    constructor(user: User) {
        this._user = user;
    }

    get user(): User {
        return this._user;
    }

    get username(): string {
        return this.user.username;
    }

    get name(): string {
        return this.user.name;
    }

    get displayName(): string  {
        return this.user.displayName;
    }
}
