class shooting{
    cosnstructor(x, y, radius){
        var options ={
            'restitution':1,
            'friction':1, 
            'density':1
        }
        polygon = Bodies.circle(x, y, this.radius, options);
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage("assets/gradient.png");
        World.add(world, polygon);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        ellipseMode(CENTER);
        image(this.image, 50, 0, 40, 20, 50, 50, 50, 50);
        pop();
    }
}