import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  getUserData(): User[] {
    const getItems = localStorage.getItem('users');
    return getItems ? JSON.parse(getItems) : [];
  }

  setUserData(user: User): void {
    const items = this.getUserData();
    items.push(user);
    localStorage.setItem('users', JSON.stringify(items));
  }
  editUserData(user: User, index: number): void {
    const items = this.getUserData();
    console.log(items,index,user, 'items');
    items[index] = user;
    localStorage.setItem('users', JSON.stringify(items));
  }

  deleteData(index: number) {
    const items = this.getUserData();
    items.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(items));
  }
}
