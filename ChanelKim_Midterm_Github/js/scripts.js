/* code assistance using chatGPT 
eBird API documentation (Recent observations in a region): https://documenter.getpostman.com/view/664302/S1ENwy59#3d2a17c1-2129-475c-b4c8-7d362d6000cd
Mapbox Geocoding API documentation: https://docs.mapbox.com/api/search/geocoding/
*/

// html elements
const getSpeciesButton = document.getElementById("getSpeciesButton");
const locationInput = document.getElementById("locationInput");
const speciesList = document.getElementById("speciesList");

function getLocationCoordinates(locationName) {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${locationName}.json?access_token=${YOUR_MAPBOX_ACCESS_TOKEN}&limit=1`;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.features.length > 0) {
        const coordinates = data.features[0].center;
        console.log(`${locationName}: ${coordinates}`);
        return coordinates;
      } else {
        throw new Error(`No location found for ${locationName}`);
      }
    })
    .catch((error) => console.error(error));
}

// API CALL: geocode input maps to to eBird API, function outputs matching species
function getSpecies(locationName) {
  getLocationCoordinates(locationName)
    .then((coordinates) => {
      const url = `https://api.ebird.org/v2/data/obs/geo/recent?lat=${coordinates[1]}&lng=${coordinates[0]}&maxResults=10&key=${API_KEY}`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          speciesList.innerHTML = ""; // Clear previous species

          // Sort the observations by howMany in descending order
          data.sort((a, b) => b.howMany - a.howMany);

          data.forEach((observation) => {
            const speciesCode = observation.speciesCode;
            const commonName = observation.comName;
            const howMany = observation.howMany;
            const li = document.createElement("li");
            li.textContent = `${commonName} (${howMany})`;
            speciesList.appendChild(li);
          });
        })
        .catch((error) => console.error(error));
    })
    .catch((error) => console.error(error));
}

getSpeciesButton.addEventListener("click", () => {
  const locationName = locationInput.value;
  getSpecies(locationName);
});
