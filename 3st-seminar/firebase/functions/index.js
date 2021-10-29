const admin = require('firebase-admin');
const serviceAccount = require('./FBAccountKey.json');
const dotenv = require('dotenv');

dotenv.config();

let firebase;
if (admin.apps.length === 0) {
  firebase = admin.initializeApp({
    credentials: admin.credential.cert(serviceAccount),
  });
}

module.exports = {
  api: require('./api'),
};
