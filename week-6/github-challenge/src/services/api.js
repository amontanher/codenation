export const getRepositoriesByUser = (name) => {
    return fetch(`https://api.github.com/users/${name}/repos`).then(r => r.json());
}