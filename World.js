class World {
  constructor(ctx, canvas) {
    this.ctx = ctx
    this.canvas = canvas
    this.inputs = document.querySelectorAll('input')
    this.options = {}
  }
  getRandomNumber(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  getValues() {
    this.inputs.forEach(input => {
      this.options = {...this.options, ...{[input.name]: +input.value}}
    })
  }
 getRandomVelocity(min, max) {
    let x = this.getRandomNumber(min, max)
    let y = this.getRandomNumber(min, max)
    return {x, y}
  }
}
export default World