export const ApiCall = () => {
  return fetch("https://api.covid19india.org/state_district_wise.json", {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
