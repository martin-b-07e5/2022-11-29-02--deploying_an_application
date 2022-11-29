export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: "Phone XL",
    price: 799,
    description: "A large phone with one of the best screens",
  },
  {
    id: 2,
    name: "Phone Mini",
    price: 699,
    description: "A great phone with one of the best cameras",
  },
  {
    id: 3,
    name: "Phone Standard",
    price: 299,
    description: "A standard phone with a medium camera",
  },
  {
    id: 5,
    name: "Homer Simpson",
    price: 799,
    description: "See how to load this dynamically.",
  },
  {
    id: 6,
    name: "Marge Bouvier",
    price: 799,
    description: "See how to load this dynamically.",
  },
  {
    id: 7,
    name: "Lisa Simpson",
    price: 699,
    description: "See how to load this dynamically.",
  },
  {
    id: 8,
    name: "Bart Simpson",
    price: 599,
    description: "See how to load this dynamically.",
  },
  {
    id: 9,
    name: "Maggie Simpson",
    price: 499,
    description: "See how to load this dynamically.",
  },
];