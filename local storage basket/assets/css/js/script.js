const elements = document.querySelector(".elements");

const favorite = document.querySelector("a");



const ads = [
    {
        id: 1,
        name: 'Volvo',
        price: 76000,
        currency: 'AZN',
        isVIP: false,
        Created: '11-11-2011',
        imageSrc: 'https://turbo.azstatic.com/uploads/full/2021%2F06%2F25%2F12%2F19%2F45%2F3355726b-54de-4035-b035-b77c50cd9500%2F77298_NaA7sRcK3Oh2hHwX0c6X-Q.jpg'
    },
    {
        id: 2,
        name: 'Mazda',
        price: 3600,
        currency: 'AZN',
        isVIP: true,
        Created: '11-04-2011',
        imageSrc: 'https://turbo.azstatic.com/uploads/full/2021%2F02%2F17%2F10%2F17%2F10%2Fe041fe2c-cd29-43ce-93cf-1a616c4d3a90%2F24642_h0M8QHDBVCpNVkUWT8Zk_g.jpg'
    },
    {
        id: 3,
        name: 'Kia',
        price: 465600,
        currency: 'AZN',
        isVIP: false,
        Created: '11-11-2011',
        imageSrc: 'https://turbo.azstatic.com/uploads/full/2021%2F08%2F08%2F20%2F27%2F02%2Fd5b19fd8-359c-4e76-a58f-eba93c1ae378%2F94698_689dGmaf_K5hlG8k0mDCuw.jpg'
    },
    {
        id: 4,
        name: 'Volvo',
        price: 45000,
        currency: 'AZN',
        isVIP: false,
        Created: '11-11-2011',
        imageSrc: 'https://turbo.azstatic.com/uploads/full/2020%2F10%2F20%2F12%2F11%2F37%2F8a98a1b2-8068-40cf-8662-85b7aaf79908%2F11551_rFBRyfonRGdS7CbCND4SXg.jpg'
    }
]
// ads.forEach(ad => {
//     let adHTML = `   <div class="col-3">
//     <i class="bi bi-heart" id=${ad.id}></i>
//     <img src=${ad.imageSrc} />

//     <p>${ad.name}</p>
//     <span>${ad.price}</span>

// </div>`
//     elements.innerHTML += adHTML;

// });


// const hearts=document.querySelectorAll(".bi-heart");

// let arr=[];
// if(localStorage.getItem('products')){
//     arr = JSON.parse(localStorage.getItem('products'));
// }

// hearts.forEach(heart=>{
//     heart.addEventListener('click',function(){
//         heart.classList.replace('bi-heart','bi-heart-fill');
//         let clickedElement = ads.find(function(ad){
//             return ad.id==heart.id
//         });

//         arr.push(clickedElement);

//         localStorage.setItem('products',JSON.stringify(arr));

//     })
// })









ads.forEach(ad => {
    let adHTML = `  <div class="col-3">
    <i class="bi bi-heart" id=${ad.id}></i>
    <img src=${ad.imageSrc} />
        <p>${ad.name}</p>
        <span>${ad.price}</span>
   
</div>`
    elements.innerHTML += adHTML;
});
const hearts = document.querySelectorAll(".bi-heart");

let arr = [];

hearts.forEach(heart => {
    heart.addEventListener('click', function () {
        let clickedElement = ads.find(ad => {
            return  ad.id == heart.id
         })
if(heart.classList.contains('bi-heart')){
    heart.classList.replace('bi-heart', 'bi-heart-fill');
    arr.push(clickedElement);
    localStorage.setItem('products', JSON.stringify(arr));
}

  else{
      heart.classList.replace('bi-heart-fill','bi-heart');
      let favArr=JSON.parse(localStorage.getItem('products'));
      arr=favArr.filter(fv=>fv.id!=heart.id);
      
      localStorage.setItem('products',JSON.stringify(arr));

  }    
      
       
        
    })
})

