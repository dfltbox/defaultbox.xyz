//stuff for the tabs to work

//this should fix it not hiding elements?
document.addEventListener("DOMContentLoaded", function() {
  var tabcontent = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
//i accidentally pushed without comitting
  document.getElementById("defaultOpen").click();
  setTimeout(changeBG, 5000);  
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
    var count = Math.floor(Math.random() * 5) + ".jpg?raw=true"
    var url = "https://github.com/dfltbox/defaultbox.xyz/blob/main/background-images/" + count;
        var style = document.createElement('style');
        style.innerHTML = `
        body::before {
            background-image: url("${url}");
        }
    `;
    document.head.appendChild(style);
    console.log('background changed i think');
}
//*borrowed* from https://www.w3schools.com/howto/howto_js_tabs.asp
setTimeout(changeBG, 1000);