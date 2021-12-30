function Check()
{
    let username = document.getElementById("uname").value;
    let password = document.getElementById("pswd").value;
    let users = ["Evyatar","Yulia","Igor","mel"];
    let passwords = ["12345","258456","159753","mel"]
    flag = false;
    for(i=0; i<4;i++)
    if(username == users[i] && password == passwords[i])
    {
        flag = true;
        location.replace("main.html");
    }
    
    if(flag == false)
    alert("Wrong user or password")
}