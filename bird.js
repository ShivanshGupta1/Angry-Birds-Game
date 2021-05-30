class Bird extends Base{
    constructor(x,y){
        super(x,y,40,40)
        this.image = loadImage("sprites/bird.png")
        this.trajectory = [];
        this.smokeImg = loadImage("sprites/smoke.png");
}

display()
{
    super.display()
    for (var i=0;i<this.trajectory.length;i++){
        image(this.smokeImg,this.trajectory[i][0],this.trajectory[i][1])
    }
    if (this.body.speed>10 && this.body.position.x>250){
        this.trajectory.push([this.body.position.x,this.body.position.y])
      
    }
    
}

}