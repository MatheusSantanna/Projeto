
  function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector('#perfil img')
    if(html.classList.contains('light')) {

      img.setAttribute('src', './assets/avatar-light.png')
    }else {

      img.setAttribute('src', './assets/avatar.png')
    }
    const alt = document.querySelector('#perfil img')
    if(html.classList.contains('light')){
      alt.setAttribute('alt','Imagem do professor branca')
    }else {
      alt.setAttribute('alt', 'imagem do professor gente boa')
    }
  }
