
//Make a collapsible button that hides or displays a section of text when clicked
function hideContent(collapsible, content){
  console.log("hiding: " + collapsible.innerHTML)
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

let coll = document.getElementsByClassName("collapsible");
let i;
let length = coll.length

  for (i = 0; i < length; i++) {

    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");

      let content = this.nextElementSibling;

      if (content.style.display === "block") {
        hideContent(this, content);
      } else {
        hideAllContent(document.getElementsByClassName("collapsibleshow"))
        showContent(this, content);
      }
    });
  }
  //
  // $(document).ready(function(){
  //   // Add smooth scrolling to all links
  //   $("a").on('click', function(event) {
  //
  //     // Make sure this.hash has a value before overriding default behavior
  //     if (this.hash !== "") {
  //       // Prevent default anchor click behavior
  //       event.preventDefault();
  //
  //       // Store hash
  //       var hash = this.hash;
  //
  //       // Using jQuery's animate() method to add smooth page scroll
  //       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
  //       $('html, body').animate({
  //         scrollTop: $(hash).offset().top
  //       }, 4000, function(){
  //
  //         // Add hash (#) to URL when done scrolling (default click behavior)
  //         window.location.hash = hash;
  //       });
  //     }
  //   });
  // });
