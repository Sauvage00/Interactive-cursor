const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#641E16",
  "#7B241C",
  "#B03A2E",
  "#A93226",
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#CD6155",
  "#F39C12",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e",
  "#AF7AC5",
  "#BB8FCE",
  "#C39BD3",
  "#E8DAEF"
];
let timer; //This variable stores the timer

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
  //Resets the timer on the mouse movement
  resetTimer();
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}
 function resetTimer(){
  clearTimeout(timer); //Clears the existing timer 
  circles.forEach(function (circle) {
    circle.style.display = "block"; // Make circle visible on mouse movement
  });

  timer = setTimeout(() =>{
    //Hides the circles after 6seconds of being inactive
    circles.forEach(function (circle) {
      circle.style.display = "none";
    });
  }, 6000); // 6 seconds
}

animateCircles();
