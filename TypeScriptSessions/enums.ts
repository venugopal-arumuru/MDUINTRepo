enum test
{
    Java, CPP, DotNet
}

class testEnum
{
    sname : string;
    course : test;
}

var t1 = new testEnum;
t1.sname="Naresh";
t1.course = test.Java;
console.log(test[t1.course]);
console.log(t1.course);
