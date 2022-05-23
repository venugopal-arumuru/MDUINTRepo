import {sinfo} from "./files1";

class stdlistinfo
{
    stds:sinfo[] = [new sinfo(101, "venu"), new sinfo(102, "geetha")];

    getstdinfos()
    {
        
        for(var i in this.stds)
        {
            console.log(this.stds[i].rno);
            console.log(this.stds[i].sname);

        }
    }
};

var s = new stdlistinfo();
s.getstdinfos();