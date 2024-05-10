import React from 'react';

const CapturingBubbling = () => {
  const mainDiv = () => {
    console.log('Main DIV Clicked');
  };
  const captureDiv = (e) => {
    console.log('Capturing..');
  };
  const bubbleDiv = () => {
    console.log('Bubbling..');
  };
  const propagationDiv = (e) => {
    e.stopPropagation();
    // event delegation
    console.log('Propgation Stopped');
  };
  return (
    <div>
      <h4>Capturing & Bubbling</h4>
      <div onClick={mainDiv}>
        <button onClick={captureDiv}>Capture</button>
        <button onClick={bubbleDiv}>Bubbling</button>
        <button onClick={propagationDiv}>Stop Propagation</button>
        <div>
          <h5>Bubbling : </h5>
          <p> It starts from child to parent</p>
          <h5>Capturing: </h5>
          <p>Its starts from parent to child</p>
          <p>
            By using stop propagation we can handle this , or we have to pass
            the 3rd property capture value to the event listener
          </p>
        </div>
      </div>
    </div>
  );
};
export default CapturingBubbling;
