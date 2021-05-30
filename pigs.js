class Pig extends Base{
    constructor(x,y){
        super(x,y,50,50)
        this.image = loadImage("sprites/enemy.png")
        this.visibility = 255
   
}
display(){
   
    if (this.body.speed>3){

        World.remove(world,this.body)
        push()
        console.log(this.body.position.x)
        this.visibility-=10
        tint(255,this.visibility)
        image(this.image,this.body.position.x,this.body.position.y,50,50)
        if(this.visibility>0){
            score+=1
        }
        pop()
    }
    else{
        super.display()
    }
}

}