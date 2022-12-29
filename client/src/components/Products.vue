<template>
    <div class="products__container">
        <div class="product" v-for="product in products">
            <RouterLink :to="'single/' + product.id" class="link">
                <img :src="product.img" :alt="product.img">
                <p>{{ product.name }}</p>
                <span>{{ product.price }}</span>
            </RouterLink>
        </div>
    </div>
</template>
<script>
import { RouterLink } from "vue-router"
export default {
    props: {
        products: {
            type: Object,
            required: true
        }
    },
}
</script>
<style scoped lang="scss">
.products__container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 20px 0px;
    justify-content: center;

    .product {
        width: 250px;
        height: 400px;
        border: 1px solid #000;
        padding: 10px;
        border-radius: 10px;
        cursor: pointer;

        img {
            width: 100%;
            height: 70%;
            object-fit: contain;
        }

        p {
            font-size: 20px;
            font-weight: 500;
        }

        span {
            font-weight: 700;
            position: relative;
            top: 20px;
        }
    }
}
</style>