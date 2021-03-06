import React, { Component } from 'react'
import { Button, Header, Card, Icon, Image, Modal } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default class CartTotal extends Component {
    
    state = {     
        open: false
    }

    
    show = (dimmer) => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })
    
    onClick = ()=>{
        // console.log("testing")
        this.props.checkout()
        this.setState({ open: true })
        //console.log(this.show)
    }

    render() {
        const { open, dimmer } = this.state;

        return (
            <div> 
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right ">
                        <h5>
                            <span className="text-title"> subtotal :</span>{" "}
                            <strong>${this.props.total} </strong>
                        </h5>
                        <h5>
                            <span className="text-title"> tax :</span>{" "}
                            <strong>${(this.props.total * .085).toFixed(2)} </strong>
                        </h5>
                        <h5>
                            <span className="text-title"> total :</span>{" "}
                            <strong>{((this.props.total) * .085) + this.props.total }</strong>
                        </h5>
                            <button onClick={()=>{this.onClick()}} className="checkout-button">
                            Checkout
                        </button>    
                    </div>
                </div>
            </div>
            
                <Modal size='tiny' dimmer={dimmer} open={open} onClose={this.close} closeIcon>
                <Modal.Header>Congrats on your Purchase!</Modal.Header>
                <Modal.Content image>
                    <Image
                        wrapped
                        size='medium'
                            src={'https://image.shutterstock.com/image-vector/congratulations-typography-lettering-handwritten-vector-260nw-1049534216.jpg'} alt="generic image"
                    />
                    <Modal.Description>
                        <Header>Order Total</Header>
                        <p>${((this.props.total) * .085) + this.props.total}</p>

                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                <NavLink to="/browse" >
                    <button className="checkout-button" onClick={() => {this.close() }}>
                        Back to Product List
                        </button>
                </NavLink>
                    {/* <button onClick={() => { this.handleClick() }} className="checkout-button-yellow">
                        <NavLink to="/cart" >
                            Go To Cart
                        </NavLink> */}
                        {/* </button> */}

                    {/* onClick={this.close} */}

                </Modal.Actions>
            </Modal>
            </div>

        )
    }
}
