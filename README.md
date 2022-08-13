# RPN Calculator Coding Exercise
## Solution Description
The solution is written using node and broken up into components to make adding and removing features easier. Error handling mostly just swallows invalid values without much feedback to make reading the output a little less cumbersome.

### Reasoning
I separted the init from the calculator so that there is a possibility to have a more customized introduction to the application if wanted. 
The calculator is also it's own component. So any changes that need to be done to the calculator can be added or removed easily without effecting other parts of the application. Other components can be added to the application without effecting the other parts of the application. This helps with separation of concerns. 

### Trade offs
The trade offs to this implementation is that there isn't a lot of user feedback for errors, except for where the user tries to preform an operation on a single item.

## How to run code
To run code, make sure node is installed on the computer. 
visit https://nodejs.org to get the latest version of node. 

Once node is installed, in a terminal `cd` into the `rpn_calculator` directory and run `npm install`.

After a successful `npm install` run `npm run start` to start the rpn calculator application.