const Generate = document.getElementById('Generate');
const msg = document.getElementById("msg");
const pokiimg = document.getElementById("pokiimg");
const pokemon = document.getElementById("pokemon");

Generate.onclick = () => {
    const name = (String)(pokemon.value).toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .then(data => {
            pokiimg.src = data.sprites.front_default;
            pokiimg.classList.add("dis");
            msg.classList.remove("dis");
            msg.classList.add("disnone")
            pokiimg.classList.remove("disnone");
        })
        .catch(err => {
            msg.classList.add("dis");
            pokiimg.classList.add("disnone");
            pokiimg.classList.remove("dis");
            msg.classList.remove("disnone");
        })
}