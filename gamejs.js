    let lives = 2;
    let money = 0;
    let i=1;
    
function Level1()
{
    document.getElementById("gametag").hidden = false;

    document.getElementById("question").innerHTML=i+". 10 in Decimal is what in Binary?";
    document.getElementById("ans1").innerHTML="1. 1010";
    document.getElementById("ans2").innerHTML="2. 1001";
    document.getElementById("ans3").innerHTML="3. 1011";
    document.getElementById("ans4").innerHTML="4. 1111";   
    document.getElementById("lives").innerHTML=lives;
    document.getElementById("prize").innerHTML=money;
    
}

function Level2()
{
    document.getElementById("question").innerHTML=i+". ASCII stands for?";
    document.getElementById("ans1").innerHTML="1. Arial Soft Code for Intelligent Information";
    document.getElementById("ans2").innerHTML="2. American Standard Code for Information Interchange.you";
    document.getElementById("ans3").innerHTML="3. American Super Code for Information Irrelevant";
    document.getElementById("ans4").innerHTML="4. American Sandwich Croissant for Internet Ideas ";   
    document.getElementById("lives").innerHTML=lives;
    document.getElementById("prize").innerHTML=money;
    
}
function Level3()
{
    document.getElementById("question").innerHTML=i+". How much does it cost to buy coffee + bakery in Manza?";
    document.getElementById("ans1").innerHTML="1. 15";
    document.getElementById("ans2").innerHTML="2. 8";
    document.getElementById("ans3").innerHTML="3. 10";
    document.getElementById("ans4").innerHTML="4. 5";   
    document.getElementById("lives").innerHTML=lives;
    document.getElementById("prize").innerHTML=money;
    
}
function Level4()
{
    document.getElementById("question").innerHTML=i+". Micheal Khersonsky likes to say...";
    document.getElementById("ans1").innerHTML="1. You are a bad at CSharp";
    document.getElementById("ans2").innerHTML="2. The more lines in your program the better";
    document.getElementById("ans3").innerHTML="3. Micheal doesn't say, he Console.WriteLine()";
    document.getElementById("ans4").innerHTML="4. There is a good weather outside today";   
    document.getElementById("lives").innerHTML=lives;
    document.getElementById("prize").innerHTML=money;
    
}


function Next()
{
    
        flag = false;     
            if(document.getElementById("answer"+i).checked==true)
            {
                flag = true;
                money+=1000;
                i++;
                if(i==2)
                Level2();
                if(i==3)
                Level3();
                if(i==4)
                Level4();
            }
            else
                {
                    flag = false;
                    lives--;
                    i++;
                    if(i==2)
                Level2();
                if(i==2)
                Level2();
                if(i==3)
                Level3();
                if(i==4)
                Level4();
                }
        document.getElementById("lives").innerHTML=lives;
        document.getElementById("prize").innerHTML=money;
        
        if(lives==0)
        {
            alert("Game Over");
            location.reload();
        }
        if(i==5)
        {
            alert("You have won the game! you earned: $"+money);
            location.reload();
        }
    
}

