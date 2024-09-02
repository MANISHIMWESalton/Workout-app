const monngose = require("mongoose");

const dbConnection = () => {
    try {
        const dbConnect = monngose.connect(process.env.MONGOOSE_URI);
        console.log(`Database connected successfully!`);
    } catch (error) {
        console.log(`Database connection  failed!`);

    }
}
module.exports = dbConnection;