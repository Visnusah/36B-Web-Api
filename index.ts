import app, { PORT, dummy } from "./src/app";
import { PORT as SERVER_PORT } from "./src/config/constant";
import { connectToMongoDB } from "./src/database/mongodb";

connectToMongoDB()
    .then(()=>{
        console.log("MongoDB connect established, stating server...");
    })
    .catch((error)=>{
        console.error("Failed to connect to MongoDB, server not started", error); 
    })
// if same name imported use alias "as"
app.listen(
    SERVER_PORT,
    () => {
        console.log(`Server running: ${SERVER_PORT}`);
    }
);