enum course
{
    Java, Python, DotNet, Angular, ReactJs
}

class student_courses
{
    rollno:number;
    sname:string;
    scourse:course; // declaring enumration type

    getstdinfo()
    {
        this.rollno = 1001;
        this.sname = "Praveen Kumar";
        this.scourse = course.Angular;  // here it allows to assign index number;
    }

    printstdinfo()
    {
        console.log("Student Roll Number : " + this.rollno);
        console.log("Student Name : " + this.sname);
        console.log("Student Course : " + course[this.scourse]);  // fetching value.
    }
}

var s1 = new student_courses();
s1.getstdinfo();
s1.printstdinfo();