const numButtons = document.querySelectorAll('.numButtons')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const multiply = document.querySelector('.multiply')
const divide = document.querySelector('.divide')
const equal = document.querySelector('.equalButton')
const clearButton = document.querySelector('.clear')
const screenContainer = document.querySelector('.screen')
const screen = document.createElement('h2')
screenContainer.appendChild(screen)


let numberOne = ""
let numberTwo = ""
let operator = ""

plus.addEventListener('click', () => {
    if(numberOne !== ''){
        operator = "+"
        screen.textContent= numberOne +' '+ operator
    }
    
    if (numberTwo !== '') {
        numberOne = operate(numberOne, numberTwo, operator)
        operator = '+'
        screen.textContent=numberOne + ' ' + operator
    }
})

minus.addEventListener('click', () => {
    if(numberOne === ''){
        numberOne += '-'
        screen.textContent=numberOne
    } else if ((numberOne !== '') && (numberOne !== '-') && (operator === '')) {
        operator = '-'
        screen.textContent= numberOne +' '+ operator
    } else if ((operator !== '') && (numberTwo === '')) {
        numberTwo +='-'
        screen.textContent = numberOne + ' ' +operator + ' ' +numberTwo
    } else if ((numberTwo !== '') && (numberTwo !== '-')){
        numberOne = operate(numberOne, numberTwo, operator)
        operator = '-'
        screen.textContent=numberOne + ' ' + operator
    }
    console.log(operator)
})

multiply.addEventListener('click', () => {
    if(numberOne !== '') {
        operator = "*"
        screen.textContent= numberOne +' ' +operator

    }

    if (numberTwo !== '') {
        numberOne = operate(numberOne, numberTwo, operator)
        operator = '*'
        screen.textContent=numberOne + ' ' + operator
    }
})

divide.addEventListener('click', () => {
    if(numberOne !== ''){
        operator = "/"
        screen.textContent= numberOne + ' ' + operator
    }

    if (numberTwo !== '') {
        numberOne = operate(numberOne, numberTwo, operator)
        operator = '/'
        screen.textContent=numberOne + ' ' + operator
    }

})


numButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (operator === ''){
            numberOne += btn.textContent
            screen.textContent= numberOne
        } else {
            numberTwo += btn.textContent
            screen.textContent = numberOne + ' ' + operator + ' ' + numberTwo
        }
         
    })
        
    })

function operate(num1, num2, op) {
    let final = 0
    let numOne = 0
    let numTwo = 0
    if((num1 === "-") || (num1 === '')) {
        numOne = 0
    } else {
        numOne = parseFloat(num1)
    }

    if((num2 === "-") || (num2 ==='')){
        numTwo = 0
    } else {
        numTwo = parseFloat(num2)
    }


    if (op === "+") {
        final = numOne+numTwo
        screen.textContent = final
        clear()
        return final


    } else if ( op === "-") {
        final = numOne-numTwo
        screen.textContent = final
        clear()
        return final



    } else if ( op === "*") {
        final = numOne*numTwo

        screen.textContent = final
        clear()
        return final



    } else if (op === "/") {
        if(numOne === 0 || numTwo === 0) {
            screen.textContent = "Nice Try"
            clear()
        } else {
            final = numOne/numTwo
            screen.textContent = final
            clear()
            return final
        }


    } else { 
    }


}

function clear () {
    numberOne = '';
    numberTwo = '';
    operator = '';
}

equal.addEventListener('click', () => {
    console.log(operate(numberOne, numberTwo, operator))
})

clearButton.addEventListener('click', () => {
    clear()
    screen.textContent = ''
})