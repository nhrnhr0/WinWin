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
            return {
            ...entry,
            business_categories: entry.business_categories.map((category) => category.name),
            }
        },
        populateEntryRule: ['main_image.url','institutions', 'institutions.main_image.url', 'business_categories',],
      },
      institution: {
        transformEntry({ entry }) { // can also be async
           return {
            ...entry,
            institution_categories: entry.institution_categories.map((category) => category.name),
          }
        },
        populateEntryRule: ['main_image.url', 'businesses', 'businesses.main_image.url', 'institution_categories',],
      },
    },
  },
}