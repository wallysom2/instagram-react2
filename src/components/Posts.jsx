
const dadosPosts = [
  {
    imgUsuario: "assets/img/meowed.svg",
    imgConteudo: "assets/img/gato-telefone.svg",
    imgQuemCurtiu: "assets/img/barked.svg",
    nomeUsuario: "meowed",
    quemCurtiu:'respondeai'
  },
  {
    imgUsuario: "assets/img/bad.vibes.memes.svg",
    imgConteudo: "assets/img/dog.svg",
    imgQuemCurtiu: "assets/img/smallcutecats.svg",
    nomeUsuario: "bad.vibes.memes",
    quemCurtiu:'adorable_animals'
  }
]


function Posts(props) {
    return (
      <div className="posts">

        {dadosPosts.map(dado => (
           <div class="post">
           <div class="topo">
             <div class="usuario">
               <img src={dado.imgUsuario} />
              {dado.nomeUsuario}
             </div>
             <div class="acoes">
               <ion-icon name="ellipsis-horizontal"></ion-icon>
             </div>
           </div>

           <div class="conteudo">
             <img src= {dado.imgConteudo} />
           </div>

           <div class="fundo">
             <div class="acoes">
               <div>
                 <ion-icon name="heart-outline"></ion-icon>
                 <ion-icon name="chatbubble-outline"></ion-icon>
                 <ion-icon name="paper-plane-outline"></ion-icon>
               </div>
               <div>
                 <ion-icon name="bookmark-outline"></ion-icon>
               </div>
             </div>

             <div class="curtidas">
               <img src={dado.imgQuemCurtiu} />
               <div class="texto">
                 Curtido por <strong>{dado.quemCurtiu}</strong> e <strong>outras 101.523 pessoas</strong>
               </div>
             </div>
           </div>
           </div>
           ))}
        </div>
      )
    }

    export default Posts


