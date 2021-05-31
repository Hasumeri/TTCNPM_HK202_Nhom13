const jsonwebtoken = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const authHeader = req.header('Authorization')
    const token = authHeader && authHeader.split(' ')[1]

    if (!token)
        return res.json({success: false, message: 'Access token not found'})
    
    try {
        const decodedData = jsonwebtoken.verify(token, process.env.ACCESS_TOKEN)
        req.userId = decodedData.userId
        next()
    }
    catch (error) {
        console.log(error)
        return res.json({success: false, message: 'Invalid token'})
    }
}

module.exports = verifyToken