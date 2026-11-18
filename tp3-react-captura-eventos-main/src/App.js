import './App.css';

function App() {
  return (
    <div className="contenedor">
      <h1>TPN°3 - React - Captura de eventos</h1>
      <form onSubmit={presion}>
        <p>
          Ingrese un texto:
          <input type="text" name="texto" />
        </p>
        <p>
          <input type="submit" value="Contar vocales" />
        </p>
      </form>
    </div>
  );
}

// Función que recibe un texto y devuelve la cantidad de vocales que tiene
// (se consideran mayúsculas, minúsculas y vocales con tilde o diéresis).
function contarVocales(texto) {
  const sinAcentos = texto.normalize('NFD').replace(/[̀-ͯ]/g, '');
  const vocales = sinAcentos.match(/[aeiou]/gi);
  return vocales ? vocales.length : 0;
}

function presion(e) {
  // Evita que el formulario recargue la página
  e.preventDefault();
  const texto = e.target.texto.value;
  const cantidad = contarVocales(texto);
  alert('La cantidad de vocales ingresadas es: ' + cantidad);
}

export default App;
