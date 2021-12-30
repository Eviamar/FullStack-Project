function DecimalToBinary()
{
    let a,c = 0;
    var res = "";
    a = parseInt(document.getElementById('convertme').value);
    while(a>0) 
    {
        
        if(a%2==0)
        c = 0;
        else
        c = 1;
        res = res+c;
        a = Math.floor(a/2);      
       
    }
    var splitString = res.split("");
    var reverse = splitString.reverse("");
    var join = reverse.join("");
    document.getElementById('DecimalToBinary').innerHTML=join;   
}

function BinaryToDecimal()
{
    let a;
    var res = 0;
    a = document.getElementById('convertme').value;
    //!check if value contain other digit than 0 or 1
    flag = true;
    let i=0;
    var SplitToCheck = a.toString().split("");
    while(i<SplitToCheck.length)
    {
        if(SplitToCheck[i]!=1 && SplitToCheck[i]!=0 )
        {
            document.getElementById("BinaryToDecimal").style.backgroundColor = "salmon";
            flag = false;
            break;
        }
        else
        document.getElementById("BinaryToDecimal").style.backgroundColor = "white";
        i++;
    }
    //*starts working on string first, splitting it, second, reverse to work on the number from the bottom to top just as we learnt in class from Yulia
    var num = a.split("");
    var reverse = num.reverse("");
     for(i=0; i<reverse.length && flag == true;i++)
    {
       res = res + (reverse[i]*Math.pow(2,i));
    }
    document.getElementById('BinaryToDecimal').innerHTML=res;

}

function DecimalToOctal()
{
    let a;
    var res = "";
    a = parseInt(document.getElementById('convertme').value);
    while(a>0) 
    {
            res = res+a%8;
            a = Math.floor(a/8);
            a/8;
    }
    var splitString = res.split("");
    var reverse = splitString.reverse("");
    var join = reverse.join("");

    document.getElementById('DecimalToOctal').innerHTML=join;
}


function BinaryToOctal()
{
    
    let a;
    var res = 0;
    a = document.getElementById('convertme').value;


    //!check if not 0 or 1
    flag = true;
    let i=0;
    var SplitToCheck = a.toString().split("");
    while(i<SplitToCheck.length)
    {
        if(SplitToCheck[i]!=1 && SplitToCheck[i]!=0 )
        {
            document.getElementById("BinaryToOctal").style.backgroundColor = "salmon";
            flag = false;
            break;
        }
        else
        document.getElementById("BinaryToOctal").style.backgroundColor = "white";
        i++;
    }





    //binary to decimal
    var num = a.split("");
    var reverse = num.reverse("");
     for(i=0; i<reverse.length && flag ==true;i++)
    {
       res = res + (reverse[i]*Math.pow(2,i));
    }
    //decimal to octal
    a = parseInt(res);
    res = "";
    while(a>0 && flag == true) 
    {
            res = res+a%8;
            a = Math.floor(a/8);
            a/8;
    }
    var splitString = res.split("");
    var reverse = splitString.reverse("");
    var join = reverse.join("");

    document.getElementById('BinaryToOctal').innerHTML=join;
}

function OctalToDecimal()
{

    let a;
    var res = 0;
    a = document.getElementById('convertme').value;
    var num = a.split("");
    var reverse = num.reverse("");
     for(i=0; i<reverse.length;i++)
    {
       res = res + (reverse[i]*Math.pow(8,i));
    }
    document.getElementById('OctalToDecimal').innerHTML=res;


}

function OctalToBinary()
{
    //octal to decimal
    let a;
    var res = 0;
    a = document.getElementById('convertme').value;
    var num = a.split("");
    var reverse = num.reverse("");
     for(i=0; i<reverse.length;i++)
    {
       res = res + (reverse[i]*Math.pow(8,i));
    }
    //decimal to binary
    a = parseInt(res);
    res = "";
    while(a>0) 
    {
        if(a%2==0)
        c = 0;
        else
        c = 1;
        res = res+c;
        a = Math.floor(a/2);      
    }
    var splitString = res.split("");
    var reverse = splitString.reverse("");
    var join = reverse.join("");
    document.getElementById('OctalToBinary').innerHTML=join;

}

function DecimalToHexadecimal()
{

    let a;
    var res = "";
    a = parseInt(document.getElementById('convertme').value);
    while(a>0) 
    {
        if(a%16==10)
        res = res+"A";
        else if(a%16==11)
        res = res+"B";
        else if(a%16==12)
        res = res+"C";
        else if(a%16==13)
        res = res+"D";
        else if(a%16==14)
        res = res+"E";
        else if(a%16==15)
        res = res+"F";
        else
        res = res+a%16;

            a = Math.floor(a/16);
            a/16;
    }
    var splitString = res.split("");
    var reverse = splitString.reverse("");
    var join = reverse.join("");

    document.getElementById('DecimalToHexadecimal').innerHTML=join;

}

function BinaryToHexadecimal()
{
    //binary to decimal
    let a;
    var res = 0;
    a = document.getElementById('convertme').value;



    //! check if not 0 or 1
    flag = true;
    let i=0;
    var SplitToCheck = a.toString().split("");
    while(i<SplitToCheck.length)
    {
        if(SplitToCheck[i]!=1 && SplitToCheck[i]!=0 )
        {
            document.getElementById("BinaryToHexadecimal").style.backgroundColor = "salmon";
            flag = false;
            break;
        }
        else
        document.getElementById("BinaryToHexadecimal").style.backgroundColor = "white";
        i++;
    }





    var num = a.split("");
    var reverse = num.reverse("");
     for(i=0; i<reverse.length;i++)
    {
       res = res + (reverse[i]*Math.pow(2,i));
    }
    a = parseInt(res);
    res = "";
    //decimal to hexadecimal
    while(a>0 && flag == true) 
    {
        if(a%16==10)
        res = res+"A";
        else if(a%16==11)
        res = res+"B";
        else if(a%16==12)
        res = res+"C";
        else if(a%16==13)
        res = res+"D";
        else if(a%16==14)
        res = res+"E";
        else if(a%16==15)
        res = res+"F";
        else
        res = res+a%16;

            a = Math.floor(a/16);
            a/16;
    }
    var splitString = res.split("");
    var reverse = splitString.reverse("");
    var join = reverse.join("");

    document.getElementById('BinaryToHexadecimal').innerHTML=join;

}

function ExectuteAll(){
    DecimalToBinary();
    BinaryToDecimal();
    DecimalToOctal();
    BinaryToOctal();
    OctalToDecimal();
    OctalToBinary();
    DecimalToHexadecimal();
    BinaryToHexadecimal();
}