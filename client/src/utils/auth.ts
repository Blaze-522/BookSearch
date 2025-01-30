import jwt from 'jsonwebtoken';
const secret = 'your-secret-key';

export const authenticateToken = (req) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return null;
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
};