'use strict';

/**
 * mois-collect service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mois-collect.mois-collect');
