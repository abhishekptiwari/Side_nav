const toggle = document.getElementById('toggle');
const closeBtn = document.getElementById('close');
const open = document.getElementById('header-open');
const modal = document.getElementById('modal');


// // Toggle Navigation
toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav');
    // document.body.addEventListener('click', closeNavbar);
});


// Show Modal
open.addEventListener('click', () => {
    modal.classList.add('show-modal')
});

// Close modal using close btn
closeBtn.addEventListener('click', () => {
    modal.classList.remove('show-modal');
})

// Hide modal outside click
window.addEventListener('click', e => e.target == modal ?
    modal.classList.remove('show-modal') : false);