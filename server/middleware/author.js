const jsonwebtoken = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const authHeader = req.header('Authorization')
    const token = authHeader && authHeader.split(' ')[1]

    if (!token)
        return res.json({success: false, message: 'Access token not found'})

    let buff = Buffer.from(authHeader.split(' ')[1], 'base64')
        .toString()
    console.log(buff)

    try {
        const decodedData = jsonwebtoken.verify(token, process.env.ACCESS_TOKEN_SECRET)
        req.userId = decodedData.userId

        next()
    } catch (error) {
        console.log(error)
        return res.json({success: false, message: 'Invalid token'})
    }
}

module.exports = verifyToken