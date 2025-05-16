export interface GalleryItem {
  id: number;
  category: 'wedding' | 'birthday' | 'custom' | 'specialty' | 'jarcakes';
  title: string;
  description: string;
  image: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: 1,
    category: 'wedding',
    title: 'Elegant Tiered Wedding Cake',
    description: 'A classic white wedding cake with delicate sugar flowers',
    image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    category: 'wedding',
    title: 'Modern Geometric Wedding Cake',
    description: 'Contemporary design with geometric patterns and gold accents',
    image: 'https://images.pexels.com/photos/3992386/pexels-photo-3992386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    category: 'birthday',
    title: 'Colorful Sprinkle Birthday Cake',
    description: 'Vibrant birthday cake loaded with sprinkles and buttercream',
    image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    category: 'birthday',
    title: 'Character Theme Cake',
    description: 'Custom character designs for children\'s birthdays',
    image: 'https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 5,
    category: 'custom',
    title: 'Anniversary Celebration Cake',
    description: 'Personalized design celebrating years of love',
    image: 'https://images.pexels.com/photos/806363/pexels-photo-806363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 6,
    category: 'custom',
    title: 'Graduation Celebration Cake',
    description: 'Custom design perfect for academic achievements',
    image: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 7,
    category: 'specialty',
    title: 'Artisanal Macarons',
    description: 'Delicate French macarons in assorted flavors',
    image: 'https://images.pexels.com/photos/239578/pexels-photo-239578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 8,
    category: 'specialty',
    title: 'Gourmet Cupcakes',
    description: 'Assortment of premium cupcakes with unique flavors',
    image: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 9,
    category: 'jarcakes',
    title: 'Classic Tiramisu Jar Cake',
    description: 'Layers of coffee-soaked ladyfingers and mascarpone cream',
    image: 'https://images.pexels.com/photos/14705134/pexels-photo-14705134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 10,
    category: 'jarcakes',
    title: 'Berry Trifle Jar',
    description: 'Fresh berries layered with vanilla cake and cream',
    image: 'https://images.pexels.com/photos/14705152/pexels-photo-14705152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 11,
    category: 'jarcakes',
    title: 'Chocolate Dream Jar',
    description: 'Decadent chocolate cake with ganache and mousse',
    image: 'https://images.pexels.com/photos/14705155/pexels-photo-14705155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

export const categories = [
  { id: 'all', name: 'All Creations' },
  { id: 'wedding', name: 'Wedding Cakes' },
  { id: 'birthday', name: 'Birthday Cakes' },
  { id: 'custom', name: 'Custom Celebration' },
  { id: 'specialty', name: 'Specialty Desserts' },
  { id: 'jarcakes', name: 'Jar Cakes' }
];