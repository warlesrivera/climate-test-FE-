interface BaseUrlApiRoutes {
  base: undefined|string;
  auth: undefined|string;
  baseOpenWeatherMap: undefined|string;
 
}

export const baseUrlApiRoutes: BaseUrlApiRoutes = {
  base: process.env.NEXT_PUBLIC_BASE_URL,
  auth: process.env.NEXT_PUBLIC_AUTH_URL,
  baseOpenWeatherMap: process.env.NEXT_PUBLIC_BASE_URL
};
