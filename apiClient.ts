import supabase, { isSupabaseConfigured } from './supabase';
import type {
  CartItemRow,
  LookRow,
  MaisonContentRow,
  OrderRow,
  PieceRow,
  SavedItemRow,
} from '../types/vell';

// Static fallback snapshot used ONLY when deployed to a static host (e.g. Cloudflare Pages)
// where neither /api/* serverless functions nor VITE_SUPABASE_URL env vars are configured.
export const STATIC_LOOKS: LookRow[] = [
  {
    id: 1,
    look_index: 0,
    look_number: 15,
    title: 'Jaipuri Floral Cotton Anarkali Set',
    editorial_note:
      'Breathable pure cotton Jaipuri floral block-printed flared Anarkali kurta styled with white schiffli-lace cotton palazzos and soft chiffon dupatta.',
    sheet_url: 'india:look-15',
    sheet_w: 151,
    sheet_h: 448,
    x0: 0,
    x1: 151,
    y0: 0,
    y1: 448,
  },
  {
    id: 2,
    look_index: 1,
    look_number: 16,
    title: 'Mint Sequin Georgette Saree Set',
    editorial_note:
      'Lightweight pastel mint georgette partywear saree finished with a delicate silver sequin cutwork border, paired with oxidised silver kundan jhumkas and bangles.',
    sheet_url: 'india:look-16',
    sheet_w: 155,
    sheet_h: 448,
    x0: 0,
    x1: 155,
    y0: 0,
    y1: 448,
  },
  {
    id: 3,
    look_index: 2,
    look_number: 17,
    title: 'Peach Embroidered Kurta Suit & Potli',
    editorial_note:
      'Soft pastel peach chanderi-rayon straight embroidered kurta and pant suit with floral organza dupatta and pearl-beaded festive potli bag.',
    sheet_url: 'india:look-17',
    sheet_w: 152,
    sheet_h: 448,
    x0: 0,
    x1: 152,
    y0: 0,
    y1: 448,
  },
  {
    id: 4,
    look_index: 3,
    look_number: 18,
    title: 'Lucknowi Chikankari Kurti & Sharara',
    editorial_note:
      'Everyday dusty-rose Lucknowi Chikankari thread-embroidered kurti paired effortlessly with flared ivory-rose tiered rayon sharara bottoms.',
    sheet_url: 'india:look-18',
    sheet_w: 161,
    sheet_h: 448,
    x0: 0,
    x1: 161,
    y0: 0,
    y1: 448,
  },
  {
    id: 5,
    look_index: 4,
    look_number: 19,
    title: 'Sky-Blue Jaipuri Kurti & Cotton Pants',
    editorial_note:
      'Breezy sky-blue Jaipuri floral motif printed viscose-rayon A-line dailywear kurti matched with crisp white cotton straight cigarette pants.',
    sheet_url: 'india:look-19',
    sheet_w: 143,
    sheet_h: 448,
    x0: 0,
    x1: 143,
    y0: 0,
    y1: 448,
  },
  {
    id: 6,
    look_index: 5,
    look_number: 20,
    title: 'Festive Floral Organza Lehenga Choli',
    editorial_note:
      'Festive cream-ivory floral resham and zari embroidered organza lehenga skirt paired with a readymade sweetheart blouse and sheer net dupatta.',
    sheet_url: 'india:look-20',
    sheet_w: 216,
    sheet_h: 448,
    x0: 0,
    x1: 216,
    y0: 0,
    y1: 448,
  },
];

export const STATIC_PIECES: PieceRow[] = [
  {
    id: 1,
    sort_order: 0,
    look_number: 15,
    piece_slot: 1,
    name: 'Jaipuri Floral Anarkali Kurta',
    price_cents: 74900,
    price_display: '₹749',
    department: 'Clothing',
    description:
      'Pure breathable cotton pastel pink Jaipuri floral block-print flared Anarkali kurta with gota-patti neckline lace.',
    sheet_url: 'india:piece-01',
    sheet_w: 132,
    sheet_h: 219,
    x0: 0,
    x1: 132,
    y0: 0,
    y1: 219,
  },
  {
    id: 2,
    sort_order: 1,
    look_number: 15,
    piece_slot: 2,
    name: 'White Lace Cotton Palazzo',
    price_cents: 39900,
    price_display: '₹399',
    department: 'Clothing',
    description:
      'Soft breathable white cotton wide-leg palazzo bottoms finished with delicate schiffli eyelet lace hem and elasticated waist.',
    sheet_url: 'india:piece-02',
    sheet_w: 114,
    sheet_h: 219,
    x0: 0,
    x1: 114,
    y0: 0,
    y1: 219,
  },
  {
    id: 3,
    sort_order: 2,
    look_number: 16,
    piece_slot: 1,
    name: 'Mint Sequin Georgette Saree',
    price_cents: 89900,
    price_display: '₹899',
    department: 'Clothing',
    description:
      'Lightweight pastel mint-green poly-georgette partywear saree with silver sequin cutwork border and unstitched blouse piece.',
    sheet_url: 'india:piece-03',
    sheet_w: 72,
    sheet_h: 219,
    x0: 0,
    x1: 72,
    y0: 0,
    y1: 219,
  },
  {
    id: 4,
    sort_order: 3,
    look_number: 16,
    piece_slot: 2,
    name: 'Kundan Jhumka & Bangle Set',
    price_cents: 29900,
    price_display: '₹299',
    department: 'Accessories',
    description:
      'Oxidised silver-plated Kundan stone and pearl drop jhumka earrings paired with matching stone-studded bangle set.',
    sheet_url: 'india:piece-04',
    sheet_w: 219,
    sheet_h: 94,
    x0: 0,
    x1: 219,
    y0: 0,
    y1: 94,
  },
  {
    id: 5,
    sort_order: 4,
    look_number: 17,
    piece_slot: 1,
    name: 'Peach Embroidered Straight Kurta',
    price_cents: 69900,
    price_display: '₹699',
    department: 'Clothing',
    description:
      'Soft pastel peach chanderi-rayon straight cut kurta featuring delicate white resham floral yoke embroidery and 3/4th sleeves.',
    sheet_url: 'india:piece-05',
    sheet_w: 122,
    sheet_h: 219,
    x0: 0,
    x1: 122,
    y0: 0,
    y1: 219,
  },
  {
    id: 6,
    sort_order: 5,
    look_number: 17,
    piece_slot: 2,
    name: 'Zari & Pearl Festive Potli Bag',
    price_cents: 34900,
    price_display: '₹349',
    department: 'Accessories',
    description:
      'Festive peach silk drawstring potli bag embellished with gold zari embroidery, mirror work, and pearl handle latkans.',
    sheet_url: 'india:piece-06',
    sheet_w: 173,
    sheet_h: 219,
    x0: 0,
    x1: 173,
    y0: 0,
    y1: 219,
  },
  {
    id: 7,
    sort_order: 6,
    look_number: 18,
    piece_slot: 1,
    name: 'Rose Lucknowi Chikankari Kurti',
    price_cents: 59900,
    price_display: '₹599',
    department: 'Clothing',
    description:
      'Authentic dusty-rose cotton-georgette Lucknowi Chikankari kurti embroidered all over with soft white resham floral motifs.',
    sheet_url: 'india:piece-07',
    sheet_w: 169,
    sheet_h: 219,
    x0: 0,
    x1: 169,
    y0: 0,
    y1: 219,
  },
  {
    id: 8,
    sort_order: 7,
    look_number: 18,
    piece_slot: 2,
    name: 'Tiered Gota Rayon Sharara',
    price_cents: 49900,
    price_display: '₹499',
    department: 'Clothing',
    description:
      'Flowy rose-and-cream three-tiered gathered rayon flared sharara pants accented with subtle golden gota lace lines.',
    sheet_url: 'india:piece-08',
    sheet_w: 156,
    sheet_h: 219,
    x0: 0,
    x1: 156,
    y0: 0,
    y1: 219,
  },
  {
    id: 9,
    sort_order: 8,
    look_number: 19,
    piece_slot: 1,
    name: 'Sky Blue Jaipuri Print Kurti',
    price_cents: 54900,
    price_display: '₹549',
    department: 'Clothing',
    description:
      'Breathable sky-blue viscose-rayon A-line dailywear kurti printed with Jaipuri floral bootis and finished with wooden placket buttons.',
    sheet_url: 'india:piece-09',
    sheet_w: 143,
    sheet_h: 219,
    x0: 0,
    x1: 143,
    y0: 0,
    y1: 219,
  },
  {
    id: 10,
    sort_order: 9,
    look_number: 19,
    piece_slot: 2,
    name: 'White Cotton Straight Pants',
    price_cents: 34900,
    price_display: '₹349',
    department: 'Clothing',
    description:
      'Crisp stretch-cotton white straight ethnic trouser pants with comfortable half-elasticated waist and ankle side slits.',
    sheet_url: 'india:piece-10',
    sheet_w: 93,
    sheet_h: 219,
    x0: 0,
    x1: 93,
    y0: 0,
    y1: 219,
  },
  {
    id: 11,
    sort_order: 10,
    look_number: 20,
    piece_slot: 1,
    name: 'Floral Zari Readymade Blouse',
    price_cents: 64900,
    price_display: '₹649',
    department: 'Clothing',
    description:
      'Festive cream-ivory padded readymade saree & lehenga blouse with pastel floral resham embroidery, zari border, and mirror accents.',
    sheet_url: 'india:piece-11',
    sheet_w: 219,
    sheet_h: 138,
    x0: 0,
    x1: 219,
    y0: 0,
    y1: 138,
  },
  {
    id: 12,
    sort_order: 11,
    look_number: 20,
    piece_slot: 2,
    name: 'Festive Floral Organza Lehenga',
    price_cents: 129900,
    price_display: '₹1,299',
    department: 'Clothing',
    description:
      'Festive cream-ivory sheer organza flared lehenga skirt with pastel floral threadwork, zari lace hem, and stitched inner lining.',
    sheet_url: 'india:piece-12',
    sheet_w: 194,
    sheet_h: 219,
    x0: 0,
    x1: 194,
    y0: 0,
    y1: 219,
  },
];

export const STATIC_CONTENT: MaisonContentRow[] = [
  {
    id: 1,
    slug: 'runway-intro',
    eyebrow: 'Spring Summer 2027',
    heading: 'Spring Summer 2027',
    body: 'A study in softness and strength. The new season collection from Maison Vell blends delicate textures and modern silhouettes, crafted for a more beautiful tomorrow.',
    details_json: [],
  },
  {
    id: 2,
    slug: 'the-maison',
    eyebrow: 'Indian Ethnic & Festive Catalog',
    heading: 'Everyday Grace, Festive Shine',
    body: 'Designed for modern Indian wardrobes across daily wear, office ethnic, and festive celebrations—Maison Vell brings together authentic Jaipuri cotton prints, Lucknowi Chikankari kurtis, flowy georgette sarees, and festive lehenga sets at everyday honest prices.',
    details_json: [
      {
        label: 'Everyday Comfort',
        value: 'Jaipur, Surat & Lucknow',
        text: '100% breathable Jaipuri cottons, soft Liva viscose-rayon, and lightweight partywear georgettes suited for Indian summers and monsoons.',
      },
      {
        label: 'Artisan Craft',
        value: 'Authentic Ethnic Detail',
        text: 'Real Lucknowi Chikankari resham embroidery, Sanganeri floral block prints, gota-patti trims, and festive zari-mirror work.',
      },
      {
        label: 'Pan-India Value',
        value: 'Honest Everyday Pricing',
        text: 'Direct-from-maker pricing starting at ₹299 with Free Pan-India Delivery, Cash on Delivery, and easy 7-day size exchange.',
      },
    ],
  },
  {
    id: 4,
    slug: 'our-world',
    eyebrow: 'Our World · Jaipur, Surat & Lucknow',
    heading: 'Made for Every Indian Occasion',
    body: 'From Sanganer cotton printing workshops in Jaipur and georgette embroidery units in Surat to Chikankari artisans in Lucknow, explore our pan-India ethnic collection and styling hubs.',
    details_json: [
      {
        label: 'Direct Makers',
        value: 'Factory-Direct Quality',
        text: 'Sourced directly from trusted textile clusters in Jaipur, Surat, and Lucknow with strict quality checks.',
      },
      {
        label: 'Easy Shopping',
        value: 'Pan-India Delivery',
        text: 'Free delivery to 28,000+ Indian PIN codes, Cash on Delivery option, and hassle-free 7-day exchanges.',
      },
      {
        label: 'Sizes S to XXL',
        value: 'Inclusive Indian Fit',
        text: 'True-to-measure Indian ethnic sizing from S (36") to XXL (44") tailored for flattering everyday comfort.',
      },
    ],
  },
];

function jsonResponse(payload: unknown, status = 200): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function readLocal<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeLocal<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // ignore storage quota errors
  }
}

async function fallbackHandler(input: string, init?: RequestInit): Promise<Response> {
  const url = new URL(input, window.location.origin);
  const path = url.pathname;
  const method = (init?.method || 'GET').toUpperCase();
  const body = init?.body ? JSON.parse(String(init.body)) : {};

  // 1. If Supabase client env vars ARE configured on Cloudflare, query Supabase directly
  if (isSupabaseConfigured) {
    try {
      if (path === '/api/looks' && method === 'GET') {
        const { data, error } = await supabase
          .from('looks')
          .select('*')
          .order('look_index', { ascending: true });
        if (!error && data) return jsonResponse(data);
      }
      if (path === '/api/pieces' && method === 'GET') {
        const { data, error } = await supabase
          .from('pieces')
          .select('*')
          .order('sort_order', { ascending: true });
        if (!error && data) return jsonResponse(data);
      }
      if (path === '/api/content' && method === 'GET') {
        const { data, error } = await supabase
          .from('maison_content')
          .select('*')
          .order('id', { ascending: true });
        if (!error && data) return jsonResponse(data);
      }
    } catch {
      // fall through to static + localStorage mode
    }
  }

  // 2. Zero-config static host mode (e.g., Cloudflare Pages without env vars)
  if (path === '/api/looks') return jsonResponse(STATIC_LOOKS);
  if (path === '/api/pieces') return jsonResponse(STATIC_PIECES);
  if (path === '/api/content') return jsonResponse(STATIC_CONTENT);

  if (path === '/api/saved') {
    const vk = url.searchParams.get('visitor_key') || body.visitor_key || 'guest';
    const key = `vell_saved_${vk}`;
    const list = readLocal<SavedItemRow[]>(key, []);
    if (method === 'GET') return jsonResponse(list);
    if (method === 'POST') {
      const piece = STATIC_PIECES.find((p) => p.id === Number(body.piece_id));
      if (!list.some((x) => x.piece_id === Number(body.piece_id))) {
        const row: SavedItemRow = {
          id: Date.now(),
          visitor_key: vk,
          piece_id: Number(body.piece_id),
          created_at: new Date().toISOString(),
          pieces: piece,
        };
        writeLocal(key, [...list, row]);
        return jsonResponse(row, 201);
      }
      return jsonResponse(list[0]);
    }
    if (method === 'DELETE') {
      const filtered = list.filter((x) =>
        body.id ? x.id !== Number(body.id) : x.piece_id !== Number(body.piece_id)
      );
      writeLocal(key, filtered);
      return jsonResponse({ ok: true });
    }
  }

  if (path === '/api/cart') {
    const vk = url.searchParams.get('visitor_key') || body.visitor_key || 'guest';
    const key = `vell_cart_${vk}`;
    // Search across visitor keys for PUT/DELETE by id
    const list = readLocal<CartItemRow[]>(key, []);
    if (method === 'GET') return jsonResponse(list);
    if (method === 'POST') {
      const size = body.size || 'M';
      const qty = Number(body.quantity || 1);
      const idx = list.findIndex(
        (x) => x.piece_id === Number(body.piece_id) && x.size === size
      );
      if (idx >= 0) {
        list[idx] = { ...list[idx], quantity: list[idx].quantity + qty };
        writeLocal(key, list);
        return jsonResponse(list[idx]);
      }
      const piece = STATIC_PIECES.find((p) => p.id === Number(body.piece_id));
      const row: CartItemRow = {
        id: Date.now() + Math.floor(Math.random() * 1000),
        visitor_key: vk,
        piece_id: Number(body.piece_id),
        size,
        quantity: qty,
        created_at: new Date().toISOString(),
        pieces: piece,
      };
      const next = [...list, row];
      writeLocal(key, next);
      return jsonResponse(row, 201);
    }
    if (method === 'PUT') {
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith('vell_cart_')) {
          const items = readLocal<CartItemRow[]>(k, []);
          const found = items.findIndex((x) => x.id === Number(body.id));
          if (found >= 0) {
            if (body.quantity !== undefined && Number(body.quantity) <= 0) {
              items.splice(found, 1);
              writeLocal(k, items);
              return jsonResponse({ deleted: true });
            }
            items[found] = {
              ...items[found],
              ...(body.quantity !== undefined ? { quantity: Number(body.quantity) } : {}),
              ...(body.size !== undefined ? { size: String(body.size) } : {}),
            };
            writeLocal(k, items);
            return jsonResponse(items[found]);
          }
        }
      }
      return jsonResponse({ ok: true });
    }
    if (method === 'DELETE') {
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith('vell_cart_')) {
          const items = readLocal<CartItemRow[]>(k, []);
          const next = items.filter((x) => x.id !== Number(body.id));
          if (next.length !== items.length) {
            writeLocal(k, next);
            return jsonResponse({ ok: true });
          }
        }
      }
      return jsonResponse({ ok: true });
    }
  }

  if (path === '/api/orders') {
    const vk = url.searchParams.get('visitor_key') || body.visitor_key || 'guest';
    const key = `vell_orders_${vk}`;
    const list = readLocal<OrderRow[]>(key, []);
    if (method === 'GET') return jsonResponse(list);
    if (method === 'POST') {
      const order: OrderRow = {
        id: Math.floor(1000 + Math.random() * 9000),
        visitor_key: vk,
        user_email: String(body.user_email || ''),
        full_name: String(body.full_name || ''),
        shipping_address: String(body.shipping_address || ''),
        city_country: String(body.city_country || ''),
        items_json: body.items_json || [],
        total_cents: Number(body.total_cents || 0),
        status: 'Order Confirmed (COD)',
        created_at: new Date().toISOString(),
      };
      writeLocal(key, [order, ...list]);
      writeLocal(`vell_cart_${vk}`, []);
      return jsonResponse(order, 201);
    }
  }

  if (path === '/api/inquiries') {
    return jsonResponse({ id: Date.now(), ok: true }, 201);
  }

  return jsonResponse({ ok: true });
}

export async function apiFetch(input: string, init?: RequestInit): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 3500);
  try {
    const res = await fetch(input, { ...init, signal: controller.signal });
    clearTimeout(timer);
    const contentType = res.headers.get('content-type') || '';
    if (res.ok && contentType.includes('application/json')) {
      return res;
    }
    if (!res.ok && contentType.includes('application/json') && res.status !== 404) {
      return res;
    }
  } catch {
    clearTimeout(timer);
  }
  return fallbackHandler(input, init);
}
