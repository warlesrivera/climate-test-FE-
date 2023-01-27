interface BaseUrlApiRoutes {
  base: undefined|string;
  auth: undefined|string;
  map: undefined|string;
  baseOpenWeatherMap: undefined|string;
 
}

export const baseUrlApiRoutes: BaseUrlApiRoutes = {
  base: process.env.NEXT_PUBLIC_BASE_URL,
  auth: process.env.NEXT_PUBLIC_AUTH_URL,
  map :  process.env.NEXT_PUBLIC_MAP_URL,
  baseOpenWeatherMap: process.env.NEXT_PUBLIC_BASE_URL
};
