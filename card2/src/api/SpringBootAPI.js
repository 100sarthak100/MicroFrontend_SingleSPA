import React, { Component } from 'react'
import axios from 'axios';

const CARD_API_URL = "http://localhost:8001/card"; // spring boot

class SpringBootAPI {
    getData() {
        return axios.get(`${CARD_API_URL}/`);
    }

    postData(card) {
        return axios.post(`${CARD_API_URL}/`, card);
    }

    deleteData(cardId) {
        return axios.delete(`${CARD_API_URL}/${cardId}`);
    }

    updateData(card) {
        return axios.put(`${CARD_API_URL}/`, CARD_API_URL);
    }
}

export default new SpringBootAPI
