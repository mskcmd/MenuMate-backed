"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMenu = addMenu;
exports.getMenu = getMenu;
const menuModel_1 = __importDefault(require("../models/menuModel"));
async function addMenu(req, res) {
    try {
        const { header, name, price, description } = req.body;
        if (!header || !name || !price || !description) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const newMenu = new menuModel_1.default({
            header,
            name,
            price,
            description,
        });
        const savedMenu = await newMenu.save();
        return res.status(201).json({
            message: 'Menu item added successfully',
            menu: savedMenu,
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error', error });
    }
}
async function getMenu(req, res) {
    try {
        const { header } = req.query;
        console.log("header", header);
        if (!header) {
            return res.status(400).json({ message: 'Header is required' });
        }
        const menuItems = await menuModel_1.default.find({ header });
        if (menuItems.length === 0) {
            return res.status(404).json({ message: 'No menu items found for this header' });
        }
        return res.status(200).json(menuItems);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error', error });
    }
}
