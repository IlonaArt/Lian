var elem = document.querySelector('.products-list');
var msnry = new Masonry( elem, {
  itemSelector: '.products-item',
  columnWidth: 360,
  gutter: 30
});