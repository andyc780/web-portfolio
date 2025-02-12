// bane of all my pain is in javascript html, why do i do this to myself, constantly googling for solutions on w3 and mdn web docs...

// because i'm going to forget what the addeventlistener does, it's basically like "hey this thing happened, now do this code inside the arrow function please."
// thing in quotes is the event (mousemove) and in this case, we moving the mouse cursor and we create a function w/cursor as the parameter.
document.addEventListener('mousemove', function (cursor) {
    // getting the circle div element
    const circle = document.getElementById('circle');
    // getting positions of where the mouse is, split into x and y coordinates, no clue js does this but it's cool!!
    const positionX = cursor.clientX;
    const positionY = cursor.clientY;
    const positionScrollY = window.scrollY;
    updatePosition(positionX, positionY, positionScrollY)

    
    // using left and right positioning because of the position absolute from the circle ID from the css and now we got cool mouse effects
   function updatePosition(positionX, positionY, positionScrollY){
        circle.style.left = `${positionX}px`;
        circle.style.top = `${positionY + positionScrollY}px`;
    }

});
