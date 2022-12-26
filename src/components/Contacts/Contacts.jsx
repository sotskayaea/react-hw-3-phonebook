import css from './Contacts.module.css';
import PropTypes from 'prop-types';



const Contacts = ({contacts, onDeleteContact}) => {
    return (
        <div className={css.contacts}>
           {contacts.length === 0 ? (
                <p  className={css.desc}>Oops...You don`t have any contacts in your Phonebook</p>
            ) : (
        <ul className={css.list}>
        {contacts.map(contact => (
            <li key={contact.id} className={css.user}>
                <img className={css.img} src="https://img.icons8.com/ios-filled/50/2cd8d5/user-male-circle.png" alt="user"/>
                <div className={css.name}>
                    <p>{contact.name}</p>
                    <p>{contact.number}</p>
                </div>
                <button className={css.btn}type='button' onClick={() => {
                    onDeleteContact(contact.id)}}>Delete</button>
            </li>
        )).reverse()}
        </ul>
        )} 
        </div>
    )
}

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })),
    onDeleteContact: PropTypes.func
}

export default Contacts