document.addEventListener('DOMContentLoaded', function () {
  const content = document.querySelectorAll('.content');
  const scrollLeft = document.getElementById('scrollLeft');
  const scrollRight = document.getElementById('scrollRight');
  var currentIndex = 0;
  

  scrollRight.addEventListener('click', function () {
    if(currentIndex < content.length - 1) {
      content[currentIndex].style.opacity = 0;
      content[currentIndex + 1].style.opacity = 1;
      currentIndex += 1;
    } else {
      content[currentIndex].style.opacity = 0;
      currentIndex = 0;
      content[currentIndex].style.opacity = 1;
    }
  });

  scrollLeft.addEventListener('click', function () {
    if(currentIndex > 0) {
      content[currentIndex].style.opacity = 0;
      content[currentIndex - 1].style.opacity = 1;
      currentIndex -= 1;
    } else {
      content[currentIndex].style.opacity = 0;
      currentIndex = 6;
      content[currentIndex].style.opacity = 1;
    }
  });






    
});