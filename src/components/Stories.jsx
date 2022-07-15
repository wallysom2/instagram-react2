const dataStories = [
  { img: "./assets/img/9gag.svg", nome: "9gag" },
  { img: "./assets/img/barked.svg", nome: "barked" },
  { img: "./assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes" },
  { img: "assets/img/adorable_animals.svg", nome: "adorable_animals" },
  { img: "assets/img/chibirdart.svg", nome: "chibirdart" },
  { img: "assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar" },
  { img: "assets/img/smallcutecats.svg", nome: "smallcutecats" },
  { img: "assets/img/gato-telefone.svg", nome: "gato-telefone" },
]

function Stories() {
  return (
    <div class="stories">
      {dataStories.map(dado => (
        <div class="story">
          <div class="imagem">
            <img src={dado.img} /></div>
          <div class="usuario">  {dado.nome}  </div>
        </div>
      ))}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>

    </div>
  )
}

export default Stories