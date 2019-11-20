let catcher = document.getElementById("catcher")
let moveby = 10;
var LeftPosition = 100


window.onkeydown = function (e) {
    MovePlatform(e);
}

function MovePlatform(key) {

    switch (key.code) {
        case "ArrowLeft":
            catcher.style.left = catcher.style.left - moveby + "px";
            //per 10 (moveby) naar links (vloeiend)
            break;
        case "ArrowRight":
                catcher.style.left = catcher.style.left + moveby + "px";
            //per 10 (moveby) naar links (vloeiend)
            break;
    }
}