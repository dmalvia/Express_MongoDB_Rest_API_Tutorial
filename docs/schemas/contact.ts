/**
* @swagger
* paths:
*   "/":
*     get:
*       description: ''
*       responses:
*         '200':
*           description: OK
*   "/api/contacts/":
*     get:
*       tags:
*       - Contacts
*       summary: get all contacts
*       description: Returns all contacts of the user
*       responses:
*         '200':
*           description: OK
*         '400':
*           description: Bad Request
*         '401':
*           description: Unauthorized
*       security:
*       - bearerAuth: []
*     post:
*       tags:
*       - Contacts
*       summary: create a contact
*       description: Enpoing to create a contact
*       responses:
*         '201':
*           description: Created
*         '400':
*           description: Bad Request
*         '401':
*           description: Unauthorized
*       security:
*       - bearerAuth: []
*       requestBody:
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 name:
*                   example: any
*                 email:
*                   example: any
*                 phone:
*                   example: any
*                 fax:
*                   example: any
*     delete:
*       tags:
*       - Contacts
*       summary: delete all contacts
*       description: Endpoint to delete all contacts
*       responses:
*         '200':
*           description: OK
*         '400':
*           description: Bad Request
*         '401':
*           description: Unauthorized
*       security:
*       - bearerAuth: []
*   "/api/contacts/{id}":
*     get:
*       tags:
*       - Contacts
*       summary: get a contact
*       description: Endpoint to retrieve a contact
*       parameters:
*       - name: id
*         in: path
*         required: true
*         schema:
*           type: string
*       responses:
*         '200':
*           description: OK
*         '400':
*           description: Bad Request
*         '401':
*           description: Unauthorized
*       security:
*       - bearerAuth: []
*     put:
*       tags:
*       - Contacts
*       summary: update a contact
*       description: Endpoint to update a contact
*       parameters:
*       - name: id
*         in: path
*         required: true
*         schema:
*           type: string
*       responses:
*         '200':
*           description: OK
*         '400':
*           description: Bad Request
*         '401':
*           description: Unauthorized
*       security:
*       - bearerAuth: []
*       requestBody:
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 email:
*                   example: any
*                 name:
*                   example: any
*                 phone:
*                   example: any
*                 fax:
*                   example: any
*     delete:
*       tags:
*       - Contacts
*       summary: delete a contact
*       description: Endpoint to delete a contact
*       parameters:
*       - name: id
*         in: path
*         required: true
*         schema:
*           type: string
*       responses:
*         '200':
*           description: OK
*         '400':
*           description: Bad Request
*         '401':
*           description: Unauthorized
*       security:
*       - bearerAuth: []
*/