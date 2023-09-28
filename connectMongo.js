const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		const username = "haruta-job_1";
		const password = "LPOXvK1idBRQxpt3";

		const url = `mongodb+srv://${username}:${password}@atlascluster.akqikjq.mongodb.net/job_recruitment?retryWrites=true&w=majority`;
		await mongoose.connect(url);
		console.log("Connect to MongoDB successfully");
	} catch (error) {
		console.log("Connect failed " + error.message);
	}
};

module.exports = connectDB;
