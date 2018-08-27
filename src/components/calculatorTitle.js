import React from 'react';
 
//Functional Component.
const CalculatorTitle = (props) => {
  return (
    <div className="calculator-title">
      { props.value } 
    </div>
  )
}
 
export default CalculatorTitle;