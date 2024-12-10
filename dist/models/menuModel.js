"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const menuSchema = new mongoose_1.Schema({
    header: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
}, {
    timestamps: true, // To add createdAt and updatedAt fields
});
// Create and export the Menu model
const Menu = (0, mongoose_1.model)('Menu', menuSchema);
exports.default = Menu;
