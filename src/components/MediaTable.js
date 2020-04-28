import React  from 'react';
import PropTypes from 'prop-types';
import MediaRow from './MediaRow';
import {useAllMedia} from '../hooks/ApiHooks';

const MediaTable =  () => {
  const PicArray = useAllMedia();

  return (
    <table>
      <tbody>
        {
          PicArray.map((file, index) => <MediaRow file={file} key={index}/>)
        }
      </tbody>
    </table>
  );
};

MediaTable.propTypes = {
  media: PropTypes.array,
};

export default MediaTable;