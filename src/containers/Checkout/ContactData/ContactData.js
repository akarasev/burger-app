import React from 'react';

import axios from '../../../axios-orders';
import styles from './ContactData.module.css';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends React.Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    };

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            totalPrice: this.props.price,
            customer: {
                name: 'Alex',
                address: {
                    street: 'Test st',
                    postalCode: '600000',
                    country: 'Russia'
                },
                email: 'test@example.org'
            },
            deliveryMethod: 'fastest'
        };
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading: false});
            });
    };

    render() {
        let form = (
            <form>
                <input type={'text'} className={styles.Input} name={'name'} placeholder={'Your name'}/>
                <input type={'text'} className={styles.Input} name={'email'} placeholder={'Your email'}/>
                <input type={'text'} className={styles.Input} name={'street'} placeholder={'Your street'}/>
                <input type={'text'} className={styles.Input} name={'postalCode'} placeholder={'Your postalCode'}/>
                <Button
                    btnType={'Success'}
                    clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner/>;
        }
        return (
            <div className={styles.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;