const TIMESTAMP = "1581787935";
const APIKEY = "22c3fbaad8f81ae720fd05be826de182";
const HASH = "0be7017803441464d9172732e08858ac";

const urlGetCharacters = `http://gateway.marvel.com/v1/public/characters?ts=${TIMESTAMP}&apikey=${APIKEY}&hash=${HASH}`;

export const getCharacters = () => {
    return fetch(urlGetCharacters)
        .then(r => r.json());
}

export const getCharactersByName = (name) => {
    return fetch(`${urlGetCharacters}&nameStartsWith=${name}`)
        .then(r => r.json());
}