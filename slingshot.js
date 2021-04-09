class SlingShot{
    constructor(bodyA,bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            length: 10,
            stiffness: 0.5
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var pa = this.chain.bodyA.position;
        var pb = this.chain.bodyB.position;
        push();
        strokeWeight(5);
        line(pa.x,pa.y,pb.x,pb.y);
        pop();
    }
}