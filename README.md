# strapi-integration-service-example
It's an integration service example that you can use as a template if you use the strapi-webhook-reciever-plugin

## Key files
* Copy all project files in ./plugins/[[strapiname]]
* server/services folder must contains a file for each entity that you want to syncronize
* Register each one in server/services/index.js

## How to install manually?
1. Copy all files of this project to ./src/plugins/[[strapiname]]
2. Create file ./config/plugins.js (if not exist) and copy next:

```
module.exports = {
    [[strapiname]]: {
      enabled: true,
      resolve: './src/plugins/[[strapiname]]',
    }
  };
```
## What is strapiname? And how you can use it?
strapiname is the name of the instance that you whant sync. On strapiname instance you will configure the webhooks using admin, on the strapie reciept you will install the *strapi-webhook-reciver-plugin* (https://github.com/ericmora/strapi-webhook-reciever-plugin) and a integration service for each entity that you want do any notification.