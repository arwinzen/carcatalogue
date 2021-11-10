import React from 'react';
import classes from './listItem.module.css';
import {Link} from 'react-router-dom';

class ListItem extends React.Component {
    render() {
        return (
            <div className={classes.listWrapper}>
                <div className={classes.list_imgHolder}>
                    <img className={classes.list_img} src={this.props.image} alt={this.props.name} />
                </div>
                <div className={classes.list_details}>
                    <h3>Model : 

                        <Link 
                            to={this.props.link}
                            state= {this.props.carData}
                        >
                            {this.props.name}
                        </Link>

                    </h3>
                    <p>Cost: {this.props.cost}</p>
                    <p>{this.props.short_desc}</p>
                    {/* <p>{this.props.bullet_desc}</p> */}
                </div>
            </div> 
        )};
}

export default ListItem;