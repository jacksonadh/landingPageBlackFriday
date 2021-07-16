import '../styles/oferta.scss'

type ofertaProps = {
  text: string;
}

export default function Oferta(props: ofertaProps) {
  return (
    <div>
      <h1 className="oferta">{props.text}</h1>
    </div>
  )
}