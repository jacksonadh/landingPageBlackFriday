import { useState } from 'react';
import '../styles/input.scss';


export default function Input() {
  const [email, setEmail] = useState("")
  const armazenar: (chave: string, email: string) => {
    localStorage.setItem(chave, email)
}
return (

  <>
    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Digite seu melhor e-mail" />
    <button type="submit" onClick={() => armazenar("Email: ", email)} >Cadastrar</button>
  </>
)
}


