class Particle {
  constructor(world, velocity) {
    this.world = world
    this.pos = {x: this.world.canvas.width / 2, y: this.world.canvas.height / 2}
    this.size = 4
    this.opacity = 1
    this.opacityChangeValue = 0.01
    this.velocity = velocity
    this.gravity = {x: 0, y: this.world.options.gravity / 10}
    this.color = world.options.color
  }
  update() {
    if (this.world.options.bounce == true) {
      if (!(this.pos.y < this.world.canvas.height - this.size && this.pos.y > 0 && this.pos.x < this.world.canvas.width - this.size && this.pos.x > 0)) {
        this.velocity = this.world.reverseVelocity(this.velocity)
      }
    }
    this.world.applyForce(this.velocity, this.gravity)
    this.world.applyForce(this.pos, this.velocity)
  }
  draw() {
    var circle = new Path2D();
    this.world.ctx.fillStyle = this.color
    circle.arc(this.pos.x, this.pos.y, this.size, 0,  2 * Math.PI)
    this.world.ctx.fill(circle);
    this.opacity -= this.opacityChangeValue
  }
  finished() {
    let finished = false 
    setTimeout(() => {
      finished = true
    }, 300);
    return finished
  }
}
export default Particle