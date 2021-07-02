import PropTypes from 'prop-types'

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'ToDo List',
}

Header.propTypes = {
    title: PropTypes.string,
}

/* Styling in JS
    const headerStyling = {
        color: 'red',
        backgroundColor: 'blue'
    }
*/

export default Header