function greet () {
  let greeting = "We use Cookies whilst you're browing our site"
  alert(greeting)
}

// let button = document.querySelector(".btn-outline-americano")
// button.addEventListener("click", greet)
//
// let latteButton = document.querySelector("#latte")
// button.addEventListener("click", latte.html)

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

document.getElementById("rotator");
  let timeoutID = scope.setTimeout(function, "click");
