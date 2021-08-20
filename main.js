var last_position_of_x, last_position_of_y;
var mouseEvent="emty";
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    


    var screenwidth = screen.width;
    var newheight = screen.height -300;
    var newwidth = screen.width -70;
    var Width = document.getElementById("width").value;
    var Color = document.getElementById("color").value;

    if(screenwidth < 992){
        document.getElementById("myCanvas").width = newwidth;
        document.getElementById("myCanvas").height = newheight;
    }

    canvas.addEventListener("mousedown",mymousedown);

    function mymousedown(e){
        mouseEvent="mousedown";
    }
    
    canvas.addEventListener("mouseleave",mymouseleave);
    
    function mymouseleave(e){
        mouseEvent = "mouseleave";
    }
    
    canvas.addEventListener("mouseup",mymouseup);
    
    function mymouseup(e){
        mouseEvent = "mouseup";
    }
    
    canvas.addEventListener("mousemove",mymousemove);
    
    function mymousemove(e){
        currentXpositionofmouse = e.clientX-canvas.offsetLeft;
        currentYpositionofmouse = e.clientY-canvas.offsetTop;
    
        if(mouseEvent == "mousedown"){
            ctx.beginPath();
            ctx.strokeStyle = document.getElementById("color").value;
            ctx.lineWidth = document.getElementById("width").value;
            ctx.moveTo(lastPositoinOF_x,lastPositoinOF_y);
            ctx.lineTo(currentXpositionofmouse,currentYpositionofmouse);
            ctx.stroke();
            console.log(Color);
        }
        lastPositoinOF_x = currentXpositionofmouse;
        lastPositoinOF_y = currentYpositionofmouse;
    }
    


    canvas.addEventListener("touchstart",mytouchstart);

    function mytouchstart(e){
        last_position_of_x = e.touches[0].clientX-canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY-canvas.offsetTop;
    }
    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = document.getElementById("color").value;
        ctx.lineWidth = document.getElementById("width").value;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }

