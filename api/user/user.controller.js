const passport = require('passport');

module.exports = {
    findAll: async (req, res) => {
        const us = await User.find();
        res.status(200).json(us)
    },

    SingUp: async (req, res, next) => {
        const user = new User({
            email: req.body.email,
            password: req.body.password
        });
        await User.findOne({ email: req.body.email }, (err, userExist) => {
            console.log(userExist)
            if (userExist) {
                return res.status(400).json({ message: 'El usuario ya existe' })
            }
            user.save((err) => {
                if (err) {
                    next(err);
                }
                res.status(200).json({ message: 'Usario creado exitosamente' });
            })
        })
    },

    LogIn: async (req, res, next) => {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ message: 'Usuario y/o contraseña incorrectasssssss' })
        }
        if (user.log === true) {
            return res.status(200).json({ message: 'El usuario ya estaba logeado' })
        }
        user.comparePassword(req.body.password, async (err, eqls) => {
            if (eqls) {
                user.log = true;
                user.save();
                return res.status(200).json({ message: 'Logeado exitosamente' })
            }else{
                return res.status(400).json({ message: 'Usuario y/o contraseña incorrectas' })
            }
        })
    },

    LogOut: async (req, res, next) => {
        const user = await User.findById(req.params.id)
        if (!user) {
            next()
        }
        else {
            if (user.log === true) {
                user.log = false;
                user.save();
                return res.status(200).json({ message: 'Logout exitoso' })
            }
        }
        return res.status(200).json({ message: 'No logeado' })
    }
}