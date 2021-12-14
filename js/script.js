// SELECT AND FOCUS THE FORM'S FIRST TEXT INPUT
const nameField = document.getElementById('name')

addEventListener("DOMContentLoaded", () => {
    nameField.focus()
    paymentOption.options[1].defaultSelected = true
})

// JOB ROLE SECTION: Display the "Other job role?" text input only when
// a user select the 'Other' option
const jobRole = document.getElementById('title')
const otherRole = document.getElementById('other-job-role')
otherRole.style.display = "none"

jobRole.addEventListener('change', () => {
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
        // SET THE 0 INDEX OPTION AS A DEFAULT
        for (let i = 1; i < 4; i++) {
            if (colorField.options[i].selected = true) {
                colorField.options[i].selected = false
                colorField.options[0].selected = true
            }
        }
    } else if (e.target.selectedIndex === 2) {
        // RESET TO SHOW THE HIDE OPTIONS IF USERS CHANGE TO DESIGN OPTION 2
        colorField.options[4].removeAttribute('hidden')
        colorField.options[5].removeAttribute('hidden')
        colorField.options[6].removeAttribute('hidden')
        // SET THOSE NEED TO BE HIDDEN
        colorField.options[1].setAttribute('hidden', 'hidden')
        colorField.options[2].setAttribute('hidden', 'hidden')
        colorField.options[3].setAttribute('hidden', 'hidden')
        // SET THE 0 INDEX OPTION AS A DEFAULT
        for (let i = 1; i < 4; i++) {
            if (colorField.options[i].selected = true) {
                colorField.options[i].selected = false
                colorField.options[0].selected = true
            }
        }
    }
})

//REGISTER FOR ACTIVITIES SECTION
//Select the fieldset when we'll listen to changes on it
const activities = document.getElementById('activities')
const activitiesHint = document.getElementById('activities-hint')
const activitiesCost = document.getElementById('activities-cost')
const checkboxes = document.querySelectorAll('#activities input')
let currentCost = 0

function calculateActivityCost(element) {
    activitiesCost.innerText = ''
    if (element.checked) {
        currentCost = currentCost + parseInt(element.dataset.cost)
    } else if (!element.checked) {
        currentCost = currentCost - parseInt(element.dataset.cost)
    }

    activitiesCost.innerText = `Total: $${currentCost}`
}

activities.addEventListener('change', (e) => {
    const activityDayAndTime = e.target.getAttribute("data-day-and-time");
    calculateActivityCost(e.target)

    function checkToDisable() {
        for (let i = 0; i < checkboxes.length; i++) {
            let checkbox = checkboxes[i];
            if (checkbox.getAttribute("data-day-and-time") === activityDayAndTime && e.target !== checkbox) {
                checkbox.disabled = true;
                checkbox.parentElement.classList.add("disabled");
            }
        }
    }

    function checkToEnable() {
        for (let i = 0; i < checkboxes.length; i++) {
            let checkbox = checkboxes[i];
            if (checkbox.getAttribute("data-day-and-time") === activityDayAndTime && e.target !== checkbox) {
                checkbox.disabled = false;
                checkbox.parentElement.classList.remove("disabled");
            }
        }
    }

    if (e.target.checked) {
        checkToDisable()
    } else {
        checkToEnable()
    }
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

paymentOption.addEventListener('change', (e) => {
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
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const ccInput = document.getElementById('cc-num')
const zipCode = document.getElementById('zip')
const cvv = document.getElementById('cvv')

const makeValidInput = element => {
    element.parentNode.classList.remove('not-valid')
    element.nextElementSibling.classList.add('hint')
    element.parentNode.classList.add('valid')
}

const makeInvalidInput = element => {
    element.parentNode.classList.add('not-valid')
    element.nextElementSibling.classList.remove('hint')
    element.parentNode.classList.remove('valid')
}

const makeValidActivity = element => {
    element.classList.remove('not-valid')
    element.classList.add('valid')
    activitiesHint.classList.add('hint')
}

const makeInvalidActivity = element => {
    element.classList.add('not-valid')
    activitiesHint.classList.remove('hint')
    element.classList.remove('valid')
}

/**=========REGEX FOR VALIDATE FORM INPUTS========*/
const validName = /^\w+$/
const validEmail = /^(\w+(-)?)+@(\w+(-)?)\.\w+$/
const validCC = /[0-9]{13,16}/
const validZipCode = /^[0-9]{5}$/
const validCVV = /^[0-9]{3}$/

nameInput.addEventListener('keyup', () => {
    //TEST THE NAME FIELD
    if (!validName.test(nameInput.value)) {
        makeInvalidInput(nameInput)
    } else if (validName.test(nameInput.value)) {
        makeValidInput(nameInput)
    }
})

emailInput.addEventListener('keyup', () => {
    //TEST THE EMAIL FIELD
    if (!validEmail.test(emailInput.value)) {
        makeInvalidInput(emailInput)
    } else if (validEmail.test(emailInput.value)) {
        makeValidInput(emailInput)
    }

})

activities.addEventListener('click', () => {
    //CHECK IF AT LEAST ONE ACTIVITY IS SELECTED
    let activitiesChecked = 0
    for (let i = 0; i < activities.elements.length; i++) {
        if (activities.elements[i].checked === true) {
            activitiesChecked++
        }
    }

    if (activitiesChecked === 0) {
        activities.classList.add('not-valid')
        activitiesHint.classList.remove('hint')
        activities.classList.remove('valid')
    } else {
        activities.classList.remove('not-valid')
        activities.classList.add('valid')
        activitiesHint.classList.add('hint')
    }
})

ccInput.addEventListener('keyup', () => {
    //TEST THE CREDIT CARD FIELDS
    if (!validCC.test(ccInput.value)) {
        makeInvalidInput(ccInput)
    } else if (validCC.test(ccInput.value)) {
        makeValidInput(ccInput)
    }
})

zipCode.addEventListener('keyup', () => {
    if (!validZipCode.test(zipCode.value)) {
        makeInvalidInput(zipCode)
    } else if (validZipCode.test(zipCode.value)) {
        makeValidInput(zipCode)
    }
})

cvv.addEventListener('keyup', () => {
    if (!validCVV.test(cvv.value)) {
        makeInvalidInput(cvv)
    } else if (validCVV.test(cvv.value)) {
        makeValidInput(cvv)
    }
})

//ACCESSIBILITY ACTIVITIES SECTION
//Select the array of inputs only in the activities section
let activitiesInputs = document.querySelectorAll('#activities-box input')

//Loop into the array of inputs and set the class focus to the one is onfocus
function focusInput(inputsArray) {
    for (let i = 0; i < inputsArray.length; i++) {
        inputsArray[i].onfocus = () => {
            activitiesInputs[i].parentNode.classList.add('focus')
        }
    }
}

focusInput(activitiesInputs)

//Loop into the array of inputs and remove the class focus to the one is onblur
function blurInput(inputsArray) {
    for (let i = 0; i < inputsArray.length; i++) {
        inputsArray[i].onblur = () => {
            activitiesInputs[i].parentNode.classList.remove('focus')
        }
    }
}

blurInput(activitiesInputs)

/*
 * ================FORM SUBMIT VALIDATIONS====================
 * */
const form = document.querySelector('form')

form.addEventListener('submit', e => {
    e.preventDefault()
    let nameValid = false
    let emailValid = false
    let ccValid = false
    let zipValid = false
    let cvvValid = false
    let activitiesValid = false

    //TEST THE NAME FIELD
    if (!validName.test(nameInput.value)) {
        makeInvalidInput(nameInput)
        nameValid = false
    } else if (validName.test(nameInput.value)) {
        makeValidInput(nameInput)
        nameValid = true
    }

    //TEST THE EMAIL FIELD
    if (!validEmail.test(emailInput.value)) {
        makeInvalidInput(emailInput)
        emailValid = false
    } else if (validEmail.test(emailInput.value)) {
        makeValidInput(emailInput)
        emailValid = true
    }

    //TEST THE CREDIT CARD FIELDS
    if (!validCC.test(ccInput.value)) {
        makeInvalidInput(ccInput)
        ccValid = false
    } else if (validCC.test(ccInput.value)) {
        makeValidInput(ccInput)
        ccValid = true
    }

    if (!validZipCode.test(zipCode.value)) {
        makeInvalidInput(zipCode)
        zipValid = false
    } else if (validZipCode.test(zipCode.value)) {
        makeValidInput(zipCode)
        zipValid = true
    }

    if (!validCVV.test(cvv.value)) {
        makeInvalidInput(cvv)
        cvvValid = false
    } else if (validCVV.test(cvv.value)) {
        makeValidInput(cvv)
        cvvValid = true
    }

    //CHECK IF AT LEAST ONE ACTIVITY IS SELECTED
    let activitiesChecked = 0
    for (let i = 0; i < activities.elements.length; i++) {
        if (activities.elements[i].checked === true) {
            activitiesChecked++
        }
    }

    if (activitiesChecked === 0) {
        makeInvalidActivity(activities)
        activitiesValid = false
    } else {
        makeValidActivity(activities)
        activitiesValid = true
    }

    if (nameValid && emailValid && ccValid && zipValid && cvvValid && activitiesValid) {
        form.submit()
    }
})