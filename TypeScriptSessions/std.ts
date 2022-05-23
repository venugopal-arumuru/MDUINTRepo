// object literals (JSON format)
var student = {
    rollno:101, 
    sname:"Raghu", 
    course:"Java",
    marks:90, 
    Results:function()
    {
        if(this.marks>=35)
            console.log("Student is Passed");
        else
            console.log("Student is Failed");
    }
}

console.log("Roll Number : ", student.rollno);
console.log("Student Name : ", student.sname);
console.log("Student Course : ", student.course);
console.log("Student Marks : ", student.marks);
student.Results()