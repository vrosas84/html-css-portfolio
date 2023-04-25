var typed = new Typed('#heroTyped', {
  strings: ['Supporter.','Coder.','Learner.'],
  typeSpeed:75,
  backSpeed:20,
  loop:true
});

let valueNumbers=document.querySelectorAll(".exp-number");
let interval= 750;

valueNumbers.forEach((valueNumber)=>{
    let startValue=0;
    let endValue=parseInt(valueNumber.getAttribute("data-val"));
    let duration=Math.floor(interval/endValue);
    let counter=setInterval(()=>{
        startValue+=1;
        valueNumber.textContent=startValue;
        if(startValue==endValue){
            clearInterval(counter);
        }
    },duration)
});
/*Need to update once I have modal loading content besides an image*/
/*document.addEventListener("click", function(e){
    if(e.target.classList.contains("gallery-item")){
        const src=e.target.getAttribute("src");
        document.querySelector(".modal-img").src=src;
        const myModal=new bootstrap.Modal(document.getElementById("gallery-modal"))
        myModal.show();
    }
});*/
