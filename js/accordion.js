const acc = document.getElementsByClassName('accordion');

for (i = 0; i < acc.length; i += 1) {
  acc[i].addEventListener('click', function () {
    /* Toggle between adding and removing the "active" class 
    to color the arrow when panel is unfolded */
    this.classList.toggle('active');

    /* Toggle between folding and unfolding the active panel */
    const panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }

    if (panel.style.opacity === '1') {
      panel.style.opacity = '0';
    } else {
      panel.style.opacity = '1';
    }
  });
}
