// hover pagination
let x1 = document.getElementsByClassName("pagination")[0];
let childOfx1 = x1.getElementsByTagName("li");
for (let i = 0; i < childOfx.length; i++) {
    childOfx1[i].addEventListener('mouseover',()=>{
        if(!childOfx1[i].classList.contains('active')){
            childOfx1[i].style.backgroundColor = '#DCDCDC';
            let y1 = childOfx1[i].getElementsByTagName('a')[0];
            y1.style.color = 'blue';
        }
    });
    childOfx1[i].addEventListener('mouseout',()=>{
        if(!childOfx1[i].classList.contains('active')){
            childOfx1[i].style.backgroundColor = 'white';
            let y1 = childOfx1[i].getElementsByTagName('a')[0];
            y1.style.color = 'darkgray';
        }
    });
}
