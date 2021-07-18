import Input from "../components/input";
import '../styles/sectionOne.scss';
import logo from '../assets/images/logo/logoHorizontalBranca.png'

export default function SectionOne() {

  return (
    <div className="content">
      <div>
        <img src={logo} alt="Logo da loja Ei Isy Art" />
      </div>

      <div className="form">
        <h2>CADASTRE-SE E RECEBA <span>OFERTAS EXCLUSIVAS</span></h2>
        <Input />
      </div>
    </div>
  )
}
