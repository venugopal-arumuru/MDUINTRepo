class stdbio
{
    rollno:number;
    sname:string;
    course:string;
    marks : number;

    printstdDetails()
    {
        console.log("Roll Number : ", this.rollno);
        console.log("Student Name : ", this.sname);
        console.log("Course : ", this.course);
        console.log("Secured Marks : ", this.marks);
        if(this.marks>=35)
            console.log(this.sname, " is Passed");
        else
            console.log(this.sname, " is Failed");
    }
}

var std1 = new stdbio();
std1.rollno = 1001;
std1.sname = "Pavan";
std1.course = "Java";
std1.marks = 56;
std1.printstdDetails();
console.log("====================");
var std2 = new stdbio();
std2.rollno = 1002;
std2.sname = "Pavani";
std2.course = "Python";
std2.marks = 23;
std2.printstdDetails();