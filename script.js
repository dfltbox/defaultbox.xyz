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
    do {
      count = Math.floor(Math.random() * 5) + ".jpg";
  } while (count === "0.jpg");
    var url = "https://github.com/dfltbox/defaultbox.xyz/blob/main/background-images/" + count + "?raw=true"
        var style = document.createElement('style');
        style.innerHTML = `
        body::before {
            background-image: url("${url}");
            animation: fadeEffect 1s;
        }
    `;
    document.head.appendChild(style);
    var credits;
    console.log("https://raw.github.com/dfltbox/defaultbox.xyz/main/background-images/" + count + ".credits")
    fetch("https://raw.github.com/dfltbox/defaultbox.xyz/main/background-images/" + count + ".credits")
    .then(response => response.text())
    .then(data => {
      data = credits;
    })
    document.getElementById("credits").href=credits
    console.log('background changed i think');
}
//*borrowed* from https://www.w3schools.com/howto/howto_js_tabs.asp
setTimeout(changeBG, 1000);