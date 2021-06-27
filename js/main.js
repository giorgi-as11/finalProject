//Отправляйте свои данные с помощью $emit в верхний компонент, а вниз с помощью props
const API = 'https://raw.githubusercontent.com/mstrutt/product-list/master/products.json';

const app = new Vue({
    el: '#app',
    data: {
        userSearch: '',
        showCart: false,
        // img: filtered.image,
        cartItems: [],
        filtered: [],
        products: [],
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error)
                    this.error = true
                })
        },
        addProduct(item) {
            this.getJson(`${API}`)
                .then(data => {
                    let find = this.cartItems.find(el => el.name === item.name);
                    if (find) {
                        find.quantity++;
                    } else {
                        const prod = Object.assign({ quantity: 1 }, item);
                        this.cartItems.push(prod)
                    }
                })

        },
        remove(item) {
            this.getJson(`${API}`)
                .then(data => {
                    if (item.quantity > 1) {
                        item.quantity--;
                    } else {
                        this.cartItems.splice(this.cartItems.indexOf(item), 1);
                    }

                })
        },
        filter() {
            let regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.name));
        }
    },
    mounted() {
        this.getJson(`${API}`)
            .then(data => {
                for (let item of data) {
                    this.$data.products.push(item);
                    this.$data.filtered.push(item);

                }

            });
        console.log(this.filtered)
    }

});