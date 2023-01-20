// creating and resizing the canvas
let canvas = document.getElementById("canvas");
canvas.width= window.innerWidth;
canvas.height = window.innerHeight;

//drawing elements on the canvas
//drawing  rectangles, lines, arcs/circls,bezier curves,images, text
//1: drawing rectangles
var c = canvas.getContext('2d');
var image = document.getElementById("img");
//var pat = c.createPattern(image, direction);


//drawing lines

c.beginPath();
c.moveTo(50, 400);
c.lineTo(300, 200);
c.strokeStyle ="violet";
c.lineTo(200, 500);
c.lineTo(500, 300);

c.stroke()

/*for(var i= 0; i < 2400; i++){
    var x= Math.random() * window.innerWidth;
    var y= Math.random() * window.innerHeight;


c.beginPath();
c.strokeStyle =" white "
c.arc(x, y, 50, 0,Math.PI * 2, false);
c.stroke()
}
*/

var colorArray = [
    "#ff0044",
    "#aeff00",
    "#bbccff",
    "#000000",
    "#00ff00",
    "#bbbb00",
    "#ffffff",
    "#ff0048",
    "#ff0000",
    "#f0f0f0",
    "#0000ff"
]
function Circle(x, y, dx, dy,radius){
    this.x = x;
    this.y = y;
    this.dx= dx;
    this.dy= dy;
    this.radius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y,this.radius,0, Math.PI * 2, false);
        c.strokeStyle= "green"
        c.fillStyle = this.color;
        c.fill();
        c.stroke();
    }

    this.update= function(){
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx
        } else if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy
        }
        
        this.x += this.dx
        this.y += this.dy

        this.draw()

    }

}

var circleArray = [];
for(var i = 0; i < 150; i++){
    var radius = 30;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx =Math.random() - 0.5;
    var dy =Math.random() - 0.5;
    
    
   circleArray.push(new Circle(x, y, dx, dy, radius));
}


function animate() {
requestAnimationFrame(animate);
c.clearRect(0, 0, innerWidth, innerHeight)
c.fillRect(20,20, 100,100);
c.fillStyle = "red"
c.fillRect(160,100, 100,100);
c.fillStyle = "white"
c.fillRect(140,240, 100,100);
c.fillStyle = "goldenrod"
c.fillRect(340,40, 100,100);
c.fillStyle = "green"
c.fillRect(340,240, 100,100);
c.fillStyle = "purple"
c.fillRect(240,140, 100,100);
c.font ="50px arial";
c.fillStyle =" blue";
c.fillText("hae mirriam", 40, 460);
c.strokeStyle = "white";
c.strokeText("Mirriam is a Frontend Developer", 40, 550);
c.fillStyle =" blue";
c.fillText("hae Natalie",640, 40);
c.fillStyle =" yellow";
c.fillText("hae Cooper", 40, 60);
c.fillStyle =" silver";
c.fillText("hae Lunah", 1040, 460);
c.fillStyle = image
c.fillRect(530, 90, 300,300);
c.fillStyle = "gold";
c.fillText("I am young", 550,160);



//c.fillRect(0, 0, 300, 500);
//c.fillStyle = pat;
 //c.fill();


 
for(var i = 0; i < circleArray.length; i++){
    circleArray[i].update();
    


}

}
animate();