const listItems = document.querySelectorAll('.list > li');

listItems.forEach((item) => {
  const sublist = item.querySelector('.sublist');
  if (sublist) {
    item.addEventListener('click', () => {
      sublist.classList.toggle('active');
    });
  }
});