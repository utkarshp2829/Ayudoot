const admin = require('firebase-admin');
const env = require('./env');

// Firebase Admin SDK - used ONLY for:
//  - creating Firebase users during registration
//  - verifying Firebase ID tokens on protected routes
// It never signs a user in with a password (Admin SDK has no such method).
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: env.firebase.projectId,
      clientEmail: env.firebase.clientEmail,
      privateKey: env.firebase.privateKey,
    }),
  });
}

module.exports = { admin };