const hamburger = document.querySelector(
  '.header .nav-bar .nav-list .hamburger'
);
const mobile_list = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.getElementById('header');
const links = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
console.log(links);
/*Add event listener to the hamburger*/
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobile_list.classList.toggle('active');
});

/*Add event listener to links to hide the side nav-list*/
links.forEach(item => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_list.classList.toggle('active');
  });
});

/*Add event listener to scrolling to display the background color of the header*/
document.addEventListener('scroll', () => {
  const scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = 'black';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});
