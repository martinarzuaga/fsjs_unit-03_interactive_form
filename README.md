# Interactive Form Validation Project
## FullStack JavaScript Techdegree at TeamTreehouse - Unit 03

Dinamically and real time signup form validation inlcuding accessibility to handle errors.

- The name field is automatically focused when the page loads.
  - The user can't submit the form if the Name field is blank.
- The email field reveals a custom error message if the field is blank or wrong according to the traditional email formatting.
  - The user can't submit the form if the Email field is blank or wrong.
- The Job Role field includes the most popular roles but if Other is selected a new blank text field is showed.
- The T-Shirt Info has several validations:
  - The colors will not displayed until the user selects a Design.
  - When the Design is selected the default options will always be the 0 indexed option.
  - All sizes are available for all designs and colors.
- Register for activities section:
  - Any conflictive conference can be selected.
  - Each time a user select or deselect an option the cost is increased or decreased.
  - The user can submit the form without select some conference.
- Payment Info section:
  - If the user select Paypal option or Bitcoin option a message will displayed related to that option.
  - If the user select the Credit Card option:
    - A credit card number between 13 and 16 digits is required
    - A 5 digits zip code is required
    - A 3 digits CVV is required

### View live demo: https://martinarzuaga.github.io/fsjs_unit-03_interactive_form/