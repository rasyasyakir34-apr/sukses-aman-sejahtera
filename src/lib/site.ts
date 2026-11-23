export const site = {
  name: "CV. Sukses Aman Sejahtera",
  shortName: "Sukses Aman Sejahtera",
  initials: "SAS",
  role: "General Supplier",
  motto: "Solution is Our Orientation",
  tagline:
    "General supplier material, perlengkapan K3, alat teknik, dan kebutuhan proyek konstruksi di Palembang sejak 2013.",
  founded: 2013,
  phone: "0897-2070-777",
  phoneRaw: "+628972070777",
  wa: "628972070777",
  email: "suksesamansejahtera@yahoo.com",
  address:
    "Jl. Merbau No.66, 9 Ilir, Ilir Timur II, Palembang",
  addressShort: "9 Ilir, Palembang",
  hours: "Senin – Sabtu, 09.00 – 17.00 WIB",
  hoursNote: "Di luar jam kerja, pesan WhatsApp tetap kami terima.",
  rating: {
    score: "5.0",
    count: 7,
  },
  url: "https://supplierpalembang.com",
  affiliate: {
    name: "Genteng Sukses",
    url: "http://www.gentengsukses.com",
  },
  mapsQuery:
    "Jl. Merbau No.66, 9 Ilir, Ilir Timur II, Palembang",
} as const;

export const navigation = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/tentang" },
  { label: "Layanan", href: "/layanan" },
  { label: "Proyek", href: "/proyek" },
  { label: "Kontak", href: "/kontak" },
] as const;

export function waLink(message?: string) {
  const base = `https://wa.me/${site.wa}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.mapsQuery,
)}`;

export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  site.mapsQuery,
)}&output=embed`;

export const stats = [
  { value: "13", suffix: "+", label: "Tahun melayani proyek" },
  { value: "10", suffix: "", label: "Kategori pengadaan" },
  { value: "10", suffix: "", label: "Proyek tercatat" },
  { value: "5", suffix: "", label: "Mitra kontraktor nasional" },
] as const;

export type IconName =
  | "boxes"
  | "layers"
  | "shield"
  | "bolt"
  | "wrench"
  | "cog"
  | "flask"
  | "pencil"
  | "monitor"
  | "package";

export type Category = {
  slug: string;
  number: string;
  title: string;
  short: string;
  description: string;
  items: string[];
  icon: IconName;
};

export const categories: Category[] = [
  {
    slug: "bahan-bangunan",
    number: "01",
    title: "Bahan Bangunan & Material Penimbunan",
    short: "Material inti untuk pekerjaan sipil, struktur, dan timbunan.",
    description:
      "Pasokan material curah dan bahan bangunan untuk kebutuhan harian proyek maupun pengadaan dalam volume besar. Spesifikasi dan sumber material disesuaikan dengan persyaratan pekerjaan di lapangan.",
    items: [
      "Pasir & batu split",
      "Semen & besi beton",
      "Material timbunan",
      "Sirtu & tanah urug",
      "Bata & material pasangan",
    ],
    icon: "boxes",
  },
  {
    slug: "geosintetik",
    number: "02",
    title: "Geotextile & Membrane",
    short: "Lapisan pelindung dan perkuatan untuk pekerjaan tanah.",
    description:
      "Pengadaan material geosintetik untuk pekerjaan perkuatan tanah, drainase, dan pelapis kedap air. Item dapat disesuaikan dengan spesifikasi teknis dan gambar kerja.",
    items: [
      "Geotextile non-woven & woven",
      "Geomembrane HDPE",
      "Geogrid & geocell",
      "Drainage board",
      "Aksesori instalasi",
    ],
    icon: "layers",
  },
  {
    slug: "perlengkapan-k3",
    number: "03",
    title: "Perlengkapan K3",
    short: "APD dan perlengkapan keselamatan untuk tim di lapangan.",
    description:
      "Perlengkapan keselamatan kerja untuk kebutuhan proyek, dari alat pelindung diri hingga perlengkapan keselamatan area kerja. Tersedia dalam pembelian satuan maupun jumlah besar.",
    items: [
      "Helm & rompi safety",
      "Safety shoes & gloves",
      "Full body harness",
      "Masker & pelindung mata",
      "Safety sign & barikade",
    ],
    icon: "shield",
  },
  {
    slug: "elektrikal",
    number: "04",
    title: "Perlengkapan Listrik & Elektronik",
    short: "Komponen listrik untuk instalasi dan operasional proyek.",
    description:
      "Kebutuhan elektrikal dan elektronik untuk instalasi sementara, penerangan area kerja, maupun fasilitas proyek. Merek dan tipe dapat disesuaikan dengan permintaan.",
    items: [
      "Kabel & aksesori instalasi",
      "Panel & komponen listrik",
      "Lampu penerangan",
      "Alat ukur listrik",
      "Perangkat elektronik",
    ],
    icon: "bolt",
  },
  {
    slug: "power-tools",
    number: "05",
    title: "Power Tools & Mechanical Equipment",
    short: "Peralatan kerja dan mechanical tools untuk lapangan.",
    description:
      "Peralatan tangan dan mesin untuk pekerjaan konstruksi, perawatan, dan fabrikasi. Kami bantu mencarikan tipe yang sesuai dengan kebutuhan teknis tim Anda.",
    items: [
      "Bor & gerinda",
      "Kompresor & pompa",
      "Hydraulic tools",
      "Hand tools",
      "Consumable & aksesori",
    ],
    icon: "wrench",
  },
  {
    slug: "engine-diesel",
    number: "06",
    title: "Engine & Diesel",
    short: "Mesin, genset, dan spare part untuk kebutuhan operasional.",
    description:
      "Pengadaan mesin diesel, genset, pompa, dan spare part pendukung. Cocok untuk kebutuhan daya sementara, pekerjaan pompa, maupun perawatan armada proyek.",
    items: [
      "Genset & panel",
      "Mesin pompa air",
      "Spare part engine",
      "Oli & pelumas",
      "Aksesori mesin",
    ],
    icon: "cog",
  },
  {
    slug: "laboratorium-sipil",
    number: "07",
    title: "Alat Laboratorium Teknik Sipil",
    short: "Peralatan pengujian material dan kontrol mutu.",
    description:
      "Alat laboratorium untuk pengujian material konstruksi beserta perlengkapannya. Dapat digunakan untuk laboratorium proyek, kampus, maupun instansi teknis.",
    items: [
      "Slump test & cetakan beton",
      "Uji kuat tekan",
      "Ayakan & alat agregat",
      "Core drill & aksesori",
      "Peralatan pengujian tanah",
    ],
    icon: "flask",
  },
  {
    slug: "atk",
    number: "08",
    title: "Alat Tulis Kantor",
    short: "Kebutuhan administrasi proyek dan kantor.",
    description:
      "Pengadaan ATK untuk kebutuhan administrasi proyek, dokumentasi, dan operasional kantor. Bisa disiapkan dalam paket rutin maupun pembelian insidental.",
    items: [
      "Alat tulis",
      "Kertas & formulir",
      "Map & arsip",
      "Perlengkapan presentasi",
      "Kebutuhan kantor lainnya",
    ],
    icon: "pencil",
  },
  {
    slug: "komputer",
    number: "09",
    title: "Komputer & Perlengkapannya",
    short: "Perangkat kerja digital untuk tim proyek dan kantor.",
    description:
      "Laptop, komputer, printer, dan aksesori untuk mendukung pekerjaan administrasi, drafter, dan tim teknis. Spesifikasi dapat disesuaikan dengan anggaran dan kebutuhan.",
    items: [
      "Laptop & komputer",
      "Printer & scanner",
      "Monitor & aksesori",
      "Jaringan & penyimpanan",
      "Peralatan presentasi",
    ],
    icon: "monitor",
  },
  {
    slug: "pengadaan-khusus",
    number: "10",
    title: "Pengadaan Khusus",
    short: "Item di luar daftar? Kami bantu carikan.",
    description:
      "Kebutuhan proyek tidak selalu ada di katalog. Ceritakan spesifikasi, volume, dan tenggat waktunya — kami akan bantu telusuri sumber pasokan yang paling masuk akal.",
    items: [
      "Sesuai spesifikasi & RAB",
      "Pencarian sumber pasokan",
      "Pengadaan lintas kategori",
      "Volume khusus",
      "Kebutuhan mendesak",
    ],
    icon: "package",
  },
];

export type ProjectCategory =
  | "Jembatan"
  | "Gedung"
  | "Infrastruktur"
  | "Kawasan"
  | "Sumber Daya Air"
  | "Jalan";

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  category: ProjectCategory;
  location: string;
  client?: string;
  image: string;
  description: string;
  scope: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "jembatan-musi-4",
    title: "Jembatan Musi IV Palembang",
    shortTitle: "Jembatan Musi IV",
    category: "Jembatan",
    location: "Palembang, Sumatera Selatan",
    image: "/images/5.jpg",
    description:
      "Dukungan pengadaan material dan perlengkapan untuk pekerjaan jembatan yang menghubungkan kawasan Sekanak dengan Kertapati di atas Sungai Musi.",
    scope: ["Material struktur", "Perlengkapan kerja", "Logistik proyek"],
    featured: true,
  },
  {
    slug: "duplikasi-jembatan-musi-2",
    title: "Duplikasi Jembatan Musi II Palembang",
    shortTitle: "Jembatan Musi II",
    category: "Jembatan",
    location: "Palembang, Sumatera Selatan",
    image: "/images/6.jpg",
    description:
      "Pengadaan material dan perlengkapan untuk pekerjaan duplikasi jembatan, mendukung kelancaran aktivitas konstruksi di lapangan.",
    scope: ["Material konstruksi", "Perlengkapan K3", "Kebutuhan lapangan"],
    featured: true,
  },
  {
    slug: "plant-gasing",
    title: "Pembangunan Plant Gasing Banyuasin",
    shortTitle: "Plant Gasing",
    category: "Infrastruktur",
    location: "Banyuasin, Sumatera Selatan",
    client: "PT Waskita Beton Precast, Tbk.",
    image: "/images/4.jpg",
    description:
      "Dukungan pasokan material dan perlengkapan untuk pembangunan plant beton precast di kawasan Gasing, Banyuasin.",
    scope: ["Material produksi", "Perlengkapan operasional", "Logistik"],
    featured: true,
  },
  {
    slug: "ipal-palembang",
    title: "Instalasi Pengolahan Air Limbah (IPAL) Palembang",
    shortTitle: "IPAL Palembang",
    category: "Infrastruktur",
    location: "Palembang, Sumatera Selatan",
    image: "/images/7.jpg",
    description:
      "Pengadaan perlengkapan dan material pendukung untuk pekerjaan instalasi pengolahan air limbah di kawasan Palembang.",
    scope: ["Perlengkapan mekanikal", "Material pendukung", "Kebutuhan instalasi"],
  },
  {
    slug: "rs-boom-baru",
    title: "Rumah Sakit Pelabuhan Boom Baru Palembang",
    shortTitle: "RS Boom Baru",
    category: "Gedung",
    location: "Palembang, Sumatera Selatan",
    image: "/images/3.jpg",
    description:
      "Dukungan pengadaan material dan perlengkapan untuk pembangunan fasilitas rumah sakit di kawasan pelabuhan Boom Baru.",
    scope: ["Material bangunan", "Perlengkapan K3", "Logistik proyek"],
  },
  {
    slug: "township-tanah-putih",
    title: "Pemukiman Township Tanah Putih",
    shortTitle: "Township Tanah Putih",
    category: "Kawasan",
    location: "Tanjung Enim, Sumatera Selatan",
    client: "PT Bukit Asam",
    image: "/images/8.jpg",
    description:
      "Pengadaan material dan perlengkapan untuk pembangunan kawasan pemukiman Township Tanah Putih di Tanjung Enim.",
    scope: ["Material bangunan", "Perlengkapan lapangan", "Pengiriman area tambang"],
  },
  {
    slug: "uin-raden-fatah",
    title:
      "Pembangunan 9 Gedung Baru & Infrastruktur Pendukung UIN Raden Fatah",
    shortTitle: "UIN Raden Fatah",
    category: "Gedung",
    location: "Palembang, Sumatera Selatan",
    image: "/images/2.jpg",
    description:
      "Dukungan pasokan material dan perlengkapan untuk pembangunan sembilan gedung baru serta infrastruktur pendukung di kampus UIN Raden Fatah.",
    scope: ["Material bangunan", "Perlengkapan K3", "Kebutuhan proyek"],
  },
  {
    slug: "bendungan-rukoh",
    title: "Bendungan Rukoh, Kabupaten Pidie",
    shortTitle: "Bendungan Rukoh",
    category: "Sumber Daya Air",
    location: "Pidie, Aceh",
    image: "/images/1.jpg",
    description:
      "Pengadaan material dan perlengkapan untuk pekerjaan bendungan di Kabupaten Pidie, Aceh — salah satu proyek yang kami layani di luar Sumatera Selatan.",
    scope: ["Material timbunan", "Perlengkapan kerja", "Logistik lintas provinsi"],
  },
  {
    slug: "uin-raden-intan",
    title: "Pembangunan Kampus UIN Raden Intan Lampung",
    shortTitle: "UIN Raden Intan",
    category: "Gedung",
    location: "Lampung",
    image: "",
    description:
      "Dukungan pengadaan material dan perlengkapan untuk pembangunan kampus UIN Raden Intan di Lampung.",
    scope: ["Material bangunan", "Perlengkapan proyek"],
  },
  {
    slug: "preservasi-jalan",
    title: "Preservasi & Rekonstruksi Jalan Peninggalan – Sei Lilin – Betung – Palembang",
    shortTitle: "Preservasi Jalan Betung",
    category: "Jalan",
    location: "Sumatera Selatan",
    image: "",
    description:
      "Pengadaan material dan perlengkapan untuk pekerjaan preservasi serta rekonstruksi jalan pada ruas Peninggalan – Sei Lilin – Betung – Palembang.",
    scope: ["Material perkerasan", "Perlengkapan kerja", "Logistik jalan"],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const projectFilters: Array<ProjectCategory | "Semua"> = [
  "Semua",
  "Jembatan",
  "Gedung",
  "Infrastruktur",
  "Kawasan",
  "Sumber Daya Air",
  "Jalan",
];

export const partners = [
  { name: "Hutama Karya", short: "HUTAMA KARYA" },
  { name: "Waskita", short: "WASKITA" },
  { name: "Wijaya Karya", short: "WIKA" },
  { name: "Adhi Karya", short: "ADHI" },
  { name: "Nindya Karya", short: "NINDYA" },
] as const;

export type Value = {
  number: string;
  title: string;
  description: string;
  icon: "bolt" | "shield" | "boxes" | "layers";
};

export const values: Value[] = [
  {
    number: "01",
    title: "Cepat merespons",
    description:
      "Kebutuhan proyek tidak menunggu. Kirim daftar item lewat WhatsApp, tim kami bantu cek ketersediaan dan estimasi harga pada jam kerja.",
    icon: "bolt",
  },
  {
    number: "02",
    title: "Spesifikasi dicek benar",
    description:
      "Merek, ukuran, tipe, dan standar material diverifikasi sebelum dipesan. Lebih baik satu pertanyaan di awal daripada barang salah datang.",
    icon: "shield",
  },
  {
    number: "03",
    title: "Jaringan pasok yang luas",
    description:
      "Tidak semua item ada di satu gudang. Jaringan pemasok lokal dan nasional kami bantu menutup kebutuhan yang berbeda-beda.",
    icon: "boxes",
  },
  {
    number: "04",
    title: "Administrasi rapi",
    description:
      "Dokumen pengadaan dan pengiriman disiapkan agar proses serah terima di proyek tidak tertahan di belakang meja.",
    icon: "layers",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Kirim kebutuhan",
    description:
      "Sampaikan daftar item, spesifikasi, volume, dan lokasi proyek lewat WhatsApp atau email.",
  },
  {
    number: "02",
    title: "Verifikasi spesifikasi",
    description:
      "Kami cek tipe, merek, standar, dan ketersediaan agar penawaran sesuai kebutuhan lapangan.",
  },
  {
    number: "03",
    title: "Penawaran",
    description:
      "Anda menerima rincian harga, estimasi waktu, dan opsi pengiriman untuk ditinjau.",
  },
  {
    number: "04",
    title: "Pengadaan & quality check",
    description:
      "Item dipesan, diperiksa, dan disiapkan. Jika ada perubahan, Anda kami kabari lebih dulu.",
  },
  {
    number: "05",
    title: "Pengiriman & dokumen",
    description:
      "Barang dikirim sesuai kesepakatan, dilengkapi dokumen pengiriman dan administrasi terkait.",
  },
] as const;

export const faqs = [
  {
    question: "Area mana saja yang bisa dilayani?",
    answer:
      "Kami berbasis di Palembang dan melayani proyek di Sumatera Selatan serta berbagai daerah di Indonesia. Untuk pengiriman luar kota, waktu dan biaya menyesuaikan lokasi serta jenis barang.",
  },
  {
    question: "Bagaimana cara meminta penawaran?",
    answer:
      "Kirim daftar kebutuhan — sebaiknya lengkap dengan spesifikasi, volume, dan lokasi proyek — melalui WhatsApp atau email. Tim kami akan mengecek ketersediaan lalu menyiapkan penawaran.",
  },
  {
    question: "Apakah bisa melayani pembelian dalam jumlah besar?",
    answer:
      "Bisa. Kami menangani pengadaan satuan maupun volume besar. Untuk item tertentu, jadwal pasokan dapat dibicarakan agar sesuai dengan tahapan pekerjaan proyek.",
  },
  {
    question: "Dokumen apa saja yang disiapkan?",
    answer:
      "Dokumen menyesuaikan transaksi dan kebutuhan proyek, umumnya mencakup penawaran, invoice, dan surat jalan. Kebutuhan dokumen lain dapat didiskusikan sejak awal.",
  },
  {
    question: "Apakah menerima item yang tidak ada di daftar?",
    answer:
      "Ya. Daftar kategori di situs ini bukan batas mutlak. Ceritakan spesifikasi dan tenggat waktunya, kami akan bantu telusuri sumber pasokan yang sesuai.",
  },
] as const;

export const heroImage = "/images/5.jpg";

export const projectImage = (project: Project) => project.image || null;
