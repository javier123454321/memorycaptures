//Script finds the image based on pitcure ID and displays it along with a download button in the claimPage
    // Script by: Javier Gonzalez javier.e.glz@gmail.com
// var cloudinary = require('cloudinary').v2;

function findPicture(pictureID){
  let imgPath = "\"https://res.cloudinary.com/memorycaptures-com/image/upload/v1569562371/MemoriesCaptured/IMG_" + pictureID + ".jpg\"";
  let displayPhotoHTML = '<a id="downloadLink" class="buttonStyle" href='+ imgPath + ' download="Captured Memory.jpg" target="_blank">'
      + 'DOWNLOAD LINK</a> <br><br><br>' + '<a id="imglink" href=' + imgPath + '>' +
      '<img class="previewImg" src =' + imgPath + ' alt="Captured Memory" title="View Full Resolution Image"></a>'
  console.log(displayPhotoHTML);

  if(isAPicture(pictureID)){
      document.getElementById("claimModalTitle").innerText = "Found Your Memory!";
      document.getElementsByClassName("claimPhoto")[0].innerHTML = displayPhotoHTML;
      console.log("new src = " + document.getElementsByClassName("previewImg")[0].src);
    }else{
      document.getElementById("claimModalTitle").innerText = "Picture Not Found";
    }
};

function isAPicture(ID){
  // preventDefault();
  //To Do define if the picture code is valid, return Boolean
  //For now just checking if ID is an empty string
  console.log(ID != "");
  return (ID != "");
}

// <a id="downloadLink" class="buttonStyle" href="https://res.cloudinary.com/memorycaptures-com/image/upload/v1566865326/sample.jpg" download="Captured Memory.jpg" target="_blank">DOWNLOAD LINK</a>
// <br> <br><br>
// <a id="imglink" href="https://res.cloudinary.com/memorycaptures-com/image/upload/v1566865326/sample.jpg"><img class="previewImg" src = "https://res.cloudinary.com/memorycaptures-com/image/upload/v1566865326/sample.jpg" alt="Captured Memory" title="View Full Resolution Image"></a>

function getPicture(){
    if (document.getElementById("claimPhotoModal").style.display == "none"){
      document.getElementById("claimPhotoModal").style.display = "block";
    };
    document.getElementById("reportIssueModal").style.display = "none";

    let pictureID = document.getElementById("picID").value;
    console.log("GetPicture Fired");
    findPicture(pictureID);
  };



let showIssueForm = document.getElementById("reportIssueButton");
showIssueForm.addEventListener("click", showReportIssueScreen, false);

function showReportIssueScreen(){
  console.log("showReportIssueScreen called");
  document.getElementById("claimPhotoModal").style.display = "none";
  document.getElementById("reportIssueModal").style.display = "block";
  };
