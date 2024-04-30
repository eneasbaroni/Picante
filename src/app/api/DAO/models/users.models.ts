import mongoose, { Schema, models} from "mongoose";

const userCollections = 'user'
const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
        },
        role: {
            type: String,
            enum: ['user', 'vip', 'premium', 'admin'],
            default: 'user'
        },
        image: {
            type: String
        }
    },
    { timestamps: true }
);

//const User = mongoose.model(userCollections, userSchema)

const User = models.user || mongoose.model(userCollections, userSchema)

export default User