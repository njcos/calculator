const numPanel = document.querySelector(".nums")
const operatorPanel = document.querySelector(".operators")


// CREATING THE NUMBER BUTTONS  
function numberButtons () {
    
    for(let i = 1; i <= 4; i++) {
        const numRows = document.createElement('div')
        numRows.classList.add('numRows')
        numPanel.appendChild(numRows)
        for(let r = 1; r <=3; r++) {
            const numButtons = document.createElement('button')
            numButtons.classList.add('numButtons')
            numButtons.textContent='1'
            numRows.appendChild(numButtons)
        }

    }
}
 
numberButtons()

//CREATE OPERATOR NUMBERS

function opButtons () {
    for(let i = 1; i <= 2; i++) {
        const operatorRow = document.createElement('div')
        operatorRow.classList.add('operatorRow')
        operatorPanel.appendChild(operatorRow)
        for(let r = 1; r <= 2; r++) {
            const operatorButtons = document.createElement('button')
            operatorButtons.classList.add('operatorButtons')
            operatorButtons.textContent='+'
            operatorRow.appendChild(operatorButtons)
        }
    }
}

opButtons()