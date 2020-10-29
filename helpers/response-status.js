// 500's server errors
const serverError = (resp) => {
  return {
    resp,
    status(status) {
      this.resp.status(status);
      return this;
    },
    body(body = {}) {
      this.resp.json({
        ok: false,
        ...body,
      });
      return this
    },
  };
};

// 400's Client errors
const clientError = (resp) => {
  return {
    resp,
    status(status) {
      this.resp.status(status);
      return this;
    },
    body(body = {}) {
      this.resp.json({
        ok: false,
        ...body,
      });
      return this
    },
  };
};

// 200's Success responses
const successRequest = (resp) => {
  return {
    resp,
    status(status) {
      this.resp.status(status);
      return this;
    },
    body(body = {}) {
      this.resp.json({
        ok: true,
        ...body,
      });
      return this
    },
  };
};

module.exports = {
  serverError,
  clientError,
  successRequest,
};
