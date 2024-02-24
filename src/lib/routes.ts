/**
 * Array of routes accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
	"/",
	"/products",
	"/about-us",
	"health-assessment",
	"/blogs",
	"/auth/register",
	"/auth/login",
];

/**
 * Array of routes used for authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/register", "/auth/error"];

/**
 * Prefix for API authentication routes
 * Routes starting with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/auth/register";
