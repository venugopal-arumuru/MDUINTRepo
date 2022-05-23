import {Employees} from "./employee";

class empsList
{   
    emp:Employees[] = [new Employees(1001, "Kiran",10000, "Manager"),
    new Employees(1002, "Karan",9000, "Developer")];

    putempdata()
    {
        for(var i in this.emp)
        {
        console.log("Employee Number : " + this.emp[i].ename);
        console.log("Employee Name : " + this.emp[i].ename);
        console.log("Employee Salary : " + this.emp[i].sal);
        console.log("Employee Job : " + this.emp[i].job);
        console.log("===========================");
        }
    }
}

var e = new empsList();
e.putempdata();