const Api_BaseUrl = "http://localhost:3000";

export const environment = {
  production: true,
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

