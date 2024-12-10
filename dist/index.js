"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongoAuth_1 = require("./config/mongoAuth");
const menuRoute_1 = __importDefault(require("./routes/menuRoute"));
const errorMiddleware_1 = require("./middleware/errorMiddleware");
(0, mongoAuth_1.connectedDB)();
const app = (0, express_1.default)();
const allowedOrigin = process.env.ALLOWED_ORIGIN || "*";
const corsOptions = {
    origin: allowedOrigin,
    methods: "GET,POST",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true,
};
app.use((0, cors_1.default)(corsOptions));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(menuRoute_1.default);
app.use(errorMiddleware_1.errorHandler);
app.use(errorMiddleware_1.notFound);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
