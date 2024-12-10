"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectedDB = connectedDB;
const mongoose_1 = __importDefault(require("mongoose"));
const dbURI = process.env.DB_URI || 'mongodb://localhost:27017/Menu_card';
async function connectedDB() {
    try {
        await mongoose_1.default.connect(dbURI);
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}
