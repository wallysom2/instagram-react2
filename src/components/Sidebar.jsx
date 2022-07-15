const dataSidebar = [
  { img: "assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes", razao: "Segue você" },
  { img: "assets/img/chibirdart.svg", nome: "chibirdart", razao: "Segue você" },
  { img: "assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar", razao: "Novo no Instagram" },
  { img: "assets/img/adorable_animals.svg", nome: "adorable_animals", razao: "Segue você" },
  { img: "assets/img/smallcutecats.svg", nome: "smallcutecats", razao: "Segue você" }
]

function Sidebar() {

  return (
    <div class="sidebar">
      <div class="usuario">
        <img src="assets/img/catanacomics.svg" />
        <div class="texto">
          <strong>catanacomics</strong>
          Catana
        </div>
      </div>

      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        {dataSidebar.map(function (dado) {
            return (
              <div class="sugestao">
                <div class="usuario">
                  <img src={dado.img} />
                  <div class="texto">
                    <div class="nome">{dado.nome}</div>
                    <div class="razao">{dado.razao}</div>
                  </div>
                </div>
                <div class="seguir">Seguir</div>
              </div>
            )
          })}

        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
    </div>
  )
}

export default Sidebar