
document.querySelector('.banner button').addEventListener('click', ()=> {
  document.querySelector('.banner').style.display = 'none'
  document.querySelector('.container').style.backgroundColor = "none"
  document.querySelector('.slideshow-wrapper').style.cssText = 'opacity:1;visibility:visible'
})