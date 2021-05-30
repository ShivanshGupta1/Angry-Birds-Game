class SlingShot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 10,
            stiffness: 0.05
        }
        this.chain = Constraint.create(options);
        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");
        
        World.add(world,this.chain);
    }
    display(){
        
        image(this.image1,200,70,30,130)
        image(this.image2,180,70,30,75)
        
        if(this.chain.bodyA != null)
        {
            var pa = this.chain.bodyA.position;
            var pb = this.chain.pointB;
            push();
            
            stroke("#311708")

           
            if (pa.x<pb.x+5){
                strokeWeight(pa.x/20);
                line(pa.x-10,pa.y,pb.x - 10 ,pb.y - 10);
                line(pa.x+19,pa.y,pb.x + 15 ,pb.y - 10);
                image(this.image3,pa.x -20,pa.y - 10,10,30)
            }
            else {
                strokeWeight(pa.x/80);
                line(pa.x-10,pa.y,pb.x - 10 ,pb.y - 10);
                line(pa.x+13,pa.y,pb.x + 15 ,pb.y - 10);
                image(this.image3,pa.x + 20,pa.y - 10,10,30)
            }
            pop();
        }
    
        
    }
    release(){
        this.chain.bodyA = null;
        
    }
    back(bodyA){
        this.chain.bodyA = bodyA
    }
}