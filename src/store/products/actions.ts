import fakeShopApi from "@/api/fatyDevStoreApi";
import { Product } from "@/models/product";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IProductsState } from "./state";

 const actions: ActionTree<IProductsState, IState> = {
    // Fetch all Products
    async fetchProducts({commit}) {
        commit("setIsLoading", true);
        const { data } = await fakeShopApi.get<unknown, AxiosResponse<Product[]>>('/products');
        commit('setIsLoading', false);
        commit('setProducts', data)
    },

    // Retrieve Product by Id
    async fetchProductById({commit}, productId: number) {
        commit('setIsLoading', true);
        const { data } = await fakeShopApi.get<unknown, AxiosResponse<Product>>(`/products/${productId}`);
        commit('setIsLoading', false);
        commit('setSelectedProduct', data); 
    },

    // Retrieve Products by their Title
    async fetchFilteredProducts({commit}, filter: string) {
        commit('setIsLoading', true)
        const { data } = await fakeShopApi.get<unknown, AxiosResponse<Product[]>>(`/products?title=${filter.trim().toLowerCase()}`)
        commit('setIsLoading', false)
        commit('setFilteredProducts', data)
    }
 }
 
 export default actions;