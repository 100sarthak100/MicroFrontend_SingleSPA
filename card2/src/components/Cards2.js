import React, { Component } from 'react';
import SpringBootAPI from '../api/SpringBootAPI';
import Card2 from './Card2';

export class Cards2 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cards: [],
            card: {},
            cardId: '',
            cardTitle: '',
            cardImg1File: '',
            cardImg1Text: '',
            cardImg2File: '',
            cardImg2Text: '',
            cardImg3File: '',
            cardImg3Text: '',
            cardImg4File: '',
            cardImg4Text: '',
            cardText: ''
        }
    }

    componentDidMount() {
        this.getCards();
    }

    getCards = () => {
        SpringBootAPI.getData()
            .then(response => {
                this.setState({
                    cards: response.data
                })
            })
    }

    render() {
        return (
            <>
                <div style={{ display: "grid", gridTemplateColumns: "auto auto auto auto", gridGap: "0.5em", justifyContent: "space-evenly" }}>
                    {this.state.cards.length ?
                        this.state.cards.map((c) =>
                            <Card2 c={c} key={c.cardId} />
                        ) : <h2>Loading...</h2>
                    }
                </div>
            </>
        )
    }
}


export default Cards2;