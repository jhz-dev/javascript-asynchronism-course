const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character';

const calls = async (api) => {
    try {
        const characters = await fetchData(api);
        const character = await fetchData(characters.results[0].url);
        const { dimension } = await fetchData(character.origin.url);
    
        console.log(characters.info.count);
        console.log(character.name);
        console.log(dimension);
    } catch (error) {
        console.error(err)
    }
}

calls(API);