module.exports = {
    // ...
    'wysiwyg': {
      enabled: true,
      resolve: './src/plugins/mapfield' // path to plugin folder
      
    },
    // ...
    meilisearch: {
    config: {
      business: {
        transformEntry({ entry }) { // can also be async
            ret = {
            ...entry,
            business_categories: entry.business_categories.map((category) => category.name),
            
            }
            // transform the lat lng to _geo{ _lat _lng}
              //  entry.lat;
              //  entry.lng;
            ret._geo = {
              _lat: entry.lat,
              _lng: entry.lng,
            }
            
            return ret;
        },
        populateEntryRule: ['main_image.url','institutions', 'institutions.main_image.url', 'business_categories',],
         settings: {
          filterableAttributes: ['business_categories','_geo'],
         },
      },
      institution: {
        transformEntry({ entry }) { // can also be async
           ret= {
            ...entry,
            institution_categories: entry.institution_categories.map((category) => category.name),
            
            
          }
          // transform the lat lng to _lat _lng
            ret._geo = {
              _lat: entry.lat,
              _lng: entry.lng,
            }
            return ret;
        },
        populateEntryRule: ['main_image.url', 'businesses', 'businesses.main_image.url', 'institution_categories',],
        settings: {
          filterableAttributes: ['institution_categories','_geo'],
        },
      },
    },
  },
}