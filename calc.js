let screen = document.getElementById('screen');
let button = document.querySelectorAll('button');
let screenValue = '';
for (item of button) {
    item.addEventListener('click', (e) => {
        buttonTxt = e.target.innerText;
        // console.log(buttonTxt);
        if (buttonTxt == 'X') {
            buttonTxt = '*';
            screenValue += buttonTxt;
            screen.value = screenValue;
        }
        else if (buttonTxt == '') {
            buttonTxt = '/';
            screenValue += buttonTxt;
            screen.value = screenValue;
        }
        else if (buttonTxt == 'C') {
            screenValue = '';
            screen.value = screenValue;
        }
        else if (buttonTxt == '=') {
            // screen.value = '';
            try {
                if(eval(screenValue) == 'Infinity'){
                    screen.value = "Can't divide by zero";
                    screenValue = '';
                }
                else{
                    screen.value = eval(screenValue);
                    screenValue = eval(screenValue);
                }
            }
            catch (e) {
                screen.value = 'ERROR'
                console.log(e);
            }
        }
        else {
            screenValue += buttonTxt;
            screen.value = screenValue;
        }
    })
}