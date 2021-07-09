import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    
    const onClick = () => {
        console.log('Click');
    }

    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button color='green' text='Add' onClick={onClick} />
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