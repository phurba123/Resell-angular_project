// Actions related to local storages and caches

import { UserWithAuth } from "../models/user-model";

export enum Keys {
    UserDetail = 'user_detail'
}

export function localStorageSave(key: Keys, value: string) {
    localStorage.setItem(key, value);
}

export function getMyDetailsFromStorage(keyIdentifier: Keys): UserWithAuth| null {
    let userString = localStorage.getItem(keyIdentifier);
    let currentUser = userString? JSON.parse(userString): null
    return currentUser;
}

export function deleteUserDetail(keyIdentifier: Keys): void {
    localStorage.removeItem(keyIdentifier);
}
