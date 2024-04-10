var products = [
    {
        id: "SP1",
        name: 'Đà Nẵng',
        destination: "Cầu Vàng",
        checkInDate: "2012-02-03",
        checkOutDate: "2013-02-03",
        numTravelers: 3,
        image: 'Dn_.jpg'
    },
    {
        id: "SP2",
        name: 'Huế',
        destination: "Đại Nội Huế",
        checkInDate: "2012-02-03",
        checkOutDate: "2013-02-03",
        numTravelers: 3,
        image: 'HUE.png'
    },
    {
        id: "SP3",
        name: 'Nha Trang',
        destination: " Vinpearl Land",
        checkInDate: "2012-02-03",
        checkOutDate: "2013-02-03",
        numTravelers: 3,
        image: 'NT.jpg'
    },
]
// localStorage.setItem('products', JSON.stringify(products))
var addProduct = function(){
    var img = document.getElementById('img').value.slice(12)
    var product = {
        id: "SP" + parseInt(products.length+1),
        name: document.getElementById('name').value,
        destination:  document.getElementById('destination').value,
        checkInDate: document.getElementById('checkIn').value,
        checkOutDate: document.getElementById('checkOut').value,
        numTravelers: document.getElementById('soluong').value,
        image: img
    }
    products.push(product)
    localStorage.setItem('products', JSON.stringify(products))
    renderProduct()
    resetFormCreate()
}

var renderProduct = function(){
    var listPrducts = JSON.parse(localStorage.getItem('products'))
    var render = listPrducts.map((listPrduct,index) => {
        return `
           <tr>
              <td>${listPrduct.id}</td>
              <td>${listPrduct.name}</td>
              <td>${listPrduct.destination}</td>
              <td>${listPrduct.checkInDate}</td>
              <td>${listPrduct.checkOutDate}</td>
              <td>${listPrduct.numTravelers}</td>
              <td><img style="width: 50px; height: 50px" src="../img/${listPrduct.image}" alt="" ></td>
              <td>
                <button data-toggle="modal" data-target="#updateProduct" id="update" onclick="update(${index})" ><i class="fa fa-cogs"></i></button>
                <button onclick="deleted(${index})" id="deleted"><i class="fa fa-trash"></i></button>
              </td>
            </tr>
        `
    }).join('')
    document.getElementById('tbl').innerHTML = render
}
renderProduct()

var resetFormCreate = function(){
    document.getElementById('name').value = "",
    document.getElementById('destination').value = "",
    document.getElementById('checkIn').value = "",
    document.getElementById('checkOut').value = "",
    document.getElementById('soluong').value ="",
    document.getElementById('img').value = ""
}

var resetFormUpdate = function(){
    document.getElementById('nameUp').value = "",
    document.getElementById('destinationUp').value = "",
    document.getElementById('checkInUp').value = "",
    document.getElementById('checkOutUp').value = "",
    document.getElementById('soluongUp').value ="",
    document.getElementById('imgUp').value = ""
}

var deleted = function(index){
    products.splice(index, 1)
    localStorage.setItem('products', JSON.stringify(products))
    renderProduct()
}

var update = function(index){
    var lists = JSON.parse(localStorage.getItem('products'))
    document.getElementById('idUp').value = lists[index].id
    document.getElementById('nameUp').value = lists[index].name
    document.getElementById('destinationUp').value = lists[index].destination
    document.getElementById('checkInUp').value = lists[index].checkInDate
    document.getElementById('checkOutUp').value = lists[index].checkOutDate
    document.getElementById('soluongUp').value = lists[index].numTravelers
    document.getElementById('idUp').setAttribute('disabled', "disabled")

    document.getElementById('updated').addEventListener('click', () =>{
       lists[index].name = document.getElementById('nameUp').value
       lists[index].destination = document.getElementById('destinationUp').value
       lists[index].checkInDate = document.getElementById('checkInUp').value
       lists[index].checkOutDate = document.getElementById('checkOutUp').value
       lists[index].numTravelers = document.getElementById('soluongUp').value
       localStorage.setItem('products',JSON.stringify(lists))
       renderProduct()
       resetFormUpdate()
    
    })
}

function searchProduct(){
    var listPrduct = JSON.parse(localStorage.getItem('products'))
    var valueSearch = document.getElementById('valueSearch').value.toLowerCase()
    var filterProduct = listPrduct.filter(product => {
        return product.name.toLowerCase().includes(valueSearch) || product.destination.toLowerCase().includes(valueSearch)
    })
    var render = filterProduct.map((filterProduct,index) => {
        return `
        <tr>
           <td>${filterProduct.id}</td>
           <td>${filterProduct.name}</td>
           <td>${filterProduct.destination}</td>
           <td>${filterProduct.checkInDate}</td>
           <td>${filterProduct.checkOutDate}</td>
           <td>${filterProduct.numTravelers}</td>
           <td>${filterProduct.image}</td>
           <td>
             <button data-toggle="modal" data-target="#updateProduct" id="update" onclick="update(${index})" ><i class="fa fa-cogs"></i></button>
             <button onclick="deleted(${index})" id="deleted"><i class="fa fa-trash"></i></button>
           </td>
         </tr>
     `
    }).join('')
    document.getElementById('tbl').innerHTML = render
}
document.getElementById('search').addEventListener("click", function(event){
    event.preventDefault()
    searchProduct()
})



