const output = document.getElementById('answer');

let isZero = true

let number = ''

let first = 0

let second = 0

let operation = ''

let refresh = ()=>{

    output.innerHTML = number
}

let zeroCheck = (a)=>{
    if(isZero){
        number = a
        isZero = false
    }
    else{
        number = number + a
    }
}

let saveState = (op)=>{
    operation = op
    first = Number(number)
    number = '0'
    refresh()
    isZero=true
}

let calculate = ()=>{
    second = Number(number)

    if(operation==='plus'){
        let a = first + second
        number = a.toString()
        refresh()
    }

    if(operation==='minus'){
        let a = first - second
        number = a.toString()
        refresh()
    }

    if(operation==='mul'){
        let a = first * second
        number = a.toString()
        refresh()
    }

    if(operation==='div'){
        let a = first / second
        number = a.toString()
        refresh()
    }

}

const c = document.getElementById('clear');
c.addEventListener('click', ()=>{number = '0';refresh();isZero=true;first = 0;second= 0;operation = ''});

const eq = document.getElementById('eq');
eq.addEventListener('click', ()=>{calculate()})

const plus= document.getElementById('plus');
plus.addEventListener('click',()=>{saveState('plus')});

const minus = document.getElementById('minus');
minus.addEventListener('click',()=>{saveState('minus')} );

const mul = document.getElementById('mul');
mul.addEventListener('click',()=>{saveState('mul')});

const div = document.getElementById('div');
div.addEventListener('click',()=>{saveState('div')});


const nine = document.getElementById('nine');
nine.addEventListener('click', ()=>{zeroCheck('9');refresh();});

const eight = document.getElementById('eight');
eight.addEventListener('click', ()=>{zeroCheck('8');refresh();});

const seven = document.getElementById('seven');
seven.addEventListener('click', ()=>{zeroCheck('7');refresh();});

const six = document.getElementById('six');
six.addEventListener('click', ()=>{zeroCheck('6');refresh();});

const five = document.getElementById('five');
five.addEventListener('click', ()=>{zeroCheck('5');refresh();});

const four = document.getElementById('four');
four.addEventListener('click', ()=>{zeroCheck('4');refresh();});

const three = document.getElementById('three');
three.addEventListener('click', ()=>{zeroCheck('3');refresh();});

const two = document.getElementById('two');
two.addEventListener('click', ()=>{zeroCheck('2');refresh();});

const one = document.getElementById('one');
one.addEventListener('click', ()=>{zeroCheck('1');refresh();});

const zero = document.getElementById('zero');
zero.addEventListener('click', ()=>{zeroCheck('0');refresh();});

