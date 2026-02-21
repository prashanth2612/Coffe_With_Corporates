const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const isValidAuthToken = async (req, res, next, { userModel, jwtSecret = 'JWT_SECRET' }) => {
  try {
    const UserPassword = mongoose.model(userModel + 'Password');
    const User = mongoose.model(userModel);
    const token = req.cookies.token;

    if (!token)
      return res.status(401).json({ success: false, result: null, message: 'No authentication token. Authorization denied.', jwtExpired: true });

    const verified = jwt.verify(token, process.env[jwtSecret]);

    const [user, userPassword] = await Promise.all([
      User.findOne({ _id: verified.id, removed: false }),
      UserPassword.findOne({ user: verified.id, removed: false }),
    ]);

    if (!user)
      return res.status(401).json({ success: false, result: null, message: "User doesn't exist. Authorization denied.", jwtExpired: true });

    if (!userPassword || !userPassword.loggedSessions.includes(token))
      return res.status(401).json({ success: false, result: null, message: 'Session expired. Please log in again.', jwtExpired: true });

    req[userModel.toLowerCase()] = user;
    return next();
  } catch (error) {
    if (error.name === 'TokenExpiredError' || error.name === 'JsonWebTokenError') {
      return res.status(401).json({ success: false, result: null, message: 'Token expired or invalid. Please log in again.', jwtExpired: true });
    }
    return res.status(503).json({ success: false, result: null, message: 'Authentication service unavailable.', controller: 'isValidAuthToken' });
  }
};

module.exports = isValidAuthToken;
