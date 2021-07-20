canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if((keyPressed>=97 && keyPressed<=122) (keyPressed>=65 && keyPressed<=90))
    {
        alphabetKey();
        document.getElementById("d1").innerHTML="You pressed Alphabet Key";
        console.log("alphabet key");
    }

    if(keyPressed>=48 && keyPressed<=57)
    {
        numberKey();
        document.getElementById("d1").innerHTML="You pressed Number Key";
        console.log("number key");
    }
    
    if(keyPressed>=37 && keyPressed<=40)
    {
        arrowKey();
        document.getElementById("d1").innerHTML="You pressed Arrow Key";
        console.log("arrow key");
    }

    if(keyPressed=17, keyPressed=18, keyPressed=27)
    {
        speacialKey();
        document.getElementById("d1").innerHTML="You pressed Special Key";
        console.log("special key");
    }

    if(keyPressed= NaN)
    {
        otherKey();
        document.getElementById("d1").innerHTML="You pressed Other Key";
        console.log("other key");
    }
}

function alphabetKey()
{
    img_image="Alpkey.png";
    add();
}

function numberKey()
{
    img_image="numkey.png";
    add();
}

function arrowKey()
{
    img_image="Arrkey.png";
    add();
}

function specialKey()
{
    img_image="spkey.png";
    add();
}

function otherKey()
{
    img_image="otherkey.png";
    add();
}