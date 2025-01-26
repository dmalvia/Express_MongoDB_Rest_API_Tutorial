const corsOptions = {
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
    methods: ["GET", "POST", "PUT", "DELETE"],
}

module.exports = {corsOptions};
