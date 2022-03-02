const searchPhone = () => {
    const searchField = document.getElementById('search-field');
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
        const phoneDiv = document.createElement('div');
        phonesDiv.innerHTML = `
        <div class ="card h-100">
    })
}