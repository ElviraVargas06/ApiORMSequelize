import { Producto } from "../models/Producto.js";
//Obtener Producto
export const getProducts = async (req, res) => {
  const product = await Producto.findAll();

  res.json(product);
};
