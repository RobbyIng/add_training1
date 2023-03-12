export const expensiveFunc = (number) => {
    let rnd = 0
    for (let index = 0; index < 8e7; index++) {
      rnd = Math.random()
    }
  
    return number + rnd
  }