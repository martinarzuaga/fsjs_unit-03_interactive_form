// SELECT AND FOCUS THE FORM'S FIRST TEXT INPUT
const nameField = document.getElementById('name')

addEventListener("DOMContentLoaded", () =>{
    nameField.focus()
})

// JOB ROLE SECTION: Display the "Other job role?" text input only when
// a user select the 'Other' option
const jobRole = document.getElementById('title')
const otherRole = document.getElementById('other-job-role')
otherRole.style.display = "none"

jobRole.addEventListener('change', (e) => {
    if (jobRole.value === 'other') {
        otherRole.style.display = "block"
        otherRole.focus()
    } else {
        otherRole.style.display = "none"
    }
})

// T-Shirt section
// Disable first the color options while the user doesn't select the Design
let colorField = document.getElementById('color')
colorField.disabled = true

let designField = document.getElementById('design')

designField.addEventListener('change', (e) => {
    //Enable the colorField element
    colorField.disabled = false

    //Show and hidden the elements depending of the user option selected on designField
    if (e.target.selectedIndex === 1) {
        // SET THOSE NEED TO BE HIDDEN
        colorField.options[4].setAttribute('hidden', 'hidden')
        colorField.options[5].setAttribute('hidden', 'hidden')
        colorField.options[6].setAttribute('hidden', 'hidden')
        // RESET TO SHOW THE HIDE OPTIONS IF USERS CHANGE FROM DESIGN OPTION 2 TO DESIGN OPTION 1
        colorField.options[1].removeAttribute('hidden')
        colorField.options[2].removeAttribute('hidden')
        colorField.options[3].removeAttribute('hidden')
    } else if (e.target.selectedIndex === 2) {
        // RESET TO SHOW THE HIDE OPTIONS IF USERS CHANGE TO DESIGN OPTION 2
        colorField.options[4].removeAttribute('hidden')
        colorField.options[5].removeAttribute('hidden')
        colorField.options[6].removeAttribute('hidden')
        // SET THOSE NEED TO BE HIDDEN
        colorField.options[1].setAttribute('hidden', 'hidden')
        colorField.options[2].setAttribute('hidden', 'hidden')
        colorField.options[3].setAttribute('hidden', 'hidden')
    }
})

//REGISTER FOR ACTIVITIES SECTION
//Select the fieldset when we'll listen to changes on it
const activities = document.getElementById('activities')
const activitiesCost = document.getElementById('activities-cost')
let currentCost = 0

function calculateActivityCost (element) {
    activitiesCost.innerText = ''
    if (element.checked) {
        currentCost = currentCost + parseInt(element.dataset.cost)
    } else if (!element.checked) {
        currentCost = currentCost - parseInt(element.dataset.cost)
    }

    activitiesCost.innerText = `Total: $${currentCost}`
}

activities.addEventListener('change', (e) => {
    calculateActivityCost(e.target)
})
// PAYMENT INFO SECTION
// Select the payment options and establish it as selected by default
const creditCard = document.getElementById('credit-card')
creditCard.defaultSelected = true

// Display none to the others payment methods
const paypal = document.getElementById('paypal')
paypal.style.display = 'none'

const bitcoin = document.getElementById('bitcoin')
bitcoin.style.display = 'none'

// Select the payment option to listen for changes
const paymentOption = document.getElementById('payment')

paymentOption.addEventListener('change',(e) => {
    if (e.target.value === 'credit-card') {
        creditCard.style.display = 'block'
        paypal.style.display = 'none'
        bitcoin.style.display = 'none'
    } else if (e.target.value === 'paypal') {
        creditCard.style.display = 'none'
        paypal.style.display = 'block'
        bitcoin.style.display = 'none'
    } else if (e.target.value === 'bitcoin') {
        creditCard.style.display = 'none'
        paypal.style.display = 'none'
        bitcoin.style.display = 'block'
    }
})

// VALIDATING FORM SECTION
const form = document.querySelector('form')
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const ccInput = document.getElementById('cc-num')
const ccHint = document.getElementById('cc-hint')
const zipCode = document.getElementById('zip')
const zipCodeHint = document.getElementById('zip-hint')
const cvv = document.getElementById('cvv')
const cvvHint = document.getElementById('cvv-hint')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    //TEST THE NAME FIELD
    const validName = /^\w+$/
    if (!validName.test(nameInput.value)) {
        nameInput.parentNode.classList.add('not-valid')
        nameInput.nextElementSibling.classList.remove('hint')
        nameInput.parentNode.classList.remove('valid')
    }

    // LISTEN WHEN THE USER CORRECTS THE NAME INPUT
    if (validName.test(nameInput.value)) {
        nameInput.parentNode.classList.remove('not-valid')
        nameInput.nextElementSibling.classList.add('hint')
        nameInput.parentNode.classList.add('valid')
    }

    //TEST THE EMAIL FIELD
    const validEmail = /^(\w+(-)?)+@(\w+(-)?)\.\w+$/
    if (!validEmail.test(emailInput.value)) {
        emailInput.parentNode.classList.add('not-valid')
        emailInput.nextElementSibling.classList.remove('hint')
        emailInput.parentNode.classList.remove('valid')
    }

    //LISTEN WHEN THE USER CORRECTS THE EMAIL INPUT
    if (validEmail.test(emailInput.value)) {
        emailInput.parentNode.classList.remove('not-valid')
        emailInput.nextElementSibling.classList.add('hint')
        emailInput.parentNode.classList.add('valid')
    }

    //CHECK IF AT LEAST ONE ACTIVITY IS SELECTED
    let activitiesChecked = 0
    for (let i = 0; i < activities.elements.length; i++) {
        if (activities.elements[i].checked === true) {
            activitiesChecked++
        }
    }

    if (activitiesChecked === 0) {
        activities.classList.add('not-valid')
        activities.classList.remove('valid')
    } else {
        activities.classList.remove('not-valid')
        activities.classList.add('valid')
    }

    //TEST THE CREDIT CARD FIELDS
    const validCC = /[0-9]{13,16}/
    if (!validCC.test(ccInput.value)) {
        ccHint.classList.remove('hint')
        ccHint.style.color = "red"
    } else if (validCC.test(ccInput.value)) {
        ccHint.classList.add('hint')
    }

    const validZipCode = /^[0-9]{5}$/
    if (!validZipCode.test(zipCode.value)) {
        zipCodeHint.classList.remove('hint')
        zipCodeHint.style.color = "red"
    } else if (validZipCode.test(zipCode.value)) {
        zipCodeHint.classList.add('hint')
    }

    const validCVV = /^[0-9]{3}$/
    if (!validCVV.test(cvv.value)) {
        cvvHint.classList.remove('hint')
        cvvHint.style.color = "red"
    } else if (validCVV.test(cvv.value)) {
        cvvHint.classList.add('hint')
    }
})

//ACCESSIBILITY ACTIVITIES SECTION
//Select the array of inputs only in the activities section
let activitiesInputs = document.querySelectorAll('#activities-box input')

//Loop into the array of inputs and set the class focus to the one is onfocus
function focusInput(inputsArray) {
    for (let i = 0; i < inputsArray.length; i++) {
        inputsArray[i].onfocus = () => {activitiesInputs[i].parentNode.classList.add('focus')}
    }
}

focusInput(activitiesInputs)

//Loop into the array of inputs and remove the class focus to the one is onblur
function blurInput(inputsArray) {
    for (let i = 0; i < inputsArray.length; i++) {
        inputsArray[i].onblur = () => {activitiesInputs[i].parentNode.classList.remove('focus')}
    }
}

blurInput(activitiesInputs)
