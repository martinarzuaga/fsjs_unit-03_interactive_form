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
        colorField.options[4].setAttribute('hidden', 'hidden')
        colorField.options[5].setAttribute('hidden', 'hidden')
        colorField.options[6].setAttribute('hidden', 'hidden')
    } else if (e.target.selectedIndex === 2) {
        // RESET TO BLOCK THE HIDE OPTIONS IF USERS CHANGE TO DESIGN OPTION 2
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
let activities = document.getElementById('activities')
let activitiesCost = document.getElementById('activities-cost')
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
