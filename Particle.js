class Particle {
  constructor(world, velocity) {
    this.world = world
    this.pos = {x: this.world.canvas.width / 2, y: this.world.canvas.height / 2}
    this.size = 4
    this.opacity = 1
    this.velocity = velocity
  }
  applyForce(object, force) {
    object.x += force.x
    object.y += force.y
  }
  update() {
    this.applyForce(this.velocity, {x: 0, y: this.world.options.gravity / 10})
    this.applyForce(this.pos, this.velocity)
  }
  draw() {
    var circle = new Path2D();
    this.world.ctx.fillStyle = `rgba(3, 252, 240, ${this.opacity})`
    circle.arc(this.pos.x, this.pos.y, this.size, 0,  2 * Math.PI)
    this.world.ctx.fill(circle);
    this.opacity -= 0.025
  }
  finished() {
    return (this.opacity < 0)
  }
}
export default Particle