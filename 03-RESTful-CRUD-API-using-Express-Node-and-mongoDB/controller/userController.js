import User from "../model/userModel.js";

export const create = async (req, res) => {
    try {
        // return res.json("Hello World");
        const userData = new User(req.body);
        const {email} = userData;

        const userExist = await User.findOne({email})
        if(userExist) {
            return 
            res.status(400).status({ message: "User already exists."});
        }
        const saveUser = await userData.save();
    } catch (error) {
        res.status(500).json({ error: "Internal Server error."});
    }
};
export const fetch = async (req, res) => {
    try {
        return res.json("Hello World");
    } catch (error) {
        res.status(500).json({ error: "Internal Server error."});
    }
};