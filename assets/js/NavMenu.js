function openNav(){
  console.log("Menu opened");
  document.getElementById("sideNav").style.width = "250px";
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
}

function closeNav(){
  console.log("Menu closed");
  document.getElementById("sideNav").style.width = "0px";
  document.body.style.backgroundColor = "white";
  dropdownBox.style.display = "none";
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