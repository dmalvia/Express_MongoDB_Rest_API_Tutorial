

/**
 * @swagger
 * /api/users/deactivate:
 *   delete:
 *     summary: remove a user
 *     description: removes a user from the database
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [confirm, password, email]
 *             properties:
 *               email:
 *                  type: string
 *                  description : the user email address
 *                  example : JohnDoe@gmail.com
 *               password:
 *                  type: string
 *                  description : the user password
 *                  example : 123MEsdpo
 *               confirm:
 *                  type: boolean
 *                  description : authorize user to be removed
 *                  example : true
 *     responses:
 *       200:
 *         description: Deleted a user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       500:
 *         description: Some server error
 */

