export const getProjects = async () => {
  const response = await fetch("https://api.github.com/users/Siedemus/repos");

  if (!response.ok) {
    throw new Error();
  }

  return response.json();
};
