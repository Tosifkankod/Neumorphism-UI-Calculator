const display_element = document.getElementById('display_element');
const display_operator = document.getElementById('operator');

let key_pressed = "";
let calc = null;

function myfunction(click) {

    if (click == "1" || click == "2" || click == "3" || click == "4" || click == "5" || click == "6" || click == "7" || click == "8" || click == "9" || click == "0") {
        key_pressed += click;
        display_element.innerHTML = key_pressed;
    } else if (click == "+" || click == "-" || click == "*" || click == "/" || click == "x") {
        key_pressed += click;
        display_element.innerHTML = key_pressed;
    } else if (click == "=") {
        let num = eval(key_pressed);
        console.log(num);
        key_pressed = String(num);
        display_element.innerHTML = key_pressed;
    } else {
        key_pressed = " ";
        display_element.innerHTML = key_pressed;
    };
}

document.onkeypress = function (e) {
    let click = e.key; 
    console.log(click);
    if (click == "1" || click == "2" || click == "3" || click == "4" || click == "5" || click == "6" || click == "7" || click == "8" || click == "9" || click == "0") {
        key_pressed += click;
        display_element.innerHTML = key_pressed;
    } else if (click == "+" || click == "-" || click == "*" || click == "/" || click == "x") {
        key_pressed += click;
        display_element.innerHTML = key_pressed;
    } else if (click == "Enter") {
        let num = eval(key_pressed);
        console.log(num);
        key_pressed = String(num);
        display_element.innerHTML = key_pressed;
    } else {
        key_pressed = " ";
        display_element.innerHTML = key_pressed;
    };
}