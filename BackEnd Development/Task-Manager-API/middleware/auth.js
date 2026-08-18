import jwt from 'jsonwebtoken'

const authMiddleware = (req,res,next) => {

const authHeader = req.headers.authorization;

if (!authHeader || !authHeader.startsWith('Bearer ')){
    return res.status(401).json({ message: 'Authentication failed: no token provided ' });
}

try{
    const token = authHeader.split(' ')[1];

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    req.user = {userId: decodedToken.userId };
    next();
} catch(err) {
    return res.status(401).json({ message: 'Authentication failed: Invalid or expired token' });
}
}

export default authMiddleware;