const myAbout = document.querySelector('.menu-item-1900');
const myRegistration = document.querySelector('.menu-item-1901');
const myProgram = document.querySelector('.menu-item-1902');
const myExhibitors = document.querySelector('.menu-item-1903');
const aboutMenu = document.querySelector('.sub-menu0');
const registrationMenu = document.querySelector('.sub-menu1');
const programMenu = document.querySelector('.sub-menu2');
const exhibitorsMenu = document.querySelector('.sub-menu3');
const modal = document.querySelector('.wpb-content-wrapper');
const aboutLink = document.querySelector('.sf-with-ul');
const myLocation = document.querySelector('.location');
const myVenue = document.querySelector('.venue');
const myImportantDates = document.querySelector('.date');
const myContact = document.querySelector('.contact');
const locationSpan = document.querySelector('.S0');
const venueSpan = document.querySelector('.S1');
const dateSpan = document.querySelector('.S2');
const contactSpan = document.querySelector('.S3');
const myAbt = document.querySelector('.active');
const home = document.querySelector('#home');
const outsideBox = document.querySelector('.outside-box');
const welcome = document.querySelector('.col-sm-7');
const nextContainer =document.querySelector('.detroit-spacer');
const welcomeText =document.querySelector('.tab-pane');
const myHeader =document.querySelector('.header');
const register =document.querySelector('.R2');
const registerBtn =document.querySelector('.R1');
const modalBox =document.querySelector('.modal-box');
const bodyElement = document.querySelector('.body');
const outsideModalBox= document.querySelector('.outside');
const menuBtn = document.querySelector('.mobile-menu');
const hamBurger = document.querySelector('.menu-burger');
const nav= document.querySelector('.navigation');
const menuNav= document.querySelector('.sf-menu');
const navItems= document.querySelectorAll('.menu-item');
const myName = document.querySelector('[myname]');
const myNumber = document.querySelector('[phonenumber]');
const myEmail = document.querySelector('[myemail]');
const closeBtn = document.querySelector('.close');


myAbout.addEventListener('click', function(){
    aboutMenu.style.display = "block";
    registrationMenu.style.display ="none";
    programMenu.style.display ="none";
    exhibitorsMenu.style.display ="none";
});
register.addEventListener('click', function(){
    modalBox.style.display = "flex";
    bodyElement.style.overflow = "hidden";
    
});
outsideModalBox.addEventListener('click', function(){
    modalBox.style.display = "none";
    bodyElement.style.overflow = "visible";

})
modal.addEventListener('click', function(){
    aboutMenu.style.display ="none";
    registrationMenu.style.display ="none";
    programMenu.style.display ="none";
    exhibitorsMenu.style.display ="none";
});
myRegistration.addEventListener('click', function(){
    registrationMenu.style.display = "block";
    aboutMenu.style.display ="none";
    programMenu.style.display ="none";
    exhibitorsMenu.style.display ="none";

});
myProgram.addEventListener('click', function(){
    programMenu.style.display = "block";
    aboutMenu.style.display ="none";
    registrationMenu.style.display ="none";
    exhibitorsMenu.style.display ="none";
});
myExhibitors.addEventListener('click', function(){
    exhibitorsMenu.style.display = "block";
    aboutMenu.style.display ="none";
    registrationMenu.style.display ="none";
    programMenu.style.display ="none";
});

     //about -section-

myLocation.addEventListener('click', function(){
    locationSpan.style.display = "block";
    venueSpan.style.display ="none";
    dateSpan.style.display ="none";
    contactSpan.style.display ="none";
});
myVenue.addEventListener('click', function(){
    venueSpan.style.display = "block";
    locationSpan.style.display ="none";
    dateSpan.style.display ="none";
    contactSpan.style.display ="none";
});
myImportantDates.addEventListener('click', function(){
    dateSpan.style.display = "block";
    venueSpan.style.display ="none";
    locationSpan.style.display ="none";
    contactSpan.style.display ="none";
});
myContact.addEventListener('click', function(){
    contactSpan.style.display = "block";
    venueSpan.style.display ="none";
    dateSpan.style.display ="none";
    locationSpan.style.display ="none";
});
myHeader.addEventListener('click', function(){
    contactSpan.style.display ="none";
    venueSpan.style.display ="none";
    dateSpan.style.display ="none";
    locationSpan.style.display ="none";
});
home.addEventListener('click', function(){
    contactSpan.style.display ="none";
    venueSpan.style.display ="none";
    dateSpan.style.display ="none";
    locationSpan.style.display ="none";
});
outsideBox.addEventListener('click', function(){
    contactSpan.style.display ="none";
    venueSpan.style.display ="none";
    dateSpan.style.display ="none";
    locationSpan.style.display ="none";
});
myAbt.addEventListener('click', function(){
    contactSpan.style.display ="none";
    venueSpan.style.display ="none";
    dateSpan.style.display ="none";
    locationSpan.style.display ="none";
});
 welcome.addEventListener('click' , function(){
    contactSpan.style.display ="none";
    venueSpan.style.display ="none";
    dateSpan.style.display ="none";
    locationSpan.style.display ="none";
 });
 welcomeText.addEventListener('click' , function(){
    contactSpan.style.display ="none";
    venueSpan.style.display ="none";
    dateSpan.style.display ="none";
    locationSpan.style.display ="none";
 });
 nextContainer.addEventListener('click' , function(){
    contactSpan.style.display ="none";
    venueSpan.style.display ="none";
    dateSpan.style.display ="none";
    locationSpan.style.display ="none";
 });
 
 let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
function toggleMenu(){
    if(!showMenu){
        hamBurger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item=> item.classList.add('open'));

        showMenu= true;
    }else{
        hamBurger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item=> item.classList.remove('open'));

        showMenu= false;
    }
}
registerBtn.addEventListener('click', function(){
    if(myName.value == ""){
    return false;
    }else if(myEmail.value == ""){
    return false;
    }else{
    alert("You have Successfully Registered for this Conference, Your Ticket Number is " + Math.floor((Math.random()*100000)+1));
    }  
});
document.addEventListener('keydown', (e)=>{
    if(event.key === "Escape"){
    modalBox.style.display = "none";
    bodyElement.style.overflow = "visible";
    }
});
closeBtn.addEventListener('click', function(){
    modalBox.style.display = "none";
    bodyElement.style.overflow = "visible";
});