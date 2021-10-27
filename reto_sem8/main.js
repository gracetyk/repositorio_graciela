const url="https://616b5ead16c3fa001717167c.mockapi.io/productos"
let Body = document.querySelector("body");

class toDoAPP{
    constructor(url){
        this.Url=url;
        
        //metodo para obtener los datos
        this.obtener();
     }

     async obtener () {
        try {
            let rpta = await fetch(this.Url);
            let productos = await rpta.json();
            console.table(productos);
            return productos;
        } catch (error) {
            console.log(error);
        }
    };




 async listaProducto(){
    try{
        let htmlPrd="";
        let datProd=await this.obtener();
        datProd.forEach(elemento => {
            htmlPrd=htmlPrd+
           /*  `<tr>
            <td>${elemento.nombre}</td>
            <td>${elemento.precio}</td>
        </tr>` */
        `
        <div class="card col-lg-4 col-md-6 col-sm-12">
            <img src="${elemento.imagen}" class="card-img-top mt-2" alt=" ${elemento.nombre}" >
            <div class="card-body text-center">
                <h5 class="card-title">${elemento.nombre}</h5>
                <p class="card-text">${elemento.precio}</p>
            </div>
        </div>`;

        });
        Body.innerHTML=/* `<table border="1">
        ${htmlPrd}
    </table>`; */
    `
                            <main class="container mt-2">
                                <div class="row">                                    
                                    ${htmlPrd}
                                <div>
                              
                            </main>`;

// agregar un nuevo producto
    let nuevoProd = {
     imagen:"http://placeimg.com/640/480/food",
     nombre: "Producto nuevo",
     precio: 50
    };
                            
   //headers - cabeceras 
     let cabecera = {
     method: "POST", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuevoProd)
    };    
    
    fetch(this.Url, cabecera)
    .then((respuesta) => {
        return respuesta.json();
    })
    .then((prodCreado) => {
        console.table(prodCreado);
    })
    


    } catch (error){
        console.log(error)
    }
}

}


let makeProd=new toDoAPP(url);
console.log(makeProd);
makeProd.listaProducto();


