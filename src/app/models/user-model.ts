export enum AddEditUser {
    Add = 'add',
    Edit = 'edit'
}

export interface User {
    _id?: string| null;
    firstName: string;
    lastName?: string;
    email: string;
    contactNo?: number| null;
    address?: string;
    createdOn?: Date| null;
    updatedOn?: Date| null;
    password: string;
    profileImg?: any
}

export interface UserWithAuth {
    authToken: string,
    userDetails: User
}