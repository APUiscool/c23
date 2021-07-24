class Player{
    constructor(x,y,w,h){
        var option={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,option)
        this.image=loadImage("./assets/player.png")
        this.w=w
        this.h=h
        World.add(world,this.body)
    }
    show(){
        push()
            fill("black")
            stroke(255)
            imageMode(CENTER)
            image(this.image,this.body.position.x,this.body.position.y,this.w,this.h)
            
        pop()
    }
}