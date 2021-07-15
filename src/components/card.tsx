import "../styles/card.scss"

type cardProps = {
  src: string;
  alt: string;
  className: string;
}

export default function Card(props: cardProps) {
  return (
    <div className="card">
      <img
        src={props.src}
        alt={props.alt}
        className="camisa"
      />
    </div>
  )
}