let logout = document.querySelector("#logout")

logout.addEventListener("click", function(){
    localStorage.removeItem("userEmail");  
})