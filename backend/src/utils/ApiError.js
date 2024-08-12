class ApiError extends Error {
    constructor (statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        this.msg = message;
    }
}

export default ApiError;
