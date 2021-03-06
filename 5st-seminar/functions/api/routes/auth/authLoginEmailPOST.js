const admin = require('firebase-admin');
const util = require('../../../lib/util');
const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const { signInWithEmailAndPassword } = require('firebase/auth');
const db = require('../../../db/db');
const { userDB } = require('../../../db');

const { firebaseAuth } = require('../../../config/firebaseClient');

const jwtHandlers = require('../../../lib/jwtHandlers');
module.exports = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(statusCode.BAD_REQUEST).send(util.fail(responseMessage.NULL_VALUE));
  }

  let client;

  try {
    client = await db.connect(req);

    const userFirebase = await signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((user) => user)
      .catch((e) => {
        console.log(e);
        return { err: true, error: e };
      });

    if (userFirebase.err) {
      if (userFirebase.error.code === 'auth/user-not-found') {
        return res.status(statusCode.NOT_FOUND).json(util.fail(responseMessage.NO_USER));
      } else if (userFirebase.error.code === 'auth/invalid-email') {
        return res.status(statusCode.NOT_FOUND).json(util.fail(responseMessage.INVALID_EMAIL));
      } else if (userFirebase.error.code === 'auth/wrong-password') {
        return res.status(statusCode.NOT_FOUND).json(util.fail(responseMessage.MISS_MATCH_PW));
      } else {
        return res.status(statusCode.INTERNAL_SERVER_ERROR).json(util.fail(responseMessage.INTERNAL_SERVER_ERROR));
      }
    }

    const {
      user: { uid: idFirebase },
    } = userFirebase;

    const user = await userDB.getUserByIdFirebase(client, idFirebase);

    const { accesstoken } = jwtHandlers.sign(user);

    res.status(statusCode.OK).send(util.success(responseMessage.LOGIN_SUCCESS, { user, accesstoken }));
  } catch (error) {
    console.log(error);

    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(responseMessage.INTERNAL_SERVER_ERROR));
  } finally {
    client.release();
  }
};
