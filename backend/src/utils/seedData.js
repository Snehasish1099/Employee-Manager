import bcrypt from 'bcryptjs';
import { generateAccessAndRefreshTokens } from '../controllers/admin.controllers.js';
import { Admin } from '../models/admin.model.js';

const seedAdmin = async () => {
    try {
        const existingAdmin = await Admin.findOne({ name: "admin" });

        if (!existingAdmin) {
            // Default admin
            const hashedPassword = await bcrypt.hash('Test@1234', 10);

            const admin = new Admin({
                name: 'admin',
                password: hashedPassword,
            });

            await admin.save();

            const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(admin._id);

            console.log(`Admin created and tokens generated! Access Token: ${accessToken}, Refresh Token: ${refreshToken}`);
        } else {
            console.log('Admin already exists!');
        }
    } catch (error) {
        console.error('Error in seeding admin:', error);
    }
};

export default seedAdmin;
