import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import Tasks from '../Tasks'
//  import { Btn } from 'reactstrap';

const Navbar = props =>{
  const onClick = () => {
   console.log('click')
  }
 const {title} = props
  return (<div>
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Add' onClick={onClick}/>
      <Tasks />
    </header>
    
    </div>);
}
  Navbar.defaultProps = {
    title: 'Task Tracker',
  }
  Navbar.propType = {
    title: PropTypes.string.isRequired,
  }

export default Navbar;