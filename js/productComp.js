Vue.component(`catalog`, {
    props: [`products`],
    template: `
        <div class="container product-center">
            <product v-for="item of products" :obj="item">
                
            </product>
        </div>
    `
});

Vue.component(`product`, {
    props: [`obj`],
    template: `
<article class="card">
    <div><img class="card-img" :src="obj.image" alt=""></div>
    <div class="title collumn">
        <h4>{{obj.name}}</h4>
        <p>{{obj.detail}}</p>
        <span>{{obj.price}} $</span>
        <button class="buy_btn" @click="$root.addProduct(obj)">ADD TO CART</button>
    </div>
</article>`
})