'use strict';

/**
 * business controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

/**
 * override the find to add the throuth_con_buis.Inst_con.main_image
 */
module.exports = createCoreController('api::business.business');