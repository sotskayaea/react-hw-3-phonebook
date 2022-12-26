import css from './Filter.module.css'
import PropTypes from 'prop-types';


const Filter = ({value, onChangeFilter}) => {
    return (
       <div className={css.filter}>
         <label className={css.label}>Find contacts by name
            <img className={css.icon} src="https://img.icons8.com/material-outlined/24/2cd8d5/search--v1.png" alt="search" />
            <input  className={css.input} type="text" value={value} onChange={onChangeFilter}/>
        </label>
        
       </div>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func
}

export default Filter