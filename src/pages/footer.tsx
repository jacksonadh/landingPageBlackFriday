import "../styles/footer.scss"
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import Input from "../components/input";

export default function Footer() {
  return (
    <div className="footer">
      <div><h1>BLACK <span>FRIDAY</span></h1>
        <p>Você está pronto para a escaldante Black Friday?</p>
        <p>Apresse-se para obter as melhores ofertas e desfrute de uma grande economia conosco!</p>
      </div>

      <div>
        <h2>CONTATO</h2>
        <div className="contentContato">
          <div>
            <a href="https://www.instagram.com/ei__isy__art/" target="_blank" rel="noreferrer"><FaInstagram /> @ei__isy__art</a>
            <a href="https://wa.me/557199341778" target="_blank" rel="noreferrer"><FaWhatsapp /> 71 9 9934-1778</a>
          </div>
          <div>
            <a href="https://www.facebook.com/EIISYART/" target="_blank" rel="noreferrer"><FaFacebook /> @eiisyart</a>
            <a href="https://twitter.com/LiviaIzy" target="_blank" rel="noreferrer"><FaTwitter /> @LiviaIzy</a>
          </div>
        </div>
      </div>
      <div className="form">
        <h2>CADASTRE-SE E RECEBA <span>OFERTAS EXCLUSIVAS</span></h2>
        <Input />
      </div>
    </div>
  )
}