//content view 
let closerView = document.querySelector('#closer-view');
let closerView2 = document.querySelector('#closer-view2');
let closerView3 = document.querySelector('#closer-view3');
// view1
closerView.onclick = () => {
    closerView.style.display = 'none';
    view1.classList.remove('active');
}

let view1 = document.querySelector('.view1');

document.querySelector('#view-btn').onclick = () => {
    closerView.style.display = "block";
    view1.classList.toggle('active');
}
// view2
closerView2.onclick = () => {
    closerView2.style.display = 'none';
    view2.classList.remove('active');
}
let view2 = document.querySelector('.view2');

document.querySelector('#view-btn2').onclick = () => {
    closerView2.style.display = "block";
    view2.classList.toggle('active');
}
// view3
closerView3.onclick = () => {
    closerView3.style.display = 'none';
    view3.classList.remove('active');
}
let view3 = document.querySelector('.view3');

document.querySelector('#view-btn3').onclick = () => {
    closerView3.style.display = "block";
    view3.classList.toggle('active');
}




