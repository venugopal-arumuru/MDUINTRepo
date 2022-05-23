class Employee
{
    private eno:number;
    private ename:string;
    private sal:number;
    private comm:number;

    public getempinfo(e:number, name:string, s:number)
    {
        this.eno = e;
        this.ename = name;
        this.sal = s;        
    }

    public printempinfo()
    {
        console.log("Employee Number : " + this.eno);
        console.log("Employee Name : " + this.ename);
        console.log("Employee salary : " + this.sal);
        this.comm = this.sal*0.10;        
        console.log("10% commission : " + this.comm);
        console.log("Net Salary : " + (this.sal+this.comm));
    }
}

var emp1 = new Employee();
emp1.getempinfo(101, "Naresh", 15000);
emp1.printempinfo();
console.log("====================")
var emp2 = new Employee();
emp2.getempinfo(102, "Mahesh", 18000);
emp2.printempinfo();