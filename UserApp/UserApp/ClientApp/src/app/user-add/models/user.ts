import { UserBase } from 'src/app/common/models/user-base';

export class User extends UserBase {
    password: string;

    constructor() {
        super()
     }
}
