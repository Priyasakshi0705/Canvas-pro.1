canvas = document.getElementById("myCanvas");


var ctx= canvas.getContext("2d");

ctx.font = "40px Roboto";
ctx.strokeText("Olymics Logo", 290, 90);
ctx.font = "40px Roboto";
ctx.strokeText("-By Sakshi Priya", 500, 485);



ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth= 3;
ctx.rect(50,110,700, 340);
ctx.stroke();

color= "blue";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth= 5;
ctx.arc(180,210,80,0,2*Math.PI);
ctx.stroke();

color= "black";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth= 5;
ctx.arc(380,210,80,0,2*Math.PI);
ctx.stroke();

color= "red";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth= 5;
ctx.arc(580,210,80,0,2*Math.PI);
ctx.stroke();

color= "green";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth= 5;
ctx.arc(480,300,80,0,2*Math.PI);
ctx.stroke();

color= "yellow";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth= 5;
ctx.arc(280,300,80,0,2*Math.PI);
ctx.stroke();

