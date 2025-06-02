import app from "./app";
import { connectToMongoDB } from "./config/mongodbinit";

const PORT = process.env.PORT || 5000;

connectToMongoDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(process.env.COINGECKO_API);
  });
});
