// authUser.js
const jwt = require("jsonwebtoken");
const JWT_TOKEN = process.env.JWTKEY;

const fetchUser = (req, res, next) => {
    // get the user from the jwt token and add id to req object
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).send({ error: "access denied" });
    }
    try {
        const data = jwt.verify(token, JWT_TOKEN);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "access denied" });
    }
};

module.exports = fetchUser;
