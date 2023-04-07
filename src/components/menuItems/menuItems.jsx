import React from 'react'
import { StyledMenuItem } from './menuItems.style';
import {ReactComponent as UniversityIcon} from '../../images/univ.svg'
import {ReactComponent as FacultyIcon} from '../../images/faculty.svg'

const MenuItems = (props) => {
    
    const { name } = props;


    return (
        <StyledMenuItem>
            {name === "University" && <UniversityIcon />}
            {name === "Faculties" && <FacultyIcon />}
            <p>{ name.toUpperCase() }</p>
        </StyledMenuItem>
    )
}

export default MenuItems