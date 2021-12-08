document.body.innerHTML='<div class="main"><div class="for_image"><img src="Magic_eight_ball.png" alt="ball" height="100%" width="100%" id="ball"></div><div class="text" id="text1"></div><div class="form_main"><form name="form1"><input type="text" name="res1" rows="1" cols="25" id="result1" class="form-control-plaintext"></br><input class="btn btn-light btn1" type="button" value="Ask me a question" onclick="Foo()"></br></br><input class="btn btn-light btn2" type="reset" value="Clear"><br><button class="btn btn-light btn1 btn3"><a href="../index.html">Back to menu</a></button> </div></div>';

function Foo()
{
    let myElement = document.getElementById("ball");
    let ask = document.getElementById("result1").value;
    if(ask.charAt(ask.length-1) == '?' && ask != '')
    {
        function Animation_ball_one()
        {
            myElement.classList.remove("animation_ball");
        }
        myElement.classList.add('animation_ball');
        setTimeout(Animation_ball_one, 500);
        let array = ["Yes", "No", "Maybe", "50%", "100%"];
        let i = Math.floor(Math.random()* (5-0)+ 0);
        let el = document.getElementById("text1");
        el.innerText = array[i];
        document.getElementById("test1").innerHTML = array[i];
        
    }
    else
    {
        alert("Ask me a question!!!");
    }
    
    
        
    

}