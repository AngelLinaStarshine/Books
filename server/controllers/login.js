const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
    const {
        username,
        password
    } = req.body;

    if (username === 'admin' && password === '123456') {
        const token = jwt.sign({
            username,
            password
        }, 'secret_seed', {
            expiresIn: 60 * 60 * 24 * 30
        });

        return res.json({
            success: true,
            token
        });
    } else {
        return res.json({
            success: false
        });
    }
};