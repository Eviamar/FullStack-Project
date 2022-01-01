function Music()
{
    document.getElementById("stylesheet").href="musiccss.css";
    document.getElementById("dancer").hidden = false;
    document.getElementById("dancer").src="pics/dancer.gif";
    document.getElementById("maintitle").innerHTML="<a href='https://youtu.be/rDBbaGCCIhk' target='_blank'>Miami Nights 1984 - Accelerated</a>";
    document.getElementById('playme').hidden = false;
    document.getElementById('playme').innerHTML="<marquee behavior='alternate' scrollamount='25'>Hope you are enjoying!!!</marquee>";
    setTimeout(Guitar,29000); 
}
function Guitar()
{
    document.getElementById("guitar").hidden = false;
    document.getElementById("guitar").src="pics/rockoutguitar.gif";
    setTimeout(GuitarGoHome,30000);
}

function GuitarGoHome()
{
    document.getElementById("guitar").hidden = true;
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
    setTimeout(PartyIsOver,59000);
}

function PartyIsOver()
{
    document.getElementById("guitar").hidden = true;
    document.getElementById("vodka").hidden = true;
    document.getElementById("dancer").hidden = true;
    document.getElementById("yulia").hidden = true;
    document.getElementById("igor").hidden = true;
    document.getElementById("sndnav").hidden = false;
    document.getElementById("stylesheet").href="sitecss.css";
    document.getElementById("maintitle").innerHTML="Home";
    document.getElementById('playme').innerHTML="play me and wait for it!";
}