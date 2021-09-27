

let hamburguesa={
    TI:["Sencilla","Doble","Triple"],
    TP:["En efectivo","Tarjeta de debito"],
    PA:[20,25,28]
};

let fin=1;
let CA=0.05; //cargo de 5 % para pago con tarjeta
//el cliente solo puede escoger un tipo de hamburguesa por vez


do{
    let TO=0;
    let TOT=0;
    let TIescogida= +prompt(" Escoja el tipo de hamburguesa. Digite 1 para Sencilla 2 para Doble 3 para Triple");
    alert("usted escogió"+ hamburguesa.TI[TIescogida-1]);
    let N= +prompt("Cuantas hamburguesas desea ?");
    let TPescogido=+prompt("ingrese 1 para pago con tarjeta y 2 para pago en efectivo");
    

    
switch(TIescogida){
    case 1: 
        TO=hamburguesa.PA[0]*N; //Total sin cargo
        break;
    case 2:
        TO=hamburguesa.PA[1]*N;  
        break;
    case 3:
        TO=hamburguesa.PA[2]*N;
        break;
}
if (TPescogido==1) {
        
    TOT=TO+(CA*TO);   
} else if (TPescogido==2){
      TOT=TO;
}else { 
    console.log("Dato incorrecto!");
      }

console.log(`Total a cancelar ${TOT} soles`);

fin=+prompt ("Digite 1 para volver al inicio, 0 para cancelar");
}
while (fin==1);




//console.log(albumMusical.canciones[1].autor[2]);
