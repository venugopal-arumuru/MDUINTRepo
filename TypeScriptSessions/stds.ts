// multi level inheritance
class student
{
    protected sname : string;
    protected course : string;

    getstdinfo(sname:string, course:string)
    {
        this.sname = sname;
        this.course = course;
    }
}


class marks extends student
{
    protected sub1 : number;
    protected sub2 : number;

    getmarksinfo(sub1:number, sub2:number)
    {
        this.sub1 = sub1;
        this.sub2 = sub2;
    }
}

class results extends marks
{
    private total : number;

    printresults()
    {
        console.log("Student Name : " + this.sname);
        console.log("Student Course : " + this.course);
        console.log("Subject 1 Marks : " + this.sub1);
        console.log("Subject 2 Marks : " + this.sub2);
        this.total = this.sub1+this.sub2;
        console.log("Total Marks : " + this.total);
    }
}


var r1 = new results();
r1.getstdinfo("Pavani", "Java");
r1.getmarksinfo(67,78);
r1.printresults();