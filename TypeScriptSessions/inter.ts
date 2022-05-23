// multiple inheritace
interface iface1
{
    getvalues();
}

interface iface2
{    
    putvalues():number;
}

class demointerface implements iface1, iface2
{
    x:number;
    y:number;

    getvalues()
    {
        this.x = 100;
        this.y = 200;        
    }

    putvalues():number
    {        
        return this.x + this.y;
    }
}

var d = new demointerface();
d.getvalues();
console.log("Addition : " + d.putvalues());