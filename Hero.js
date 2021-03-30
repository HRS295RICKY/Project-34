class Hero{
    constructor(x,y,width,height){
        var options={
            'density': 30,
            'friction':1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("photoes/Superhero-01.png");
        World.add(world, this.body);
     
       
    }

    display()
	{
			
			var Pos=this.body.position;		
			push()
			translate(this.body.position.x,this.body.position.y);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.width,this.height)
			pop()
			
	}
}