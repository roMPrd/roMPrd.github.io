const body = document.querySelector('body');
  nav = document.querySelector('.nav');
  modeToggle = document.querySelector('.darkLight');
  modeIcon = document.querySelector('#modeIcon');
  searchIcon = document.querySelector('#searchIcon');
  navOpenBtn = document.querySelector('.navOpenBtn');
  navCloseBtn = document.querySelector('.navCloseBtn');
  logo = document.querySelector('.logo');
  navLinks = document.querySelector('.nav-links');
  projectsMenu = document.querySelector('.projects-menu');
  projectsDropdownLinks = document.querySelector('.projects-dropdown-links');

// ===== Toggle Dark/Light Mode ===== //

modeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    return modeIcon.classList.replace("uil-moon", "uil-sun");
  }
  modeIcon.classList.replace("uil-sun", "uil-moon");
});

// ===== Toggle Search Bar ===== //

searchIcon.addEventListener('click', () => {
  nav.classList.toggle('openSearch');
  nav.classList.remove('openNav');
  if (projectsDropdownLinks.classList.contains('openProject')) {
    projectsDropdownLinks.classList.remove('openProject');
  }
  if(nav.classList.contains('openSearch')) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

// ===== Toggle Sidebar ===== //

navOpenBtn.addEventListener('click', () => {
  nav.classList.add('openNav');
  nav.classList.remove('openSearch');
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener('click', () => {
  nav.classList.remove('openNav');
});

// ===== Toggle with Logo / Nav Links ===== //

logo.addEventListener('click', () => {
  if (nav.classList.contains('openSearch')) {
    nav.classList.remove('openSearch');
    searchIcon.classList.replace("uil-times", "uil-search");
  }
  if (projectsDropdownLinks.classList.contains('openProject')) {
    projectsDropdownLinks.classList.remove('openProject');
  }
});

navLinks.addEventListener('click', () => {
  if (nav.classList.contains('openSearch')) {
    nav.classList.remove('openSearch');
    searchIcon.classList.replace("uil-times", "uil-search");
  }
});

// ===== Toggle Projects Dropdown ===== //

projectsMenu.addEventListener('click', () => {
  projectsDropdownLinks.classList.toggle('openProject');
});
