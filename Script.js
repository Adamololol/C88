canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
Array = ["nasaimage1.jpg", "nasaimage2.jpg", "nasaimage3.jpg", "nasaimage4.jpg"];
randomnumber = Math.floor(Math.random() * 4)
background_image = Array[randomnumber];
console.log("background_image =" + background_image);
roverwidth = "100";
roverheigth = "90";
roverx = "10";
rovery = "5";
background_image = "mars.jpg";
image = "rover.png";
function add()
{
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;
    

    
    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = image;
}


function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.heigth);
}
function uploadrover()
{
    ctx.drawImage(rover_imgTag, roverx, rovery, roverwidth, roverheigth);

}

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed)

    if (keyPressed == '38')
    {
     up();
     console.log("up");
    }
    if (keyPressed == '40')
    {
     down();
     console.log("down");
    } 
    if (keyPressed == '37')
    {
     left();
     console.log("left");
    }
    if (keyPressed == '39')
    {
     rigth();
     console.log("rigth");
    }

}
function up()
{
    if(rovery >= 0)
    {
        rovery -= 10;
        console.log("When The Up Arrow Is Pressed = " + roverx + "-" +rovery)
        uploadBackground();
        uploadwater();
        uploadrover();
    }

}

function down()
{
    if(roverx >= 500)
    {
        rovery += 10;
        console.log("When The down Arrow Is Pressed, x = " + roverx + "| y =" + rovery)
        uploadBackground();
        uploadwater();
        uploadrover();
    }
    
}
function left()
{
    if(roverx >= 0)
    {
        rovery += 10;
        console.log("When The left Arrow Is Pressed, x = " + roverx + "| y =" + rovery)
        uploadBackground();
        uploadwater();
        uploadrover();
    }
    
}
function rigth()
{
    if(rovery >= 0)
    {
        rovery -= 700;
        console.log("When The rigth Arrow Is Pressed = " + roverx + "-" + rovery)
        uploadBackground();
        uploadwater();
        uploadrover();
    }

}

