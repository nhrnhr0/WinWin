module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'script-src': ["'self'", "'unsafe-inline'", 'maps.googleapis.com','dl.airtable.com'], // used for google maps
          'img-src': ["'self'", 'data:', 'maps.googleapis.com', 'strapi.io','dl.airtable.com'], //, `${env('AWS_BUCKET')}.s3.${env('AWS_REGION')}.amazonaws.com`
        },
      }
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
