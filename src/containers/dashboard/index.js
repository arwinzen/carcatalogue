import React from 'react';
import ListItem from '../../components/listItem';
import {products} from '../../productData';
import { Link } from "react-router-dom";
import classes from './dashboard.module.css';

class Dashboard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            key : '',
            products : products
        }
    }

    render() {
        // console.log(products);
        return (
            <>
                <div className={classes.dashboard_header}>
                    <input type="text" placeholder="Search" onChange={(key) => {this.setState({key: key.target.value}); }}/>
                    <h1>Car List</h1>
                    <Link to="/create">Create New Product</Link>
                </div>
                <div>
                    {  products.map(car => {
                            let key = new RegExp(this.state.key, 'gi');
                            console.log(key);
                            // console.log(car.name.match(key));
                            if (car.name.match(key)){
                                return (
                                    <ListItem 
                                        carData = {car}
                                        link={car.id}
                                        name={car.name} 
                                        image={car.image} 
                                        cost={car.cost} 
                                        short_desc={car.short_description} 
                                        bullet_desc={car.bullet_description} 
                                    />
                                );
                            }
                        })
                    }
                </div>
            </>
        );
    }
}

export default Dashboard;