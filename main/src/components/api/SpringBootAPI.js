import React, { Component } from 'react'
import axios from 'axios';

const PRODUCT_API_URL = "http://localhost:8002/product"; // spring boot

class SpringBootAPI {
    getData() {
        return axios.get(`${PRODUCT_API_URL}/`);
    }

    postData(product) {
        return axios.post(`${PRODUCT_API_URL}/`, product);
    }

    deleteData(productId) {
        return axios.delete(`${PRODUCT_API_URL}/${productId}`);
    }

    updateData(product) {
        return axios.put(`${PRODUCT_API_URL}/`, product);
    }
}

export default new SpringBootAPI
