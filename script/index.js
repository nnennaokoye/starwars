
function openImg(image) {
  const popImgBox = document.getElementById("popImgBox");
  const popImg = document.getElementById("popImg");

  popImgBox.style.display = "flex";
  popImg.src = image;

}
function closeImg() {
  const popImgBox = document.getElementById("popImgBox");
  popImgBox.style.display = "none";
}

// function displayCharacterData(data){
//   const characterDataDisplay = document.getElementById('character-data');
//   characterDataDisplay.innerHTML =`
//   <p>Name: ${data.name}</p>
//   <p>Height: ${data.name}</p>
//   <p>Gender: ${data.name}</p>
//   `;
  
// }

function displayCharacterData(data) {
  const characterDataDisplay = document.getElementById('character-data');
  if (data.length > 0) {
    const character = data[0]; // Access the first character in the array
    characterDataDisplay.innerHTML = `
      <p>Name: ${character.name}</p>
      <p>Height: ${character.height}</p>
      <p>Gender: ${character.gender}</p>
    `;
  } else {
    characterDataDisplay.innerHTML = 'Character not found';
  }
}

function fetchCharacterData(characterName) {
  const apiUrl = `https://swapi.dev/api/people/?search=${characterName}`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.results.length > 0) {
        const character = data.results;
        console.log(character)
        displayCharacterData(character);
      } else {
        console.log(`Character not found: ${characterName}`);
      }
    })
    .catch(error => {
      console.log(`Fetch error:`, error);
    });
}
const galleryItems = document.querySelectorAll('.gallery img');
galleryItems.forEach(item => {
  item.addEventListener('click',function () {
    const characterName = item.getAttribute('data-character');
    fetchCharacterData(characterName);
  });
});


