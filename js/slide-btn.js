document.addEventListener('DOMContentLoaded', function () {
  const bestList = document.querySelector('.best-list');
  const leftBtn = document.querySelector('.slide-btn.left');
  const rightBtn = document.querySelector('.slide-btn.right');
  let scrollAmount = 0;
  const slideWidth = 330; // 이미지+gap (300+30)

  leftBtn.addEventListener('click', function () {
    scrollAmount = Math.max(scrollAmount - slideWidth, 0);
    bestList.style.transform = `translateX(-${scrollAmount}px)`;
    bestList.style.transition = 'transform 0.5s';
  });

  rightBtn.addEventListener('click', function () {
    // 최대 이동 가능 거리 계산
    const maxScroll = bestList.scrollWidth - bestList.parentElement.offsetWidth;
    scrollAmount = Math.min(scrollAmount + slideWidth, maxScroll);
    bestList.style.transform = `translateX(-${scrollAmount}px)`;
    bestList.style.transition = 'transform 0.5s';
  });
});
