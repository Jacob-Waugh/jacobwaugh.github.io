function openNav(){
  document.getElementById("sideNav").style.width = "250px";
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
}

function closeNav(){
  document.getElementById("sideNav").style.width = "0px";
  document.body.style.backgroundColor = "rgb(58, 58, 74)";
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

function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90){
    document.getElementById("header").style.padding = "10px 10px";
    document.getElementById("name").style.fontSize = "32px";
    document.getElementById("name").style.paddingLeft = "64px";
    document.getElementById("name").style.paddingTop = "12px";
  }
  else{
    document.getElementById("header").style.padding = "7% 10px";
    document.getElementById("name").style.fontSize = "56px";
    document.getElementById("name").style.paddingLeft = "200px";
    document.getElementById("name").style.paddingTop = "0px";
  }
}