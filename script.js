// var acc = document.getElementsByClassName("accordion");

// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");

//     var panel = this.nextElementSibling;
//     console.log(panel)
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//       console.log(panel.scrollHeight)
//     } 
//   });
// }


let acc = document.querySelectorAll(".accordion");

acc.forEach(item => 
            item.addEventListener('click', function () {
  
    item.classList.toggle("active");

    


    let panel = item.nextElementSibling;

    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        console.log(panel.scrollHeight)
    }
}))