const Api_BaseUrl = "http://localhost:3000";

export const environment = {
  production: true,
  user_api: `${Api_BaseUrl}/users`,
  user_api_create: '/create',
  user_api_login: '/login',
  user_api_logout: '/logout',

  product_api: `${Api_BaseUrl}/products`,
  product_api_getAll: '/',
  product_api_create: '/create'
};

