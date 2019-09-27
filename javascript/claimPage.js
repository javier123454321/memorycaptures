//Script finds the image based on pitcure ID and displays it along with a download button in the claimPage
    // Script by: Javier Gonzalez javier.e.glz@gmail.com

function findPicture(pictureID){
  let imgPath = "https://res.cloudinary.com/memorycaptures-com/image/upload/v1569562371/MemoriesCaptured/" + pictureID + ".jpg";
  if(isAPicture(pictureID)){
      document.getElementsByClassName("previewImg")[0].src = imgPath;
      document.getElementById("downloadLink").setAttribute('href', imgPath);
      document.getElementById("imglink").setAttribute('href', imgPath);
      console.log("new src = " + document.getElementsByClassName("previewImg")[0].src);
    }else{
      document.getElementById("claimModalTitle").innerText = "Picture Not Found";
    }
};

function isAPicture(ID){
  //To Do define if the picture code is valid, return Boolean
  //For now just checking if ID is an empty string
  // return (ID != "");
  return False;
}

// <a id="downloadLink" class="buttonStyle" href="https://res.cloudinary.com/memorycaptures-com/image/upload/v1566865326/sample.jpg" download="Captured Memory.jpg" target="_blank">DOWNLOAD LINK</a>
// <br> <br><br>
// <a id="imglink" href="https://res.cloudinary.com/memorycaptures-com/image/upload/v1566865326/sample.jpg"><img class="previewImg" src = "https://res.cloudinary.com/memorycaptures-com/image/upload/v1566865326/sample.jpg" alt="Captured Memory" title="View Full Resolution Image"></a>

function getPicture(){
    //to test, input element 3988, it is the only picture on the server.
    //Otherwise, if you dont, it defaults to a picture of a flower, which is not what we want
    if (document.getElementById("claimPhotoModal").style.display == "none"){
      document.getElementById("claimPhotoModal").style.display = "block";
      document.getElementById("reportIssueModal").style.display = "none";
    };
    document.getElementById("reportIssueModal").style.display = "none";
    let pictureID = document.getElementById("picID").value;

    findPicture(pictureID);
  };



let showIssueForm = document.getElementById("reportIssueButton");
showIssueForm.addEventListener("click", showReportIssueScreen, false);

function showReportIssueScreen(){
  console.log("showReportIssueScreen called");
  document.getElementById("claimPhotoModal").style.display = "none";
  document.getElementById("reportIssueModal").style.display = "block";
  };
