'use strict';

/* eslint-disable no-unused-vars */
module.exports = (config, webpack) => {
  // Add your variable using the DefinePlugin
  config.plugins.push(
    new webpack.DefinePlugin({
      //All your custom ENVs that you want to use in frontend
      CUSTOM_VARIABLES: {
        maps_api_key: JSON.stringify(process.env.MAPS_API_KEY),
      },
    })
  );
  // Important: return the modified config
  return config;
};
