class SlingShot {
    constructor(bodyA,pointB){
        var opt = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.1,
            length : 50
        }
        this.sling = Constraint.create(opt);
        this.pointB = pointB
        World.add(world,this.sling)


            
    }

attach(body){
    this.sling.bodyA = body
}

    fly(){
        this.sling.bodyA = null
    }

    display(){

if(this.sling.bodyA){
        var b1 = this.sling.bodyA.position
        var b2 = this.pointB
push()
        strokeWeight (4);
        stroke("white")
        line (b1.x,b1.y,b2.x,b2.y );
        pop()
        }
    }
}