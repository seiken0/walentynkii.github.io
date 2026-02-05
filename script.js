let clickCount = 0;

function moveElmRand(elm) {
  elm.style.position = "absolute";
  let isOverlapping = true;
  
  // Keep generating positions until no overlap with yes button
  while (isOverlapping) {
    elm.style.top = Math.floor(Math.random() * 70 + 10) + "%";
    elm.style.left = Math.floor(Math.random() * 70 + 10) + "%";
    
    // Get bounding rectangles
    const noButtonRect = elm.getBoundingClientRect();
    const yesButton = document.querySelector('.btn a:first-child');
    const yesButtonRect = yesButton.getBoundingClientRect();
    
    // Check if they overlap
    isOverlapping = !(noButtonRect.right < yesButtonRect.left || 
                      noButtonRect.left > yesButtonRect.right || 
                      noButtonRect.bottom < yesButtonRect.top || 
                      noButtonRect.top > yesButtonRect.bottom);
  }
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function (e) {
  clickCount++;
  moveElmRand(e.target);
  
  // After 3 clicks, show message
  if (clickCount === 3) {
    const counterEl = document.getElementById("valentine-counter");
    const message = document.createElement("p");
    message.id = "no-click-message";
    message.textContent = "kliknij w koncu to tak deklu";
    message.style.marginTop = "20px";
    message.style.fontSize = "16px";
    message.style.fontStyle = "italic";
    message.style.color = "#d32f2f";
    counterEl.parentNode.insertBefore(message, counterEl.nextSibling);
  }
});