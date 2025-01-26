/**
 * @swagger
 * components:
 *   schemas:
 *     Contacts:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - finished
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the contact
 *         title:
 *           type: string
 *           description: The title of your contact
 *         description:
 *           type: string
 *           description: The contact explanation
 *         published:
 *           type: boolean
 *           description: Whether you have finished reading the contact
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the contact was added
 * security:
 *   bearerAuth: []
 *     
 */
/**
 * swagger
 * /api/contacts:
 *   get:
 *     summary: Lists all Fruits of the Client
 *     tags: [Contacts]
 *     responses:
 *       200:
 *         description: The list of the Contacts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Contacts'
 *       500:
 *         description: Some server error
 *     security:
 *       - bearerAuth:
 *           - write:contacts
 *           - read:contacts  
 *   delete:
 *     summary: Remove all contacts of the user
 *     tags: [Contacts]
 *     responses:
 *       200:
 *         description: The contact was deleted
 *       404:
 *         description: The contact was not found
 *     security:
 *       - bearerAuth:
 *           - write:contacts
 *           - read:contacts 
 *   post:
 *     summary: Add a fruit to a new contact
 *     tags: [Contacts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [id] 
 *             properties:
 *               id:
 *                  type: integer
 *                  example: 1
 *     responses:
 *       200:
 *         description: The created contact.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contacts'
 *       500:
 *         description: Some server error
 *     security:
 *       - bearerAuth:
 *           - write:contacts
 *           - read:contacts  
 *   put:
 *    summary: Replace the fruit of the contact by id 
 *    tags: [Contacts]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:       
 *          schema:
 *             type: object
 *             required: [new_id, old_id] 
 *             properties:
 *               new_id:
 *                  type: integer
 *                  example: 1
 *               old_id:
 *                  type: interger
 *                  example: 2
 *    responses:
 *      200:
 *        description: The contact was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Contacts'
 *      404:
 *        description: The contact was not found
 *      500:
 *        description: Some error happened
 *    security:
 *       - bearerAuth:
 *           - write:contacts
 *           - read:contacts
 * /api/contacts/{id}:
 *   get:
 *     summary: Get the specific contact by id
 *     tags: [Contacts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The contact id
 *     responses:
 *       200:
 *         description: The contact response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contacts'
 *       404:
 *         description: The contact was not found
 *       500:
 *         description: Some server error
 *     security:
 *       - bearerAuth:
 *           - write:contacts
 *           - read:contacts  
 *   delete:
 *     summary: Remove fruit of the contact by id
 *     tags: [Contacts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           example: 1 
 *         required: true
 *         description: The id of the fruit
 *
 *     responses:
 *       200:
 *         description: The contact was deleted
 *       404:
 *         description: The contact was not found
 *     security:
 *       - bearerAuth:
 *           - write:contacts
 *           - read:contactss 
 */