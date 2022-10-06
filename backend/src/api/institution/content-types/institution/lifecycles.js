//const slugify = require('slugify');
const DISALLOWED_CHARS = ["{" , "}" , "," , "\\" , "^" , "[" , "]" , "`",";" , "/" , "?" , ":" , "@" , "&" , "=" , "+" , "$" , ","]
module.exports = {

  async beforeCreate(event) {
    if (event.params.data.name) {
        let temp = event.params.data.name.replaceAll(' ', '-');
        for(let i = 0; i < DISALLOWED_CHARS.length; i++){
            temp = temp.replaceAll(DISALLOWED_CHARS[i], '');
        }
      event.params.data.slug = temp;
    }
  },
  async beforeUpdate(event) {
    if (event.params.data.name) {
        let temp = event.params.data.name.replaceAll(' ', '-');
        for(let i = 0; i < DISALLOWED_CHARS.length; i++){
            temp = temp.replaceAll(DISALLOWED_CHARS[i], '');
        }
      event.params.data.slug = temp
    }
  },
};
 