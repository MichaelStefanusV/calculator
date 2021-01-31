
//object that store operand and operator
let calc = {
    num1:'',
    num2:'',
    operator:'',
    result:''
};

function add (num,num2) {
	return num+num2;
}

function substract (num,num2) {
	return num-num2;
}


function multiply (num,num2) {
	return num*num2;
}

function divide(num,num2){
    return num/num2;
}

function clear(){
    calc.num1='';
    calc.num2='';
    calc.result='';
    calc.operator='';
    document.getElementById('display-top').innerHTML='';
    document.getElementById('display-bot').innerHTML='';
}

//operating the calculator using object calc as the input
function operate(calc){
    let operator = calc.operator;
    switch(operator){
        case '-':
            return substract(+calc.num1,+calc.num2);
        case '+':
            return add(+calc.num1,+calc.num2);
        case '*':
            return multiply(+calc.num1,+calc.num2);
        case '/':
            return divide(+calc.num1,+calc.num2);
        default:
            break;
    }
}

//Remove class .klik
function removeTransition(e){
    if(e.propertyName!=='transform'){
        return;
    }else{
        e.target.classList.remove('klik');
    }
}

//add class .klik whenever buttons get clicked by user
//adding numbers to display and calc.num1
let butt = document.querySelectorAll('.buttons');
butt.forEach(buttons => {
    buttons.addEventListener('click', () => {
        buttons.classList.add('klik');
    });
});

//change display and assign first number to object calc
let num = document.querySelectorAll('.num-button');
num.forEach(numButton => {
    numButton.addEventListener('click',() => {
        if(calc.result!==''){
            clear();
            console.log(calc.num1);
        }

        if(calc.operator===''){
            let strNum = numButton.firstChild.innerHTML;
            calc.num1 += strNum;
            document.getElementById('display-bot').innerHTML=calc.num1;
        }else{
            let strNum = numButton.firstChild.innerHTML;
            calc.num2 += strNum;
            document.getElementById('display-bot').innerHTML=calc.num2;
        }

    });
});

//Change display and assign operator to object calc
let op = document.querySelectorAll('.operator-btt');
op.forEach(operatorBtt => {
    operatorBtt.addEventListener('click',() => {
        if(calc.num1===''){
            alert('Please insert number first')
        }else{
            let strOperator = operatorBtt.firstChild.innerHTML;
            calc.operator = strOperator;
            document.getElementById('display-top').innerHTML=calc.num1+ ' '+strOperator;
            document.getElementById('display-bot').innerHTML='';
        }
    });
});

//operate the operator and operand of the calculator
let equal = document.getElementById('equ');
equal.addEventListener('click',() => {
    if(calc.num2===''){
        alert('Insert second number')
    }else{
        calc.result=operate(calc);
        document.getElementById('display-bot').innerHTML=calc.result;
        document.getElementById('display-top').innerHTML='';
        calc.num1=calc.result;
        calc.num2='';
        calc.operator='';
        calc.result='';
    }
});

function del(){
    let temp =  document.getElementById('display-bot').innerText;
    temp=temp.substring(0, temp.length-1);
    if(calc.num2!==''){
        calc.num2=temp;
        document.getElementById('display-bot').innerHTML=temp;
    }else{
        calc.num1=temp;
        document.getElementById('display-bot').innerHTML=temp;
    }
}


let dele = document.getElementById('delet');
dele.addEventListener('click',del);

//clear all
let AC = document.getElementById('clear');
AC.addEventListener('click', clear);

//Remove class .klik by calling removeTransition
//after transitionend
butt.forEach(buttons=>{
    buttons.addEventListener('transitionend',removeTransition);
});


