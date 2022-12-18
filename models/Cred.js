import { model, models, Schema } from "mongoose";

const TestScema = new Schema({
    username: String,
    password: String,
});

const Cred = models?.tests || model('tests', TestScema);
export default Cred;