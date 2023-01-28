import PropTypes from 'prop-types';

export const Filter = ({ filter, onChange }) => {
    return (
        <div>
            <p>Find contacts by name</p>
            <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={filter}
                onChange={onChange}
            />
        </div>
    )
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};