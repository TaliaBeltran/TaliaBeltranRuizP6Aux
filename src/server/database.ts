import mongoose from "mongoose";
async function connect() {
  try {
    await mongoose.connect("mongodb://172.18.0.2:27017/clase9Example", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected");
  } catch (e) {
    console.log(e);
  }
}

export default connect;
