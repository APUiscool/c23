class Base2{
    constructor(x,y,w,h){
        var option={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,option)
        this.image=loadImage("./assets/base2.png")
        this.w=w
        this.h=h
        World.add(world,this.body)
    }
    show(){
        var pos = this.body.position;
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height)
        this.image.resize(270,200)
        noTint()
        pop()
    }
}