
//Make a collapsible button that hides or displays a section of text when clicked

function hideContent(collapsible, content){
  content.style.display = "none";
  collapsible.classList.remove("collapsibleshow");
  collapsible.classList.add("collapsible");
}

function hideAllContent(collapsibleList) {
  for (i = 0; i < collapsibleList.length; i++) {
    hideContent(collapsibleList[i], collapsibleList[i].nextElementSibling);
      }}

function showContent(collapsible, content){
  content.style.display = "block";
  collapsible.classList.remove("collapsible");
  collapsible.classList.add("collapsibleshow");
}

//resize the page in so it fits the new unhidden content
function makeInfoSectionNormal(basePageSize){
  document.getElementsByClassName('infosection')[0].style.height = basePageSize + 'px';
}


function addInfoSectionSize(basePageSize, addition){
  document.getElementsByClassName('infosection')[0].style.height = (basePageSize + addition) + 'px';
}

let coll = document.getElementsByClassName("collapsible");
let i;
let length = coll.length
let infoSectionHeight = document.getElementsByClassName('infosection')[0].offsetHeight;


for (i = 0; i < length; i++) {

    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");

      let content = this.nextElementSibling;

      if (content.style.display === "block") {
        hideContent(this, content);
        makeInfoSectionNormal(infoSectionHeight)
      } else {
        hideAllContent(document.getElementsByClassName("collapsibleshow"))
        makeInfoSectionNormal(infoSectionHeight)
        showContent(this, content);
        addInfoSectionSize(infoSectionHeight, content.offsetHeight)
      }
    });
  }
