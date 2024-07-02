//Q.1)
// class Person {
//     constructor(name, age, gender) {
//       this.name = name;
//       this.age = age;
//       this.gender = gender;
//     }
//     describe() {
//       return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
//     }
// }
// const person1 = new Person('Alice', 25, 'Female');
// const person2 = new Person('Bob', 30, 'Male');
// const person3 = new Person('Charlie', 23, 'Male');

// console.log(person1.describe());
// console.log(person2.describe());
// console.log(person3.describe());

//Q.2)
// class Person {
//     constructor(name, age, gender) {
//       this.name = name;
//       this.age = age;
//       this.gender = gender;
//     }
//     describe() {
//       return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
//     }
//   }
//   class Student extends Person {
//     constructor(name, age, gender, studentID) {
//       super(name, age, gender);
//       this.studentID = studentID;
//     }
//     study() {
//       return `${this.name} is studying.`;
//     }
// }
// const student1 = new Student('David', 22, 'Male', 'S12345');

// console.log(student1.describe()); //Inherited method
// console.log(`Student ID: ${student1.studentID}`);
// console.log(student1.study()); 

//Q.3)
// const studentScores = new Map();

// function addStudent(name, score) {
//   studentScores.set(name, score);
// }

// function removeStudent(name) {
//   studentScores.delete(name);
// }

// function getStudentScore(name) {
//   return studentScores.get(name);
// }
// addStudent('Alice', 85);
// addStudent('Bob', 92);
// addStudent('Charlie', 78);

// console.log(`Alice's score: ${getStudentScore('Alice')}`);
// console.log(`Bob's score: ${getStudentScore('Bob')}`);
// console.log(`Charlie's score: ${getStudentScore('Charlie')}`);

// removeStudent('Bob');

// console.log("Remaining students and their scores:");
// studentScores.forEach((score, name) => {
//   console.log(`${name}: ${score}`);
// });

//Q.4)
// const courses = new Set();

// function addCourse(course) {
//   courses.add(course);
// }

// function removeCourse(course) {
//   courses.delete(course);
// }

// function hasCourse(course) {
//   return courses.has(course);
// }
// addCourse('Mathematics');
// addCourse('Physics');
// addCourse('Computer');

// // Check if courses exist
// console.log(`Has Mathematics: ${hasCourse('Mathematics')}`); 
// console.log(`Has Biology: ${hasCourse('Biology')}`);

// removeCourse('Physics');

// console.log(`Has Physics after removal: ${hasCourse('Physics')}`);

// console.log('Current courses:');
// courses.forEach(course => {
//   console.log(course);
// });

//Q.5)
// class Library {
//     constructor(name) {
//       this.name = name;
//       this.books = [];
//     }

//     addBook(book) {
//       this.books.push(book);
//     }

//     removeBook(title) {
//       this.books = this.books.filter(book => book.title !== title);
//     }

//     findBook(title) {
//       return this.books.find(book => book.title === title);
//     }
// }
// class Book {
//     constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//     }
// }
// const myLibrary = new Library();

// const book1 = new Book('Database System Concepts', 'Abraham Silberschatz', 2019);
// const book2 = new Book('Operating System Concepts', 'Peter B. Galvin', 2018);
// const book3 = new Book('Data and Computer Communications', 'William Stallings', 2020);
// myLibrary.addBook(book1);
// myLibrary.addBook(book2);
// myLibrary.addBook(book3);

// console.log('Finding book by title "Operating System Concepts":');
// console.log(myLibrary.findBook('Operating System Concepts'));

// myLibrary.removeBook('Operating System Concepts');

// console.log('Finding book by title "Operating System Concepts" after removal:');
// console.log(myLibrary.findBook('Operating System Concepts'));

// console.log('Current books in the library:');
// myLibrary.books.forEach(book => {
//     console.log(`${book.title} by ${book.author}, published in ${book.year}`);
// });

//Q.6)
// const calculator = {
//     add: function(a, b) {
//       return a + b;
//     },
//     subtract: function(a, b) {
//       return a - b;
//     },
//     multiply: function(a, b) {
//       return a * b;
//     },
//     divide: function(a, b) {
//       if (b === 0) {
//         return 'Error: Division by zero';
//       }
//       return a / b;
//     }
// };
// console.log('Addition of 5 and 3:');
// console.log(calculator.add(5, 3));

// console.log('Subtraction of 5 and 3:');
// console.log(calculator.subtract(5, 3));

// console.log('Multiplication of 5 and 3:');
// console.log(calculator.multiply(5, 3));

// console.log('Division of 6 by 3:');
// console.log(calculator.divide(6, 3));

// // console.log('Division of 6 by 0:');
// // console.log(calculator.divide(6, 0)); 

//Q.7)
// class ValidationError extends Error {
//     constructor(message) {
//       super(message);
//       this.name = 'ValidationError';
//     }
// }

// function validateUser(user) {
//     if (typeof user.name !== 'string') {
//       throw new ValidationError('Name must be a string!');
//     }
//     if (typeof user.age !== 'number' || user.age < 0) {
//       throw new ValidationError('Age must be a non-negative number!');
//     }
//     return true;
// }

// function validateAndHandle(user) {
//     try {
//       validateUser(user);
//       console.log('User is valid');
//     } catch (error) {
//       if (error instanceof ValidationError) {
//         console.error(`Validation error: ${error.message}`);
//       } else {
//         console.error(`Unexpected error: ${error.message}`);
//       }
//     }
// }
// const validUser = { name: 'Alice', age: 25 };
// validateAndHandle(validUser);

// const invalidUser1 = { name: 123, age: 25 };
// validateAndHandle(invalidUser1);

// const invalidUser2 = { name: 'Bob', age: -5 };
// validateAndHandle(invalidUser2);

//Q.8)
// const book = {
//   title: 'Unknown',
//   author: 'Unknown',
//   year: 0,

//   getTitle() {
//     return this.title;
//   },
//   setTitle(title) {
//     this.title = title;
//   },
//   getAuthor() {
//     return this.author;
//   },
//   setAuthor(author) {
//     this.author = author;
//   },
//   getYear() {
//     return this.year;
//   },
//   setYear(year) {
//     this.year = year;
//   },
//   getSummary() {
//     return `${this.title} by ${this.author}, published in ${this.year}`;
//   }
// };
// book.setTitle('Operating System Concepts');
// book.setAuthor('Abraham Silberschatz');
// book.setYear(2018);

// console.log('Title:', book.getTitle());
// console.log('Author:', book.getAuthor());
// console.log('Year:', book.getYear());
// console.log('Summary:', book.getSummary());

//Q.9)
// class BankAccount {
//   #balance;
//   static _calculateInterest(balance, rate = 0.02) {
//     return balance + (balance * rate);
//   }

//   constructor(accountNumber, accountHolder, initialBalance = 0) {
//     this.accountNumber = accountNumber;
//     this.accountHolder = accountHolder;
//     this.#balance = initialBalance;
//   }

//   getBalance() {
//     return this.#balance;
//   }

//   deposit(amount) {
//     if (amount > 0) {
//       this.#balance += amount;
//       console.log(`Deposited: ₹${amount}. New balance: ₹${this.#balance}.`);
//     } else {
//       console.log("Deposit amount must be positive!!");
//     }
//   }

//   withdraw(amount) {
//     if (amount > 0 && amount <= this.#balance) {
//       this.#balance -= amount;
//       console.log(`Withdrew: ₹${amount}. New balance: ₹${this.#balance}.`);
//     } else {
//       console.log("Invalid withdraw amount!!");
//     }
//   }

//   addInterest() {
//     this.#balance = BankAccount._calculateInterest(this.#balance);
//     console.log(`Interest added. New balance: ₹${this.#balance}.`);
//   }
// }
// const myAccount = new BankAccount(123456789, "John Doe", 1000);
// console.log(`Initial balance: ₹${myAccount.getBalance()}`);

// myAccount.deposit(500);
// myAccount.withdraw(200);
// myAccount.addInterest();
// console.log(`Final balance: ₹${myAccount.getBalance()}`);

//Q.10)
class InvalidAgeError extends Error {
  constructor(message) {
    super(message);
    this.name = 'InvalidAgeError';
  }
}
function checkAge(age) {
  if (age < 0 || age > 120) {
    throw new InvalidAgeError('Age must be between 0 and 120.');
  } else {
    console.log(`Age ${age} is valid.`);
  }
}
try {
  checkAge(24);
  checkAge(-5);
} catch (error) {
  if (error instanceof InvalidAgeError) {
    console.error(`${error.name}: ${error.message}`);
  } else {
    console.error(error);
  }
}