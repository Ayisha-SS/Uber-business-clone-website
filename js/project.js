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

// active......
function rotate(x){
  var element = document.getElementById(x);
  element.classList.toggle('style');
}

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


//registration....
function SaveData(){
  let name,email,password;
  name = document.getElementById('name').value;
  email = document.getElementById('email').value;
  password = document.getElementById('password').value;

  console.log(name+email+password);
  // localStorage.setItem('name',name);
  // localStorage.setItem('email',email);
  // localStorage.setItem('password',password);

  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[]
  if(user_records.some((v) =>{
      return v.email == email
  })){
      alert('Duplicate Data');
  }
  else{
      user_records.push({
          'name':name,
          'email':email,
          'password':password
      })
      localStorage.setItem('users',JSON.stringify(user_records));
      alert('Successfully');
      window.location.href = 'form.html'
  }
}

//login...

function SaveDatas(){
  let email,password;
  email = document.getElementById('email').value;
  password = document.getElementById('password').value;

  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[]
  if(user_records.some((v) =>{
      return v.email == email && v.password == password
  })){
      alert('Login successfull')
      let current_user = user_records.filter((v) =>{
          return v.email ==  email && v.password == password
      })[0]
      localStorage.setItem('name',current_user.name);
      localStorage.setItem('email',current_user.email);
      window.location.href = 'home.html';
  }
  else{
      alert('login failure');
  }
}


// log-popup
// const user_value = localStorage.getItem(user_records)
const loginPopup = document.querySelector('.login-popup');

window.addEventListener('load',function(){

  // if(user_value = user_records){
  //   window.location.reload()

  // }

    setTimeout(function(){
      loginPopup.classList.add('show');
    },2000)
  

})


// if(!window.location.hash) {
//   window.location = window.location + '#loaded';
//   window.location.reload(false);
// }





