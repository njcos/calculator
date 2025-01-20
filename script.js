const numButtons = document.querySelectorAll('.numButtons')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const multiply = document.querySelector('.multiply')
const divide = document.querySelector('.divide')
const equal = document.querySelector('.equalButton')



let numberOne = ""
let numberTwo = ""
let operator = ""

plus.addEventListener('click', () => {
    operator = "+"
    console.log(operator)
})

minus.addEventListener('click', () => {
    if(numberOne === ''){
        numberOne += '-'
    } else if ((numberOne !== '') && !(numberTwo !== '')) {
        numberTwo += "-"
    } else {

        operator = "-"
    }
    console.log(operator)
})

multiply.addEventListener('click', () => {
    operator = "*"
    console.log(operator)

})

divide.addEventListener('click', () => {
    operator = "/"
    console.log(operator)

})


    numButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            if ((numberOne === '') || (numberOne === '-')){
                numberOne += btn.textContent
                console.log(numberOne)
            } else {
                numberTwo += btn.textContent
                console.log(numberTwo)
            }
         
        })
        
    })

function operate(num1, num2, op) {
    let final = 0
    if (op === "+") {
        final = num1+num2
        numberOne = ''
        numberTwo = ''
        operator = ''
        console.log(final)
    } else if ( op === "-") {
        final = num1-num2
        numberOne = ''
        numberTwo = ''
        operator = ''
        console.log(final)

    } else if ( op === "*") {
        final = num1*num2
        numberOne = ''
        numberTwo = ''
        operator = ''
        console.log(final)

    } else if (op === "/") {
        final = num1/num2
        numberOne = ''
        numberTwo = ''
        operator = ''
        console.log(final)

    } else {
        
    }
}

equal.addEventListener('click', () => {
    operate(parseFloat(numberOne), parseFloat(numberTwo), operator)
})