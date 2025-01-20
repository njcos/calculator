const numButtons = document.querySelectorAll('.numButtons')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const multiply = document.querySelector('.multiply')
const divide = document.querySelector('.divide')
const equal = document.querySelector('.equalButton')
const screenContainer = document.querySelector('.screen')
const screen = document.createElement('h2')
screenContainer.appendChild(screen)


let numberOne = ""
let numberTwo = ""
let operator = ""

plus.addEventListener('click', () => {
    if(numberOne !== ''){
        operator = "+"
        screen.textContent= numberOne + operator
    }
})

minus.addEventListener('click', () => {
    if(numberOne === ''){
        numberOne += '-'
        screen.textContent=numberOne
    } else if ((numberOne !== '') && (numberOne !== '-') && (operator === '')) {
        operator = '-'
        screen.textContent= numberOne + operator
    } else if (numberTwo !== '-'){
        numberTwo +='-'
        screen.textContent = numberOne + operator + numberTwo

    }
    console.log(operator)
})

multiply.addEventListener('click', () => {
    if(numberOne !== '') {
        operator = "*"
        screen.textContent= numberOne + operator

    }
})

divide.addEventListener('click', () => {
    if(numberOne !== ''){
        operator = "/"
        screen.textContent= numberOne + operator
    }

})


numButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (operator === ''){
            numberOne += btn.textContent
            screen.textContent= numberOne
        } else {
            numberTwo += btn.textContent
            screen.textContent = numberOne + operator + numberTwo
        }
         
    })
        
    })

function operate(num1, num2, op) {
    let final = 0
    if (op === "+") {
        final = num1+num2
        screen.textContent = final
        clear()
        console.log(final)
    } else if ( op === "-") {
        final = num1-num2
        screen.textContent = final
        clear()
        console.log(final)

    } else if ( op === "*") {
        final = num1*num2
        screen.textContent = final
        clear()
        console.log(final)

    } else if (op === "/") {
        final = num1/num2
        screen.textContent = final
        clear()
        console.log(final)

    } else {
        
    }
}

function clear () {
    numberOne = '';
    numberTwo = '';
    operator = '';
}

equal.addEventListener('click', () => {
    operate(parseFloat(numberOne), parseFloat(numberTwo), operator)
})