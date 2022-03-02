document.getElementById('error-message').style.display = 'none';
const loadSearchText = () => {
    const searchBox = document.getElementById('search-field');
    const searchText = searchBox.value;

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
        <button class ="bg-primary" onclick="phoneDetails('${phone.slug}')" >Details</button>
        </div>
        `;
        div.appendChild(phonesDiv);
    })
}
const phoneDetails = (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayphoneDetails(data.data));
}

const displayphoneDetails = (phoneDetail) => {
    console.log(phoneDetail);

    const phoneDetailShow = document.getElementById('phone-Details');
    phoneDetailShow.innerHTML = '';
    phoneDetailShow.innerHTML = `
    <div class = "card h-100 mx-auto">
    <img class "w-25 mx-auto mt-2" src="${phoneDetail.image}" class="card-img-top" alt='
    <div class ="card-body text-center">
    <p class ="card-text"> <b>ChipSet:</b> ${phoneDetail.mainFeatures.chipSet}</p>
    <p class ="card-text"> <b>DisplaySize:</b> ${phoneDetail.mainFeatures.displaySize}</p>
    <p class="card-text"<b>Memory:</b> ${phoneDetail.mainFeatures.memory}</p>
    <p class="card-text"> <b>Storage:</b> ${phoneDetail.mainFeatures.storage}</p>
    <p class="card-text"> <b>ReleaseDate:</b> ${phoneDetail.releaseDate} ||| 'No release data' </p>
    </div>
    </div>
    `;
}