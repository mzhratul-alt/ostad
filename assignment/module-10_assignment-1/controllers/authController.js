const jwt = require("jsonwebtoken");

function generateToken(userId, secretKey) {
    return function (req,res) {
        jwt.sign(
            { userId: userId },
            secretKey,
            { expiresIn: "1h" },
            function (err, token) {
                if (err) {
                    console.log(err);
                }
                res.status(200).json(token);
            }
        );
    };
}

module.exports = generateToken;
