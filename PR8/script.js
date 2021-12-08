let count_one = 0;
let count_two = 0;
function Game()
{   let i;
    let j;
    let user_one = Math.floor(Math.random()*10);
    let user_two =  Math.floor(Math.random()*10);
    if(user_one>user_two)
    {
        count_one++;
    }
    else if(user_two>user_one)
    {
        count_two++;
    }
    if(count_one == 5)
    {
        alert("You win!");
        count_one = 0;
        count_two = 0;
        user_one = 0;
        user_two = 0;
    }
    else if(count_two == 5)
    {
        alert("You were beaten by a computer :(");
        count_one = 0;
        count_two = 0;
        document.getElementById("count_player_1").innerHTML = "0";
        user_one = 0;
        user_two = 0;
    }
    document.getElementById("count_player_1").innerHTML = user_one;
    document.getElementById("count_player_2").innerHTML = user_two;
    document.getElementById("win1").innerHTML = count_one;
    document.getElementById("win2").innerHTML = count_two;
}