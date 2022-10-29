function main() {
    const calculatorScreen = document.querySelector('.calculator-screen');
    const controls = document.querySelectorAll('.calculator-controls input');
    let result = 0;

    calculatorScreen.innerHTML = result;

    controls.forEach((control) => {
        control.addEventListener('click', function (e) {
            e.preventDefault();
            if (control.value === '=') {
                let operation = calculatorScreen.innerHTML.replace('x', '*');
                console.log(operation);
                result = eval(operation);
                if (result === Infinity) {
                    calculatorScreen.innerHTML = 'Not a number';
                } else {
                    calculatorScreen.innerHTML = result;
                }
            } else if (control.value === 'C') {
                result = 0;
                calculatorScreen.innerHTML = result;
            } else if (control.value === 'B') {
                let entries = calculatorScreen.innerHTML.substring(0, (calculatorScreen.innerHTML.length - 1));
                calculatorScreen.innerHTML = entries;
            } else {
                if (calculatorScreen.innerHTML === '0' || result === Infinity) {
                    calculatorScreen.innerHTML = control.value;
                    result = 0;
                } else {
                    calculatorScreen.innerHTML += control.value;
                }
            }
        });
    });
}
main();

