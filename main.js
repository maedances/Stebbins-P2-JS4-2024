const lightbulb = document.getElementById("lightbulb");
const lightswitch = document.getElementById("lightswitch");
const status = document.getElementById("statusOfSwitch");

let isLightOn = false;

lightswitch.addEventListener('click', function () {
    if(isLightOn) {
        lightbulb.src = "LightBulbOFF.png"
        lightswitch.src = "LightSwitchOFF.png";
        status.textContent = "Turn On The Light.";
    }
    else{
        lightbulb.src = "LightBulbON.png";
        lightswitch.src = "LightSwitchON.png";
        status.textContent = "You Did It! Now Turn Off The Lights.";
    }
    isLightOn = !isLightOn;
}

);