import '../styles/counter.scss'
import Countdown from '../services/countdown';




type counterProps = {
  textCounter: string;
  textDia: string;

}
export default function Counter(props: counterProps) {
  const tempoParaBF = new Countdown("26 November 2021 00:00:00 GMT-0300");
  const tempos = document.querySelectorAll("[data-time]");

  function mostrarTempo() {
    tempos.forEach((tempo, index) => {
      tempo.innerHTML = tempoParaBF.total[index].toString();
    });
  }
  mostrarTempo();
  setInterval(mostrarTempo, 1000);
  return (
    <div className="counter">
      <h2 data-time>{props.textCounter}</h2>
      <p>{props.textDia}</p>
    </div>
  )
}