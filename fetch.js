let url= "https://pokeapi.co/api/v2/pokemon";

const creatPoke = async ()  => {
    try {
        const res = await fetch(url);// name + url pokemon API
        const data = await res.json();

        data.results.forEach ( async (pokemon) => {

            const respons = await fetch(pokemon.url);// other data API
            const dataPokemon = await respons.json();

            const container = document.querySelector('.container');

            let pokeCard = document.createElement ('div');
            pokeCard.className = 'pokeCard'
            pokeCard.innerHTML= `
            <div class= "headerCard">
                <p>${dataPokemon.name}</p>
                <i class = "a-sharp fa-regular fa-heart"></i>
            </div>
            
            <img class="imgPoke" src="${dataPokemon.sprites.other["home"].front_default}">

            <div>
                <p> ${dataPokemon.base_experience}</p>
                <button>Buy</button>
            </div>
            `
            container.appendChild(pokeCard);
            

        });
        
    }catch (error){
        alert ("error");
    }
}

creatPoke();
   

    