// Get list and button
const navList = document.querySelector('.nav .list--nav')
const button  = document.querySelector('.nav .button--nav')

// Hide nav and apply toggle
const collapseNav = () => {
  if (document.body.clientWidth < 640) {
    navList.style.setProperty('--listHeight', `-${navList.offsetHeight}px`)
  } else {
    navList.removeAttribute('style')
  }

  button.onclick = () => {
    navList.style.setProperty('transition', `margin .1s`)
    if (navList.style.getPropertyValue('--listHeight')) {
      navList.style.removeProperty('--listHeight')
    } else {
      navList.style.setProperty('--listHeight', `-${navList.offsetHeight}px`)
    }
  }
}

if (navList && button) collapseNav()

// Check on resize if to collapse nav
window.addEventListener('resize', () => {
  collapseNav()
})
