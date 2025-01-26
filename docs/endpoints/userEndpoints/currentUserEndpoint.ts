/**
 * @swagger
 * /api/users/current:
 *  get:
 *    security:              
 *      - bearerAuth: []     
 *    tags:
 *      - Users
 *    description: Returns a single person info based on their JWT token
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: A Successful response user credentials
 *        schema:
 *           email:
 *             type: string
 *             description : the user email address
 *             example : JohnDoe@gmail.com
 *           username:
 *             type: string
 *             description : the user password
 *             example : 123MEsdpo
 *           id:
 *             type: string
 *             description : the user password
 *             example : 123MEsdpo
 */


