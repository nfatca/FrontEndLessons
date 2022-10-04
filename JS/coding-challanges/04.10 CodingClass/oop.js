class Trainee {
  static #id = 4000;
  #email;
  constructor(name, email, path) {
    this.name = name;
    this.#email = email;
    this.path = path;
    this.stNumber = "F - " + Trainee.#id;
    Trainee.#id++;
  }
  skills() {
    return "IT dünyasinda çalisabilir";
  }
  getSummary() {
    return this.stNumber + " " + this.name;
  }
  getMail() {
    return this.#email;
  }
  setMail(email) {
    this.#email = email;
  }
}

class FS extends Trainee {
  constructor(name, email, path, title) {
    super(name, email, path);
    this.title = title;
  }

  //! Overloading
  skills(title) {
    return this.name + " " + title + " çalişabilir";
  }
}

class DS extends Trainee {
  constructor(name, email, path, title) {
    super(name, email, path);
    this.title = title;
  }

  //! Overloading
  skills() {
    return this.name + " " + "Data-scientist olarak çalişabilir";
  }
}

const fs1 = new FS("ahmet", "ahmet@ahmet.com", "FS12", "Front-end");
console.log(fs1.skills("front-end developer"));
const tr1 = new Trainee("veli", "ahmet@ahmet.com", "FS12", "Front-end");
console.log(tr1.skills());
const ds1 = new DS("Ali", "ali@ali.com", "Data-science", "data scientist");
console.log(ds1.skills());
console.log(ds1.getMail());

console.log(fs1.getSummary());
console.log(tr1.getSummary());
console.log(ds1.getSummary());
