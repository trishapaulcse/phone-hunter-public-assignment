document.getElementById('error-message').style.display = 'none';
const loadsearchBox = () => {
    const searchBox = document.getElementById('input-field');
    const searchText = searchBox.value;
    //console.log(searchText);
    searchBox.value = '';
    if (searchText == '') {
        document.getElementById('error-message').style.display = 'block';
    }
    else {
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayData(data.data))
            .catch(error => console.log(error))
    }
}
const displayData = phones => {
    const div = document.getElementById('phone-list');
    div.innerHTML = '';
    phones.forEach(phone => {
        div.classList.add('col');
        const phonesDiv = document.createElement('div');
        phonesDiv.innerHTML = `
        <div class ="card h-100">
        <img class ="w-50 mx-auto mt-2" src ="${phone.image}" class ="card-img-top" alt="...">
        <div class ="card-body">
        <h5 class ="card-text">${phone.brand}</h5>
        <p class="card-text">${phone.phone_name}</p>
        <button class ="bg-primary" onclick="phoneDetails('${phone.slug})" >Details</button>
        </div>
        <p class ="card-text text-center">${phone.slug}</p>
    })
}