import React from 'react';
import PropTypes from 'prop-types';
import './AddMessage.css';

const AddMessage = (props) => {
  let input;

  const onEnter = (e) => {
    if (e.key === 'Enter') {
      props.dispatch(input.value, 'Me');
      input.value = '';
    }
  };

  return (
    <section id="new-message">
      <input
        type="text"
        onKeyPress={onEnter}
        placeholder="Write your message"
        ref={(node) => {
          input = node;
        }}
      />
    </section>
  );
};

AddMessage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default AddMessage;
