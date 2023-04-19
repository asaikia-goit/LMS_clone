import { forwardRef, useRef, useEffect, useMemo } from "react";

const MyButton = forwardRef((props, ref) => {
  console.log(ref);
  return <button ref={ref}>{props.children}</button>
})


const CustomButton = forwardRef((props, ref) => {
  const { xyz } = props;
  
  console.log(ref, xyz);

  return <MyButton ref={ref}>{props.children}</MyButton>
})
  
const Demo = () => {
  const btnRef = useRef();

  // useEffect(() => btnRef.current.focus(), []);

  return (<div>
    <CustomButton ref={btnRef} xyz="abc"><p>Button with forwarded ref</p></CustomButton>
  </div>);
};


export default Demo;