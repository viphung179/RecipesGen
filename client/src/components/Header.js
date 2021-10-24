import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    return (
        <header className = 'header'>
            <h1>{title}</h1>
           
        </header>
    )
}

Header.defaultProps = {
    title: 'Recipe Generator',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}



export default Header
