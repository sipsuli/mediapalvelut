import React from 'react';
import PropTypes from 'prop-types';
import {useSingleMedia} from '../hooks/ApiHooks';

const mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';
     

const Single = ({match}) => {
  const file = useSingleMedia(match.params.id); // TODO: fetch single media based on id from path parameter

  return (
    <React.Fragment>
      <h1>{file.title}</h1>
      <img src={mediaUrl + file.filename} alt={file.title}/>
    </React.Fragment>
  );
};

// TODO: add propTypes
Single.propTypes = {
    match: PropTypes.object,

};

export default Single;