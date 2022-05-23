class DemoCons
{
    x:number;
    y:number;

        constructor()
        {
            console.log("It is a constructor");
            this.x = 100;
            this.y = 200;
        }
}

var dc1 = new DemoCons();
console.log("X val : " + dc1.x);
console.log("Y val : " + dc1.y);

var dc2 = new DemoCons();
console.log("X val : " + dc2.x);
console.log("Y val : " + dc2.y);
