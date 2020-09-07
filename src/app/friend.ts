export class Friend {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  favoriteLanguage: string;


  constructor(firstName: string, lastName: string, email: string, phone: string, favoriteLanguage: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.favoriteLanguage = favoriteLanguage;
  }
}
