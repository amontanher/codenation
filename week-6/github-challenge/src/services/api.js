export const getRepositoriesByUser = async name => {
  const data = await fetch(`https://api.github.com/users/${name}/repos`);
  const repositories = await data.json();

  return { repositories, status: data.status };
};
