// function content(x) {
//     var element = document.getElementById('element' + x);
//     element.style.display = (element.style.display === 'flex') ? 'none' : 'flex';
// }

window.addEventListener("scroll", () => {
  if (window.scrollY > 1100) {
    document.getElementById("button").style.display = "flex";
  } else {
    document.getElementById("button").style.display = "none";
  }
});


var dropdown = document.querySelectorAll(".dropdown");
dropdown.forEach(function (dropdownItem) {
dropdownItem.addEventListener("click", function () {
    // Remove the 'active' class from all dropdown items
    dropdown.forEach(function (dropdownItem) {
          dropdownItem.classList.remove("active");
        });
        // Add the 'active' class to the clicked dropdown item
        dropdownItem.classList.add("active");
      });
    });


