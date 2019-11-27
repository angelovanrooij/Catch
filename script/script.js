let catcher = document.getElementById("catcher")
let moveby = 10;
var position = 0;


window.onkeydown = function (e) {
    MovePlatform(e)
}

/*er moet een parameter worden toegevoegd (key), vervolgens is het argument de button*/

function MovePlatform(key) {

    switch (key.code) {
        case "ArrowLeft":
            position = position - moveby;
            catcher.style.left = position + "px";
            console.log(moveby);
            break;
        case "ArrowRight":
            position = position + moveby;
            catcher.style.left = position + "px";
            //per 10 (moveby) naar links (vloeiend)
            console.log(moveby);
            break;
    }
}

/* ipv de afbeelding te laten verspringen per 10, doe ik hem per 1 maar dan icm een timer zodat ie vloeiender gaat
   ipv te updaten op een click, constant locatie updaten*/
function Timer(key) {
    if (key.code == "ArrowLeft") {
        position -= 1;
    } else if (key.code == "ArrowRight") {
        position += 1;
    }

    catcher.style.left = position + "px";

    setTimeout(Timer, 10)

}



/*---------------------------------------------------------------------------------------------------------*/

/*function MovePlatform(key){
    if (key.code == "ArrowLeft"){
        MoveLeft();
    }

    else if (key.code == "ArrowRight"){
        MoveRight();
    }

}
function MoveLeft() {
    catcher.style.left = catcher.style.left - moveby + "px";
}

function MoveRight() {
    catcher.style.left = catcher.style.left + moveby + "px";
}
*/