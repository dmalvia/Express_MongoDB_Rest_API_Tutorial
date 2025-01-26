

/**
 * @swagger
 * /api/users/logout:
 *   post:
 *     security:              
 *      - bearerAuth: []  
 *     summary: Logout the authenticated user
 *     description: Logging the authenticated user , remove auth credentials from database
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [token]
 *             properties:
 *               token:
 *                  type: string
 *                  description : JWT access token 
 *                  example: eydfsakfhalfhladkfhefefafheua
 *     responses:
 *       200:
 *         description: Clear token of Authenticated User
 *         schema:
 *            message:
 *               type: string
 *               description : successful logging out  
 *               example : logout the user
c *       500:
 *         description: Some server error
 */


 