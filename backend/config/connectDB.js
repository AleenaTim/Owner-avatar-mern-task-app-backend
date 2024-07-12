const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect('ongodb+srv://user:mongodb123!@cluster0.fqyyhas.mongodb.net/');

    console.log(`MongoDB Connected`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;

// Use this function in server.js to connect to mongoDB and start the server

// const startServer = async () => {
//   try {
//     await connectDB();
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
// startServer();
