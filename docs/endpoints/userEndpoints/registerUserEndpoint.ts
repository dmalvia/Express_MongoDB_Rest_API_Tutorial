

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [username, password, email]
 *             properties:
 *               email:
 *                  type: string
 *                  description : the user email address
 *                  example : JohnDoe@gmail.com
 *               username:
 *                  type: string
 *                  description : the user password
 *                  example : JohnDoe
 *               password:
 *                  type: string
 *                  description : the user password
 *                  example : 123MEsdpo
 *     responses:
 *       200:
 *         description: The created user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       500:
 *         description: Some server error
 */

