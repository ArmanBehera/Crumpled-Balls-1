class Paper{
    constructor(x, y, radius){

        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }

        this.body = Matter.Bodies.circle(x, y, radius, options);
        this.radius = radius;
        
        World.add(world, this.body)
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);

        ellipseMode(CENTER);
        fill("red");
        ellipse(0, 0, this.radius);

        pop();
    }
}