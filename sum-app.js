class SumApp {
  constructor() {
    this.numbers = []
  }

  addNumber(n) {
    this.numbers.push(n)
  }

  getSum() {
    let sum = 0
    this.numbers.forEach(num => sum += num)
    return sum
  }

  reset() {
    this.numbers = []
  }
}
