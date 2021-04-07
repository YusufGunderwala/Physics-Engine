class Box{
    constructor(x,y){

        var boxop = {
            restitution : 2,
            friction : 1,
            density : 1
        }

        this.body = Bodies.rectangle(x,y,70,70,boxop);
        this.width = 70;
        this.height = 70;
        World.add(myWorld,this.body);

    }

    display(){
        
        var pos = this.body.position;

        rectMode(CENTER);
        rect(pos.x,pos.y,70,70);
    }
} 