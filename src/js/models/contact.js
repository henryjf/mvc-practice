//create a contact model
export class Contact {
  constructor (firstName, lastName, location, phone, photo) {
      // this.firstName = firstName;
      // this.lastName = lastName;
      this.fullName = firstName+ '' + lastName;
      this.location = location;
      this.phone = phone;
      this.photo = photo;
  }
}
