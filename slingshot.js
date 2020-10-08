class slingshot{
  constructor(body, anchor){
    var options ={
        bodyA: body,
        bodyB: anchor,
        stiffness:0.04,
        length: 1
    }
    this.slingshot = Constraint.create(options);
    World.add(world, this.slingshot);
}
fly(){
    this.slingshot.bodyA = null;
}
display(){
    if(this.slingshot.bodyA){
        var pointA = this.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(2);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}