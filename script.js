const nav = document.querySelector('.nav');
  searchIcon = document.querySelector('#searchIcon');
  navOpenBtn = document.querySelector('.navOpenBtn');
  navCloseBtn = document.querySelector('.navCloseBtn');
  logo = document.querySelector('.logo');
  navLinks = document.querySelector('.nav-links');



searchIcon.addEventListener('click', () => {
  nav.classList.toggle('openSearch');
  nav.classList.remove('openNav');
  if(nav.classList.contains('openSearch')) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");

});

navOpenBtn.addEventListener('click', () => {
  nav.classList.add('openNav');
  nav.classList.remove('openSearch');
  searchIcon.classList.replace("uil-times", "uil-search");

});
navCloseBtn.addEventListener('click', () => {
  nav.classList.remove('openNav');
});

logo.addEventListener('click', () => {
  if (nav.classList.contains('openSearch')) {
    nav.classList.remove('openSearch');
    searchIcon.classList.replace("uil-times", "uil-search");

  }
});
navLinks.addEventListener('click', () => {
  if (nav.classList.contains('openSearch')) {
    nav.classList.remove('openSearch');
    searchIcon.classList.replace("uil-times", "uil-search");

  }
});
