// class addAbrigo extends HTMLElement{
//     constructor(){
//         super()
//     }
//     async connectedCallback(){
//         const index = parseInt(this.getAttribute("index")||0);
//         this,loadArticles('',index)
//     }
//     async loadArticles(index){
//         let url = `http://172.16.101.146:5999/abrigo`;
//         try{
//             const response = await fetch(url);
//             const result = await response.json();
//             const abrigos = []
//             add_abrigo.innerHTML = '';
//             result.forEach(val =>{
//                 abrigos.push({
//                     "getImage": val.imagen,
//                     "nombre": val.nombre,
//                     "precio": val.precio
//                 })
//             })
//             const div = document.createElement("div");
//             div.classList.add("abrigo");
//             div.innerHTML = `
//                     <style>
//                 .weather{
//                     display: flex;
//                     max-width:100% ;
//                     max-height: 100%;
//                     flex-direction: column;
//                 }
//                 .weather img{
                    
//                     width: 100%;
//                     height: auto;
                    
//                 }
//                 .cont_t{
//                     display: flex;
//                     width: 14rem;
//                     height: 27%;
//                     flex-direction: column;
//                     background-color: orange;
//                     border-bottom-right-radius: 40px;
//                     gap: 0.5rem;
//                     box-sizing: border-box;
//                     padding: 10px;
//                     position: relative;
//                 }
//                 .cont_t button{
//                     position: absolute;
//                     width:5rem;
//                     height: 1.5rem;
//                     right: 1rem;
//                     bottom: 0.5rem;
//                     font-weight: 900;
//                     border:none;
//                     background-color: var(--color-ite-menu);
//                     border-bottom-right-radius: 20px;
//                     border: 1px solid black ;
//                 }
//                 .cont_t button:hover{
//                     background-color: turquoise;
//                     cursor: pointer;
//                     transform: scale(1.1);
//                     transition: 0.3s ease;
//                 }
                
//                 </style>
//             <div class="weather">
//                 <div class="ropa">
//                     <img "${getImage}" class="prenda">
//                 </div>
//                 <div class="cont_t">
//                     <h3>"${nombre}"</h3>
//                     <h5>"${precio}"</h5>
//                     <button>Agregar</button>
//                 </div>
//             </div>
//             `;
//             add_abrigo .append(div);
//             div.querySelector('.abrigo').addEventListener('click', () => {
//                 const frame = document.querySelector("add-abrigo");
//                 frame.setAttribute("uri", uri);
//             })
            

    //         this.innerHTML=`
    //     <style>
    //     .weather{
    //         display: flex;
    //         max-width:100% ;
    //         max-height: 100%;
    //         flex-direction: column;
    //     }
    //     .weather img{
            
    //         width: 100%;
    //         height: auto;
            
    //     }
    //     .cont_t{
    //         display: flex;
    //         width: 14rem;
    //         height: 27%;
    //         flex-direction: column;
    //         background-color: orange;
    //         border-bottom-right-radius: 40px;
    //         gap: 0.5rem;
    //         box-sizing: border-box;
    //         padding: 10px;
    //         position: relative;
    //     }
    //     .cont_t button{
    //         position: absolute;
    //         width:5rem;
    //         height: 1.5rem;
    //         right: 1rem;
    //         bottom: 0.5rem;
    //         font-weight: 900;
    //         border:none;
    //         background-color: var(--color-ite-menu);
    //         border-bottom-right-radius: 20px;
    //         border: 1px solid black ;
    //     }
    //     .cont_t button:hover{
    //         background-color: turquoise;
    //         cursor: pointer;
    //         transform: scale(1.1);
    //         transition: 0.3s ease;
    //     }
        
    //     </style>    
    //     <div class="weather">
    //     <div class="ropa">
    //         <img "${imagen}" class="prenda">
    //     </div>
    //     <div class="cont_t">
    //         <h3>"${nombre}"</h3>
    //         <h5>"${precio}"</h5>
    //     </div>
    // </div>
    //     `
//         }
//         catch(error){
//             console.log(error)
//         }
//     }
// }

// listarAlbum.innerHTML = '';
//             const getImage = albumsRandom[i]?.data.coverArt.sources[0]?.url;
//             const firstImage = albumsRandom[i]?.data.coverArt.sources[0]?.url;
//             const imagen = getImage ?? firstImage;
//             const nombre = albumsRandom[i].data.name;
//             const nombreArtista = albumsRandom[i].data.artists.items[0]?.profile.name;
//             const fecha = albumsRandom[i].data.date.year;
//             const uri = albumsRandom[i].data.uri;


//             const div = document.createElement("div");
//             div.classList.add("album");
//             div.innerHTML = `
//                 <div class="album_order" data-id="${uri}">
//                     <div class="imagen_album">
//                         <img src="${imagen}" alt="" class="portada">
//                     </div>
//                     <div class="info_album">
//                         <h3>${nombre}</h3>
//                         <p>${nombreArtista}</p>
//                         <p>${fecha}</p>
//                     </div>
//                 </div>
//             `;
//             listarAlbum.append(div);
//             div.querySelector('.album_order').addEventListener('click', () => {
//                 const frame = document.querySelector("my-frame");
//                 frame.setAttribute("uri", uri);
//             });
//         }
//     } catch (error) {
//         console.error(error);
//     }
export const abrigosNuevos = async()=>{
    let res = await fetch("http://172.16.101.146:5999/abrigo?id")
    let data = await res.json();
    let dataupdate=[];
    data.forEach(val => {
        dataupdate.push({
            imagen: val.imagen,
            nombre: val.nombre,
            precio: val.precio
        })
      });
    return dataupdate;
    }