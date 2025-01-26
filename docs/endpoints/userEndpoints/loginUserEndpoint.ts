

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Login the user
 *     description : authenticates the user. return a user a token to access resource
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email:
 *                  type: string
 *                  description : the user email address
 *                  example : JohnDoe@gmail.com
 *               password:
 *                  type: string
 *                  description : the user password
 *                  example : 123MEsdpo
 *     responses:
 *       200:
 *         description: The token of the Authenticated User 
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required: [token]
 *               properties:
 *                 accessToken: 
 *                   type: string
 */