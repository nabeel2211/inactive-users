const user = {
    name: "Qasim Asad",
    age: "25",
    city: "san francisco",
    lastActivity: new Date().getTime()
}

const inactiveFirstStage = () => {
    console.log("User has been inactive for the past 1-2 minutes");
}

const inactiveSecondStage = () => {
    console.log("User has been inactive for the past 3-4 minutes");
}

const inactiveThirdStage = () => {
    console.log("User has been inactive for the past 5-6 minutes");
}


// this is the main method that acts like a worker and runs every 1 minute
setInterval(function(user){
    // please write your code here
    currentTime: new Date().getTime()
    if(user.lastActivity-currentTime > 1 && user.lastActivity-currentTime < 2){
        inactiveFirstStage();
    }
    else if(user.lastActivity-currentTime > 2 && user.lastActivity-currentTime < 3){
        inactiveSecondStage();
    }
    else if(user.lastActivity-currentTime > 4 && user.lastActivity-currentTime < 5){
        inactiveThirdStage();
    }
    else if(user.lastActivity-currentTime > 6 && user.lastActivity-currentTime < 7){
        inactiveFirstStage();
    }

}, 1000);