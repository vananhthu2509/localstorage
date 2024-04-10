function view(){
    var StorageValue = JSON.parse(localStorage.getItem('products'));
    var html = ``
    for(i = 0; i < StorageValue.length; i++){
        html += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="./img/${StorageValue[i].image}" class="card-img-top" style="width: 100%; height: 300px;" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${StorageValue[i].name}</h5>
                    <p class="card-text">Destination: ${StorageValue[i].destination}</p>
                    <p class="card-text">Check-in Date: ${StorageValue[i].checkInDate}</p>
                    <p class="card-text">Check-out Date: ${StorageValue[i].checkOutDate}</p>
                    <p class="card-text">Number of Travelers: ${StorageValue[i].numTravelers}</p>
                </div>
            </div>
        </div>
    `
    }
    document.getElementById('show').innerHTML = html
}
