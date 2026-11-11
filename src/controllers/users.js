import os from '../utils/file-system.js';
import argon from 'argon2';
import { extname } from 'path';
const register = async (req, res) => {
    const {username, password} = req.body;
    const {profilePicture} = req.files;
    const user = os.read("users");
    let hashPass = await argon.hash(password);
    const filename = Date.now() + extname(profilePicture.name);
    console.log(filename);
    const newUser = {
        id: user.length ? user[user.length - 1].id + 1 : 1,
        username,
        password: hashPass,
        profilePicture: filename
    };
    res.status(201).json({
        message: "User registered successfully",
        data: newUser
    });
    // console.log(newUser);
}

export default {
    register
};