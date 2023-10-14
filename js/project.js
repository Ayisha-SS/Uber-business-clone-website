// function content(x) {
//     var element = document.getElementById('element' + x);
//     element.style.display = (element.style.display === 'flex') ? 'none' : 'flex';
// }




// scroll button....
window.addEventListener("scroll", () => {
  if (window.scrollY > 1100) {
    document.getElementById("button").style.display = "flex";
  } else {
    document.getElementById("button").style.display = "none";
  }
});



// drop down....
var dropdown = document.querySelectorAll(".dropdown");
var contents = document.querySelectorAll(".content");

dropdown.forEach(function (dropdownItem) {
    dropdownItem.addEventListener("click", function (e) {
        
        if (!e.target.classList.contains('active')) {
            dropdown.forEach(function (dropdownItem) {
                dropdownItem.classList.remove("active");
            });
        }
        e.target.classList.toggle('active');
    });
});


// window click.......
document.addEventListener("click", function (e) {
    contents.forEach(function(content){
      dropdown.forEach(function (dropdownItem) {
        
        if (!content.contains(e.target) && !dropdownItem.contains(e.target)) {
            dropdownItem.classList.remove("active");
        }
    });
    })
});


