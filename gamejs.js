function Game()
{
    let lives = 3;
    let money = 0;
    let i = 1;
    flag = false;
    while(i<=1)
    {
        flag = false;
        if(lives==0)
        {
            alert("Game Over")
            break;
        }
        if(i==1)
        {
            document.getElementById("question").innerHTML=+i+". Who is awesome?";
            document.getElementById("ans1").innerHTML="1.me";
            document.getElementById("ans2").innerHTML="2.you";
            document.getElementById("ans3").innerHTML="3.she";
            document.getElementById("ans4").innerHTML="4.he";  
            while(flag=false)
         {            
            if(document.getElementById("ans1").checked==true)
            {
                flag = true;
                money+=200;
                break;
            }
            else if(document.getElementById("ans1").checked==false)
            {
                lives--;
                break;
            }
            
         }
        }
        document.getElementById("lives").innerHTML=lives;
        document.getElementById("prize").innerHTML=money;
        i++;
    }
}