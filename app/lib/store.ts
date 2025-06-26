import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  category: string;
  inStock: boolean;
  rating: number;
  reviews: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  status: "processing" | "shipped" | "delivered" | "cancelled";
  items: CartItem[];
  total: number;
  date: string;
  trackingNumber?: string;
}

interface AppState {
  // Cart state
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemsCount: () => number;

  // Products state
  products: Product[];
  setProducts: (products: Product[]) => void;

  // Orders state
  orders: Order[];
  addOrder: (order: Order) => void;
  getOrderById: (orderId: string) => Order | undefined;
}

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Cart state
      cart: [],
      addToCart: (product, quantity = 1) => {
        const existingItem = get().cart.find((item) => item.id === product.id);
        if (existingItem) {
          set((state) => ({
            cart: state.cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item,
            ),
          }));
        } else {
          set((state) => ({
            cart: [...state.cart, { ...product, quantity }],
          }));
        }
      },
      removeFromCart: (productId) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        }));
      },
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(productId);
          return;
        }
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === productId ? { ...item, quantity } : item,
          ),
        }));
      },
      clearCart: () => set({ cart: [] }),
      getCartTotal: () => {
        return get().cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0,
        );
      },
      getCartItemsCount: () => {
        return get().cart.reduce((total, item) => total + item.quantity, 0);
      },

      products: [
        {
          id: "nfcovers-digital",
          name: "NFCOVERS™ DIGITAL",
          price: 55.0,
          originalPrice: 145.0,
          image: "/placeholder.svg?height=400&width=300",
          description:
            "Revolutionary E-Ink phone case with endless customization possibilities",
          category: "Phone Cases",
          inStock: true,
          rating: 5,
          reviews: 18,
        },
        {
          id: "nfcovers-classic",
          name: "NFCOVERS™ CLASSIC",
          price: 35.0,
          originalPrice: 75.0,
          image: "/placeholder.svg?height=400&width=300",
          description: "Classic design with premium protection and style",
          category: "Phone Cases",
          inStock: true,
          rating: 4.5,
          reviews: 24,
        },
        {
          id: "nfcovers-pro",
          name: "NFCOVERS™ PRO",
          price: 85.0,
          originalPrice: 150.0,
          image: "/placeholder.svg?height=400&width=300",
          description: "Professional grade protection with advanced features",
          category: "Phone Cases",
          inStock: true,
          rating: 4.8,
          reviews: 12,
        },
        {
          id: "nfcovers-wireless",
          name: "NFCOVERS™ WIRELESS",
          price: 65.0,
          originalPrice: 120.0,
          image: "/placeholder.svg?height=400&width=300",
          description: "Wireless charging compatible with sleek design",
          category: "Phone Cases",
          inStock: false,
          rating: 4.7,
          reviews: 8,
        },
      ],
      setProducts: (products) => set({ products }),
      orders: [],
      addOrder: (order) => {
        set((state) => ({
          orders: [...state.orders, order],
        }));
      },
      getOrderById: (orderId) => {
        return get().orders.find((order) => order.id === orderId);
      },
    }),
    {
      name: "nfcovers-store",
    },
  ),
);
