import { abrigosNuevos } from "./components/add.js";
const queryAboutTable1 = document.querySelector("#queryAboutTable1");
queryAboutTable1.addEventListener("click", async()=>{
    let [,reportcontainer] = queryAboutTable1.children
    if(!reportcontainer.innerHTML){
        let data = await abrigosNuevos();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
            <style>
        .weather{
            display: flex;
            max-width:100% ;
            max-height: 100%;
            flex-direction: column;
        }
        .weather img{
            
            width: 100%;
            height: auto;
            
        }
        .cont_t{
            display: flex;
            width: 14rem;
            height: 27%;
            flex-direction: column;
            background-color: orange;
            border-bottom-right-radius: 40px;
            gap: 0.5rem;
            box-sizing: border-box;
            padding: 10px;
            position: relative;
        }
        .cont_t button{
            position: absolute;
            width:5rem;
            height: 1.5rem;
            right: 1rem;
            bottom: 0.5rem;
            font-weight: 900;
            border:none;
            background-color: var(--color-ite-menu);
            border-bottom-right-radius: 20px;
            border: 1px solid black ;
        }
        .cont_t button:hover{
            background-color: turquoise;
            cursor: pointer;
            transform: scale(1.1);
            transition: 0.3s ease;
        }
        
        </style>  
            <div class="weather">
                <div class="ropa">
                    <img "${imagen}" class="prenda">
                </div>
                <div class="cont_t">
                    <h3>"${nombre}"</h3>
                    <h5>"${precio}"</h5>
                </div>
            </div>
            `;
        });
        reportcontainer.innerHTML = plantilla;
    }
})