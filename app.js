// =========================================
// Hospital AR Navigation System
// app.js
// =========================================

// Welcome Message
window.onload = function () {

    console.log("Hospital AR Navigation Loaded");

    setTimeout(function () {
        alert("🏥 Welcome to Hospital AR Navigation System");
    }, 500);

};

// ===============================
// Start Navigation
// ===============================
function startNavigation() {

    let choice = prompt(
`Choose Department

Emergency
Cardiology
Neurology
Orthopedics
ICU
Pharmacy
Radiology
Laboratory
Blood Bank
Operation Theatre
Cafeteria`
    );

    if (choice == null) return;

    choice = choice.trim();

    // First letter uppercase
    choice = choice.toLowerCase().replace(/\b\w/g, function (l) {
        return l.toUpperCase();
    });

    localStorage.setItem("destination", choice);

    speak("Starting navigation to " + choice);

    window.location.href = "map.html";

}

// ===============================
// Voice
// ===============================
function speak(message) {

    if ("speechSynthesis" in window) {

        speechSynthesis.cancel();

        let speech = new SpeechSynthesisUtterance();

        speech.text = message;

        speech.rate = 1;

        speech.pitch = 1;

        speech.volume = 1;

        speechSynthesis.speak(speech);

    }

}

// ===============================
// Feature Cards Animation
// ===============================
document.querySelectorAll(".card").forEach(function(card){

    card.addEventListener("mouseenter",function(){

        card.style.transform="translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave",function(){

        card.style.transform="translateY(0px) scale(1)";

    });

});

// ===============================
// Department Grid
// ===============================
document.querySelectorAll(".dept-grid div").forEach(function(item){

    item.addEventListener("click",function(){

        localStorage.setItem("destination",item.innerText.trim());

        speak(item.innerText + " selected");

        alert("Destination Selected : " + item.innerText);

    });

});

// ===============================
// Button Animation
// ===============================
document.querySelectorAll("button").forEach(function(btn){

    btn.addEventListener("click",function(){

        btn.style.transform="scale(.95)";

        setTimeout(function(){

            btn.style.transform="scale(1)";

        },150);

    });

});

// ===============================
// Theme Toggle (Optional)
// ===============================
let dark=false;

function toggleTheme(){

    dark=!dark;

    if(dark){

        document.body.style.background="#111827";
        document.body.style.color="white";

    }
    else{

        document.body.style.background="#f4f7fb";
        document.body.style.color="#222";

    }

}