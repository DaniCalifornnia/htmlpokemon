const url = 'https://pokeapi.co/api/v2/pokemon'

const character = fetch(url)
    .then(res => res.json())
    .then(data => {
        data.results.forEach(character => {
            console.log(character.name)
        });
    })

    