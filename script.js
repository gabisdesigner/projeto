function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
  
    // pegar a tag img
    const img = document.querySelector("#profile img")
  
    // substituir a imagem
    if (html.classList.contains("light")) {
      // se tiver light mode, adicionar a imagem light
      img.setAttribute("src", "./assets/avatar-light.png")
    } else {
      // se tiver sem light mode, manter a imagem norml
      img.setAttribute("src", "./assets/avatar.png")
    }
    // if (html.classList.contains("light")) {
    //  html.classList.remove("light")
    // } else {
    //  html.classList.add("light")
    // }
  }
  