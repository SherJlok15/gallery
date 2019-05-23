const largeImg = document.querySelector('.largeImg');
const thumbs = document.querySelector('.thumbs');

thumbs.addEventListener('click', function (e) {
  e.preventDefault();
  const target = event.target.parentElement;
  largeImg.src = target.href;
  largeImg.alt = target.title;
})
