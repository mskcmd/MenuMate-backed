import { Request, Response } from 'express';
import Menu from '../models/menuModel';


export async function addMenu(req: Request, res: Response) {
    try {
        const { header, name, price, description } = req.body;

        if (!header || !name || !price || !description) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newMenu = new Menu({
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

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error', error });
    }
}


export async function getMenu(req: Request, res: Response) {
    try {
        const { header } = req.query;
        console.log("header",header);

        if (!header) {
            return res.status(400).json({ message: 'Header is required' });
        }

        const menuItems = await Menu.find({ header });

        if (menuItems.length === 0) {
            return res.status(404).json({ message: 'No menu items found for this header' });
        }

        return res.status(200).json(menuItems);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error', error });
    }
}
