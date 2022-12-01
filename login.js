const asideSection = document.querySelector("aside");
const mainSection = document.querySelector("main");

const signInbtn = document.getElementById("sign-in-btn");
const signUpbtn = document.getElementById("sign-up-btn");
        

        
 signInbtn.addEventListener("click", () => {
     mainSection.classList.add("slideRight");
     asideSection.classList.add("slideLeft");
 });
       
 signUpbtn.addEventListener("click", () => {
    mainSection.classList.remove("slideRight");
    asideSection.classList.remove("slideLeft");
});


 






 
