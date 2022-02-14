// generate pin funtion 


function generatePin() {
    const pin = Math.round(Math.random() * 10000);

    // convert number as string to check length 
    const numString = pin + ""

    if (numString.length == 4) {
        const typedInput = document.getElementById('genarate-input');
        typedInput.value = pin;
        return pin;
    }
    else {
        return generatePin();
    }
}

// key pad funtion 
function keyPad(event) {
    let number = event.target.innerText;
    let calcInput = document.getElementById('display-input');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        let newNumber = calcInput.value + number;
        calcInput.value = newNumber;
    }

}



// match and verify 


function verifyPin() {
    const genaratePin = document.getElementById('genarate-input').value;
    const currentValue = document.getElementById('display-input').value;
    const success = document.getElementById('success')
    const fail = document.getElementById('fail');
    const empty = document.getElementById('empty')

    if (currentValue == '') {

        empty.style.display = 'block'

        fail.style.display = 'none';
        success.style.display = 'none'
    }

    else if (currentValue == genaratePin) {
        success.style.display = 'block'

        empty.style.display = 'none'
        fail.style.display = 'none';
    }

    else {
        fail.style.display = 'block';

        empty.style.display = 'none'
        success.style.display = 'none'
    }
}
