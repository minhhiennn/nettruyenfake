window.onload = () => {
    // thêm before zô mấy cái link trên đầu
    let x = document.getElementsByClassName("breadcrumb")[0];
    let y = x.getElementsByTagName("li");
    for (let i = 0; i < y.length; i++) {
        if (i != 0) {
            let z = y[i].getElementsByTagName("a")[0];
            let z1 = document.createElement("span");
            z1.textContent = "\273";
            z1.style.padding = "0 0 0 5px";
            z1.style.color = "#ccc";
            z.before(z1);
        }
    }
}

function showMoreOrLess(eleA) {
    if (!eleA.classList.contains('less')) {
        let x = document.getElementsByClassName('shortened')[0];
        x.classList.remove('shortened');
        eleA.classList.add('less');
        eleA.textContent = '\u2039' + ' Thu gọn';
    } else {
        let x = document.getElementsByClassName('detail-content')[0];
        let y = x.getElementsByTagName('p')[0];
        y.classList.add('shortened');
        eleA.classList.remove('less');
        eleA.textContent = 'Xem thêm ' + '\u203a';
    }
}
