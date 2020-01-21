import React from 'react'
import Item from '../components/Item'

export default class ItemsContainer extends React.Component {

    mapAllItems = () => {
        // console.log(this.props)
        return this.props.items.map((item) => {
            return <Item item={item} addItemToCart={this.props.addItemToCart} />
        })
    }
    
    render () {
        return (
            

            <div>

                <h2 className="py-5 col-10 mx-auto text-title3 font-weight-bold text-blue text-center">
                    Product List
                </h2>
            
                {this.mapAllItems()}
            </div>
        )
    }

}
