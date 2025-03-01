import { Product } from "../interfaces/Product";
import pelucia from "../images/pelucia.png";
import coffee from "../images/coffee.png";
import moletom from "../images/moleton.png";
import shirt from "../images/shirt.png";
import mug from "../images/mug.png";
import book from "../images/book.png";

export const products: Product[] = [
  { id: '1', description: "Café Blend Fortão", price: 50, image: coffee },
  { id: '2', description: "Café Hibernate (descafeinado)", price: 45, image: coffee },
  { id: '3', description: "Moletom 'Stay Zustand'", price: 200, image: moletom },
  { id: '4', description: "Urso de Pelúcia Pequeno", price: 80, image: pelucia },
  { id: '5', description: "Urso de Pelúcia Médio", price: 150, image: pelucia },
  { id: '6', description: "Urso de Pelúcia Gigante", price: 300, image: pelucia },
  { id: '7', description: "Camiseta 'Bear Mode On'", price: 100, image: shirt },
  { id: '8', description: "Caneca 'Zustand Java Bear'", price: 60, image: mug },
  { id: '9', description: "Caneca 'State Management Fuel'", price: 60, image: mug },
  { id: '10', description: "Livro 'O Guia do Urso Dev'", price: 120, image: book },
];