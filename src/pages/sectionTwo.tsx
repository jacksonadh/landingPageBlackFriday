import Card from '../components/card';
import camisaCasal from '../assets/images/CasalSNK.png';
import masculina from '../assets/images/FilhoDoNordeste.png';
import feminina from '../assets/images/CamisaFemininaViuva.png';
import '../styles/sectionTwo.scss';


export default function SectionTwo() {
  return (
    <>
      <div className="tituloSection">
        <h2>TOP OFERTAS</h2>
        <p>Pegue os melhores anúncios! E encontre as ofertas do seu gosto e comece a economizar!</p>
      </div>
      <div className="contentSectionTwo">

        <div className="card">
          <Card
            src={camisaCasal}
            alt="camisa de casal do anime Atack on titan"
            className="camisa"
          />
          <Card
            src={feminina}
            alt="camisa de casal do anime Atack on titan"
            className="camisa"
          />
          <Card
            src={masculina}
            alt="camisa de casal do anime Atack on titan"
            className="camisa"
          />
        </div>
      </div>
    </>
  )
}