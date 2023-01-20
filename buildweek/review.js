




const allStars = document.querySelectorAll(".star");
let current_rating = document.querySelector(".current_rating");

allStars.forEach((star, i)=>{
    star.onclick = function () {
        let current_star_level = i + 1;
        current_rating.innerText = `${current_star_level} di 10 `;
        allStars.forEach((star, j)=>{
            if(current_star_level >= j + 1) {
                star.innerHTML = "&#9733";
                star.style.color = "aqua";
                star.style.textShadow = "#1e90ff 1px 0 10px";
            } else {
                star.innerHTML = "&#9733";
                star.style.color = "#0c1139";
                star.style.textShadow = "none";
            }
        })

    }
})







    
    function openPopUp() {
        
        let popUp = document.getElementById("popUp");
        popUp.classList.add("open-popUp");
       
    }
    
    function closePopUp() {
        let popUp = document.getElementById("popUp");
        popUp.classList.remove("open-popUp");
    }
       














       
        

           


              










