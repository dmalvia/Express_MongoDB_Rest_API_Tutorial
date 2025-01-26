export const swaggeroptions = {
    definition:{
  
      openapi : "3.0.0",
      info: {
        contact:"Joseph Adogeri",
        since:"22-JAN-2025",
        title: "Contact Management App",
        description: "This is an app which handles authentication of a user and anges their contacts"+
                      "This app was created using Typescript, MongoDB, NodeJS, Express" +
                      "This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about\nSwagger at [http://swagger.io](http://swagger.io)."+
                      " \n\nSome useful links:\n- [The Command Management App repository](https://github.com/jadogeri/Contact_Management_App)"+
                      "\n- [The source API definition for the Contact Management App](https://github.com/jadogeri/Contact_Management_App/tree/main/docs)",
        version: "0.1",
        termsOfService: "http://swagger.io/terms",
        license:{
          name: "Apache 2.0",
          url: "http://www.apache.org/licenses/LICENSE-2.0.html"
        },
  
      },
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          }
        }
      },
      tags: [                           // by default: empty Array
        {
            "name": "Users",               // Tag name
            "description": "The Userss managing API"         // Tag description
        },
        {
            "name": "Contacts",               // Tag name
            "description": "The Contacts managing API",         // Tag description
            "security": "bearerAuth"
        },
    ],
      servers : [
        {
          //url : "https://fruitsrestapi.onrender.com"
        url : "http://localhost:4000"
        }
      ]
    },
    apis : ["./docs/**/*.ts"],
  };