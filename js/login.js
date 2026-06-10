$(document).ready(function(){
    $("form").on("submit",(event)=>{
        event.preventDefault();
        
        const email = $("#email").val().trim();
        const password = $("#password").val().trim();

        const datasUsers = JSON.parse(localStorage.getItem("users")) || []

       const user = datasUsers.find((item)=>{
        if(item.email === email && item.password === password){

            return true;
        }
        return false;
       })
       if (user) {
        alert("login berhasil")
        window.location.href="./landing-page.html"
       } else {

        alert("email or password incorrect!")

       }
    })

})