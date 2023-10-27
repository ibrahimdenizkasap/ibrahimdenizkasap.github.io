function closeNav() {
  document.getElementById("navbar").style.top = "-100%";
}

//

var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100%";
  }
  prevScrollpos = currentScrollPos;
}

//

function openNav() {
  document.getElementById("mobilemenu").style.right = "0"
}

function closeMenu() {
  document.getElementById("mobilemenu").style.right = "-100%"
}

//

// document.addEventListener('click', function(e){   
//   if (document.getElementById('mobilemenu').contains(e.target)){
//     document.getElementById("mobilemenu").style.right = "0"
//   } else{
//     document.getElementById("mobilemenu").style.right = "-100%";
//   }
// });

// document.addEventListener('click', function handleClickOutsideBox(event) {
//   const box = document.getElementById('mmenu');

//   if (!box.contains(event.target)) {
//     box.style.display = 'none';
//   }
// });