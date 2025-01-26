

/**
 * @swagger
 * /api/users/forgot:
 *   post:
 *     summary: forgot the user
 *     description : updates user password using email 
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email]
 *             properties:
 *               email:
 *                  type: string
 *                  description : the user email address
 *                  example : JohnDoe@gmail.com
 *     responses:
 *       200:
 *         description: Successful password change 
 *         schema:
 *            password:
 *               type: string
 *               description : new genetrated password
 *               example : K1209kbhv
 *       500:
 *         description: Some server error
 * 
 */