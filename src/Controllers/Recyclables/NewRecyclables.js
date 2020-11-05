const db = require("../../Connect/Connect");
const NewRecyclables = require("../../model/Recyclables/NewRecyclables.model");
module.exports = function (app) {
  /**
   * @swagger
   *
   * /NewRecyclables:
   *   post:
   *    tags:
   *    - Recyclables
   *    parameters:
   *        - name: reqBody
   *          description: request Body
   *          in: body
   *          schema:
   *            type: object
   *            properties:
   *              token:
   *                type: string
   *              IDlevel:
   *                type: string
   *              ScoreLv:
   *                type: string
   *            required:
   *                - token
   *                - IDlevel
   *                - ScoreLv
   *    responses:
   *      '201':
   *        description: A successful response
   *      '422':
   *        description: login already exists
   */
  app.post("/NewRecyclables", function (req, res) {
    NewRecyclables(
      db,
      req.body.token,
      req.body.IDlevel,
      req.body.ScoreLv,
      function (dataString) {
        res.json({
          dataString: dataString,
        });
      }
    );
  });
};
