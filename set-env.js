const fs = require('fs');
require('dotenv').config();

const devEnvFile = `export const environment = {
    production : false,
    apiBaseUrl : '${process.env.apiBaseUrl}'
};
`;

fs.writeFile('./src/environments/environment.ts' , devEnvFile , function(err) {
    if (err) {
        throw console.error(err);
    } else{
        console.log("Angular Dev Env File generated");
    }
});

