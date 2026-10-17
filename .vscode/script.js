function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, addd a imagm light
    img.setAttribute("src", "./Projeto/avatar-light.png")
  } else {
    // se tiver semm light mode, manter a imagem padrão
    img.setAttribute("src", "./Projeto/avatar.png")
  }

  // mudar a tag alt (challange)
  const alt = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    alt.setAttribute("alt", "Foto Mayk brito sorrindo de óculos escuro")
  } else {
    alt.setAttribute("alt", "Foto Mayk brito sorrindo")
  }
}
