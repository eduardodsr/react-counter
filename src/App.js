// Importação do hook useState
import { useEffect, useState } from "react";

/**
 * Declaração do componente
 * O export indica que ele
 * poderá ser utilizado externamente
 */
export default function App() {
  // CSS in JS
  const { containerStyle } = styles;

  // Exemplo de utilização de useEffect
  useEffect(() => {
    document.title = "react-counter";
  }, []);

  // JSX
  return (
    <div style={containerStyle}>
      <h1>react-counter</h1>

      {/* Utilização de outro componente */}
      <Counter />
    </div>
  );
}

// Outro componente
function Counter() {
  // Exemplo de utilização de useState
  const [count, setCount] = useState(0);

  // Closure
  function handleDecrement() {
    setCount((currentCount) => currentCount - 1);
  }

  // Closure
  function handleIncrement() {
    setCount(count + 1);
  }

  // JSX com props
  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <input type="text" value={count} readOnly />
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

const styles = {
  containerStyle: {
    backgroundColor: "lightgray",
    padding: "10px",
    fontFamily: "Arial, sans-serif"
  }
};
