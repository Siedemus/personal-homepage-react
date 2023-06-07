import apiLink from "../../Assets/apiLink";

export const getProjects = async () => {
  const response = await fetch(apiLink);

  if (!response.ok) {
    throw new Error();
  }

  return response.json();
};
