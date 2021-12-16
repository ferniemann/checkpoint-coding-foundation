class SumApp {
  numbers = []
  sum = 0
  constructor(n) {
    this.number = n
  }

  addNumber(n) {
    this.numbers.push(n)
  }

  getSum() {
    this.numbers.forEach(num => this.sum += num)
    return this.sum
  }

  reset() {
    this.numbers = []
  }
}
