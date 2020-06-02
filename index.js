(function () {
  document.addEventListener('scroll', () => {
    document.getElementsByClassName('layout-aside')[0].style.marginTop = `${window.pageYOffset}px`
  })
})()
