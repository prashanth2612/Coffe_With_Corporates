const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authUser = async (req, res, { user, databasePassword, password, UserPasswordModel }) => {
  // Check if databasePassword is null or undefined
  if (!databasePassword) {
    return res.status(404).json({
      success: false,
      result: null,
      message: 'User not found.',
    });
  }

  // Compare the hashed password with the input password
  const isMatch = await bcrypt.compare(password, databasePassword.password);

  if (!isMatch) {
    return res.status(403).json({
      success: false,
      result: null,
      message: 'Invalid credentials.',
    });
  }

  // Generate JWT token if the password matches
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: req.body.remember ? '365d' : '24h' }
  );

  // Update the logged sessions for the user
  await UserPasswordModel.findOneAndUpdate(
    { user: user._id },
    { $push: { loggedSessions: token } },
    { new: true }
  ).exec();

  // Set the token in a cookie and respond
  res
    .status(200)
    .cookie('token', token, {
      maxAge: req.body.remember ? 365 * 24 * 60 * 60 * 1000 : null,
      sameSite: 'Lax',
      httpOnly: true,
      secure: false, // Change to true in production
      domain: req.hostname,
      path: '/',
    })
    .json({
      success: true,
      result: {
        _id: user._id,
        name: user.name,
        surname: user.surname,
        role: user.role,
        email: user.email,
        photo: user.photo,
      },
      message: 'Successfully logged in user',
    });
};

module.exports = authUser;

