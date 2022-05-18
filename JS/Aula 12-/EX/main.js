class Pessoa {
  constructor(firstName, lastName, birthday) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(birthday);
    //   this.getFullYear = function () {
    //     if this.birthday.getYear();
    //   };
  }
  getBirthYear() {
    return this.birthday.getFullYear();
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
//   getNiver() {
//      if (this.birthday.getMonth() <= 05) ;
//   }
getNiver() {
    return this.birthday.getMonth() <= '05' ;
 }
}
const pessoa1 = new Pessoa("John", "Doe", "1980-04-03");
const pessoa2 = new Pessoa("Marry", "Smith", "1970-06-13");
const pessoa3 = new Pessoa("Reginald", "Tadeu", "2003-02-19");
const pessoa4 = new Pessoa("Caramelo", "Tadeu", "2005-05-16");
const pessoa5 = new Pessoa("Catavento", "Tadeu", "2001-01-05");
const pessoa6 = new Pessoa("Carambolas", "Tadeu", "2002-05-04");
const pessoa7 = new Pessoa("Rosinaldo", "Tadeu", "2002-08-07");
const pessoa8 = new Pessoa("Mathias", "Tadeu", "2009-05-18");
const pessoa9 = new Pessoa("Catarina", "Tadeu", "2011-12-24");
const pessoa10 = new Pessoa("Katarina", "Tadeu", "2005-10-126");
console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa1.birthday.getNiver());
