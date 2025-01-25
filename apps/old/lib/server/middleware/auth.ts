// import { getWebRequest, setResponseStatus } from 'vinxi/http';
// import { createMiddleware } from '@tanstack/start';
// import { redirect } from '@tanstack/react-router';
// // import { auth } from '@live/auth';
// import { auth } from '~/lib/utils/auth';

// // /**
// //  * Middleware to force authentication on a server function, and add the user to the context.
// //  */
// // export const authMiddleware = createMiddleware().server(async ({ next }) => {
// //   const { headers } = getWebRequest();

// //   const session = await auth.api.getSession({ headers });

// //   if (!session) {
// //     setResponseStatus(401);
// //     throw new Error('Unauthorized');
// //   }

// //   return next({ context: { user: session.user } });
// // });

// export const authMiddleware = createMiddleware().server(async ({ next }) => {
//   console.log('🔥🔥🔥 auth server middleware');

//   const request = getWebRequest();

//   const session = await auth.api.getSession({
//     headers: request.headers
//   });
//   const authData =
//     session !== null
//       ? { isAuthenticated: true, ...session }
//       : { isAuthenticated: false };

//   return next({
//     context: { auth: authData },
//     sendContext: { isAuthenticated: authData.isAuthenticated }
//   });
// });

// export const requireAuthMiddleware = createMiddleware()
//   .middleware([authMiddleware])
//   .server(async ({ next, context }) => {
//     console.log('🔥🔥🔥 requireAuth server middleware', { context });
//     console.log('🔥', { context: context?.auth });

//     if (!context?.auth?.isAuthenticated) {
//       setResponseStatus(401);
//       throw new Error('Unauthorized');
//     }

//     return next();
//   });

// export const unauthedMiddleware = createMiddleware()
//   .middleware([authMiddleware])
//   .server(async ({ next, context }) => {
//     console.log('🔥🔥🔥 unauthedMiddleware server middleware', { context });
//     console.log('🔥', { context: context?.auth });

//     if (context?.auth?.isAuthenticated) {
//       throw redirect({ to: '/' });
//     }

//     return next();
//   });
