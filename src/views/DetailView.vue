<template>
    <div class="body">
        <div class="loading" v-if="isLoading">Loading...</div>
        <div class="product" v-else>
            <div class="slider">
                <div class="slider-content" v-for="(image, index) in product.images" :key="index" :style="`background-image: url(${image})`">
                    <img :src="product.images[index]" :alt="product.title">
                </div>
            </div>
            <div class="product-info">
                <h1 class="title">{{ product.title }}</h1>
                <h2 class="price">{{ product.price }}€</h2>
                <h3 class="description">{{ product.description }}</h3>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import useProducts from '@/composables/useProducts';


export default defineComponent({
    name: 'DetailView',
    props: {
        id: {
            type: Number,
            required: true,
        }
    },
    setup(props) {
        const { product, isLoading, fetchProductById } = useProducts()
        fetchProductById(props.id)

        return {
            product, 
            isLoading,
        }
    }
})
</script>

<style scoped>
.body {
    background-color: rgb(236, 239, 241);
    height: max-content;
    display: flex;
}
.product {
    width: 60%;
    box-shadow: 5px 8px 5px grey;
    background-color: white;
    padding: 2rem;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
}
.slider {
    position: relative;
    height: auto;
    max-height: 30rem;
    width: 90%;
    overflow: scroll;
    align-self: center;
    scroll-snap-type: y mandatory;
    display: grid;
    grid-auto-flow: row;
}
.slider-content {
    /* height: 20rem; */
    background-position: center;
    background-size: cover;
    scroll-snap-align: center;
}
.slider-content > img {
    width: 100%;
}
.product-info {
    /* width: 80%; */
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
</style>