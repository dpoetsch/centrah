document.addEventListener("DOMContentLoaded", function () {
  // Menu Toggle
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav-links');
  const menuIcon = toggle.querySelector('i');

  toggle.addEventListener('click', function () {
    nav.classList.toggle('active');
    if (nav.classList.contains('active')) {
      menuIcon.classList.remove('fa-bars');
      menuIcon.classList.add('fa-times');
    } else {
      menuIcon.classList.remove('fa-times');
      menuIcon.classList.add('fa-bars');
    }
  });

  // Rolagem suave para links do menu superior e do rodapé
  document.querySelectorAll('.nav-links a, .footer-column .case-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
      // Fechar o menu no mobile após clicar (apenas para links do menu superior)
      if (this.closest('.nav-links') && nav.classList.contains('active')) {
        nav.classList.remove('active');
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
      }
    });
  });
});
