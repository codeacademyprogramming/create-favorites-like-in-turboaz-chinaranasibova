window.addEventListener('load',function() {
    const row = document.querySelector('.row');
    const arr = JSON.parse(localStorage.getItem('products'));
    console.log(arr);
    arr.forEach(ad=>{
    const adHTML=`   <div class="col-3">
    <i class="bi bi-heart" id=${ad.id}></i>
    <img src=${ad.imageSrc} />
   
    <p>${ad.name}</p>
    <span>${ad.price}</span>

</div>`
row.innerHTML += adHTML;

});
});