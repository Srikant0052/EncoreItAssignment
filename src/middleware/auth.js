const jwt = require('jsonwebtoken');
const userModel = require('../model/userModel');

const auth1 = async (req, res, next) => {
    try {
        const token = req.headers["x-api-key"];
        if (!token) {
            return res.status(401).send({ status: false, message: 'important header missing' })
        }
        const decodedToken = jwt.verify(token, "abc123");
        const userId = decodedToken.userId;

        const user = await userModel.findById(userId);
        if (user.roles === 'Admin') {
            next()
        } else {
            return res.status(403).send({ status: false, message: "You are not authorized" });
        }
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}

const auth2 = async (req, res, next) => {
    try {
        const token = req.headers["x-api-key"];
        if (!token) {
            return res.status(401).send({ status: false, message: 'important header missing' })
        }
        const decodedToken = jwt.verify(token, "abc123");
        const userId = decodedToken.userId;

        const user = await userModel.findById(userId);
        if (user.roles === 'Admin' || user.roles === 'User') {
            next()
        } else {
            return res.status(403).send({ status: false, message: "You are not authorized" });
        }
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}


module.exports = { auth1, auth2 };