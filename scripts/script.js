function classToggle() {
    const navs = document.querySelectorAll('.nav-list')
    
    navs.forEach(nav => nav.classList.toggle('.nav-toggle'));
  }
  
  document.querySelector('.nav-toggle')
    .addEventListener('click', classToggle);




