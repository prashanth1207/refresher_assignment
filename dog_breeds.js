//write a function which fetches data of random dog breeds and gives back information about that dog breed and an image of the breed

'use strict mode';

export async function fetch_random_dog_breed_names(){
  let data = await fetch('https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10').then((resp) => resp.json());
  return await data.map(breed => {
    return {name: breed['breeds'][0]['name'],id: breed['id']}
    });
}

export async function fetch_breed_details(breed_id){
  let data = await fetch(`https://api.thedogapi.com/v1/images/${breed_id}`).then((resp) => resp.json());
  return await {imageurl: data.url, details: data.breeds}
}

// async function random_dog_breed_details(){
//   const random_dog_breed_list = await fetch_random_dog_breed_names();
//   const random_breed = await random_dog_breed_list[Math.floor(Math.random() * random_dog_breed_list.length)];
//   return await fetch_breed_details(random_breed.id);
// }

