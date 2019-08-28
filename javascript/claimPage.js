let submitButton = document.getElementsByClassName("subButton")[0];
let pictureID = document.getElementById("picID").value;
let imgPath = "images/downloadables/IMG_" + pictureID + ".jpg";


function getPicture(){
    let pictureID = document.getElementById("picID").value;
    let imgPath = "images/downloadables/IMG_" + pictureID + ".jpg";
    console.log("submit button clicked");
    console.log(imgPath);

    document.getElementsByClassName("showPic")[0].style.display = "block";
    }
