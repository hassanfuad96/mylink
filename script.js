function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    // pegar a tag img
    const img = document.querySelector("#profile img")

    if (html.classList.contains("light")) {
        // tema claro
        // substituir imagem para a avatar-light
        img.src = "./assets/avatar-light.png"
        // add um atributo title para May be the force be with U
        img.title = "May be the force be with U"
        img.alt = "Foto de perfil modo claro"
    } else {
        // tema escuro
        // manter imagem normal (avatar)
        img.src = "./assets/avatar.png"
        img.alt = "Foto de perfil modo escuro"
        img.title = "Come to the Dark Side of the Moon"
    }
}
