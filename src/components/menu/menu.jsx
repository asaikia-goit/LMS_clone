import React, { useState } from 'react'
import MenuItems from '../menuItems/menuItems'
import {menuConfig} from '../../data/menuConfig';
import styled from 'styled-components/macro';


const StyledMenu = styled.div`
    padding: 24px;
`;


const Menu = () => {

    const [data, setData] = useState(menuConfig);

    return (
        <StyledMenu>
            {data.map((value) => {
                return <MenuItems key={value.name} name={value?.name} icon={value?.name} />
            })}
      
        </StyledMenu>
  )
}

export default Menu