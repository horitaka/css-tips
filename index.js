window.addEventListener('load', () => {
  const buttonMenu = document.getElementById('button-menu')
  const menu = document.getElementById('menu')

  buttonMenu.addEventListener('click', () => {
    // ボタンの座標を取得する
    const buttonPosition = buttonMenu.getBoundingClientRect()

    // メニューの座標を設定する
    const style = menu.style;
    style.visibility = 'visible'
    style.top = `${buttonPosition.top + window.scrollY}px`
    style.left = `${buttonPosition.right + 20}px`
  })


  const buttonShowOverlay = document.getElementById('button-show-overlay')
  const overlay = document.getElementById('overlay')

  buttonShowOverlay.addEventListener('click', () => {
    overlay.style.visibility = 'visible'
  })

})