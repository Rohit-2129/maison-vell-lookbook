export interface LookRow {
  id: number;
  look_index: number;
  look_number: number;
  title: string;
  editorial_note: string;
  sheet_url: string;
  sheet_w: number;
  sheet_h: number;
  x0: number;
  x1: number;
  y0: number;
  y1: number;
}

export interface PieceRow {
  id: number;
  sort_order: number;
  look_number: number;
  piece_slot: number;
  name: string;
  price_cents: number;
  price_display: string;
  department: string;
  description: string;
  sheet_url: string;
  sheet_w: number;
  sheet_h: number;
  x0: number;
  x1: number;
  y0: number;
  y1: number;
}

export interface SavedItemRow {
  id: number;
  visitor_key: string;
  piece_id: number;
  created_at: string;
  pieces?: PieceRow;
}

export interface CartItemRow {
  id: number;
  visitor_key: string;
  piece_id: number;
  size: string;
  quantity: number;
  created_at: string;
  pieces?: PieceRow;
}

export interface OrderItemSnapshot {
  piece_id: number;
  name: string;
  size: string;
  quantity: number;
  price_cents: number;
  price_display: string;
}

export interface OrderRow {
  id: number;
  visitor_key: string;
  user_email: string;
  full_name: string;
  shipping_address: string;
  city_country: string;
  items_json: OrderItemSnapshot[];
  total_cents: number;
  status: string;
  created_at: string;
}

export interface MaisonContentRow {
  id: number;
  slug: string;
  eyebrow: string;
  heading: string;
  body: string;
  details_json: Array<{ label: string; value: string; text?: string }>;
}

export type ActiveTab = 'Runway' | 'The Maison' | 'Lookbook' | 'Shop' | 'Beauty' | 'Our World';
export type DrawerMode = null | 'login' | 'search' | 'saved' | 'cart' | 'shop-look' | 'piece-detail';
