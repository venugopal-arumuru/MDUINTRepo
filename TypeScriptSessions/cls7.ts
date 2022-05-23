// example of inheritance
class DemoBase
{
    protected x:number;
    protected y:number;

    getValues(x:number, y:number)
    {
        this.x = x;
        this.y = y;
    }
}

class Derived extends DemoBase
{
    private sum:number;

    printValues()
    {
        this.sum = this.x + this.y;
        console.log("X val : " + this.x);
        console.log("Y val : " + this.y);
        console.log("SUM val : " + this.sum);
    }
}

var d1 = new Derived();
d1.getValues(100,200);
d1.printValues();
