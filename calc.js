function Calculator()
{
    let firstNum = parseInt(document.getElementById("firstnum").value);
    let secondNum = parseInt(document.getElementById("secondnum").value);
    let operand = document.getElementById("operand").value;
    flag = true;
    let result;
    if(operand!="+" && operand!="-" && operand!="*" && operand!="/" )
    {
        alert("Invalid operand\nOperand is:\n+ - * / ")
        flag = false;
    }


    if(flag == true)
    {
        if(operand=="+")
        {
            result=firstNum+secondNum;
            document.getElementById("res").innerHTML=result;

        }
        if(operand=="-")
        {
            result=firstNum-secondNum;
            document.getElementById("res").innerHTML=result;

        }
        if(operand=="*")
        {
            result=firstNum*secondNum;
            document.getElementById("res").innerHTML=result;

        }
        if(operand=="/")
        {
            if(secondNum==0)
            alert("You are attempting to divide by zero\nPoor Sarah")
            result=firstNum/secondNum;
            if(secondNum!=0)
            document.getElementById("res").innerHTML=result;

        }
        
    }



    
}