class ApiError extends Error {
    public statusCode: number;
    public errors: any[];
    public data: any;
    public success: boolean;
    public errorStack: string;

    constructor(
        statusCode: number,
        message: string = "Something went wrong!",
        errorStack: string = "",
        errors: any[] = []
    ) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.errors = errors;
        this.data = null;
        this.success = false;
        this.errorStack = errorStack || '';

        // Capture stack trace if available
        if (!errorStack) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };
