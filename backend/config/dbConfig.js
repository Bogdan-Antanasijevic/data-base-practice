const MONGO_PASS = 'admin'
const MONGODB_URL = `mongodb+srv://admin:${MONGO_PASS}@cluster0.dxpwegg.mongodb.net/?retryWrites=true&w=majority`;
const mongooseOptions = {
	useNewUrlParser : true,
	useUnifieTopology : true,
	useCreateIndex : true,
};
module.exports = {
	MONGO_PASS: MONGO_PASS,
	MONGODB_URL: MONGODB_URL,
	mongooseOptions: mongooseOptions 
};