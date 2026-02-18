function openNav(){
  document.getElementById("sideNav").style.width = "250px";
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
}

function closeNav(){
  document.getElementById("sideNav").style.width = "0px";
  document.body.style.backgroundColor = "rgb(215, 215, 215);";
  this.innerHTML = "Projects &#9662;";
}

//Dropdown menu:
var dropdown = document.getElementsByClassName("dropdownBtn");
var i;

for (i = 0; i < dropdown.length; i++){
  dropdown[i].addEventListener("click", function(){
    this.classList.toggle("active");
    var dropdownBox = this.nextElementSibling;
    if(dropdownBox.style.display === "block"){
      dropdownBox.style.display = "none";
      this.innerHTML = "Projects &#9662;";
    }
    else{
      dropdownBox.style.display = "block";
      this.innerHTML = "Projects &#9652;";
    }
  })
}

//Header scroll effect:
window.onscroll = function() {scrollFunction()};

var header = document.getElementById("header");
var headerName = document.getElementById("name");
var headerSubtitle = document.getElementById("subtitle");

function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90){
    header.style.padding = "10px 10px";
    headerName.style.fontSize = "32px";
    headerName.style.paddingLeft = "64px";
    headerName.style.paddingTop = "12px";
    headerSubtitle.style.paddingLeft = "64px";
  }
  else{
    header.style.padding = "5% 10px";
    headerName.style.fontSize = "56px";
    headerName.style.paddingLeft = "200px";
    headerName.style.paddingTop = "0px";
    headerSubtitle.style.paddingLeft = "200px";
  }
}