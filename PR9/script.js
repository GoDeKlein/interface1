function Enter_Name()
{
alert("Enter your name!");
let name = prompt();
if(name == '')
    {
    alert("You did not enter a name");
    let name = prompt();
    }
document.getElementById("player1").innerHTML=name;
}
let count = 0;
let sum_user = 0;
let sum_comp = 0;
function Game()
{
    let card_user = [6, 7, 8, 9, 10, 2, 3, 4, 11];
    let card_comp = [6, 7, 8, 9, 10, 2, 3, 4, 11];
    let i = Math.floor(Math.random()*9);
    let j = Math.floor(Math.random()*9);
    if(card_user[i] == 6)
    {
        document.getElementById("win1").innerHTML = card_user[i];
        let img = document.getElementById("user_avatar");
        img.innerHTML="<img src = '6.png' alt='card' height='200px' width='120px'>";
    }
    if(card_user[i] == 7)
    {
        document.getElementById("win1").innerHTML = card_user[i];
        let img = document.getElementById("user_avatar");
        img.innerHTML="<img src = '7.png' alt='card' height='200px' width='120px'>";
    }
    if(card_user[i] == 8)
    {
        document.getElementById("win1").innerHTML = card_user[i];
        let img = document.getElementById("user_avatar");
        img.innerHTML="<img src = '8.png' alt='card' height='200px' width='120px'>";
    }
    if(card_user[i] == 9)
    {
        document.getElementById("win1").innerHTML = card_user[i];
        let img = document.getElementById("user_avatar");
        img.innerHTML="<img src = '9.png' alt='card' height='200px' width='120px'>";
    }
    if(card_user[i] == 10)
    {
        document.getElementById("win1").innerHTML = card_user[i];
        let img = document.getElementById("user_avatar");
        img.innerHTML="<img src = '10.png' alt='card' height='200px' width='120px'>";
    }
    if(card_user[i] == 2)
    {
        document.getElementById("win1").innerHTML = card_user[i];
        let img = document.getElementById("user_avatar");
        img.innerHTML="<img src = 'valet.png' alt='card' height='200px' width='120px'>";
    }
    if(card_user[i] == 3)
    {
        document.getElementById("win1").innerHTML = card_user[i];
        let img = document.getElementById("user_avatar");
        img.innerHTML="<img src = 'dama.png' alt='card' height='200px' width='120px'>";
    }
    if(card_user[i] == 4)
    {
        document.getElementById("win1").innerHTML = card_user[i];
        let img = document.getElementById("user_avatar");
        img.innerHTML="<img src = 'king.png' alt='card' height='200px' width='120px'>";
    }
    if(card_user[i] == 11)
    {
        document.getElementById("win1").innerHTML = card_user[i];
        let img = document.getElementById("user_avatar");
        img.innerHTML="<img src = 'tyz.png' alt='card' height='200px' width='120px'>";
    }
    ///
    if(card_comp[j] == 6)
    {
        document.getElementById("win2").innerHTML = card_comp[j];
        let img = document.getElementById("comp");
        img.innerHTML="<img src = '6.png' alt='card' height='200px' width='120px'>";
    }
    if(card_comp[j] == 7)
    {
        document.getElementById("win2").innerHTML = card_comp[j];
        let img = document.getElementById("comp");
        img.innerHTML="<img src = '7.png' alt='card' height='200px' width='120px'>";
    }
    if(card_comp[j] == 8)
    {
        document.getElementById("win2").innerHTML = card_comp[j];
        let img = document.getElementById("comp");
        img.innerHTML="<img src = '8.png' alt='card' height='200px' width='120px'>";
    }
    if(card_comp[j] == 9)
    {
        document.getElementById("win2").innerHTML = card_comp[j];
        let img = document.getElementById("comp");
        img.innerHTML="<img src = '9.png' alt='card' height='200px' width='120px'>";
    }
    if(card_comp[j] == 10)
    {
        document.getElementById("win2").innerHTML = card_comp[j];
        let img = document.getElementById("comp");
        img.innerHTML="<img src = '10.png' alt='card' height='200px' width='120px'>";
    }
    if(card_comp[j] == 2)
    {
        document.getElementById("win2").innerHTML = card_comp[j];
        let img = document.getElementById("comp");
        img.innerHTML="<img src = 'valet.png' alt='card' height='200px' width='120px'>";
    }
    if(card_comp[j] == 3)
    {
        document.getElementById("win2").innerHTML = card_comp[j];
        let img = document.getElementById("comp");
        img.innerHTML="<img src = 'dama.png' alt='card' height='200px' width='120px'>";
    }
    if(card_comp[j] == 4)
    {
        document.getElementById("win2").innerHTML = card_comp[j];
        let img = document.getElementById("comp");
        img.innerHTML="<img src = 'king.png' alt='card' height='200px' width='120px'>";
    }
    if(card_comp[j] == 11)
    {
        document.getElementById("win2").innerHTML = card_comp[j];
        let img = document.getElementById("comp");
        img.innerHTML="<img src = 'tyz.png' alt='card' height='200px' width='120px'>";
    }
    let number_of_attempts = "0/3";
    document.getElementById("attempt").innerHTML= number_of_attempts;
    if(count == 0)
    {
        number_of_attempts = "1/3";
        document.getElementById("attempt").innerHTML=number_of_attempts;
    }
    else if(count == 1)
    {
        number_of_attempts = "2/3";
        document.getElementById("attempt").innerHTML=number_of_attempts;
    }
    else if(count == 2)
    {
        number_of_attempts = "3/3";
        document.getElementById("attempt").innerHTML=number_of_attempts;
    }
    sum_user+=card_user[i];
    sum_comp+=card_comp[j];
    document.getElementById("count_player_1").innerHTML = sum_user;
    document.getElementById("count_player_2").innerHTML = sum_comp;
    count++;
    if(sum_user>21 || sum_comp==21)
    {
        card_comp[i] = 0;
        card_user[i] = 0;
        sum_comp = 0;
        sum_user = 0;
        count = 0;
        alert("Comp win!");
    }
    else if(sum_comp>21 ||sum_user==21)
    {
        card_comp[i] = 0;
        card_user[i] = 0;
        sum_comp = 0;
        sum_user = 0;
        count = 0;
        alert("You win!");
    }
     if(count == 3 && sum_user>sum_comp)
    {   
        card_comp[i] = 0;
        card_user[i] = 0;
        sum_comp = 0;
        sum_user = 0;
        count = 0;
        alert("You win!");
    }
    else if(count == 3 && sum_user<sum_comp)
    {
        card_comp[i] = 0;
        card_user[i] = 0;
        sum_comp = 0;
        sum_user = 0;
        count = 0;
        alert("Comp win!");
    }
    if(sum_user>21 && sum_comp>21)
    {
        card_comp[i] = 0;
        card_user[i] = 0;
        sum_comp = 0;
        sum_user = 0;
        count = 0;
        alert("No winner has been identified");
    }
    else if(count == 3 && sum_user == sum_comp)
    {
        card_comp[i] = 0;
        card_user[i] = 0;
        sum_comp = 0;
        sum_user = 0;
        count = 0;
        alert("No winner has been identified");
    }
}