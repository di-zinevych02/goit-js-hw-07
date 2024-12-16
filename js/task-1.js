const elements = document.querySelectorAll('li.item');
console.log(`Number of categories: ${elements.length}`);
elements.forEach(element => {
  const elementTitle = element.querySelector('h2').textContent;
  const elementItems = element.querySelectorAll('ul li');
  console.log(`Category: ${elementTitle}`);
  console.log(`Elements: ${elementItems.length}`);
});
