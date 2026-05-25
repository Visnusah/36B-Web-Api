import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 8088;
export const MOCK_DB = process.env.MOCK_DB || "mock";
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017//db_36B";

// same as 
// export{
//     PORT,
//     MOCK_DB
// }