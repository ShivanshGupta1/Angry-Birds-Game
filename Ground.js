class Ground{
    constructor(x,y,width,height){
        this.width = width
        this.height = height
        this.options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,this.width,this.height,this.options);
        World.add(world,this.body);
    }
    showGround(){
        rectMode(CENTER);
        fill("brown")
        this.rect = rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}