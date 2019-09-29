//Script finds the image based on pitcure ID and displays it along with a download button in the claimPage
    // Script by: Javier Gonzalez javier.e.glz@gmail.com

function findPicture(pictureID){
  let imgPath = "\"https://res.cloudinary.com/memorycaptures-com/image/upload/v1569562371/MemoriesCaptured/IMG_" + pictureID + ".jpg\"";
  let displayPhotoHTML = '<a id="downloadLink" class="buttonStyle" href='+ imgPath +
      ' download="Captured Memory.jpg" target="_blank">' +
      'DOWNLOAD LINK</a> <br><br><br>' + '<a id="imglink" href=' + imgPath + '>' +
      '<img class="previewImg" src =' + imgPath + ' alt="Captured Memory" title="View Full Resolution Image"></a>'

  let displayErrorHTML = '<h4>Sorry, this happens when the code you entered is incorrect. <br>'+
                          'You can double check the code or contact us.</h4><br>'

  if(isAPicture(pictureID)){
      document.getElementById("claimModalTitle").innerText = "Found Your Memory!";
      document.getElementsByClassName("claimPhoto")[0].innerHTML = displayPhotoHTML;
    }else{
      document.getElementById("claimModalTitle").innerText = "Picture Not Found";
      document.getElementsByClassName("claimPhoto")[0].innerHTML = displayErrorHTML;
    }
};

function isAPicture(ID){
  // preventDefault();
  //To Do define if the picture code is valid, return Boolean
  //For now just checking if ID is an empty string
  return (ID != "");
}

function getPicture(){
    if (document.getElementById("claimPhotoModal").style.display == "none"){
      document.getElementById("claimPhotoModal").style.display = "block";
    };
    document.getElementById("reportIssueModal").style.display = "none";

    let pictureID = document.getElementById("picID").value;
    findPicture(pictureID);
  };


function showReportIssueScreen(){
  document.getElementById("claimPhotoModal").style.display = "none";
  document.getElementById("reportIssueModal").style.display = "block";
  };

let showIssueForm = document.getElementById("reportIssueButton");
showIssueForm.addEventListener("click", function(){
  showReportIssueScreen()
}, false);
