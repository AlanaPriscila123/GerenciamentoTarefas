import './index.css'
import fotoPerfil from './1000035081.jpg';
import habilidadeCantar from './cantando.png';
import habilidadeEscrever from './escrever.jpeg';
import habilidadeDesenhar from './desenhando.jpeg';


function Sobre() {
    return (
        <main>
            <header>
            <h1>Sobre</h1>
            </header>
            <section>
                <div className='boxfotoPerfil'>
                    <img className="imgfotoPerfil" src={fotoPerfil}/>
                    </div>
                    <div className="habilidades">
                        <article>
                            <h2>Cantar</h2>
                            <img src={habilidadeCantar}/>
                            <p className='descrição'>
                            Eu gosto muito de cantar hinos, pois as letras profundas e as melodias tocantes trazem paz ao meu coração e renovam as minhas forças no dia a dia.                           
                            </p>
                        </article>
                        <article>
                            <h2>Escrever</h2>
                            <img src={habilidadeEscrever}/>
                            <p className='descrição'>
                            Gosto de escrever histórinhas porque criar novos mundos, dar vida a personagens únicos e inventar aventuras cheias de imaginação é a minha forma favorita de expressar a minha criatividade.                    
                            </p>
                        </article>
                        <article>
                            <h2>Desenhar</h2>
                            <img src={habilidadeDesenhar}/>
                            <p className='descrição'>
                            Gosto muito de desenhar, dedicando o meu tempo livre para ilustrar paisagens ricas em detalhes e criar personagens de animes cheios de personalidade, transformando cada folha em branco em um universo próprio.                          
                            </p>
                        </article>
                    </div>
            </section>
        </main>
    
    )
}
export default Sobre;

