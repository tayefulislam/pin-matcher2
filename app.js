function getPin() {
    let randomPin = Math.round(Math.random() * 10000)
    let pinString = randomPin + '';

    if (pinString.length == 4) {
        return randomPin;
    }
    else {
        console.log(pinString.length, 'disit pin', randomPin);
        return getPin();
    }
}
function generatePin() {
    let getGenerateInput = document.getElementById('genarate-input');
    getGenerateInput.value = getPin();
}


document.getElementById('key-pad').addEventListener('click', function (event) {

    const number = event.target.innerText;
    const calcInput = document.getElementById('display-input');
    if (isNaN(number)) {
        // isNaN mane hochce ei number chara onno kichu thakle if ar modde hochche ashbe

        if (number == 'C') {
            // isNaN condition true howar por if modde ashle and number == C hoi mane C te click korle sob claer hoy jabe

            calcInput.value = '';
        }
    }

    else {

        const calcInput = document.getElementById('display-input');
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }

})

// verify pin 

function verifyPin() {

    const generatePin = document.getElementById('genarate-input').value;
    const typedPin = document.getElementById('display-input').value;
    const success = document.getElementById('success');
    const fail = document.getElementById('fail');

    if (generatePin == typedPin && generatePin != "") {
        success.style.display = 'block';
        fail.style.display = 'none';
    }
    else {
        success.style.display = 'none'
        fail.style.display = 'block'
    }

}

