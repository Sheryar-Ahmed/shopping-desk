import { initMongoose } from "../../lib/mongoose";
import Product from '../../models/Product';

export default async function handle(req, res){
    //we created the connection function in lib directory because we may use it later.
    await initMongoose();
    //now we will fetch all the products from mongodb through our model which we have defined above.
    res.status(200).json(await Product.find().exec() );
};