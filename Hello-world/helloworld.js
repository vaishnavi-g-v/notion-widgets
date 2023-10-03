function realRandomColor ()
{
    var x=Math.round(0xffffff * Math.random()).toString(16);
    var y=(6-x.length);
    var z="000000";
    var z1 = z.substring(0,y);
    var color= "#" + z1 + x;
    return color;
}


function randomColor()
{
    return "blue";
}

function changeColor ()
{
    const helloWorldDiv = document.getElementById("main-div");
    helloWorldDiv.style.color = realRandomColor();
    setTimeout(changeColor, 1000);
}

changeColor()