const { httpPostSignup } = require("../controllers");

module.exports = {
    Query:{
        user:() => {
            return 
        }
    },
    Mutation:{
        addNewUser:(_,args) => {
            return httpPostSignup(args);
        },
    }
}