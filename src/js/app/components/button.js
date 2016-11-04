import React from 'react'

const AppButton = ({ response, buttonClick }) => (
  <div>
    <div>Server Response:</div>
    <div>{JSON.stringify(response)}</div>
    <button type="button"
            onClick={() => buttonClick()}>
      Click me
    </button>
  </div>
);

export default AppButton;