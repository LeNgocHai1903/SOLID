class Employee {
  checkIn() {
    console.log("Welcome");
  }
  checkOut() {
    console.log("Good Bye. have a greate day");
  }

  getPaid() {
    console.log("Thank you for your workings");
  }
  checkReport() {
    console.log("Check report from employee");
  }
}


//staff doesn't have permission to check report
class Staff extends Employee {}

//Boss doesn't need to checkIn and checkOut
class Boss extends Employee {}

const staff = new Staff();
const boss = new Boss();

staff.checkIn();
boss.checkIn();
