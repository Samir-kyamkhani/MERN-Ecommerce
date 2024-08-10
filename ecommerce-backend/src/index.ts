import app from "./app.js"
import DB_CONNECTION from "./database/database.js";
import dotenv from "dotenv"


dotenv.config({
    path: "./.env"
})

const PORT = process.env.PORT || 3000;

DB_CONNECTION()
.then(() => {
    app.on("error", function(error) {
        console.log(`SERVER LISTENING ERROR :: ${error}`);
        throw error
    })

    app.listen(PORT, function() {
        console.log(`SERVER RUNNING ON PORT ${PORT}`);
    })
})
.catch((error) => {
    console.log(`SERVER CONNECTION FAILED :: ${error.message} `);
    throw error
})
