# TPN°3 - React - Captura de eventos

## Enunciado

Tomar como referencia:
https://www.tutorialesprogramacionya.com/reactya/detalleconcepto.php?punto=4&codigo=4&inicio=0

Hacer un desarrollo en React que tenga un control de formulario HTML `input` de tipo "text"
y un botón que al presionarse muestre en un `alert` la cantidad de vocales ingresadas
(realizarlo con una función que devuelva el resultado).

Presentar link de GitHub.

## Solución

- `input type="text"` para ingresar el texto y un botón "Contar vocales" (`type="submit"`).
- El evento `onSubmit` del formulario se enlaza con la función `presion`.
- La función `contarVocales(texto)` recibe el texto y **devuelve** la cantidad de vocales
  (cuenta mayúsculas, minúsculas y vocales con tilde o diéresis).
- `presion` detiene el envío con `e.preventDefault()`, llama a `contarVocales` y muestra
  el resultado con `alert(...)`.

## Cómo ejecutarlo

```bash
npm install
npm start
```

Se abre en http://localhost:3000
