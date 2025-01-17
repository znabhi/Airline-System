const ServerErrorCodes = Object.freeze({
  INTERNAL_SERVER_ERROR: 500,
});

const ClientErrorCodes = Object.freeze({
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  UNAUTHORISED: 401,
});

const SuccessErrorCodes = Object.freeze({
  OK: 200,
  CREATED: 201,
});
module.exports = {
  ServerErrorCodes,
  ClientErrorCodes,
  SuccessErrorCodes,
};
