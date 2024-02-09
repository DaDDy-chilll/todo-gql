const { Users } = require("../models");
const bcrypt = require('bcrypt')
// const httpPostSignup = async (req, res) => {
//   const data = req.body;
//   if (!data) return res.status(400).json({ error: "No data provided" });
//   let { name, email, password } = data;
//   if (!name || !email || !password)
//     return res.status(400).json({ error: "Missing fields" });
//   try {
//     const findUser = await Users.findOne({ email });
//     console.log(findUser);
//     if (findUser)
//       return res.status(400).json({ error: "Email already in use" });
//     password = await bcrypt.hash(password,10);
//     const newUser = await Users.create({ name, email, password });
//     newUser.password = undefined;
//     res.status(200).json(newUser);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
const getAllUser = async () => {
  return await Users.find()
}
const httpPostSignup = async (user) => {
  console.log(user);
  if (!user) return { error: "No data provided" };
  let { name, email, password } = user;
  if (!name || !email || !password)
    return {status:'BAD REQUEST', error: "Missing fields" };
  try {
    const findUser = await Users.findOne({ email });
    console.log(findUser);
    if (findUser)
      return {status:'BAD REQUEST',  error: "Email already in use" };
    password = await bcrypt.hash(password,10);
    const newUser = await Users.create({ name, email, password });
    newUser.password = undefined;
    return {status:'SUCCESS', newUser};
  } catch (error) {
    console.log(error);
    return {status:'INTERNAL ERROR', error: error.message };
  }
};


module.exports = { httpPostSignup };
