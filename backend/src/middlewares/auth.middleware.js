import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js';

export const verifyJWT = async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
        
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized request",
                errors: []
            });
        }
        
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        
        const admin = await Admin.findById(decodedToken?._id).select("-password -refreshToken");
        
        if (!admin) {
            return res.status(401).json({
                success: false,
                message: "Invalid Access Token",
                errors: []
            });
        }
        
        req.user = admin;
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: error?.message,
            errors: []
        });
    }
};
