class Employee {
    checkIn(){
        console.log("Welcome");
    }
    checkOut(){
        console.log("Good Bye. have a greate day");
    }
}

class Manager {
    checkReport(){
        console.log("Check report from employee");
    }
}


//staff can't read the report
class Staff extends Employee {

}

//Boss doesn't need to check in or check out
class Boss extends Manager {

}

const staff = new Staff();
const boss = new Boss();

staff.checkIn();
boss.checkReport();