class Ground{
    constructor(){
        var options = {
            isStatic: true
        }
        this.ground = Bodies.rectangle(450,390,900,20,ground_options);
        World.add(world,this.ground);
    }
    display(){
        noStroke();
        fill("Brown");
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,900,20);
    }
};