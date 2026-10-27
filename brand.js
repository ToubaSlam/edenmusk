import {fragranceNames} from './data/fragrance-names.js';
import {brandedPhotos} from './data/branded-photos.js';
// Presentation names are independent of source identifiers, URLs and product facts.
export const displayBrand='Eden Musk';
export const brandText=value=>String(value??'').replace(/\b(?:SCENTORA|EDEN\s+MUSK)\s+(\d{3})\b/gi,(match,code)=>fragranceNames[code]?`Eden Musk - ${fragranceNames[code]}`:match).replace(/\bSCENTORA\b/g,'EDEN MUSK').replace(/\b(?:Scentora|ALT)\b/gi,'Eden Musk');
const photoFor=p=>brandedPhotos[p.sourceId||p.id];
const imageFor=(p,url)=>({url,alt:brandText(p.name)+' - Eden Musk packaging visualization'});
export const storefrontProduct=p=>{const photo=photoFor(p);return {...p,brand:displayBrand,name:brandText(p.name),tag:displayBrand,description:brandText(p.description),source:{...p.source,images:[imageFor(p,photo)],noteImages:[]},variants:p.variants.map(v=>({...v,imageUrl:photo}))}};
export const referenceProduct=p=>{const photo=photoFor(p);return {...p,originalBrand:p.brand,originalName:p.name,brand:displayBrand,name:brandText(p.name),images:[imageFor(p,photo||'assets/eden-emerald-garden.webp')],noteImages:[],variants:p.variants.map(v=>({...v,imageUrl:photo||''}))}};
