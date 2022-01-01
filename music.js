function Music()
{
    document.getElementById("stylesheet").href="musiccss.css";
    document.getElementById("dancer").hidden = false;
    document.getElementById("secondnav").hidden = true;
    document.getElementById("dancer").src="pics/dancer.gif";
    document.getElementById("maintitle").innerHTML="<a href='https://youtu.be/rDBbaGCCIhk' target='_blank'>Miami Nights 1984 - Accelerated</a>";
    document.getElementById('playme').hidden = false;
    document.getElementById('playme').innerHTML="<marquee behavior='alternate' scrollamount='25'>Hope you are enjoying!!!</marquee>";
                    /*29000*/ 
    setTimeout(Guitar,29000); 
}
function Guitar()
{
    document.getElementById("guitar").hidden = false;
    document.getElementById("guitar").src="pics/rockoutguitar.gif";
                            /*30000*/
    setTimeout(GuitarGoHome,30000);
}

function GuitarGoHome()
{
    document.getElementById("guitar").hidden = true;
                            /*59000*/ 
    setTimeout(GuitarComesBack,59000);
}
function GuitarComesBack()
{
    document.getElementById("vodka").hidden = false;
    document.getElementById("vodka").src="pics/vodka.gif";
    document.getElementById("guitar").hidden = false;
    document.getElementById("yulia").hidden = false;
    document.getElementById("igor").hidden = false;
    document.getElementById("guitar").hidden = false;
                            /*59000*/ 
    setTimeout(PartyIsOver,59000);
}

function PartyIsOver()
{
    document.getElementById("guitar").hidden = true;
    document.getElementById("vodka").hidden = true;
    document.getElementById("dancer").hidden = true;
    document.getElementById("yulia").hidden = true;
    document.getElementById("igor").hidden = true;
    document.getElementById("secondnav").hidden = false;
    document.getElementById("stylesheet").href="sitecss.css";
    document.getElementById("maintitle").innerHTML="Home";
    document.getElementById('playme').innerHTML="play me and wait for it!";
}