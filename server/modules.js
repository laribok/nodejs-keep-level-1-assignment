/* Replace undefined with Require of your Mongoose connection initialization method */
const initializeMongooseConnection = require("./db/index");
/* Replace undefined with Require of your note entity*/
const noteModel = require("./api/v1/note/note.entity");
/* Replace undefined with Require of your user entity*/
const userModel = require("./api/v1/user/user.entity");

module.exports = {
  initializeMongooseConnection,
  noteModel,
  userModel,
};
