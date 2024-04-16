const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item)=>{
    item.onclick = () =>{
        if (item.id == 'Clear'){
            display.innerText = '';
        }else if (item.id == 'Back'){
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        }else if (display.innerText != '' && item.id == '='){
            display.innerText = eval(display.innerText);
        }else if (display.innerText == '' && item.id == '='){
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText = ''), 2000);
        }else{
            display.innerText += item.id;
        }
    }
})

document.addEventListener("keydown", (event) => {
    let btn;
    switch (event.key) {
        case "1":
            btn = document.getElementById("1")
            break;
        case "2":
            btn = document.getElementById("2")
            break;
        case "3":
            btn = document.getElementById("3")
            break;
        case "4":
            btn = document.getElementById("4")
            break;
        case "5":
            btn = document.getElementById("5")
            break;
        case "6":
            btn = document.getElementById("6")
            break;
        case "7":
            btn = document.getElementById("7")
            break;
        case "8":
            btn = document.getElementById("8")
            break;
        case "9":
            btn = document.getElementById("9")
            break;
        case "0":
            btn = document.getElementById("0")
            break;
        case "+":
            btn = document.getElementById("+")
            break;
        case "-":
            btn = document.getElementById("-")
            break;
        case "*":
            btn = document.getElementById("*")
            break;
        case "/":
            btn = document.getElementById("/")
            break;
        case ",":
        case ".":
            btn = document.getElementById(".")
            break;
        case "(":
            btn = document.getElementById("(")
            break;
        case ")":
            btn = document.getElementById(")")
            break;
        case "=":
        case "Enter":
            btn = document.getElementById("=")
            break;
        case "Backspace":
            btn = document.getElementById("Back")
            break;
        case "Escape":
        case "Delete":
            btn = document.getElementById("Clear")
            break;
        default:
            break;
    }
    btn.click();
});
