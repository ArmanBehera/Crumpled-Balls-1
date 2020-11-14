class Dustbin{
    constructor(x, y, height, width){
        // Making the body
        this.body = Bodies.rectangle(x, y, width, height, {isStatic : true});

        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display(){

        rectMode(CENTER);
        fill(255);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);

    }
}