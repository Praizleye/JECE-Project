This project is built using typescript for a simple form that a has a stepper. A basic stepper contains a visual form that shows the progress when you filled correctly. I also added a validation features to check the input. Of course libraries exist which can gravely simplify the process but it test your basic knowledge of form validation and manipulation and also basic validation.

Typescript which is also a superset of javascript introduces type checking for better linting and also makes your code more robust and less prone to errors.
I normally would want to go the full length of doing a basic animation using framer motion for easeins but i think Jesus will understand :).
Below are my thinking Process:

1. From looking at the design i could visually map and know how many sections in the page herby a display flex for 2 dimensional customization. i could use grid and kill it in one shot but flex is more readable and easier to understand and manipulate.
2. The Steppers are were another key area because they display the status of either active when going down the form. Now i had a global state that tracks which for is active and assings a class to the particular stepper once its on it. This state is what i used for the two steppers.
3. The validation was another key area in the project argueably the most vital area because the inputs needed to be checked so that malicious code doesnt go in there. although i only did validation for 2 sections of the form i hope it demonstrates my abilty to perform complex validation,

I have also included meaningful comments in the code purposely to ensure readability and understanding.
