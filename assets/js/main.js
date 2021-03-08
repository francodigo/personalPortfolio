const navMenu = document.getElementById('nav-menu'),
  openMenu = document.getElementById('nav-open'),
  closeMenu = document.getElementById('nav-close');

/** Open Menu */
openMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
/** Close Menu */
closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('show');
});

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  navMenu.classList.remove('show');
}

/*Close Menu when click on the link (navLink)*/

navLink.forEach((n) => n.addEventListener('click', linkAction));

/** Active Links When your Scroll is over the section */
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight; //height Element
    const sectionTop = current.offsetTop - 50;  //Y-axis Top height from parent (Body) 
    
    sectionId = current.getAttribute('id'); 

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
    }
  });
}

/* Smooth scroll  */
$('.nav a ').on('click', function (e) {
  // 1
  e.preventDefault();
  // 2
  const href = $(this).attr('href');
  // 3
  $('html, body').animate({ scrollTop: $(href).offset().top }, 800);
});
