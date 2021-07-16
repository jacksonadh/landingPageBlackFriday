import '../styles/counter.scss'
type counterProps = {
  id: string;
  textConter: string;
  textDia: string;

}
export default function Counter(props: counterProps) {
  return (
    <div className="counter">
      <h2>{props.textConter}</h2>
      <p>{props.textDia}</p>
    </div>
  )
}