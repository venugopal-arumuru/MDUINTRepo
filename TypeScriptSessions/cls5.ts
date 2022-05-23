// parameterized constructor
class ConsParam
{
   private x:number;
   private y:number;

        constructor(x:number, y:number)
        {
            console.log("It is a parameterized constructor");
            this.x = x;
            this.y = y;
        }

        printvalues()
        {
            console.log("X val : " + this.x);
            console.log("Y val : " + this.y);
        }
}

var c1 = new ConsParam(100,200);
c1.printvalues();

var c2 = new ConsParam(12.56,67.89);
c2.printvalues();