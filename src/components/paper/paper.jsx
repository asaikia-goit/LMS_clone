import React from 'react'
import PaperWrapper from './paper.style'

const Paper = (props) => {

    const { children } = props;

    return (
        <PaperWrapper>
            {children}
        </PaperWrapper>
    )
}

export default Paper