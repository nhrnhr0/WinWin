import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from '@strapi/design-system/Box';
import styles from './mapfield.modules.css';
import Autocomplete from "react-google-autocomplete";
const Wrapper = styled(Box)`
  .ck-editor__main {
    min-height: ${200 / 16}em;
    > div {
      min-height: ${200 / 16}em;
    }
    // Since Strapi resets css styles, it can be configured here (h2, h3, strong, i, ...)
  }
`;

const maps_api_key = CUSTOM_VARIABLES.maps_api_key;
const MapInputs = ({ onChange, name, value, disabled }) => {

  return (
    <Wrapper>
      <div className={styles.locationfieldswraper} >
        <Autocomplete
            apiKey={maps_api_key}
            language="iw"
            onPlaceSelected={(place) => {
                let address = place.formatted_address;
                let lat = place.geometry.location.lat();
                let lng = place.geometry.location.lng();
                onChange({ target: { name: 'address', value: address.toString() } });
                onChange({ target: { name: 'lat', value: lat.toString() } });
                onChange({ target: { name: 'lng', value: lng.toString() } });
            }}
            placeholder='חיפוש כתובת'
        />
      </div>
    </Wrapper>
  );
};

MapInputs.defaultProps = {
  value: '',
  disabled: false
};

MapInputs.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  disabled: PropTypes.bool
};
export default MapInputs;