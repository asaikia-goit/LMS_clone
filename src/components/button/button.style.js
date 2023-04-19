import styled from 'styled-components';




const StyledButton = styled.button`
    display: flex;
    margin: 0px;
    padding: 8px 16px;
    background: #FF6B0A;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    color: #ffff;
    border-color:  #FF6B0A;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;

    :hover {
        cursor: pointer ;
    }
`;


export default StyledButton;