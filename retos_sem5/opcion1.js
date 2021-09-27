let L=+prompt("Cuantos litros de leche entregará?");
let PG=+prompt("ingrese el precio de 1 galon de leche");

let TG=L/3785; //galones
let GA=TG*PG;

console.log(`Usted venderá ${TG} galones
             deberá recibir ${GA} soles por la venta`);