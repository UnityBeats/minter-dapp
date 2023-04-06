const aboutButton = document.getElementById('aboutButton');
const pageCover = document.querySelector('.page-cover');

aboutButton.addEventListener('click', () => {
  pageCover.classList.add("opening");
  setTimeout(() => {
    location.href = 'about.html';
  }, 1000);
});
