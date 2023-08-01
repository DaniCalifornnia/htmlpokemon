let url= "https://pokeapi.co/api/v2";

let offset = 0
let limit = 20

const filterOptions = document.querySelectorAll('.nav-all')

filterOptions.forEach (Option => Option.addEventListener ('click',filterByType ));

function filterByType (event){
const typeName = event.target.textContent.toLowerCase();
if (typeName === 'all'){
creatPoke();
console.log("entraaqui")
} else {
  const endPoint = `${url}/type/${typeName}`;
  console.log(endPoint);
getPokemonByType(endPoint);
}
}

async function getPokemonData (data){
  const pokemonData = [];
  data.forEach (async(item) => {
    const res = await fetch(item.pokemon.url)
    const data = await res.json();

    pokemonData.push({id:data.id,name:data.name,image:data.sprites.other["home"].front_default});
  })
  return pokemonData;
}

async function getPokemonByType (endPoint){

const respons = await fetch(endPoint);
const allData = await respons.json();
const pokemonData = await getPokemonData (allData.pokemon)
showCards (pokemonData);
}

function showCards (pokemons){
const container = document.querySelector('.container');
container.innerHTML="";
pokemons.forEach(pokemon =>{
let pokeCard = document.createElement ('div');
            pokeCard.className = 'pokeCard'
            pokeCard.innerHTML= `
            <div class= "headerCard">
                <p>${pokemon.name}</p>
                <i class = "a-sharp fa-regular fa-heart"></i>
            </div>
            
            <img class="imgPoke" src="${dataPokemon.sprites.other["home"].front_default}">

            <div class="buybtn">
                <p> ${dataPokemon.base_experience}</p>
                <button>Buy</button>
            </div>`
          } )
}


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



// const filter = document.querySelectorAll('.type');

// filter.forEach((filterType) => {
//     filterType.addEventListener("click", (event) => {
//       event.preventDefault();
//       const type = filterType.textContent.toLowerCase();
//       filterByType(type);
//     });
//   });



  // const filterByType = (type) => {
  //   const cards = document.querySelectorAll(".pokeCard");
  //   cards.forEach((card) => {
  //     const cardType1 = card.getAttribute("type1");
  //     const cardType2 = card.getAttribute("type2");
  
  //     if (type === "all" || cardType1 === type || cardType2 === type) {
  //       card.classList.remove("hidden");
  //     } else {
  //       card.classList.add("hidden");
  //     }
  //   });
  // };