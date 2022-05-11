//var Sigma = [a,b]

let alfabeto = ['a','b'];
let estadosFinales = ['q1'];

// Recibe un conjunto finito de estados (array) y un conjunto finito de simbolos (array)
const funcionTransicion = (estados,alfabeto) => {
  let tablaTransiciones = [];
  // Se necesita cargar la tabla: estado a traves de cada simbolo => salida, esto varia segun cada automata.
  console.log(tablaTransiciones[0][2])
  tablaTransiciones.push(["estadoEntrada","simbolo","estadoSalida"])
}

const esValida = (cadena) => {

}

funcionTransicion([0,1,2],['a','b','c']);

    const tablaTransiciones = {
      		"q0":[[alfabeto[0],'q1'],[alfabeto[1],'q2']],
      		"q1":[[alfabeto[0],'q1'],[alfabeto[1],'q2']],
      		"q3":[[alfabeto[0],'q1'],[alfabeto[1],'q1']]
    };