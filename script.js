const numPanel = document.querySelector(".nums")

function numberButtons () {
    
    for(let i = 1; i <= 4; i++) {
        const numRows = document.createElement('div')
        numRows.classList.add('numRows')
        numPanel.appendChild(numRows)
        for(let r = 1; r <=3; r++) {
            const numButtons = document.createElement('button')
            numButtons.classList.add('numButtons')
            numRows.appendChild(numButtons)
        }

    }
}
 
numberButtons()