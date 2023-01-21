const userdatabase = require('../DataBase');
const jwt = require('jsonwebtoken')

const login = (req, res, next) => {
    const {email, password} = req.body

    const userInfo = userdatabase.filter((item) => {
        return item.email === email;
    })[0];

    if(!userInfo) {
        res.status(403).json('Not Authorized')
    }else {
        try {
            // access Token 발급
            const accessToken = jwt.sign({
                // 발행자 정보 담기 
                id : userInfo.id,
                username : userInfo.username,
                email : userInfo.email
            },process.env.ACCESS_SECRET, {
                expiresIn : '1m',
                issuer: 'About Tech'
            })

            // refresh Token 발급
            const refreshToken = jwt.sign({
                // 발행자 정보 담기 
                id : userInfo.id,
                username : userInfo.username,
                email : userInfo.email    
            }, process.env.REFRESH_SECRET, {
               expiresIn: '24h',
               issuer : "About Tech" 
            })

            // token 전송
            res.cookie('accessToken', accessToken, {
                secure : false,
                httpOnly : true,  
            })

            res.cookie('refreshToken', refreshToken, {
                secure : false,
                httpOnly : true,  
            })   
            
            res.status(200).json("login success")

        } catch (error) {
            res.status(500).json(error)
        }
    }

}
const accessToken = (req, res) => {
    try {
        const token = req.cookies.accessToken;
        const data = jwt.verify(token, process.env.ACCESS_SECRET)

        const userData = userdatabase.filter(item => {
            return item.email === data.email
        })[0]
        // 비밀번호 숨기기 패스워드를 제외한 아더스만 노출
        const {password, ...others} = userData

        res.status(200).json(others)
    } catch (error) {
        res.status(500).json(error)
    }
}
const refreshToken = (req, res) => {
    // 용도 : access token 갱신.
    try {
        const token = req.cookies.refreshToken
        const data = jwt.verify(token, process.env.REFRESH_SECRET)
        const userData = userdatabase.filter(item => {
            return item.email === data.email;
        })[0]

    //access Token 새로 발급
    const accessToken = jwt.sign({
        // 발행자 정보 담기 
        id : userData.id,
        username : userData.username,
        email : userData.email
    },process.env.ACCESS_SECRET, {
        expiresIn : '1m',
        issuer: 'About Tech'
    })

    res.cookie('accessToken', accessToken, {
        secure : false,
        httpOnly : true,  
    })

    res.status(200).json("Access Token Recreated")

    } catch (error) {
    res.status(500).json(error)
    }
}
const loginSuccess = (req, res) => {
    try {
        const token = req.cookies.accessToken;
        const data = jwt.verify(token, process.env.ACCESS_SECRET)

        const userData = userdatabase.filter(item => {
            return item.email === data.email;
        })[0]

        res.status(200).json(userData)
    } catch(error) {
        res.status(500).json(error)

    }
}

const logout = (req, res) => {
    try {
        res.cookie('accessToken', '');
        res.status(200).json("Logout Success")
    } catch(error) {
        res.status(500).json("Logout Success")
    }
}

module.exports = {
    login,
    accessToken,
    refreshToken,
    loginSuccess,
    logout
}