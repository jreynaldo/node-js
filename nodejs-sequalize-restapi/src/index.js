import app from './app.js'
import { sequelize } from './database/database.js';
import './models/Project.js'
import './models/Task.js'
async function main() {
   try{
    await sequelize.sync({force: true});
    app.listen(3000);
    console.log(3000);
   }catch(error){
    console.log('Unable to connect to the database', error)
   }
}
main();