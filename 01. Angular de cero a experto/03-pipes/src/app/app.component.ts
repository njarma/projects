import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  nombre:string = "Nicolás";
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  pi = Math.PI;
  a = 0.234;
  salario = 1234.56;
  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion: {
      calle: "Falsa 123",
      casa: "19"
    }
  }

  valorPromesa = new Promise( (resolve, reject ) => {
      setTimeout( ()=> resolve('Se ejecutó el resolve'), 3500) ;
  });
}

let array1 = [1,2,3,4,5,6,7,8,9,10];

let obj1 = [
  {
  "parId": 1,
  "nombre": "Item1",
  "reto": "Reto1",
  "lugar": "Lugar1",
  "fecInicio": "2018-01-01",
  "fecFin": null
}];

//forEach
array1.forEach(element => {
  console.log(element);
});

//Map: Cada valor analizo si es par o impar. Muestro el valor y si es par o impar
console.log(array1.map(x => (x % 2) == 0 ?  `${x} :par` :  `${x} :impar`));

//Filter: La función devuelve true cuando el valor es par, es decir filtra los impares
console.log(array1.filter(x=> (x % 2) == 0));

let obj2 = [
  {
    "parId": 2,
    "nombre": "Item2",
    "reto": "Reto2",
    "lugar": "Lugar2",
    "fecInicio": null,
    "fecFin": null
  }
];

//Concat: concatena ambos objetos
console.log(obj1.concat(obj2));

//Del array obtenido en el paso anterior,
//si el nombre contiene "2" lo muestro, caso contrario lo filtro.
console.log(obj1.concat(obj2).filter(x => x.nombre.indexOf("2") > 0));

var resultado = "[{\"ProductID\":15,\"Name\":\"Adjustable Race\",\"Color\":\"Magenta\",\"Price\":100.0000,\"Quantity\":75,\"MadeIn\":\"China\"},{\"ProductID\":16,\"Name\":\"Bearing Ball\",\"Color\":\"Magenta\",\"Price\":15.9900,\"Quantity\":90,\"MadeIn\":\"China\",\"Tags\":[\"promo\"]},{\"ProductID\":17,\"Name\":\"BB Ball Bearing\",\"Color\":\"Magenta\",\"Price\":28.9900,\"Quantity\":80,\"MadeIn\":\"China\"},{\"ProductID\":18,\"Name\":\"Blade\",\"Color\":\"Magenta\",\"Price\":18.0000,\"Quantity\":45,\"Tags\":[\"new\"]},{\"ProductID\":19,\"Name\":\"Sport-100 Helmet, Red\",\"Color\":\"Red\",\"Price\":41.9900,\"Quantity\":38,\"MadeIn\":\"China\",\"Tags\":[\"promo\"]},{\"ProductID\":20,\"Name\":\"Sport-100 Helmet, Black\",\"Color\":\"Black\",\"Price\":31.4900,\"Quantity\":60,\"MadeIn\":\"China\",\"Tags\":[\"new\",\"promo\"]},{\"ProductID\":21,\"Name\":\"Mountain Bike Socks, M\",\"Color\":\"White\",\"Price\":560.9900,\"Quantity\":30,\"Tags\":[\"sales\",\"promo\"]},{\"ProductID\":22,\"Name\":\"Mountain Bike Socks, L\",\"Color\":\"White\",\"Price\":120.9900,\"Quantity\":20,\"Tags\":[\"sales\",\"promo\"]},{\"ProductID\":23,\"Name\":\"Long-Sleeve Logo Jersey, XL\",\"Color\":\"Multi\",\"Price\":44.9900,\"Quantity\":60,\"Tags\":[\"sales\",\"promo\"]},{\"ProductID\":24,\"Name\":\"Road-650 Black, 52\",\"Color\":\"Black\",\"Price\":704.6900,\"Quantity\":70,\"MadeIn\":\"UK\"},{\"ProductID\":25,\"Name\":\"Mountain-100 Silver, 38\",\"Color\":\"Silver\",\"Price\":359.9900,\"Quantity\":45,\"MadeIn\":\"UK\",\"Tags\":[\"promo\"]},{\"ProductID\":26,\"Name\":\"Road-250 Black, 48\",\"Color\":\"Black\",\"Price\":299.0200,\"Quantity\":25,\"MadeIn\":\"UK\",\"Tags\":[\"new\",\"promo\"]},{\"ProductID\":27,\"Name\":\"ML Bottom Bracket\",\"Price\":101.2400,\"Quantity\":50,\"MadeIn\":\"China\"},{\"ProductID\":28,\"Name\":\"HL Bottom Bracket\",\"Price\":121.4900,\"Quantity\":65,\"MadeIn\":\"China\"},{\"ProductID\":29,\"Name\":\"prueba\",\"Color\":\"rojo\",\"Price\":123.0000,\"Quantity\":11}]";
var data = JSON.parse(resultado);
console.log(data);