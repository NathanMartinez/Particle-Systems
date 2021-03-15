class World {
  constructor() {
    this.canvas = document.getElementById('canvas1')
    this.ctx = this.canvas.getContext('2d')
    this.inputs = document.querySelectorAll('input')
    this.startButton = document.getElementById('generate')
    this.options = {}
    this.started = false
  }
  applyForce(object, force) {
    object.x += force.x
    object.y += force.y
  }
  reverseVelocity(currentVelocity) {
    let newVelocity = currentVelocity
    newVelocity.x = -currentVelocity.x
    newVelocity.y = -currentVelocity.y
    return newVelocity
  }
  getRandomNumber(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  getValues() {
    this.inputs.forEach(input => {
      if (input.type == 'checkbox') {
        this.options = {...this.options, ...{[input.name]: input.checked}}
      } else if (isNaN(+input.value)) {
        this.options = {...this.options, ...{[input.name]: input.value}}
      } else {
        this.options = {...this.options, ...{[input.name]: +input.value}}
      }
    })
  }
 getRandomVelocity(min, max) {
    let x = this.getRandomNumber(min, max)
    let y = this.getRandomNumber(min, max)
    return {x, y}
  }
  spawnObject(array) {
    array.forEach(object => {
      object.update()
      object.draw()
    })
  }
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
  init() {
    this.startButton.addEventListener('click', (e) => {
      e.preventDefault()
      this.getValues()
      this.started = !this.started
      console.log(this.options)
    })
    this.inputs.forEach(input => {
      input.addEventListener('change', () => {
        this.getValues()
      })
    })
  }
  checkIfFinished(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let element = array[i]
      if (element.finished()) {
        array.splice(i, 1)
      }
    }
  }
}
export default World