

function add(char){
    let display = document.getElementById('display');
    display.value = display.value + char;
}

function calculate(){
    let display = document.getElementById('display');
    let result = eval(display.value);
    document.getElementById('result').value = result;
}

function reset(){
    document.getElementById('display').value = "";
    document.getElementById('result').value = "";
}
