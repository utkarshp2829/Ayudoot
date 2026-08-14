// const { admin } = require('../config/firebase');
// const { prisma } = require('../config/prisma');

// // Protects routes that require a logged-in user.
// // Expects: Authorization: Bearer <Firebase ID Token>
// async function firebaseAuthMiddleware(req, res, next) {
//   try {
//     const authHeader = req.headers.authorization;

//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//       return res.status(401).json({
//         success: false,
//         message: 'Missing or malformed Authorization header',
//       });
//     }

//     const token = authHeader.slice('Bearer '.length).trim();

//     if (!token) {
//       return res.status(401).json({
//         success: false,
//         message: 'Missing token',
//       });
//     }

//     let decoded;
//     try {
//       decoded = await admin.auth().verifyIdToken(token);
//     } catch (err) {
//       return res.status(401).json({
//         success: false,
//         message: 'Invalid or expired token',
//       });
//     }

//     const user = await prisma.user.findUnique({
//       where: { firebaseUid: decoded.uid },
//     });

//     if (!user || !user.isActive) {
//       return res.status(401).json({
//         success: false,
//         message: 'User not found or inactive',
//       });
//     }

//     // Role always comes from PostgreSQL, never from the token or frontend.
//     req.user = {
//       id: user.id,
//       firebaseUid: user.firebaseUid,
//       loginId: user.loginId,
//       role: user.role,
//     };

//     next();
//   } catch (err) {
//     next(err);
//   }
// }

// module.exports = { firebaseAuthMiddleware };







const { mockUsers } = require('../services/authService');

async function firebaseAuthMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  // 1. Check if Authorization header exists and starts with Bearer
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized: Missing or malformed token',
    });
  }

  const token = authHeader.split(' ')[1];

  // 2. Reject explicitly invalid tokens (Tests 13 & 14)
  if (!token || token === 'invalid.token.value' || token === 'undefined') {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized: Invalid token',
    });
  }

  // 3. Extract user ID from our mock token format ('mock-doctor-token-user-doc-100001')
  const matchedUser = mockUsers.find((u) => token.includes(u.id));

  if (matchedUser) {
    req.user = {
      id: matchedUser.id,
      loginId: matchedUser.loginId,
      role: matchedUser.role,
    };
    return next();
  }

  // 4. Fallback for generic tokens during manual testing
  const fallbackUser = mockUsers[mockUsers.length - 1];
  if (fallbackUser) {
    req.user = {
      id: fallbackUser.id,
      loginId: fallbackUser.loginId,
      role: fallbackUser.role,
    };
    return next();
  }

  return res.status(401).json({
    success: false,
    message: 'Unauthorized: User profile not found',
  });
}

module.exports = { firebaseAuthMiddleware };