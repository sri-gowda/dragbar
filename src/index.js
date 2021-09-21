import './styles.css';
let sidebar = document.querySelector(".sidebar");
let content = document.querySelector(".content");
let dragholder = document.querySelector(".dragholder");

function onMouseMove(e){
  sidebar.style.cssText = `width: ${ e.pageX }px`;
  content.style.cssText = `width: ${ window.innerWidth - e.pageX }px`;
}

function onMouseDown(e){
  document.addEventListener('mousemove',onMouseMove);
}

function onMouseUp(e){
  document.removeEventListener('mousemove',onMouseMove);
}

dragholder.addEventListener('mousedown', onMouseDown);
dragholder.addEventListener('mouseup', onMouseUp);
content.addEventListener('mouseup', onMouseUp);
document.addEventListener('mouseup', onMouseUp);