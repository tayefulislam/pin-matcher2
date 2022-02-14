function generatePin() {

    const pin = Math.round(Math.random() * 10000);
    const numString = pin + ""
    /// convert number 

    if (numString.length == 4) {
        const typedInput = document.getElementById('genarate-input');
        typedInput.value = pin;
        return pin;

    }
    else {

        return generatePin();
    }


}

console.log(generatePin() * 3)