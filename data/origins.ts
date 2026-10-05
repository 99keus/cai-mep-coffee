export interface CoffeeOrigin {
  name: string;
  slug: string;
  species: string;
  speciesSummary?: string;
  description: string;
  story: string;
  processing: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  imageCredit: { name: string; url: string; license: string; licenseUrl: string };
}
export const origins: CoffeeOrigin[] = [
  {
    name: "Đắk Lắk",
    slug: "dak-lak",
    species: "Robusta",
    description: "A central part of Vietnam's coffee landscape, with warm highland growing conditions and a long association with Robusta around Buon Ma Thuot.",
    story: "Often called the heart of Vietnamese coffee, Đắk Lắk's red basalt soil and consistent highland climate have made it the country's largest and most established Robusta-growing region for decades.",
    processing: "Natural drying is common across the region's supply chain; washed and specialty-grade lots depend on the individual producer.",
    image: "/images/origins/dak-lak.webp",
    imageAlt: "Lak Lake surrounded by trees and highland hills in Dak Lak, Vietnam",
    imageCaption: "Hồ Lắk · Đắk Lắk",
    imageCredit: { name: "Nguyễn Đông Sơn", url: "https://commons.wikimedia.org/wiki/File:Lak_Lake.jpg", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/" },
  },
  {
    name: "Gia Lai",
    slug: "gia-lai",
    species: "Robusta",
    description: "A rising Robusta region north of Đắk Lắk, known for volcanic soil and a growing number of producers investing in quality processing.",
    story: "Gia Lai shares the same basalt-rich terrain as its neighboring provinces, with the Pleiku plateau offering favorable altitude and rainfall for Robusta. In recent years, more farms here have started experimenting with honey and washed processing to move beyond commodity-grade coffee.",
    processing: "Primarily natural drying, with an increasing number of producers offering honey-processed and washed lots.",
    image: "/images/origins/gia-lai.webp",
    imageAlt: "A calm lake bordered by yellow-flowered trees under a cloudy sky in Gia Lai, Vietnam",
    imageCaption: "Lakeside landscape · Gia Lai",
    imageCredit: { name: "Quang Nguyen Vinh", url: "https://www.pexels.com/photo/calm-lake-near-trees-under-the-cloudy-sky-6346491/", license: "Pexels", licenseUrl: "https://www.pexels.com/license/" },
  },
  {
    name: "Đắk Nông",
    slug: "dak-nong",
    species: "Robusta",
    description: "A newer but fast-developing coffee province, carrying the same volcanic soil advantage that defines Vietnam's Central Highlands.",
    story: "Bordering Đắk Lắk to the south, Đắk Nông benefits from similar growing conditions while still being a relatively young name in export markets — making it a region worth watching for buyers looking beyond the more familiar origins.",
    processing: "Natural drying is standard; traceable, single-farm lots are increasingly available as the region develops.",
    image: "/images/origins/dak-nong.webp",
    imageAlt: "Green islands and mountains surrounding Ta Dung Lake in the Dak Nong region of Vietnam",
    imageCaption: "Hồ Tà Đùng · Đắk Nông",
    imageCredit: { name: "Quang Nguyen Vinh", url: "https://www.pexels.com/photo/ta-dung-lake-in-vietnam-14023888/", license: "Pexels", licenseUrl: "https://www.pexels.com/license/" },
  },
  {
    name: "Lâm Đồng",
    slug: "lam-dong",
    species: "Arabica (highland areas); Robusta (lower-altitude areas)",
    speciesSummary: "Arabica & Robusta",
    description: "Vietnam's primary Arabica region, where higher elevation and cooler temperatures around Da Lat create a markedly different cup profile from the lowland Robusta belt.",
    story: "At elevations often exceeding 1,000m, the cooler climate around Da Lat and Cau Dat slows cherry maturation, developing brighter acidity and a more delicate body — the opposite character of the Robusta grown elsewhere in the Highlands. Lower-altitude areas of the province, such as Bao Loc and Di Linh, also produce Robusta.",
    processing: "Washed processing is common for Arabica lots; natural and honey processing are also available depending on the producer.",
    image: "/images/origins/lam-dong.webp",
    imageAlt: "Rows of coffee trees overlooking a lake and pine-covered hills near Da Lat, Lam Dong, Vietnam",
    imageCaption: "Coffee fields near Đà Lạt · Lâm Đồng",
    imageCredit: { name: "P. Hughes", url: "https://commons.wikimedia.org/wiki/File:Vietnam_-_coffee_plantation.jpg", license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0/" },
  },
];
