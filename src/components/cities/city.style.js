import styled from 'styled-components';
import { StyledFlex } from '../../styles';


const CityCard = styled(StyledFlex)`
    justify-content: space-between ;
    padding: 20px;
    background: #ffff ;
    margin-top: 20px ;
    width: 26%;
`;

const StyledCities = styled(StyledFlex)`
    justify-content: flex-start ;
    gap: 4%;
    flex-wrap: wrap ;
`;


export {
    CityCard,
    StyledCities
}