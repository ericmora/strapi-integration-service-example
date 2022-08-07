'use strict';

module.exports = ({ strapi }) => ({
  update(entity) {
    console.log("update happens!");
    console.log(entity);
    return entity;
  },
  delete(entity) {
    console.log("delete happens!");
    console.log(entity);
    return entity;
  },
  publish(entity) {
    console.log("publish happens!");
    console.log(entity);
    return entity;
  },
  unpublish(entity) {
    console.log("unpublish happens!");
    console.log(entity);
    return entity;
  },
  create(entity) {
    console.log("create happens!");
    console.log(entity);
    return entity;
  },
});
