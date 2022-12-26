import PropTypes from 'prop-types';
import css from './ContactForm.module.css'
import { Component } from "react";



class ContactForm extends Component{
    state = {
        name: '',
        number: ''

    }
     handleChange = (e) => {
        const {name,value} = e.currentTarget

        this.setState({[name]:value})
     }

     handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state)
        this.resetState()

     }

     resetState = () =>{
        this.setState({
            name: '',
            number: ''
    
        })
     }


    render(){
        return (
    <form onSubmit={this.handleSubmit} className={css.form}>
     <label  className={css.label}>
        <input
            className={css.input}
            placeholder='Name'
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
        />
     </label>
     <label className={css.label}>
        <input
            className={css.input}
            placeholder='Number'
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
       />
     </label>
     <button type='submit' className={css.button}>Add Contact</button>
    </form>

        )
    }
}

ContactForm.propTypes = {
    state: PropTypes.exact({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }),
    handleChange: PropTypes.func, 
    handleSubmit: PropTypes.func,
    resetState: PropTypes.func
}

export default ContactForm