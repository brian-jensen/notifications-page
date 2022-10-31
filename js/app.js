const read = document.querySelector('header button');
const counter = document.querySelector('header .counter');

read.addEventListener('click', () => {
  const unread = document.querySelectorAll('.active');
  
  unread.forEach(article => {
    article.classList.remove('active');
  });

 counter.textContent = 0;
});