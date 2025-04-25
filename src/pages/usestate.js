import { useState } from "react";

export default function Userstate() {
  const [state, setState] = useState(0);

  return (
    <>
      <h1>Olá Mundo</h1>
      <button
        className="btn bg-info-subtle rounded-pill border border-info border-3 fw-bold font-monospace "
        onClick={() => setState(soma1(state))}
      >
        Clique aqui
      </button>{" "}
      <br />
      <h5>Cliques {state} vezes</h5>
    </>
  );
  function soma1(state) {
    state++;
    setTimeout(() => {
      setState(state);
      return state
    }, 1000);
  }
}
