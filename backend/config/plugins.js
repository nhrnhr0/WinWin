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
        populateEntryRule: ['main_image.url','institutions', 'institutions.main_image.url', 'business_categories',],
      },
      institution: {
        populateEntryRule: ['main_image.url', 'businesses', 'businesses.main_image.url', 'institution_categories',],
      },
    },
  },
}