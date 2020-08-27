class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimg = loadImage('sprites/smoke.png');
    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX; // [[0,0],[1,1]]
    //this.body.position.y = mouseY; // [[0,0],[x1,y1],[x2,y2],..,[xn,yn]]
    //    [xn,yn];

    if(this.body.velocity.x > 8 && this.body.position.x > 200){
      var position = [this.body.position.x,this.body.position.y]; //pos=[0,0];
      this.trajectory.push(position);
      for(var i=0;i<this.trajectory.length;i++){
        image(this.smokeimg,this.trajectory[i][0],this.trajectory[i][1]);
      }
    } 
   
     super.display();
  }
}
