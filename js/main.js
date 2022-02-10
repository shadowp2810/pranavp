const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

// var red = document.querySelector(".loading");
// var white = document.querySelector(".loading__reverse");

// function setProperty(duration) {
//   red.style.setProperty("--animation-time", duration + "s");
//   white.style.setProperty("--animation-time", duration + "s");
// }

// function changeAnimationTime() {
//   var animationDuration = Math.random();
//   setProperty(animationDuration);
// }

// setInterval(changeAnimationTime, 1000);

/*
We use the document object,
a reference to current page,
to query and find all elements that have the collapsible class.
We store all those elements to collapsibles.
Then using forEach method,
we iterate over them,
for each item we add an event listener,
and register a function to be called,
when the item is clicked.
With this piece of code we find all elements,
and when the user clicks on them we execute code,
this.classList.toggle("collapsible--expanded");
where we get list of classes for element,
and toggle the perticular class collapsible--expanded.
So if the class exists we remove it.
Otherwise we add it.
We add the javascript at end of index.html 
so it doesn't hold up rendering of page.
We want the page to quickly render and then download and execute js.
*/
