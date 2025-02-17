import { create } from 'zustand'
import { Product } from '../interfaces/Product'
import { CartProduct } from '../interfaces/CartProduct'

type CartStore = {
  cartProducts: CartProduct[]
  totalPrice: number
  totalQuantity: number

  addProduct: (product: Product) => void
  removeProduct: (product: Product) => void
  increaseProductQuantity: (product: Product) => void
  decreaseProductQuantity: (product: Product) => void
}

const useCartStore = create<CartStore>((set) => ({
  cartProducts: [],
  totalPrice: 0,
  totalQuantity: 0,

  addProduct: (product: Product) => set((state) => {
    const existingProduct = state.cartProducts.find((item) => item.id === product.id);

    if (existingProduct) {
      return {
        cartProducts: state.cartProducts.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1, itemsPrice: item.itemsPrice + product.price }
            : item
        ),
        totalPrice: state.totalPrice + product.price,
        totalQuantity: state.totalQuantity + 1
      };
    }
    return {
      cartProducts: [
        ...state.cartProducts,
        { ...product, quantity: 1, itemsPrice: product.price }
      ],
      totalPrice: state.totalPrice + product.price,
      totalQuantity: state.totalQuantity + 1,
    };
  }),

  removeProduct: (product: Product) => set((state) => {
    const productToRemove = state.cartProducts.find((item) => item.id === product.id);
    if (!productToRemove) return state;

    return {
      cartProducts: state.cartProducts.filter((item) => item.id !== product.id),
      totalPrice: state.totalPrice - productToRemove.itemsPrice,
      totalQuantity: state.totalQuantity - productToRemove.quantity,
    };
  }),


  increaseProductQuantity: (product: Product) => set((state) => ({
    cartProducts: state.cartProducts.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1, itemsPrice: item.itemsPrice + product.price }
        : item
    ),
    totalPrice: state.totalPrice + product.price,
    totalQuantity: state.totalQuantity + 1
  })),


  decreaseProductQuantity: (product: Product) => set((state) => ({
    cartProducts: state.cartProducts
      .map((item) =>
        item.id === product.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1, itemsPrice: item.itemsPrice - product.price }
          : item
      )
      .filter((item) => item.quantity > 0),
    totalPrice: state.totalPrice - product.price,
    totalQuantity: state.totalQuantity - 1
  })),


}))

export default useCartStore;