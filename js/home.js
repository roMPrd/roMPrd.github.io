// const square8 = document.getElementById("s8");
// const buttonwelcome = document.querySelector("#buttonwelcome");

// buttonwelcome.addEventListener("click", (event) => {
//   console.log("buttonwelcome");
// });

// function buttonwelcome() {
//   console.log("buttonwelcome");
//   const element = document.getElementById('s8')
//   element.classList.remove("s8");
//   element.offsetWidth
//   element.classList.add("s8");
// }

// function fadeAway() {
//   // const delay1 = document.getElementsByClassName('delay1')
//   const welcomeText = document.getElementById('welcome-text')
//   const delay1 = document.querySelectorAll('.delay1')
//   const delay15 = document.getElementById('delay1-5')
//   const delay2 = document.getElementById('delay2')
//   delay15.classList.remove("delay1-5");
//   delay15.offsetWidth
//   delay2.classList.remove("delay2");
//   delay2.offsetWidth
//   console.log(delay1);
//   delay1.forEach((element) => {element.classList.add("fadeAway");});
//   delay15.classList.add("fadeAway");
//   delay2.classList.add("fadeAway");
//   // sleep(2000);
//   setTimeout(() => { welcomeText.classList.add("d-none"); }, 5000);
//   // welcomeText.classList.add("d-none");
// }

function retract() {
  const sidebar = document.getElementById('sidebar-container')
  const chevron = document.getElementById('chevron-btn')
  const container = document.getElementById('container-expand')
  console.log(container)

  if (sidebar.classList.contains('retract-effect')) {
    sidebar.classList.remove("retract-effect");
    chevron.classList.remove("fa-chevron-right");
    container.classList.remove("extend-effect");
    chevron.classList.add("fa-chevron-left");
  } else {
    sidebar.classList.add("retract-effect");
    chevron.classList.remove("fa-chevron-left");
    container.classList.add("extend-effect");
    chevron.classList.add("fa-chevron-right");
  }
}

// function hideToHome() {
//   const home = document.getElementById('container-codehunter')
//   const containers = document.getElementsByClassName('container-effect');
//   console.log(typeof containers);

//   Array.from(containers).forEach((element) => {
//     console.log(element)
//     if (element.classList.includes('hide-effect')) {

//     } else {
//       element.classList.add("hide-effect");
//     }
//   })
//   home.classList.remove('hide-effect');
// }

function hideToHome() {
  // home is the container of codehunter
  const home = document.getElementById('container-home')
  const contact = document.getElementById('container-contact')
  console.log(home)
  console.log(contact)

  if (contact.classList.contains('hide-effect')) {} else {contact.classList.add('hide-effect')}
  if (home.classList.contains('hide-effect')) {home.classList.remove('hide-effect')}

}

function hideToContact() {
  // home is the container of codehunter
  const home = document.getElementById('container-home')
  const contact = document.getElementById('container-contact')
  console.log(home)
  console.log(contact)

  if (home.classList.contains('hide-effect')) {} else {home.classList.add('hide-effect')}
  if (contact.classList.contains('hide-effect')) {contact.classList.remove('hide-effect')}

}
