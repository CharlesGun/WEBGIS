const jwt = require('jsonwebtoken');

const {
    SIGNATURE_KEY
} = process.env;

module.exports = {
    isLogin: (req,res,next)=>{
        try{
            const token = req.headers['authorization'];
            if(!token){
                return res.status(401).json({
                    status: false,
                    message: 'There\'s no token!',
                    data: null
                })
            }

            const decoded = jwt.verify(token, SIGNATURE_KEY);
            req.user = decoded;
            next();
        } catch(err){
            if(err.message == 'jwt malformed'){
                return res.status(401).json({
                    status: false,
                    message: err.message,
                    data: null
                })
            }

            next(err);

        }
    },
    inGame: (req,res,next)=>{
        try{
            const token = req.headers['authorization'];
            if(!token){
                return res.status(401).json({
                    status: false,
                    message: 'There\'s no token!',
                    data: null
                })
            }

            const decoded = jwt.verify(token, SIGNATURE_KEY);
            req.user = decoded;
            next();
        } catch(err){
            if(err.message == 'jwt malformed'){
                return res.status(401).json({
                    status: false,
                    message: err.message,
                    data: null
                })
            }

            next(err);

        }
    },
    // isAdmin: (req,res,next)=>{
    //     try{
    //         const token = req.headers['authorization'];
    //         if(!token){
    //             return res.status(401).json({
    //                 status: false,
    //                 message: 'Macam tak betul',
    //                 data: null
    //             })
    //         }

    //         const decoded = jwt.verify(token, SIGNATURE_KEY);
    //         if(decoded.user_type!='admin'){
    //             return res.status(401).json({ status: false, message: 'you\'re not authorized!' });
    //         }
    //         req.user = decoded;
    //         next();
    //     } catch(err){
    //         if(err.message == 'jwt malformed'){
    //             return res.status(401).json({
    //                 status: false,
    //                 message: err.message,
    //                 data: null
    //             })
    //         }

    //         next(err);

    //     }
    // }

}