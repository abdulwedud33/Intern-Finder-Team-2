function sendResponse(res, statusCode, success, data, message) {
    const response = {
        status: statusCode,
        success,
        message,
    };

    if (data !== undefined) {
        response.data = data;
    }

    return res.status(statusCode).json(response);
}

module.exports = sendResponse;

  