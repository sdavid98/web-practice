function myFunction() {
    document.getElementById("mobil").classList.toggle("change");
    document.getElementById("nav").classList.toggle("activated");
}

var currentPage = window.location.href;
var isIndex = /index.html/;
var result = isIndex.test(currentPage);

if(result || (currentPage=="http://web.uni-corvinus.hu/~cf7jqa/")) {
    setInterval(function(){
        var info1 = document.getElementById("info1");
        info1.innerHTML = (parseInt(info1.innerHTML) + Math.floor(Math.random()*10+5));
    }, 1000);

    setInterval(function(){
        var info1 = document.getElementById("info2");
        info1.innerHTML = (parseInt(info1.innerHTML) + Math.floor(Math.random()*2+1));
    }, 4000);

    setInterval(function(){
        var info1 = document.getElementById("info3");
        info1.innerHTML = (parseInt(info1.innerHTML) + 1);
    }, 4500);

    setInterval(function(){
        var info1 = document.getElementById("info4");
        info1.innerHTML = (parseInt(info1.innerHTML) + 2);
    }, 5000); 
}

function memberInfo(a) {
    document.getElementById("popup"+a).style.height = "96%";
}

function closePopup(a) {
    document.getElementById("popup"+a).style.height = "0";
}


var isJarmupark = /jarmupark.html/;
var jarmu = isJarmupark.test(currentPage);
var idNum = 1;

if(jarmu) {
var imgAlt = ["BMW E30 M3", "BMW M4", "VOLVO XC90", "VOLVO S80", "FORD FIESTA WRC", "FORD FIESTA S2000", "NISSAN 370Z", "MAZDA RX7", "FORD F RAPTOR", "VW GOLF GTI", "SUBARU IMPREZA", "ALFA ROMEO GIULIA", "SUZUKI GSR 600", "HONDA CB1000R", "HARLEY DAVIDSON SPORTSTER", "BMW S1000RR", "HONDA CB500X", "KTM 300 XC-W"];
window.onload = function() {
    var cont = document.getElementById("automated");
    var smallImgs = document.getElementById("smallImgs");

do {
    cont.innerHTML += "<div class='col-4 col-s-6'><a href='#' onclick='modalf(\"block\", \""+idNum+"\", \"0\")'><img src='kepek/galeria/gal"+idNum+"-min.jpg' id='gal"+idNum+"' alt='"+imgAlt[(idNum-1)]+"'></a></div>";
    smallImgs.innerHTML += "<div class='col-11_11'><a href='#' onclick='modalf(\"block\", \""+idNum+"\", \"0\")'><img src='kepek/galeria/gal"+idNum+"-min.jpg' class='img-sizing' id='gal"+idNum+"' alt='"+imgAlt[(idNum-1)]+"'></a></div>";
    idNum++;
} while(idNum<19)
}




var modal = document.getElementById("myModal");
var content = document.getElementById("bigImg");

function modalf(disp, idIndex, plusz) {
    var totalIndex = Number(idIndex) + Number(plusz);
    if(totalIndex<1){totalIndex=18;}
    if(totalIndex>18){totalIndex=1;}
    var name = document.getElementById("gal"+totalIndex);
    var description = name.alt;
    modal.style.display = disp;
content.innerHTML = "<img src='kepek/galeria/gal"+totalIndex+".jpg' class='img-sizing'><p class='img-description'>"+description+"</p>";
var left = document.getElementById("left");
var right = document.getElementById("right");
left.innerHTML = "<div class='modal-page' onclick='modalf(\"block\", "+"\""+totalIndex+"\", "+"\"-1\")'><i class='fa fa-angle-left left-icon'></i></div>";
right.innerHTML = "<div class='modal-page modal-page-right' onclick='modalf(\"block\", "+"\""+totalIndex+"\", "+"\"1\")'><i class='fa fa-angle-right right-icon'></i></div>";


}

var closeBtn = document.getElementById("closeModal");
closeBtn.onclick = function(){
        modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
}


var video;
var overlay;
var speed;
var d;
var n;
var a;
function startVid() {
    overlay = document.getElementById("vid-overlay");
    overlay.style.display = "none";
    vidSpeed();
    video = document.getElementById("reakvideo");
    video.playbackRate = speed;
    video.play();
    
    a = (Math.random()*5+2)*1000;
    setTimeout(function(){
d = new Date();
        overlay.style.display = "block";
        document.getElementById("startBtn").innerText = "Újra!";
    }, a);
    
    document.getElementById("stopBtn").disabled = false;
}

function stopVid() {
    var sebesség;
    var fékút;
document.getElementById("stopBtn").disabled = true;
video.pause();
if(speed == 0.5){sebesség = 20/3.6; fékút = 3;}
if(speed == 1){sebesség = 50/3.6; fékút = 16;}
if(speed == 1.6){sebesség = 80/3.6; fékút = 32;}
if(speed == 2.5){sebesség = 130/3.6; fékút = 87;}
    var d2 = new Date();
    var e = Math.floor(d2-d);
    if(e>0){
    document.getElementById("ido").innerHTML = e + " ms. Ezalatt az idő alatt "+ Math.floor((sebesség*e/1000)) +" métert tettél meg. Ezen felül a megállásig további kb. "+fékút+" métert teszel meg.";
    }
    else {
        document.getElementById("ido").innerHTML = "Túl korán álltál meg!";
    }
}

function vidSpeed() {
    speed = 0;
    if(document.getElementById("lassu").checked){speed=0.5;}
    if(document.getElementById("varosi").checked){speed=1;}
    if(document.getElementById("orszaguti").checked){speed=1.6;}
    if(document.getElementById("autopalya").checked){speed=2.5;}
}
