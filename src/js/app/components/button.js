import React from 'react'

const AppButton = ({ clickCount, buttonClick }) => (
  <div>
    <div>I have been clicked {clickCount} times</div>
    <button type="button"
            onClick={() => buttonClick()}>
      Click me
    </button>
  </div>
);

export default AppButton;