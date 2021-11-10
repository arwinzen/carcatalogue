import React from 'react';
import {products} from '../../productData';
import classes from './createProduct.module.css';

class CreateProduct extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            id: '',
            name: '',
            description: '',
            cost: ''
        }
    }

    submitForm () {
        if (this.state.id && this.state.name && this.state.description && this.state.cost){
            if (!products.find(el => el.id === this.state.id)) {
                products.push(this.state);
                console.log(products);
                alert('New car added to the catalogue');
            } else {
                alert('ID has been reserved');
            }
            
            
        } else {
            alert('Please fill in required fields');
        }
        

        // don't submit if data is empty
        // array function find()
        // don't submit if id already exists
        
    }

    render() {
        return (
            <form className={ classes.createForm }>
                <div>
                    <label htmlFor="id"></label>
                    <input name="id" type="text" placeholder="ID" onChange={(idval) => {this.setState({id: idval.target.value})}} />
                </div>

                <div>
                    <label htmlFor="name"></label>
                    <input name="name" type="text" placeholder="Name" onChange={(nameval) => {this.setState({name: nameval.target.value})}} />
                </div>

                <div>
                    <label htmlFor="description"></label>
                    <input name="description" type="text" placeholder="Description" onChange={(desc) => {this.setState({description: desc.target.value})}} />
                </div>

                <div>
                    <label htmlFor="cost"></label>
                    <input name="id" type="text" placeholder="Cost" onChange={(cost) => {this.setState({cost: cost.target.value})}}/>
                </div>

                <input value="Submit" name="submit" type="button" onClick={() => {this.submitForm()}} />
            </form>
        )
    }
}

export default CreateProduct;