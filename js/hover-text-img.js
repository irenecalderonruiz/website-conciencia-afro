let container = document.querySelector('.container');
let img = container.querySelector('.hover-img');

document.body.onmousemove = (e) =>{
  let x = e.pageX;
  let y = e.pageY;
  img.style.top = y + 'px';
  img.style.left = x + 'px';
}

container.querySelectorAll('.card-equipo').forEach(text =>{
  text.onmousemove = () =>{
    img.src = text.getAttribute('data-src');
  }
});