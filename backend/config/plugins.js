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
              lat: entry.lat,
              lng: entry.lng,
            }
            
            return ret;
        },
        populateEntryRule: ['header_image.url','favicon.url','institutions', 'institutions.header_image.url','institutions.favicon.url', 'business_categories','_geoDistance'],
         settings: {
          filterableAttributes: ['business_categories','_geo',],
          sortableAttributes: ['_geo',]
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
              lat: entry.lat,
              lng: entry.lng,
            }
            return ret;
        },
        populateEntryRule: ['header_image.url','favicon.url', 'businesses', 'businesses.header_image.url','businesses.favicon.url', 'institution_categories','_geoDistance'],
        settings: {
          filterableAttributes: ['institution_categories','_geo',],
          sortableAttributes: ['_geo',]
        },
      },
    },
  },

}