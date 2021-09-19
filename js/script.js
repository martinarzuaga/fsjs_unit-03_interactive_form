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

function showField(field) {
    if (field.value === 'Other') {
        otherRole.style.display = "block"
    }
}

jobRole.addEventListener('change', (e) => {
    if (jobRole.value === 'other') {
        otherRole.style.display = "block"
        otherRole.focus()
    } else {
        otherRole.style.display = "none"
    }
})