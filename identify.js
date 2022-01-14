let str;


function NotRobot()
{
    str = (Math.random() + 1).toString(36).substring(7);
    let ctx = document.getElementById('mycanvas').getContext('2d');
    for(let i =0; i<50 ;i++)
    {
        for(let j = 0; j<50;j++)
        {
            let r = Math.round(Math.random()*255);
            let g = Math.round(Math.random()*255);
            let b = Math.round(Math.random()*255);
            ctx.fillStyle="rgb("+r+","+g+","+b+")";
            ctx.fillRect(j*10,i*10,10,10);
            ctx.font='40px Time New Roman';
            ctx.fillText(str,48,45);

        }
    }
}

function Check()
{
    let username = document.getElementById("uname").value;
    let password = document.getElementById("pswd").value;
    let capcha = document.getElementById("CAPTCHA").value;
    let users = ["Evyatar","Yulia","Igor"];
    let passwords = ["12345","258456","159753"]
    flag = false;
    if(str==capcha)
    {
        for(i=0; i<3;i++)
        if(username == users[i] && password == passwords[i])
        {
            flag = true;
            location.replace("main.html");
        }
        if(flag == false)
            alert("Wrong user or password")
    }
    else
    alert("captcha is wrong");
}