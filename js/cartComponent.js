Vue.component(`cart`, {
    props: [`products`],
    template: `
        <div class="cart_Block">
            <cart__item v-for="item of products"
            :obj="item"></cart__item>
        </div>
    `
})
Vue.component(`cart__item`, {
    props: [`obj`],
    template: `
    <div class="cart__item">
        <div class="cart__item__left">
            <img :src="obj.image" class="cartImg" alt="some img">
            
        </div>
        <div class="cart__item__right">
            <h3>{{obj.name}}</h3>
            <p>{{obj.detail}}</p>
            <p>price of each: {{obj.price}}$</p>
            <p>quabtity: {{obj.quantity}}</p>
            <p>sum: {{obj.price * obj.quantity}}$</p>
            <button class="remove__btn" @click="$root.remove(obj)">X</button>
        </div>
    </div>
    `
})