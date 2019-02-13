var button= document.getElementById('disButton');
var list=document.getElementById('list');

function hide(tagname){
var tg=tagname;
var el=document.getElementById(tg);
el.style.display= el.style.display=="none" ? "inherit": "none";
}
function changeColor(color){
    document.body.style.background="#"+color;
    // setTimeout(()=>{
    // document.body.style.background="-webkit-gradient(linear, left top, left bottom, from(rgb(41, 29, 48)), to(#0f0b0f)) fixed";
    // },5000);
}

function displayList(){
    if(list.style.display=="inherit") 
    {
        list.style.display="none";
    
    }
    else{
        list.style.display="inherit";

    }
    if(button.style.fontSize=="15px") 
    {
        button.style.fontSize="25px";
    
    }
    else{
        button.style.fontSize="15px";

    }
   
}

var modal= document.getElementById('myModal');

function openModal() {
    modal.style.display= "block";

}

function closeModal(){
    modal.style.display ="none"; 
}

var slideIndex= 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex +=n);
}

function currentSlides(n){
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    
    slides[slideIndex-1].style.display = "block";
 
  }

  enterView({
    selector:'.skills',
    enter: function(el){
        el.classList.add('entered');
    },
    offset: 0.5, // enter at middle of viewport
	once: true, // trigger just once
})

var ele=this.document.getElementsByClassName("skills");
function enter(){
ele.classList.add('entered');
}