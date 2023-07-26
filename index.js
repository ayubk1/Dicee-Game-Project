var randomnumber = Math.floor(Math.random()*6)+1;

var imagenumber = "dice"+ randomnumber + ".png"; 

var randomimgsource = "images/" + imagenumber; 

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomimgsource);

var randomnumber2 = Math.floor(Math.random()*6)+1;

var imagenumber2 = "dice"+ randomnumber2 + ".png";

var randomimgsource2 = "images/" + imagenumber2;


var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , randomimgsource2 );

if (randomnumber > randomnumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomnumber2 > randomnumber){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}