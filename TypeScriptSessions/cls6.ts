class EmpInfo
{
    private eno:number;
    private ename:string;
    private sal:number;
    private comm:number;

    constructor(eno:number, ename:string, sal:number)
    {
        this.eno = eno;
        this.ename = ename;
        this.sal = sal;        
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

var em1 = new EmpInfo(101, "Naresh", 15000);
em1.printempinfo();
console.log("====================")
var em2 = new EmpInfo(102, "Mahesh", 18000);
em2.printempinfo();