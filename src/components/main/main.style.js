import styled from "styled-components/macro";
import { StyledFlex } from "../../styles";

const StyledMainWrapper = styled.div`
    width: calc(100vw - 320px);
    background: #F5F5F5;
    padding: 28px 32px ;

`;

const StyledUniversity = styled(StyledFlex)`
    justify-content: space-between ;
    background: aliceblue;
    gap: 32px;

`;

// const StyledUniversityContentWrapper = styled(StyledFlex)`
//     padding: ${( {padding} ) => padding ? `${padding}px` : '32px' };
//     background-color: slateblue;
//     width: ${( {width} ) => width ? `${width}px` : 'auto' };
// `;


const StyledUniversityCardContent = styled(StyledFlex)`
    flex-direction: column;
`;


const LogoWrapper = styled(StyledFlex)`
    border-radius: 50%;
    overflow: hidden;
`;

export {
    StyledUniversity,
    StyledMainWrapper,
    LogoWrapper,
    StyledUniversityCardContent,
}