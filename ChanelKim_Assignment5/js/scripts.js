/* 
---------- DOM Manipulation Exercises -------------- 
Exercises 1, 2, 3 (in class)
Exercise 4, 5 (assigned homework)
*/

// EXERCISE 4: create a table and paint alternative colors to its rows.

//QUESTION: mouseover seems to only work when "clicking" into table, how to mouseover from page level?

// const tr = document.getElementsByTagName("tr");
const tr = document.getElementsByClassName("row");

for (let i = 0; i < tr.length; i++) {
  tr[i].addEventListener("mouseover", function (e) {
    if (i % 2 == 1) {
      tr[i].style.backgroundColor = "red";
      console.log("moused over");
      setTimeout(() => {
        tr[i].style.backgroundColor = "";
      }, 500);
    }
    // false;
    else {
      tr[i].style.backgroundColor = "blue";
      tr[i].style.color = "white";
      console.log("moused over");
      setTimeout(() => {
        tr[i].style.backgroundColor = "";
        tr[i].style.color = "";
      }, 500);
    }
  });
}

// EXERCISE 5: To any html element (ideally an anchor tag), add a click event listener that opens a popup window (basically a div that is absolutely positioned in the center and and top of the main content). Then add another handler that hides it when clicked outside the popup.

//CODE REFERENCE: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
