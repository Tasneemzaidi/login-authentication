console.log("welcome")



var objUser=[
    {
        username:"tasneem",
        password:"alif"
    },
    {
        username:"adarsh",
        password:"krish"
    },
    {
        username:"alifya",
        password:"alif"
    }
]
function getInfo(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    const msg = document.getElementById("msg")
    for(i=1; i<objUser.length; i++){
        if(username == objUser[i].username &&  password == objUser[i].password ){
            console.log(username +"is Logged In!");
            msg.innerHTML ="You are Logged in !";
            return
        }
    }
    console.log("Incorrect Username or Password");
    msg.innerHTML ="Incorrect Username or Password";
}