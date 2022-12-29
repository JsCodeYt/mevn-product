<template>
    <div class="single" v-if="product">
        <div class="single__img">
            <img :src="product[0].img" alt="">
        </div>
        <div class="single__info">
            <h1>{{ product[0].name }}</h1>
            <ul class="info__items" style="margin-top: 20px;">
                <li class="info__item">
                    <h2>{{ product[0].brend && "Brend" }}</h2>
                    <span>{{ product[0].brend }}</span>
                </li>
                <li class="info__item">
                    <h2>{{ product[0].OS ? "OS turi" : "Ram" }}</h2>
                    <span>{{ product[0].OS || product[0].ram }}</span>
                </li>
                <li class="info__item">
                    <h2>Diogonal</h2>
                    <span>{{ product[0].dioganal }}</span>
                </li>
                <li class="info__item">
                    <h3>Ekran</h3>
                    <span>{{ product[0].ekran }}</span>
                </li>
                <li class="info__item">
                    <h2>Kamera</h2>
                    <span>{{ product[0].photocam }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from '../axios';

export default {
    data() {
        return {
            product: null,
        }
    },
    methods: {
        async getProduct() {
            const res = await axios.get(`/product/${this.$route.params.id}`)
            this.product = res.data
            console.log(this.product[0])
        }
    },
    mounted() {
        this.getProduct()
    }
}
</script>
<style lang="scss">
.single {
    display: flex;
    margin: 30px 0px;

    .single__img {
        flex: 5;

        img {
            width: 80%;
            height: 60%;
            object-fit: contain;
        }
    }

    .single__info {
        flex: 5;

        .info__items {
            display: flex;
            list-style: none;
            flex-direction: column;
            gap: 1rem;

            .info__item {
                display: flex;
                align-items: center;
                gap: 1rem;
            }
        }
    }
}
</style>