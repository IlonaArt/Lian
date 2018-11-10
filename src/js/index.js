function resizeGridItem(item){
  grid = document.getElementsByClassName("products-list")[0];
  rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
  rowSpan = Math.ceil((item.querySelector('.products-link').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
    item.style.gridRowEnd = "span "+rowSpan;
}

function resizeAllGridItems(){
  allItems = document.getElementsByClassName("products-item");
  for(x=0;x<allItems.length;x++){
    resizeGridItem(allItems[x]);
  }
}

window.onload = resizeAllGridItems();
window.addEventListener("resize", resizeAllGridItems);
