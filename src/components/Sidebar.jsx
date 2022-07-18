const dataSidebar = [
  { img: "assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes", razao: "Segue você" },
  { img: "assets/img/chibirdart.svg", nome: "chibirdart", razao: "Segue você" },
  { img: "assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar", razao: "Novo no Instagram" },
  { img: "assets/img/adorable_animals.svg", nome: "adorable_animals", razao: "Segue você" },
  { img: "assets/img/smallcutecats.svg", nome: "smallcutecats", razao: "Segue você" }
]

function Sidebar() {

  return (
    <div className="sidebar">
      <div className="usuario">
        <img src="assets/img/catanacomics.svg" />
        <div className="texto">
          <strong>catanacomics</strong>
          Catana
        </div>
      </div>

      <div className="sugestoes">
        <div className="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        {dataSidebar.map(function (dado) {
            return (
              <div className="sugestao" key = {dado.nome}>
                <div className="usuario">
                  <img src={dado.img} />
                  <div className="texto">
                    <div className="nome">{dado.nome}</div>
                    <div className="razao">{dado.razao}</div>
                  </div>
                </div>
                <div className="seguir">Seguir</div>
              </div>
            )
          })}

        <div className="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div className="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
    </div>
  )
}

export default Sidebar