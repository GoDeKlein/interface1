let count = 0;
let count_games = 0;
function EnterName()
{
    alert("Enter your name!");
    let name = prompt();
    if(name == "")
        {
        alert("You did not enter a name");
        name = prompt();
        }
    document.getElementById("name").innerHTML=name;
}
function Game()
{
    let i1 = Math.floor(Math.random()*9);
    let i2 = Math.floor(Math.random()*8);
    let i3 = Math.floor(Math.random()*7);
    let j1 = Math.floor(Math.random()*9);
    let j2 = Math.floor(Math.random()*8);
    let j3 = Math.floor(Math.random()*7);
    let z1 = Math.floor(Math.random()*9);
    let z2 = Math.floor(Math.random()*8);
    let z3 = Math.floor(Math.random()*7);
    let picture1 = document.getElementById("img_one");
    let picture2 = document.getElementById("img_two");
    let picture3 = document.getElementById("img_three");
    let picture4 = document.getElementById("img_four");
    let picture5 = document.getElementById("img_five");
    let picture6 = document.getElementById("img_six");
    let picture7 = document.getElementById("img_seven");
    let picture8 = document.getElementById("img_eight");
    let picture9 = document.getElementById("img_nine");
    let img_game_one = Array("naruto.jpg", "nedji.png", "sakura.png", "saske.jpg", "djiraya.jpg", "itahi.jfif", "tsunade.jfif", "rocklee.png", "tonton.jpg");
    let img_game_two = Array("naruto.jpg", "nedji.png", "sakura.png", "saske.jpg", "djiraya.jpg", "itahi.jfif", "tsunade.jfif", "rocklee.png", "tonton.jpg");
    let img_game_three = Array("naruto.jpg", "nedji.png", "sakura.png", "saske.jpg", "djiraya.jpg", "itahi.jfif", "tsunade.jfif", "rocklee.png", "tonton.jpg");

    picture1.src = img_game_one[i1];
    picture4.src = img_game_two[j1];
    picture7.src = img_game_three[z1];
    if(img_game_one[i1] == img_game_two[j1] && img_game_one[i1] ==  img_game_three[z1])
    {
        count++;
    }
    img_game_one.splice(i1,1);
    img_game_two.splice(j1,1);
    img_game_three.splice(z1,1);
    picture2.src = img_game_one[i2];
    picture5.src =  img_game_two[j2];
    picture8.src = img_game_three[z2];
    if(img_game_one[i2] == img_game_two[j2] && img_game_one[i2] ==  img_game_three[z2])
    {
        count++;
    }
    img_game_two.splice(j2,1);
    img_game_one.splice(i2,1);
    img_game_three.splice(z2,1);
    picture3.src = img_game_one[i3];
    picture6.src =  img_game_two[j3];
    picture9.src =  img_game_three[z3];
    if(img_game_one[i3] == img_game_two[j3] && img_game_one[i3] ==  img_game_three[z3])
    {
        count++;
    }
    count_games++;
    if(count_games == 3)
    {
        alert("Game over");
        count = 0;
        count_games = 0;
    }
    document.getElementById("attempt_id").innerHTML = count_games;
    document.getElementById("count").innerHTML=count;
}