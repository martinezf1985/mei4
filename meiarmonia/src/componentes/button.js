export default function Button(props) {
    return (
      <button onClick={() => props.cuandohagoClick("hola holaaa")}>
        {props.text}
      </button>
    );
  }
  