"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const menuController_1 = require("../controllers/menuController");
const menuRoute = express_1.default.Router();
console.log("hai....");
menuRoute.post('/AddMenu', async (req, res) => {
    await (0, menuController_1.addMenu)(req, res);
});
menuRoute.get('/getMenu', async (req, res) => {
    await (0, menuController_1.getMenu)(req, res);
});
exports.default = menuRoute;
