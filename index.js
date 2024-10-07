//selector
let $ = (selector) => document.querySelector(selector);
let $$ = (selector) => document.querySelectorAll(selector);

var body = $("body");
var header = $(".header");
var sticky = header.offsetTop;
var logo = $(".logo");
var togmenu = $(".bars");
var gototop = $(".gototop");
var year = new Date().getFullYear();
var overlay = $(".overlay");
var yeardiv = $(".year");


    //get  year
    yeardiv.innerHTML = year;
 //Reload
logo.addEventListener("click",function(){
   window.location.href = "/";
});

//menu function
togmenu.onclick = (e) => {
    body.classList.toggle("tognav");
    header.classList.toggle("mybg");
};

//wrap images into div
wrapImg();
function wrapImg(){
    var p = document.getElementsByClassName("gallery-section");
    var c = p.length;
    for(var i=0; i<c; i++){
        var children = p[i].getElementsByTagName("img");
        for(var j=0; j < children.length; j++){
            var child = p[i].removeChild(children[0]);
            var imgWrap= document.createElement("div");
            imgWrap.className = "imgWrap hidden";
            imgWrap.appendChild(child);
            p[i].appendChild(imgWrap);
        }
    }
}


//scroll
window.onscroll = () => {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        gototop.classList.add("showgtt");
    } else {
        header.classList.remove("sticky");
        gototop.classList.remove("showgtt");
    }
}





//image open
window.onload = function(){
const image = $$('#gl img');
image.forEach((x) => {
x.addEventListener("click", function(e){
  //create image wrapper
  const imgHolder= document.createElement("div");
  imgHolder.className = "imgHolder";
  const imgClose = document.createElement("span");
  imgClose.className = "imgClose";
  const imgCloseTxt = document.createTextNode("\u00D7");
  imgClose.appendChild(imgCloseTxt);
  
  //hide on click
  imgClose.onclick = (item) => {
    item.target.parentNode.style.display="none"
  }
  
  //image module onclick
  const imgsrc = e.target.src;
  
  const imgdiv = document.createElement("div");
  imgdiv.className = "imgdiv";
  const newImage = document.createElement("img");
  newImage.src = imgsrc;
  
  imgdiv.appendChild(newImage);
  //download button
  const dWrap = document.createElement("div");
  dWrap.className = "dWrap";
  //copy links input
  

  const number = Math.floor((Math.random() * 9000) + 1);
  const cs = document.createElement("span");
  cs.className = "copysrc";
  cs.appendChild(document.createTextNode("Copy Src"));
  const dImg = document.createElement("a");
  dImg.className = "dimg";
  dImg.href = imgsrc;
  dImg.download = "My Image";
  dImg.appendChild(document.createTextNode("Download"));
  cs.addEventListener("click", (e)=>{
    var areabox=document.createElement("textarea");
    areabox.value=imgsrc;
    document.body.appendChild(areabox);
    areabox.focus();
    areabox.select();
    document.execCommand("copy");
    document.body.removeChild(areabox);
    e.target.innerHTML='Src Copied';
    e.target.style.background='#d5001c';
    setTimeout(()=>{
      e.target.style.display='none'
    },3000);
  });
  dImg.addEventListener("click", (event) => {
    event.preventDefault();
    downloadImage(imgsrc);
    event.target.style.display='none'
  });
  
  //download image script 
  // https://codepen.io/MadanBhandari/pen/vbaKGJ
  
  function downloadImage(url) {
const options = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};
  fetch(url, options)
   .then( response => {
    response.blob().then(blob => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = "My-Image-"+[number]+".jpg";
        a.click();
      });
    }); 
}


  //append the button close
  imgHolder.append(imgClose,imgdiv,dImg,cs);
  document.body.appendChild(imgHolder)
});
});
}


//loadmore 
const hiddenItems = [...document.querySelectorAll('.hidden')];
const loadmore = document.getElementById('loadMore');

hiddenItems.splice(0, 21).forEach((elem) => { 
  elem.style.display="flex";
  setTimeout(() =>{
  elem.classList.add('add-ts');
  },1000);
});

loadmore.addEventListener('click',loadImage);

function loadImage(e) {
  e.preventDefault();
  var xcls = ["flex1","flex2","flex3","flex4","flex5","flex6","flex7","flex8","flex9","flex10"];
    var iup = 0;

  hiddenItems.splice(0, 7).forEach((elem) => {
    
    if( iup ==7 ) { i=0; }
      
    elem.classList.add(xcls[iup]);
    iup++;
    elem.style.display='flex';
    setTimeout(() =>{
      elem.classList.add('add-ts');
    },500);
 
      
  });

  if (hiddenItems.length == 0) {
    loadmore.innerHTML = "<span id='loadmore'>" + " No Images" + "</span>";
  }
}



const dk = $$(".menu ul a");

dk.forEach((n) => {
  n.setAttribute('target','_blank');
  if(n.matches(".about,.contact")){
    
    //create about
    const about = `
Welcome to Hycogaming, your ultimate destination for free Clash of Clans troops icons! Our mission is to provide gamers and fans alike with high-quality graphics that enhance your gaming experience and creativity.

At Hycogaming, we understand the passion that comes with Clash of Clans. Whether you're a casual player or a dedicated strategist, our extensive collection of troop icons offers a way to express your love for the game. Each icon is designed with attention to detail, allowing you to easily find the perfect representation of your favorite troops.

Why Choose Us?
- Free Downloads: All our icons are completely free to download, making it easy for you to access the resources you need without any hassle.
- User-Friendly Design: Our website is designed with you in mind, providing a seamless browsing and downloading experience.
- Community Focused: Hycogaming is built for gamers, by gamers. We value your feedback and suggestions, and strive to create a platform that meets your needs.

Whether you're looking to use these icons for personal projects, fan art, or simply to celebrate your love for Clash of Clans, we’ve got you covered. Join our community of Clash enthusiasts, explore our collection, and let your creativity soar!

Thank you for visiting Hycogaming. Happy gaming!
`;
    const contact = "";
    
    n.addEventListener("click", (event) => {
    //nText
    const nTxt = event.target.innerHTML;
    //create title
    const title = document.createElement("h1");
    title.className = "sTitle";
    const sInner = document.createTextNode(nTxt);
    title.appendChild(sInner);
    const sDiv = document.createElement("div");
    sDiv.className ="sdivitem";
    //close button 
    const sClose = document.createElement("span");
    sClose.className="imgClose";
    sClose.appendChild(document.createTextNode('\u00D7'));
    sClose.addEventListener("click", (item) => {
      item.target.parentNode.style.display="none";
    });
          //const p 
      const p = document.createElement("div");
      p.className = "ptag";
      
    sDiv.append(title,p);
    //overlay
    const sLay = document.createElement("div");
    sLay.className = "imgHolder";
    sLay.appendChild(sClose);
    if(event.target.matches(".about")){
      event.preventDefault();
      console.log("worked");
      p.appendChild(document.createTextNode(about))

    }
    else if(event.target.matches(".contact")) {
      event.preventDefault();
      console.log("contact");
      p.innerHTML =$(".icons").innerHTML
      
    }
    
    else {
      console.log("pass");
      event.preventDefault = false;
    }
    sLay.appendChild(sDiv);
    document.body.appendChild(sLay);
    
  });
  }
 
})


function openSocial(){
  
  const social = $(".social");
  social.classList.toggle("show")

}

