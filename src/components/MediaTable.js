import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import MediaRow from './MediaRow';

const baseUrl = 'http://media.mw.metropolia.fi/wbma/';

const MediaTable =  () => {
  const [PicArray, setPicArray] = useState([]);
  const loadMedia = async () => {
  const response = await fetch(baseUrl + 'media');
  const json = await response.json();
  const items = await Promise.all(json.map(async (item) => {
    const response = await fetch(baseUrl + 'media/' + item.file_id);
    return await response.json();
  }));
    console.log(items);
    setPicArray(items);
  };
  
useEffect(()=>{
    loadMedia();
}, []);
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