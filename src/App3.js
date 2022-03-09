import './App.css';
import { useRef } from 'react'

function App3() {
  const strongDaniel = useRef(null);
  const strongJoao = useRef(null);
  const strongPedro = useRef(null);

  function styleDaniel() {
    if (strongDaniel.current.style.color === 'red') {
      strongDaniel.current.style.color = 'black';
      strongDaniel.current.style.fontSize = '16px'
      return
    }

    strongDaniel.current.style.color = 'red';
    strongDaniel.current.style.fontSize = '30px';
  };

  function styleJoao() {
    if (strongJoao.current.style.color === 'green') {
      strongJoao.current.style.color = 'black';
      strongJoao.current.style.fontSize = '16px'
      return
    }

    strongJoao.current.style.color = 'green';
    strongJoao.current.style.fontSize = '60px';
  };

  function stylePedro() {
    if (strongPedro.current.style.color === 'blue') {
      strongPedro.current.style.color = 'black';
      strongPedro.current.style.fontSize = '16px'
      return
    }

    strongPedro.current.style.color = 'blue';
    strongPedro.current.style.fontSize = '90px';
  };

  return (
    <div className="App">
      <strong ref={strongDaniel} onClick={() => styleDaniel()}>Daniel</strong>
      <strong ref={strongJoao} onClick={() => styleJoao()}>João</strong>
      <strong ref={strongPedro} onClick={() => stylePedro()}>Pedro</strong>
    </div>
  );
}

export default App3;
