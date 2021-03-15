import World from './World.js'
import Particle from './Particle.js'

let world = new World()

let particles = []

function animate() {
  window.requestAnimationFrame(animate)
  world.clearCanvas()
  if (world.started) {
    for (let i = 0; i < world.options.frequency; i++) {
      particles.push(new Particle(world, world.getRandomVelocity(-world.options.vel, world.options.vel)))
    }
    world.checkIfFinished(particles)
}
  world.spawnObject(particles)
}

window.onload = () => {
  world.init()
  animate()
}