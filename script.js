var count;

//this should fix it not hiding elements?
document.addEventListener("DOMContentLoaded", function() {
  var tabcontent = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
//i accidentally pushed without comitting
  document.getElementById("defaultOpen").click();
  setInterval(changeBG, 5000);
  
});

function openTab(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

        // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  } 

  function changeBG() {
    var count;
    var currentcount;
    do {
        count = Math.floor(Math.random() * 5);
    } while (count == 0 || count == currentcount);
    currentcount = count

    var url = `https://raw.githubusercontent.com/dfltbox/defaultbox.xyz/main/background-images/${count}.jpg`;

    //i think this caches the image
    var img = new Image();
    img.onload = function() {
        var style = document.createElement('style');
        style.innerHTML = `
            body::before {
                background-image: url("${url}");
                animation: fadeEffect 1s;
                background-size: cover;
                background-position: center;
                filter: blur(5px); 
                z-index: -1; 
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        `;
        document.head.appendChild(style);
        document.getElementById("credits").href = `https://raw.githubusercontent.com/dfltbox/defaultbox.xyz/main/background-images/${count}.jpg.credits`;
        console.log('background changed i think');
    };
    img.src = url;
    console.log("background actually changed i think")
}

//*borrowed* from https://www.w3schools.com/howto/howto_js_tabs.asp
setTimeout(changeBG, 1000);