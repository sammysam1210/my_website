var picCount = 0;
var picArray = ["images/background.jpg","images/background2.jpg"];
var x = document.getElementsByTagName("html");
if (localStorage.bgImg != "")
  x[0].style.backgroundImage=localStorage.bgImg;
else {
  x[0].style.backgroundImage='url("images/background.jpg")';
}
function changeBack()
{
    if (x[0].style.backgroundImage == 'url("images/background2.jpg")'){
      localStorage.bgImg = 'url("images/background.jpg")';
      x[0].style.backgroundImage="url(images/background.jpg)";
    }
    else if (x[0].style.backgroundImage == 'url("images/background.jpg")' || x[0].style.backgroundImage ==""){
      localStorage.bgImg = 'url("images/background2.jpg")';
      x[0].style.backgroundImage="url(images/background2.jpg)";
    }
}
