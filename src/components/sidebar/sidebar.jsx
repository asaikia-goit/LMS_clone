import React from 'react'
import Menu from '../menu/menu'
import styled from 'styled-components'

const StyledSidebar = styled.div`

    width: 320px;
    background: indianred;
    height: 100vh;
`;

const Notifications = styled.div`
    width: 100%;
    height: 80px ;
    background-color:#161D2A;
`;


const Sidebar = () => {
    return (
        <StyledSidebar>
            <Notifications/>
            <Menu />
            {/* <UserInfo /> */}
      </StyledSidebar>
  )
}

export default Sidebar