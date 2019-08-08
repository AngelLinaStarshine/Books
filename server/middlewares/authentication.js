const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const { token } = req.query;

    jwt.verify(token, 'secret_seed', (err, decoded) => {
        if (err) {
            return res.status(401).json({
                success: false,
                err
            });
        }

        next();
    });
};

module.exports = verifyToken;
