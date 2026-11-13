import look15 from '../assets/india/models/real-look-15.png';
import look16 from '../assets/india/models/real-look-16.png';
import look17 from '../assets/india/models/real-look-17.png';
import look18 from '../assets/india/models/real-look-18.png';
import look19 from '../assets/india/models/real-look-19.png';
import look20 from '../assets/india/models/real-look-20.png';

import piece01 from '../assets/india/pieces/real-piece-01.png';
import piece02 from '../assets/india/pieces/real-piece-02.png';
import piece03 from '../assets/india/pieces/real-piece-03.png';
import piece04 from '../assets/india/pieces/real-piece-04.png';
import piece05 from '../assets/india/pieces/real-piece-05.png';
import piece06 from '../assets/india/pieces/real-piece-06.png';
import piece07 from '../assets/india/pieces/real-piece-07.png';
import piece08 from '../assets/india/pieces/real-piece-08.png';
import piece09 from '../assets/india/pieces/real-piece-09.png';
import piece10 from '../assets/india/pieces/real-piece-10.png';
import piece11 from '../assets/india/pieces/real-piece-11.png';
import piece12 from '../assets/india/pieces/real-piece-12.png';

import texCotton from '../assets/textures/tex-cotton.jpg';
import texZari from '../assets/textures/tex-zari.jpg';
import texPeach from '../assets/textures/tex-peach.jpg';
import texChikankari from '../assets/textures/tex-chikankari.jpg';
import texSkyblue from '../assets/textures/tex-skyblue.jpg';
import texMirror from '../assets/textures/tex-mirror.jpg';

const BUNDLED_ASSETS: Record<string, string> = {
  'india:look-15': look15,
  'india:look-16': look16,
  'india:look-17': look17,
  'india:look-18': look18,
  'india:look-19': look19,
  'india:look-20': look20,
  '/india/models/real-look-15.webp': look15,
  '/india/models/real-look-16.webp': look16,
  '/india/models/real-look-17.webp': look17,
  '/india/models/real-look-18.webp': look18,
  '/india/models/real-look-19.webp': look19,
  '/india/models/real-look-20.webp': look20,

  'india:piece-01': piece01,
  'india:piece-02': piece02,
  'india:piece-03': piece03,
  'india:piece-04': piece04,
  'india:piece-05': piece05,
  'india:piece-06': piece06,
  'india:piece-07': piece07,
  'india:piece-08': piece08,
  'india:piece-09': piece09,
  'india:piece-10': piece10,
  'india:piece-11': piece11,
  'india:piece-12': piece12,
  '/india/pieces/real-piece-01.webp': piece01,
  '/india/pieces/real-piece-02.webp': piece02,
  '/india/pieces/real-piece-03.webp': piece03,
  '/india/pieces/real-piece-04.webp': piece04,
  '/india/pieces/real-piece-05.webp': piece05,
  '/india/pieces/real-piece-06.webp': piece06,
  '/india/pieces/real-piece-07.webp': piece07,
  '/india/pieces/real-piece-08.webp': piece08,
  '/india/pieces/real-piece-09.webp': piece09,
  '/india/pieces/real-piece-10.webp': piece10,
  '/india/pieces/real-piece-11.webp': piece11,
  '/india/pieces/real-piece-12.webp': piece12,
};

export interface FabricTextureSwatch {
  id: string;
  image: string;
  title: string;
  origin: string;
  lookNumber: number;
  lookIndex: number;
  fabric: string;
  work: string;
  care: string;
  description: string;
}

export const FABRIC_TEXTURES: FabricTextureSwatch[] = [
  {
    id: 'cotton-gota',
    image: texCotton,
    title: 'Jaipuri 60s Cambric Cotton & Gota Lace',
    origin: 'Sanganer, Jaipur',
    lookNumber: 15,
    lookIndex: 0,
    fabric: '100% Pure Breathable Cambric Cotton',
    work: 'Hand-Block Floral Print with Gota-Patti Trim',
    care: 'Gentle Cold Wash · Colorfast Natural Dye',
    description:
      'Close-up weave showing breathable natural cotton threads dyed in soft pastel rose florals and edged with stitched golden gota triangles.',
  },
  {
    id: 'georgette-sequin',
    image: texZari,
    title: 'Surat Crinkled Georgette & Micro-Sequin',
    origin: 'Surat, Gujarat',
    lookNumber: 16,
    lookIndex: 1,
    fabric: 'Lightweight Pebble-Grain Poly-Georgette',
    work: 'Silver Resham Scallop Cutwork & Stitched Sequins',
    care: 'Easy Hand Wash · Wrinkle-Resistant Drape',
    description:
      'Macro view of pebble-textured mint georgette bordered with shimmering silver embroidery stitches and light-catching micro-sequins.',
  },
  {
    id: 'peach-chanderi',
    image: texPeach,
    title: 'Pastel Peach Chanderi-Rayon & Pearl Latkan',
    origin: 'Jaipur & Varanasi Cluster',
    lookNumber: 17,
    lookIndex: 2,
    fabric: 'Slubbed Pastel Peach Chanderi Cotton-Rayon',
    work: 'Ivory Resham Floral Threadwork & Pearl Zari Tassels',
    care: 'Gentle Hand Wash Separately',
    description:
      'Fine slubbed peach weave stitched with raised ivory resham blossoms, subtle gold sequin highlights, and braided pearl potli latkans.',
  },
  {
    id: 'lucknowi-chikankari',
    image: texChikankari,
    title: 'Lucknowi Mulmul & Raised Resham Chikankari',
    origin: 'Lucknow, Uttar Pradesh',
    lookNumber: 18,
    lookIndex: 3,
    fabric: 'Soft Dusty-Rose Mulmul Cotton-Georgette',
    work: 'Authentic White Thread Bakhiya & Phanda Knots',
    care: 'Mild Hand Wash · Softens Every Wear',
    description:
      'Tactile hand-pulled white resham floral stitches raised cleanly over airy dusty-rose mulmul weave for effortless all-day comfort.',
  },
  {
    id: 'skyblue-blockprint',
    image: texSkyblue,
    title: 'Sky-Blue Block-Print Liva Rayon & Wood Placket',
    origin: 'Bagru & Jaipur, Rajasthan',
    lookNumber: 19,
    lookIndex: 4,
    fabric: 'Breathable Powder-Blue Liva Viscose-Rayon',
    work: 'Traditional White Floral Booti Print & Carved Wood Button',
    care: 'Machine Wash Gentle Cold',
    description:
      'Ultra-soft dailywear rayon showing crisp white floral block-print dye absorption and double-stitched placket with natural wooden button.',
  },
  {
    id: 'organza-mirror',
    image: texMirror,
    title: 'Festive Silk-Organza, Zari & Real Shisha Mirror',
    origin: 'Jaipur & Surat Festive Cluster',
    lookNumber: 20,
    lookIndex: 5,
    fabric: 'Sheer Cream-Ivory Woven Organza with Lining',
    work: 'Pastel Floral Threadwork, Zari Cord & Shisha Mirrors',
    care: 'Dry Clean Recommended',
    description:
      'Crisp translucent organza mesh richly embroidered with pastel resham petals, twisted gold zari cord, and hand-framed shisha mirrors.',
  },
];

export function getTextureForLook(lookNumber: number): FabricTextureSwatch {
  return (
    FABRIC_TEXTURES.find((t) => t.lookNumber === lookNumber) ||
    FABRIC_TEXTURES[0]
  );
}

export function resolveCatalogMedia(rawUrl: string): string {
  if (!rawUrl) return '';
  return BUNDLED_ASSETS[rawUrl] || rawUrl;
}
