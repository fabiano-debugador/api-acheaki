"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticate = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function ensureAuthenticate(request, response, next) {
    const authToken = request.headers.authorization;
    if (!authToken) {
        return response.status(401).json({
            message: "Token is missing",
        });
    }
    const [, token] = authToken.split(" ");
    try {
        (0, jsonwebtoken_1.verify)(token, "13f3b6cb-3f98-4258-93c7-82878099f1d9");
        return next();
    }
    catch (err) {
        return response.status(401).json({
            message: "Token invalid",
        });
    }
}
exports.ensureAuthenticate = ensureAuthenticate;
