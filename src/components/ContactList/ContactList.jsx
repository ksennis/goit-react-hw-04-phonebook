import propTypes from 'prop-types';

import styles from './ContactList.module.css';

export const ContactList = ({ contacts, onClickDelete }) => {
    return (
        <div>
            <h2>Contacts</h2>
            <ul>
                {contacts.map(({ id, name, number }) => (
                    <li className={styles.contactItem} key={id}>
                        {name}: {number}
                        <button
                            className={styles.deleteButton}
                            onClick={() => onClickDelete(id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

ContactList.propTypes ={
    contacts: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string.isRequired,
            name: propTypes.string.isRequired,
            number: propTypes.string.isRequired,
        })
    ).isRequired,
    onClickDelete: propTypes.func.isRequired
};