menu.onclick = function() {
  let elem = document.getElementById('myTopnav');

  if (elem.className === 'topnav') {
    elem.classList.add('responsive');
  } else {
    elem.className = 'topnav';
  }
};
