import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from './Product/Product';
import { getProducts } from '../../actions/products';

const Products = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const products = useSelector(state => state.products);
    console.log(products);

    return (
        <>
            {
                !products ? (
                    <h2>Loading...</h2>
                ) : (
                        <div style={{ display: "grid", gridTemplateColumns: "auto auto auto auto auto", gridRowGap: "0.7em", gridColumnGap: "0.6em", justifyContent: "space-around" }}>
                            {
                                products.map((p) =>
                                    <Product p={p} key={p.productId} />
                                )
                            }
                        </div>
                    )
            }
        </>
    )
}

export default Products;



// import React, { Component } from 'react';
// import SpringBootAPI from '../api/SpringBootAPI';
// import Product from './Product/Product';

// export class Products extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             products: [],
//             product: {},
//             productId: '',
//             productName: '',
//             quantityOnHand: '',
//             price: '',
//             msg: '',
//             updateFlag: false
//         }
//         this.deleteProduct = this.deleteProduct.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//     }

//     handleChange(e) {
//         e.preventDefault();
//         const { name, value } = e.target;
//         var errors = this.state.errors;

//         this.setState(prevState => ({
//             errors, [e.target.name]: e.target.value,
//             product: {
//                 ...prevState.product,
//                 productId: this.state.productId,
//                 productName: this.state.productName,
//                 quantityOnHand: this.state.quantityOnHand,
//                 price: this.state.price
//             }
//         }));

//     }


//     componentDidMount() {
//         this.getProduct();
//     }

//     getProduct = () => {
//         SpringBootAPI.getData()
//             .then(response => {
//                 this.setState({
//                     products: response.data
//                 })
//             })
//     }

//     postProduct = () => {
//         SpringBootAPI.postData(this.state.product)
//             .then(() => {
//                 this.setState(prevState => ({
//                     products: [this.state.product, ...prevState.products]
//                 }));
//                 this.getProduct();
//             })
//     }

//     deleteProduct(productId) {
//         SpringBootAPI.deleteData(productId)
//             .then((res) => {
//                 this.setState({
//                     msg: `The product with ID ${productId} deleted successfully`
//                 })
//                 this.getProduct();
//             })
//     }

//     updateProduct = (product) => {

//         SpringBootAPI.updateData(product)
//             .then((res) => {
//                 this.setState({
//                     msg: `The product with ID ${product.productId} updated successfully`
//                 })
//                 this.getProduct();
//             })
//     }

//     fillProduct(p) {
//         this.setState(prevState => ({
//             ...prevState.errors,
//             ...prevState.products,
//             productId: p.productId,
//             productName: p.productName,
//             quantityOnHand: p.quantityOnHand,
//             price: p.price,
//             updateFlag: true
//         }));

//         console.log(p)
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(this.state.updateFlag)
//         if (this.state.updateFlag === true) {
//             this.setState({
//                 product: {
//                     productId: this.state.productId,
//                     productName: this.state.productName,
//                     quantityOnHand: this.state.quantityOnHand,
//                     price: this.state.price
//                 },
//                 updateFlag: false
//             });
//             this.updateProduct(this.state.product);
//         } else {
//             this.postProduct();
//         }

//         this.setState({
//             products: [],
//             product: {},
//             productId: '',
//             productName: '',
//             quantityOnHand: '',
//             price: '',
//             msg: '',
//         })
//     };


//     render() {
//         console.log(this.state.products);
//         return (
//             <>
//                 <div style={{ display: "grid", gridTemplateColumns: "auto auto auto auto auto", gridRowGap: "0.7em", gridColumnGap: "0.6em", justifyContent: "space-around" }}>
//                     {
//                         this.state.products.map((p) =>
//                             <Product p={p} key={p.productId} />
//                         )
//                     }
//                 </div>
//             </>
//         )
//     }
// }


// export default Products;