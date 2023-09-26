export class User {
  name: string = '';
  email: string = '';
  phone: string = '';
  createdAt: string;

  constructor(json: any) {
    Object.assign(this, json);
    this.createdAt = String(new Date());
  }
}
