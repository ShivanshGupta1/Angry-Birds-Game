class Base{
    constructor(x,y,width,height){
        this.options = {
            restitution:0.5,
            friction: 5,
            density: 1
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,this.options);
        World.add(world,this.body);
        this.image = loadImage("sprites/base.png")
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER)
        this.sprite = image(this.image,0,0,this.width,this.height)
        pop();
    }
}