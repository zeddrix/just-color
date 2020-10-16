document.addEventListener("click", function (event) {
  if (event.target.matches(".random")) {
    changeToRandomColor();
  } else if (event.target.matches(".plus-btn")) {
    showNewColorModal();
  } else if (event.target.matches("#cancel-btn")) {
    closeNewColorModal();
  } else if (event.target.matches("#add-btn")) {
    getNewColorInput();
  } else if (event.target.matches("#done-btn")) {
    closeEditColorModal();
  } else if (event.target.matches(".just-color-title")) {
    justColorTitleToggle();
  } else if (event.target.matches("button")) {
    disableAddBtn();
  }
});

// !!!!!!!!!!!!!ISSUE: Creates new button even if modal is not open!!!!!!!!!!!!
// document.addEventListener("keypress", (event) => {
//   if (event.keyCode === 13) {
//     getNewColorInput();
//   }
// });
