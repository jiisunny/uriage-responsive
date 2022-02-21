// floating 효과
function floatingObject(selector) {
    // gsap.to(요소, 시간, 옵션);
    gsap.to(selector, 1, {
      y: 10,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: 1
    })
  }
  floatingObject('.floating');
  
  // 스크롤 효과
  const spyEls = document.querySelectorAll('section.scroll-spy');
  spyEls.forEach(function (spyEl) {
    new ScrollMagic
      .Scene({
        triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
        triggerHook: .8 // 뷰포트 감시 지점
      })
      .setClassToggle(spyEl, 'show')
      .addTo(new ScrollMagic.Controller());
  });