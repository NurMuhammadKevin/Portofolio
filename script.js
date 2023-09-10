// Menu Toogle 
const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('nav ul')

menuToggle.addEventListener('click', function () {
  menuToggle.classList.toggle('menu-toggle1');
  nav.classList.toggle('slide')
});

// Typed Js
const typed = new Typed('.multiple-text', {
  strings: ["Beginners", "Freelancer", "FullStack Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
  smartBackspace: true,
})

// Mix up for selector content
var mixer = mixitup('.portofolio-gallery', {
  selectors: {
    target: '.port-box'
  },
  animation: {
    duration: 500
  }
})

// OnScroll 

window.onscroll = () => {
  nav.classList.remove('slide')
  menuToggle.classList.remove('menu-toggle1');
}

// Animmtion Text with parallax
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-items')
      entry.target.classList.add('show-about')
    } else {
      entry.target.classList.remove('show-items')
      entry.target.classList.remove('show-about')
    }
  })
})

const scrollScale = document.querySelectorAll('.scroll-scale');
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll('.scroll-bottom');
scrollBottom.forEach((el) => observer.observe(el))

// Navbar Animation Appears
const navItems = document.querySelectorAll('.fade-in');

const animateNavItems = (index) => {
  if (index < navItems.length) {
    setTimeout(() => {
      navItems[index].classList.add('active');
      animateNavItems(index + 1);
    }, 100 * index);
  }
};

animateNavItems(0);




