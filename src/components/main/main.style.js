import styled from "styled-components";


const styledFlex = styled.div`
    display:flex ;
`;

const StyledMainWrapper = styled.div`
    width: calc(100vw - 320px);
    background: #F5F5F5;
    padding: 28px 32px ;

`;

const StyledUniversity = styled(styledFlex)`
    background: aliceblue;
    gap: 32px;
`;

export {
    StyledMainWrapper,
    StyledUniversity,
}