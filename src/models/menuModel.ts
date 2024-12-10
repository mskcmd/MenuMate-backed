import { Schema, model, Document } from 'mongoose';

// Define the types for the Menu
interface IMenu extends Document {
  header: string;
  name: string;
  price: number;
  description: string;
}

const menuSchema = new Schema<IMenu>({
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
  timestamps: true,  // To add createdAt and updatedAt fields
});

// Create and export the Menu model
const Menu = model<IMenu>('Menu', menuSchema);
export default Menu;
