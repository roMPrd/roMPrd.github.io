const body = document.querySelector('body');
  nav = document.querySelector('.nav');
  modeToggle = document.querySelector('.darkLight');
  modeIcon = document.querySelector('#modeIcon');
  searchIcon = document.querySelector('#searchIcon');
  arrowIcon = document.querySelector('#arrowIcon');
  navOpenBtn = document.querySelector('.navOpenBtn');
  navCloseBtn = document.querySelector('.navCloseBtn');
  logo = document.querySelector('.logo');
  navLinks = document.querySelector('.nav-links');
  projectsMenu = document.querySelector('.projects-menu');
  projectsDropdownLinks = document.querySelector('.projects-dropdown-links');
  containerHome = document.querySelector('.container-home');
  containerProjects = document.querySelector('.container-projects');
  containerAboutMe = document.querySelector('.container-about-me');
  containerContactMe = document.querySelector('.container-contact-me');
  projectCodehunter = document.querySelector('.project-codehunter');
  projectBatch1030 = document.querySelector('.project-batch1030');
  linkHome = document.querySelector('#link-home');
  linkAboutMe = document.querySelector('#link-about-me');
  linkContactMe = document.querySelector('#link-contact-me');
  linkCodehunter = document.querySelector('#link-codehunter');
  linkBatch1030 = document.querySelector('#link-batch1030');

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
  if (projectsDropdownLinks.classList.contains('openProject')) {
    return arrowIcon.classList.replace('uil-angle-down', "uil-angle-up");
  }
  arrowIcon.classList.replace('uil-angle-up', "uil-angle-down");
});

// ===== Toggle Pages ===== //

// window.onload = () => {
//   containerAboutMe.classList.add('hide');
//   containerContactMe.classList.add('hide');
//   projectCodehunter.classList.add('hide');
//   projectBatch1030.classList.add('hide');
// };

logo.addEventListener('click', () => {
  nav.classList.remove('openNav');
  projectsDropdownLinks.classList.remove('openProject');

  containerHome.classList.remove('hide');

  containerAboutMe.classList.add('hide');
  containerContactMe.classList.add('hide');
  projectCodehunter.classList.add('hide');
  projectBatch1030.classList.add('hide');
});

linkHome.addEventListener('click', () => {
  nav.classList.remove('openNav');
  projectsDropdownLinks.classList.remove('openProject');

  containerHome.classList.remove('hide');

  containerAboutMe.classList.add('hide');
  containerContactMe.classList.add('hide');
  projectCodehunter.classList.add('hide');
  projectBatch1030.classList.add('hide');
});

linkAboutMe.addEventListener('click', () => {
  nav.classList.remove('openNav');
  projectsDropdownLinks.classList.remove('openProject');

  containerAboutMe.classList.remove('hide');

  containerHome.classList.add('hide');
  containerContactMe.classList.add('hide');
  projectCodehunter.classList.add('hide');
  projectBatch1030.classList.add('hide');
});

linkContactMe.addEventListener('click', () => {
  nav.classList.remove('openNav');
  projectsDropdownLinks.classList.remove('openProject');

  containerContactMe.classList.remove('hide');

  containerHome.classList.add('hide');
  containerAboutMe.classList.add('hide');
  projectCodehunter.classList.add('hide');
  projectBatch1030.classList.add('hide');
});

linkCodehunter.addEventListener('click', () => {
  nav.classList.remove('openNav');
  projectCodehunter.classList.remove('hide');

  containerHome.classList.add('hide');
  containerAboutMe.classList.add('hide');
  containerContactMe.classList.add('hide');
  projectBatch1030.classList.add('hide');
});

linkBatch1030.addEventListener('click', () => {
  nav.classList.remove('openNav');
  projectBatch1030.classList.remove('hide');

  containerHome.classList.add('hide');
  containerAboutMe.classList.add('hide');
  containerContactMe.classList.add('hide');
  projectCodehunter.classList.add('hide');
});
