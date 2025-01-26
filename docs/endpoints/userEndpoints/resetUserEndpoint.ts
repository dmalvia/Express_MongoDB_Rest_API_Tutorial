

/**
 * @swagger
 * /api/users/reset:
 *   post:
 *     summary: reset the user
 *     description : updates user password  
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, old_password,new_password]
 *             properties:
 *               email:
 *                  type: string
 *                  description : the user email address
 *                  example : JohnDoe@gmail.com
 *               old_password:
 *                  type: string
 *                  description : the current password
 *                  example : 123MEsdpo
 *               new_password:
 *                  type: string
 *                  description : the new password
 *                  example : 123MEsdpo
 *     responses:
 *       200:
 *         description: Successful password change 
 *         schema:
 *            message:
 *               type: string
 *               description : successful reser password
 *               example : updated the user password
 *       500:
 *         description: Some server error
 * 
 */