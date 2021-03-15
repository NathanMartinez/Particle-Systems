import World from './World.js'
import Particle from './Particle.js'

const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
const button = document.getElementById('generate')

let particles = []
let started = false

let world = new World(ctx, canvas)

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

button.addEventListener('click', (e) => {
  e.preventDefault()
  world.getValues()
  started = !started
})

world.inputs.forEach(input => {
  input.addEventListener('change', () => {
    world.getValues()
    console.log(world.options)
  })
})

function animate() {
  window.requestAnimationFrame(animate)
  clearCanvas()
  if (started) {
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle(world, world.getRandomVelocity(-world.options.vel, world.options.vel)))
    }
    for (let i = particles.length - 1; i > 0; i--) {
      let element = particles[i]
      if (element.finished()) {
        particles.splice(i, 1)
      }
    }
}
  particles.forEach(particle => {
    particle.update()
    particle.draw()
  })
}
animate()