<template>
    <div class="home">
        <Header />
        <Products :products="products" />
    </div>
</template>
<script>
import axios from '../axios';
import HeaderVue from '../components/Header.vue';
import ProductsVue from '../components/Products.vue';
export default {
    data() {
        return {
            products: null,
        }
    },
    components: {
        Header: HeaderVue,
        Products: ProductsVue,
    },
    created() {
        const user = async () => {
            const res = await axios.get("/auth/user", {
                headers: {
                    authorization: this.$store.state.token,
                }
            })
            console.log(res)
        }
        user()
        const products = async () => {
            const res = await axios.get("/product")
            this.products = res.data
        }
        products()
    }
}
</script>
<style lang="scss">
.home {
    padding: 20px 300px;
}
</style>