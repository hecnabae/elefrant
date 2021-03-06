'use strict';

/**
 * Module dependencies.
 */


/**
 * @apiDefineErrorStructure ErrorStructure
 *
 * @apiErrorTitle (all) Error response
 * @apiError (all) code Code of error.
 * @apiError (all) status Status code of error.
 * @apiError (all) message Description of error.
 *
 */

/**
 * @apiDefineErrorStructure BadRequest
 *
 * @apiErrorExample (409) Error-Response:
 *  HTTP/1.1 400 Bad Request
 *  {
 *      "code": 409,
 *      "status": "Bad Request",
 *      "message": "Error message."
 *  }
 */

/**
 * @apiDefineErrorStructure Unauthorized
 *
 * @apiErrorExample (401) Error-Response:
 *  HTTP/1.1 401 Unauthorized
 *  {
 *      "code": 401,
 *      "status": "Unauthorized",
 *      "message": "Error message."
 *  }
 */

// Auth Action
module.exports = {

    /**
     * @api {post} /oauth2/token Get outh2.0 token ROPC
     * @apiVersion 0.1.0
     * @apiName getRopcToken2Auth
     * @apiGroup Auth
     * @apiDescription Allows a registered application to obtain an OAuth 2 Bearer Token, which can be used to make API requests on an application's own behalf, in the user context.
     *
     * @apiPermission Not needed.
     *
     * @apiExample Example usage:
     *      curl --user [clientId]:[clientSecret] --data grant_type=password --data username=[username] --data password=[password] https://api.com/oauth2/token
     *
     * @apiParam {String} clientId Id of client.
     * @apiParam {String} clientSecret Secret token of client.
     * @apiParam {String} grant_type Type of authorization. Must to be [password] (Body of request).
     * @apiParam {String} username Username of user (Body of request).
     * @apiParam {String} password Password of user (Body of request).
     *
     * @apiSuccessTitle (All) Success response
     * @apiSuccess (All) {String} access_token Token.
     * @apiSuccess (All) {String} token_type Users name.
     *
     * @apiSuccessExample Success-Response:
     *  HTTP/1.1 200 OK
     * {
     *      "access_token" : "7SiU7PzYri6HeBZpTDpFxjTK9Rop6O6jCJL6M=",
     *      "token_type":"Bearer"
     * }
     *
     * @apiErrorStructure ErrorStructure
     * @apiErrorStructure BadRequest
     * @apiErrorStructure Unauthorized
     */

    //-----------------------------------------------------------------------------------

    /**
     * @api {post} /oauth2/token Get outh2.0 token CC
     * @apiVersion 0.1.0
     * @apiName getCcToken2Auth
     * @apiGroup Auth
     * @apiDescription Allows a registered application to obtain an OAuth 2 Bearer Token, which can be used to make API requests on an application's own behalf, without a user context. This is called Application-only authentication.
     *
     * @apiPermission Not needed.
     *
     * @apiExample Example usage:
     *      curl --user [clientId]:[clientSecret] --data grant_type=client_credentials https://api.com/oauth2/token
     *
     * @apiParam {String} clientId Id of client.
     * @apiParam {String} clientSecret Secret token of client.
     * @apiParam {String} grant_type Type of authorization. Must to be [client_credentials] (Body of request).
     *
     * @apiSuccessTitle (All) Success response
     * @apiSuccess (All) {String} access_token Token.
     * @apiSuccess (All) {String} token_type Users name.
     *
     * @apiSuccessExample Success-Response:
     *  HTTP/1.1 200 OK
     * {
     *      "access_token" : "7SiU7PzYri6HeBZpTDpFxjTK9Rop6O6jCJL6M=",
     *      "token_type":"Bearer"
     * }
     *
     * @apiErrorStructure ErrorStructure
     * @apiErrorStructure BadRequest
     * @apiErrorStructure Unauthorized
     */

    //-----------------------------------------------------------------------------------

};
