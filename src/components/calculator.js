const prompt = require('prompt-sync')({sigint: true});

const calculator = () => {
  let stack = []
  let exit = false

  while(!exit){
    let inputVal = prompt('> ');
    const value = parseInput(inputVal.trim())

    if(value.length > 0){
      value.forEach((item) => {
        if(item === 'exit'){
          exit = true
          return
        }

        if(item === 'c'){
          stack.pop()
          return
        }

        if(item === 'ac'){
          stack = []
          return
        }

        if(typeof item === 'number'){
          stack.push(item)
          return
        }

        if(typeof item === 'string'){
          if(stack.length < 2) {
            console.log('invalid operation')
            return
          }

          preformCalculation(stack, item)
        }
      })

      // don't print value on exit
      if(exit) return

      // don't print value if stack is empty (c, or ac is entered)
      if(stack.length > 0){
        console.log(stack[stack.length - 1].toString())
      }
    }
  }
}

// Helper Functions
const parseInput = (input) => {
  const stripedInput = input.split(' ')
  return stripedInput.map(val => {
    if (Number(val)) {
      return Number(val)
    }

    switch (val) {
      case '+':
      case '-':
      case '/':
      case '*':
        return val
      case 'q':
        return 'exit';
      case 'c':
        return 'c';
      case 'ac':
        return 'ac'
      default:
        // ignore invalid inputs
        return null
    }
  })
}

const preformCalculation = (stack, operation) => {
  let result
  const firstVal = stack.pop()
  switch (operation){
    case '+':
      result = stack.pop() + firstVal
      stack.push(result)
      return result
    case '-':
      result = stack.pop() - firstVal
      stack.push(result)
      return result
    case '*':
      result = stack.pop() * firstVal
      stack.push(result)
      return result
    case '/':
      result = stack.pop() / firstVal
      stack.push(result)
      return result
    default:
      return
  }
}

module.exports = {
  calculator
}