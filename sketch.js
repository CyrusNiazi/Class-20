var mR,fR;
function setup() {
  createCanvas(800,400);
 fR= createSprite(400, 200, 100, 150);
 fR.shapeColor="green"
 fR.debug=true;

 mR=createSprite(200,200,50,100);
 mR.shapeColor="green"
 mR.debug=true;
}

function draw() {
  background(0);  
  mR.x=mouseX;
  mR.y=mouseY;

  if(mR.x-fR.x<=(mR.width+fR.width)/2 && fR.x-mR.x<=(mR.width+fR.width)/2 &&
  mR.y-fR.y<=(mR.height+fR.height)/2 && fR.y-mR.y<=(mR.height+fR.height)/2) 
   {
    fR.shapeColor="red";
    mR.shapeColor="red";
  }
  else {
    fR.shapeColor="green"
    mR.shapeColor="green"
  }
 
  console.log("Distance between the centers :"+(mR.x-fR.x));
  console.log("sum of their widths/2 :"+(mR.width+fR.width)/2);
  
  drawSprites();
}