// DICHIARAZIONE CLASSE USER
class User {
  // DICHIARAZIONE COSTRUTTO DENTRO CLASSE USER
  constructor(name, username, age, location) {
    this.firstName = name;
    this.lastName = username;
    this.age = age;
    this.location = location;
  }
  //   METODO DI COMPARAZIONE TRA GLI UTENTI
  ageCompair(anotherUser) {
    if (this.age > anotherUser.age) {
      return `${this.firstName} è più vecchio di ${anotherUser.firstName}`;
    } else if (this.age < anotherUser.age) {
      return `${this.firstName} è più giovane di ${anotherUser.firstName}`;
    } else {
      return `${this.firstName} ha la stessa età di ${anotherUser.firstName}`;
    }
  }
}

// UTENTE 1
const user1 = new User("Mario", "Balotelli", 32, "Burundi");

// UTENTE 2
const user2 = new User("Luigi", "Burlone", 40, "Brazil");

console.log(user2.ageCompair(user1));
