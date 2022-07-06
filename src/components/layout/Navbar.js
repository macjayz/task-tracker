import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import Tasks from '../Tasks'
//  import { Btn } from 'reactstrap';

const Navbar = ({title,onAdd,showAdd}) =>{
 
  return (<div>
    <header className='header'>
      <h1>{title}</h1>
      <Button color={showAdd?'red':'green'} text={showAdd?'Close':'Add'} onClick={onAdd}/>
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