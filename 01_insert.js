const dbConfig = require('./db/config');
const knex = require('knex')(dbConfig.mariaDB);

const newUser = {
    name: 'Lionel',
    lastname: 'Messi',
    age: 35,
    dni: '123Dios48856'
};

(async () => {
try{
        // Single insert
        await knex('users').insert(newUser)
        console.log("User inserted into DB");

}
catch(error){
    console.log(error);
}
finally{
    knex.destroy();
}
})();