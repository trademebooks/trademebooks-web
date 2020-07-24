const globalResponseDTO = require('../responses/globalResponseDTO');

const isAuthenticated = (req, res, next) => {
    if (!req.session.user) {
        return res
            .status(401)
            .json(globalResponseDTO(
                status = "failed",
                code = 401,
                message = "Acces denied: you must be logged in to access this API endpoint.",
                data = {},
                errors = [
                    "You must be logged in."
                ]
            ));
    }

    next();
};

module.exports = isAuthenticated;