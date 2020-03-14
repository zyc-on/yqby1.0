class HttpException extends Error {
  constructor(msg = "服务器错误", errorCode = 1000, statusCode = 400) {
    super();
    this.msg = msg;
    this.errorCode = errorCode;
    this.statusCode = statusCode;
  }
}

class ParameterException extends HttpException {
  constructor(msg, errorCode) {
    super();
    this.statusCode = 400;
    this.msg = msg || "参数错误";
    this.errorCode = errorCode || 1000;
  }
}

class NotFoundException extends HttpException {
  constructor(msg, errorCode) {
    super();
    this.statusCode = 404;
    this.msg = msg || "404 NotFound";
    this.errorCode = errorCode || 1000;
  }
}

class UserVerifyException extends HttpException {
  constructor(msg, errorCode) {
    super();
    this.statusCode = 422;
    this.msg = msg || "用户名或密码错误";
    this.errorCode = errorCode || 1000;
  }
}

class Success extends HttpException {
  constructor(msg, errorCode) {
    super();
    this.statusCode = 200;
    this.msg = msg || "ok";
    this.errorCode = errorCode || 0;
  }
}

// class CategoryException extends HttpException {
//   constructor(msg, errorCode) {
//     super();
//     this.statusCode = 404;
//     this.msg = msg || "分类未找到";
//     this.errorCode = errorCode || 1000;
//   }
// }

class Forbbiden extends HttpException {
  constructor(msg, errorCode) {
    super();
    this.msg = msg || "禁止访问";
    this.errorCode = errorCode || 1000;
    this.statusCode = 403;
  }
}
module.exports = {
  HttpException,
  ParameterException,
  UserVerifyException,
  // CategoryException,
  NotFoundException,
  Success,
  Forbbiden
};
