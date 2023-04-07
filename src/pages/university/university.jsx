import React from 'react'

const University = (props) => {

    const { someProps, lorem } = props;
    console.log("university: ", props);

  return (
      <>
            <p>{someProps}</p>
            <span>{lorem}</span>
      </>
  )
}

export default University