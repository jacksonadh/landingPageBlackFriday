import '../styles/home.scss'
import logo from '../assets/images/logoHorizontalBranca.png'
export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo da loja Ei Isy Art" />
      <h1>BLACK <span>FRIDAY</span></h1>
      <p>A MAIOR DO BRASIL É AQUI!</p>
    </div>
  )
}