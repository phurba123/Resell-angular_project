// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const Api_BaseUrl = "http://localhost:3000"

export const environment = {
  production: false,
  user_api: `${Api_BaseUrl}/users`,
  user_api_create: '/create',
  user_api_login: '/login',
  user_api_logout: '/logout',

  product_api: `${Api_BaseUrl}/products`,
  product_api_getAll: '/',
  product_api_create: '/create',

  category_api: `${Api_BaseUrl}/categories`,
  category_getAll: '/',
  category_create: '/create'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
