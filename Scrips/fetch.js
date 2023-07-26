let url= "https://pokeapi.co/api/v2";

let offset = 0
let limit = 20

const creatPoke = async ()  => {
    try {
        const res = await fetch(`${url}/pokemon?offset=${offset}&limit=${limit}`);  // name + url pokemon API
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

            <div class="buybtn">
                <p> ${dataPokemon.base_experience}</p>
                <button>Buy</button>
            </div>
            `
            container.appendChild(pokeCard) 

        });
       offset+=limit 
    }catch (error){
        alert ("error");
    }
}

creatPoke(); 

const showmore = document.querySelector(".buttonbuymore")

showmore.addEventListener("click", creatPoke)

const filter = document.querySelectorAll('.type');

filter.forEach((filterType) => {
    filterType.addEventListener("click", (event) => {
      event.preventDefault();
      const type = filterType.textContent.toLowerCase();
      filterByType(type);
    });
  });
  
  const filterByType = (type) => {
    const cards = document.querySelectorAll(".pokeCard");
    cards.forEach((card) => {
      const cardType1 = card.getAttribute("type1");
      const cardType2 = card.getAttribute("type2");
  
      if (type === "all" || cardType1 === type || cardType2 === type) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  };