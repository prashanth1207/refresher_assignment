export let sessionHelper = {
  add_list(dog_breed_list){
    return dog_breed_list.map((dog) =>{
      return $(`<li id="${dog.id}" href='#' class='list-group'>${dog.name}</li>`);
    });
  },
  get_session_storage_list(){
    return JSON.parse(sessionStorage.getItem('breed_names')) || [];
  },
  get_local_storage_list(){
    return JSON.parse(localStorage.getItem('breed_names')) || [];
  },
  add_to_local_storage(name){
    let items = this.get_local_storage_list()
    items.push(name)
    localStorage.setItem('breed_names', JSON.stringify(items));
  },
  add_to_session_storage(name){
    let items = this.get_session_storage_list()
    items.push(name)
    sessionStorage.setItem('breed_names', JSON.stringify(items));
  },
}