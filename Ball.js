class Pendulam {
  constructor(x,y,color) {
    var options = {
        isStatic: false,
        frictionAir: 0.005,
        friction: 0,
        slop: 1,
        frictionAir: 0.0,
        restitution: 1,
        inertia: Infinity
    }
    this.x = x;
    this.y = y;
    this.body = Bodies.rectangle(x,y,80,80,options);
   this.color = color
    World.add(world, this.body);
  }
  display(){
    var angle=this.body.angle
    var pos=this.body.position
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    noStroke();
    fill(this.color)
    ellipse(0,0,80,80);
    pop()
  }
};

