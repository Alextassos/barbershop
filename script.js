window.addEventListener('scroll', function() {
    const menu = document.getElementById('menu');
    if (window.scrollY > 50) {
        menu.classList.add('scrolled'); 
    } else {
        menu.classList.remove('scrolled'); 
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.15 
  });

  reveals.forEach(reveal => {
    revealOnScroll.observe(reveal);
  });
});
