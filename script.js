function Imagechange(div)
      {
        img = document.getElementById("image");
        img2 = document.getElementById("img2");
        if(div.id=="md-id")
        {
          img.src= 'pictures/tablewb.png';
          img2.src= 'pictures/bball court.png';
          document.getElementById("case-texts").innerHTML ="3D SHOWCASE";
        }
        else if(div.id=="gd-id")
        {
          img.src= 'pictures/tan.PNG';
          img2.src= 'pictures/bms.png';
          document.getElementById("case-texts").innerHTML ="GRAPHICS DESIGN SHOWCASE";
        }
        else if(div.id=="wd-id")
        {
          img.src= 'pictures/wb1.PNG';
          img2.src= 'pictures/wb2.png';
          document.getElementById("case-texts").innerHTML ="WEB DEV. SHOWCASE";
        }
        else if(div.id=="ds-id")
        {
          img.src= 'pictures/ml1.PNG';
          img2.src= 'pictures/ml2.png';
          document.getElementById("case-texts").innerHTML ="DATA SCIENCE SHOWCASE";
        }
        
      }
      var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
function logochange(){
  document.getElementById("start").innerHTML="EMMANUEL ODILE";
}
