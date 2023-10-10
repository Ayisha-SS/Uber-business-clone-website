
// function content(x) {
//     var element = document.getElementById('element' + x);
//     element.style.display = (element.style.display === 'flex') ? 'none' : 'flex';
// }

window.addEventListener('scroll',() =>{
    if(window.scrollY > 1100){
        document.getElementById('button').style.display ='flex';
    }else{
        document.getElementById('button').style.display ='none';

    }
})

var dropdown = document.getElementById('dropdown' +x);
dropdown.forEach(function(dropdown_item){
    dropdown_item.addEventListener('click',function(){

        dropdown.forEach(function(dropdown_item){
            dropdown_item.classList.remove('active');
        })

        dropdown_item.classList.add('active');
    })
})    
