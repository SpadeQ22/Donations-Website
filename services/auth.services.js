const passport = require("passport")
const LocalStrategy = require("passport-local");

const { Strategy, ExtractJwt } = require('passport-jwt');

const {User} = require("../Models/user");
const {Admin} = require("../Models/adminUser");

const jwtOpts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "thisisasecret",
}

const localOpts = {
     usernameField: 'email',
 };


const jwtStrategy = new Strategy(jwtOpts, async (payload, done) => {
    try{
        let authenticatedUser = null;
        if(payload.admin){
            authenticatedUser = await User.findById(payload._id);
        } else {
            authenticatedUser = await Admin.findById(payload._id);
        }
        
        if(!authenticatedUser){
            return done(null, false);
        }
        return done(null, authenticatedUser);
    }catch(e){
        return done(e, false);
    }
})

// const jwtStrategyAdmin = new Strategy(jwtOpts, async (payload, done) => {
//     console.log(payload);
//     try{
//         const foundUser = await Admin.findById(payload._id);
//         console.log(foundUser);
//         if(!foundUser){
//             return done(null, false);
//         }
//         return done(null, foundUser);
//     }catch(e){
//         return done(e, false);
//     }
// })


const localStrategyUser = new LocalStrategy(localOpts, async (email, password, done) => {
     try {
         const user = await User.findOne({
             email
         });
         if (!user) {
             return done(null, false);
         } else if (!user.authenticateUser(password)) {
             return done(null, false);
         }
         return done(null, user);
     } catch (e) {
         return done(e, false);
     }
 });

 const localStrategyAdmin = new LocalStrategy(localOpts, async (email, password, done) => {
    try {
        const admin = await Admin.findOne({
            email
        });
        if (!admin) {
            return done(null, false);
        } else if (!admin.authenticateAdmin(password)) {
            return done(null, false);
        }
        return done(null, admin);
    } catch (e) {
        return done(e, false);
    }
});

passport.use(localStrategyUser);
passport.use('adminAuth',localStrategyAdmin);
passport.use('jwt', jwtStrategy);


const authLocalUser = passport.authenticate('local', {
    session: false
});
const authLocalAdmin = passport.authenticate('adminAuth', {
    session: false
});

const jwtAuth = passport.authenticate('jwt', {
    session:false
}); 


module.exports = {authLocalUser, authLocalAdmin, jwtAuth}