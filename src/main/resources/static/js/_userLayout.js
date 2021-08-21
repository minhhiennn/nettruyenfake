let x = document.getElementsByClassName("main-menu")[0];
let childOfx = x.getElementsByClassName("child-main-menu");
for (let i = 0; i < childOfx.length; i++) {
    childOfx[i].addEventListener("mouseover", () => {
        if (childOfx[i].classList.contains("dropdown")) {
            let y = childOfx[i].getElementsByClassName("main-menu-dropdown")[0];
            y.style.display = "block";
        }
        childOfx[i].classList.add("open");
        childOfx[0].classList.add("curr")
        childOfx[0].classList.remove("active");
    })
    childOfx[i].addEventListener("mouseout", () => {
        if (childOfx[i].classList.contains("dropdown")) {
            let y = childOfx[i].getElementsByClassName("main-menu-dropdown")[0];
            y.style.display = "none";
        }
        childOfx[i].classList.remove("open");
        childOfx[0].classList.remove("curr");
        childOfx[0].classList.add("active");
    })
}

function TopComicsScrollLeft() {
    let y = document.getElementsByClassName("owl-wrapper-outer")[0];
    if (y.scrollLeft <= 0) {
        y.scroll({left: 194 * 4, behavior: 'smooth'});
    } else {
        y.scroll({left: y.scrollLeft - 194, behavior: 'smooth'});
    }
}

// for window scroll
window.onscroll = () => {
    if (window.pageYOffset >= 60) {
        let x = document.getElementsByClassName("main-nav")[0];
        let y = document.getElementsByClassName("none-name")[0];
        let z = document.getElementById("back-to-top");
        x.classList.add("scroll-nav");
        y.classList.add("smooth-div");
        z.style.visibility = 'visible'
        z.style.opacity = '1';
    } else {
        let x = document.getElementsByClassName("main-nav")[0];
        let y = document.getElementsByClassName("none-name")[0];
        let z = document.getElementById("back-to-top");
        x.classList.remove("scroll-nav");
        y.classList.remove("smooth-div");
        z.style.visibility = 'hidden';
        z.style.opacity = '0';
    }
}
// end
// back to top
function backToTop() {
    window.scroll({top: 0, behavior: 'smooth'});
}

// end
let back = false;
let count = 0;
let wait = false;

function TopComicsScrollRight() {
    let y = document.getElementsByClassName("owl-wrapper-outer")[0];
    if (back == false) {
        if (y.scrollLeft >= 194 * 4 || y.scrollLeft > 194 * 3) {
            back = true;
            y.scroll({left: 0, behavior: 'smooth'});
        } else {
            let x = y.scrollLeft;
            let fast = checkFastClick(x);
            if (fast == true) {
                let x1 = 194 - (x % 194);
                let x2 = 194 + x1 + x;
                y.scroll({left: x2, behavior: 'smooth'})
            } else {
                y.scroll({left: x + 194, behavior: 'smooth'});
            }
        }
    } else {
        count++;
        y.scroll({left: 194 * count, behavior: 'smooth'});
        if (wait == false) {
            setTimeout(() => {
                back = false;
                count = 0;
                wait = false;
            }, 500);
        }
        wait = true;
    }
}

function checkFastClick(scrollLeft) {
    if (scrollLeft % 194 != 0 && scrollLeft < 194 * 4) {
        return true;
    }
    return false;
}