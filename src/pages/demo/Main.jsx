import React, { useContext } from 'react'
import styled from 'styled-components';
import {ThemeContext} from './demo';

const MainWrapper = styled.div`
    width: 100%;
    background: ${ (props) => props.isDark ? '#232323' : 'aliceblue' };
    height: 480px;
    border: 2px solid tomato;

    display: flex ;
    align-items: center ;
    padding: 10px ;

    color:  ${ (props) => props.isDark ? '#fff' : '#000' };

`;


const Main = () => {

    const themeContext = useContext(ThemeContext);

    const { darkMode, updateDarkMode } = themeContext;
  
    return (
      <MainWrapper isDark={darkMode}>
            <h4>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita similique illo vitae totam reprehenderit. Asperiores, doloribus. Libero magnam voluptatem eaque distinctio eligendi nemo! Reiciendis quas pariatur, laudantium optio architecto laboriosam aspernatur culpa illum deleniti voluptatibus, voluptatum suscipit. Dolorum molestias dignissimos pariatur, hic minus maiores tempore laboriosam sequi odio. Perspiciatis, soluta?
            </h4>
        </MainWrapper>
    )
}

export default Main