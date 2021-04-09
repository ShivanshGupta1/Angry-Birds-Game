class Log extends Base{
    constructor(x,y,width,angle){
        super(x,y,width,20)
        Matter.Body.setAngle(this.body,angle)
        this.image = loadImage("sprites/wood2.png")

    }

}