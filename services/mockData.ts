import {
  Slide,
  Service,
  Product,
  Testimonial,
  StatItem,
  WhyChooseUsItem,
  PortfolioProject,
  ProcessStep,
  TechCategory,
  PricingPlan,
  FaqItem
} from '../types';

export interface LocalizedDataSet {
  slidesData: Slide[];
  servicesData: Service[];
  productsData: Product[];
  statsData: StatItem[];
  whyChooseUsData: WhyChooseUsItem[];
  portfolioProjects: PortfolioProject[];
  processSteps: ProcessStep[];
  techCategories: TechCategory[];
  testimonialsData: Testimonial[];
  pricingPlans: PricingPlan[];
  faqData: FaqItem[];
  uiText: {
    aboutTitle: string;
    aboutSubtitle: string;
    aboutDesc: string;
    aboutBtn: string;
    servicesTitle: string;
    servicesSubtitle: string;
    servicesDesc: string;
    servicesDocLink: string;
    productsTitle: string;
    productsSubtitle: string;
    productsDesc: string;
    whyTitle: string;
    whySubtitle: string;
    whyDesc: string;
    portfolioTitle: string;
    portfolioSubtitle: string;
    portfolioDesc: string;
    portfolioTabs: string[];
    portfolioDocLink: string;
    processTitle: string;
    processSubtitle: string;
    processDesc: string;
    techTitle: string;
    techSubtitle: string;
    techDesc: string;
    testimonialTitle: string;
    testimonialSubtitle: string;
    testimonialDesc: string;
    pricingTitle: string;
    pricingSubtitle: string;
    pricingDesc: string;
    faqTitle: string;
    faqSubtitle: string;
    faqDesc: string;
    contactTitle: string;
    contactSubtitle: string;
    contactDesc: string;
    contactFormName: string;
    contactFormEmail: string;
    contactFormBudget: string;
    contactFormMsg: string;
    contactFormSubmit: string;
    contactFormSubmitting: string;
    contactFormSuccessTitle: string;
    contactFormSuccessDesc: string;
    contactFormSuccessBtn: string;
    contactMapTitle: string;
    footerDesc: string;
    footerSocials: string;
    footerNewsletterTitle: string;
    footerNewsletterDesc: string;
    footerSubscribeBtn: string;
    footerCopyright: string;
    chatTitle: string;
    chatStatus: string;
    chatWelcome: string;
    chatPlaceholder: string;
  };
}

export const localizedData: Record<'id' | 'en', LocalizedDataSet> = {
  id: {
    slidesData: [
      {
        title: "Merancang Produk Digital Masa Depan",
        subtitle: "Kami membangun aplikasi web berkinerja tinggi dan sistem perusahaan skala besar yang dirancang untuk pertumbuhan eksponensial.",
        bgClass: "bg-slate-950"
      },
      {
        title: "Infrastruktur Cloud & AI Cerdas",
        subtitle: "Terapkan ekosistem cloud multi-tenant yang aman dan terintegrasi dengan kecerdasan buatan mutakhir.",
        bgClass: "bg-slate-950"
      },
      {
        title: "Desain UI/UX Kelas Dunia",
        subtitle: "Merancang antarmuka digital yang memukau dan berorientasi pada konversi tinggi yang disukai pengguna.",
        bgClass: "bg-slate-950"
      }
    ],
    servicesData: [
      {
        title: "Rekayasa Perangkat Lunak Kustom",
        desc: "Membangun aplikasi web dan mobile berkinerja tinggi yang disesuaikan untuk skala operasional bisnis Anda.",
        icon: "💻",
        colSpan: 2,
        bgClass: "from-blue-600/10 via-indigo-600/5 to-transparent border-blue-500/20"
      },
      {
        title: "Desain UI/UX",
        desc: "Antarmuka pengguna yang menakjubkan dan berpusat pada manusia untuk meningkatkan konversi dan interaksi pelanggan.",
        icon: "🎨",
        bgClass: "from-purple-600/10 via-pink-600/5 to-transparent border-purple-500/20"
      },
      {
        title: "Operasional Cloud",
        desc: "Manajemen infrastruktur cloud yang aman, andal, dan mencakup multi-region menggunakan Kubernetes dan IaC.",
        icon: "☁️",
        bgClass: "from-emerald-600/10 via-teal-600/5 to-transparent border-emerald-500/20"
      },
      {
        title: "Pipeline AI & Otomatisasi",
        desc: "Integrasikan model LLM, jaringan saraf, dan otomatisasi alur kerja langsung ke dalam sistem operasional Anda.",
        icon: "🧠",
        colSpan: 2,
        bgClass: "from-cyan-600/10 via-blue-600/5 to-transparent border-cyan-500/20"
      }
    ],
    productsData: [
      {
        slug: 'zelixa-erp',
        title: 'Zelixa ERP',
        tag: 'Korporat',
        desc: 'Pusatkan operasional Anda dengan sistem perencanaan sumber daya modern yang menawarkan intelijen bisnis mendalam.',
        features: ["Isolasi multi-tenant", "Sinkronisasi buku besar real-time", "Prakiraan permintaan bertenaga AI", "Audit kepatuhan otomatis"],
        longDesc: "Zelixa ERP is a comprehensive Enterprise Resource Planning suite engineered to unify finance, manufacturing, HR, and supply chain operations into a one centralized dashboard. Integrated with AI analytics to forecast stock demands and automate accounting compliance audits.",
        metrics: [
          { value: "400%", label: "Kecepatan Audit" },
          { value: "99.8%", label: "Akurasi Data" },
          { value: "-30%", label: "Biaya Operasional" }
        ],
        techUsed: ["React", "Go (Golang)", "PostgreSQL", "Kafka", "Docker"],
        gallery: ["/zelixa_erp_dashboard.png", "/portfolio_mockup.png", "/about_illustration.png"]
      },
      {
        slug: 'zelixa-pos',
        title: 'Zelixa POS',
        tag: 'Ritel',
        desc: 'Kasir online cloud-native yang memproses ribuan transaksi secara instan dengan ketahanan saat offline.',
        features: ["Transaksi di bawah satu detik", "Database offline-first", "Sinkronisasi stok multi-toko", "Pembuatan barcode dinamis"],
        longDesc: "Zelixa POS memberikan pengalaman kasir ritel berkecepatan tinggi dengan latensi transaksi di bawah satu detik. Didesain dengan arsitektur offline-first, mesin POS dapat mendata penjualan tanpa internet dan menyinkronkan stok otomatis setelah koneksi terhubung kembali.",
        metrics: [
          { value: "< 0.2s", label: "Latensi Bayar" },
          { value: "100%", label: "Uptime Offline" },
          { value: "50k+", label: "Transaksi/Hari" }
        ],
        techUsed: ["Next.js", "PWA / IndexedDB", "Node.js", "Redis", "SQLite"],
        gallery: ["/zelixa_pos_dashboard.png", "/portfolio_mockup.png", "/services_illustration.png"]
      },
      {
        slug: 'zelixa-hris',
        title: 'Zelixa HRIS',
        tag: 'Manajemen',
        desc: 'Otomatisasi penggajian, pelacakan kehadiran, dan manajemen SDM untuk tim digital modern.',
        features: ["Verifikasi biometrik", "Kalkulasi pajak dinamis", "Kartu skor performa", "Penjadwalan cerdas"],
        longDesc: "Zelixa HRIS menyederhanakan manajemen tenaga kerja digital dengan sistem penggajian otomatis, sinkronisasi absensi biometrik GPS, dan perhitungan pajak pph 21 dinamis. Membantu tim HR mengurangi waktu administrasi hingga 80%.",
        metrics: [
          { value: "10 Menit", label: "Proses Payroll" },
          { value: "99.9%", label: "Akurasi Pajak" },
          { value: "80%", label: "Hemat Waktu HR" }
        ],
        techUsed: ["Next.js", "Python", "FastAPI", "MongoDB", "AWS Lambda"],
        gallery: ["/zelixa_hris_dashboard.png", "/portfolio_mockup.png", "/about_illustration.png"]
      },
      {
        slug: 'zelixa-commerce',
        title: 'Zelixa Commerce',
        tag: 'Penjualan',
        desc: 'Mesin e-commerce headless berbasis API yang dirancang untuk lalu lintas kunjungan masif dan toko modular.',
        features: ["API headless GraphQL", "Dukungan pembayaran global", "Skala pencarian elastis", "Logika flash-sale dinamis"],
        longDesc: "Zelixa Commerce adalah mesin e-commerce headless API-first yang didesain khusus untuk menangani trafik flash sale skala besar. Anda bebas membangun frontend menggunakan framework pilihan (React, Vue, iOS, Android) sementara backend kami menangani manajemen checkout dan inventaris terpusat.",
        metrics: [
          { value: "100k+", label: "Kunjungan/Menit" },
          { value: "99.99%", label: "Kapasitas Load" },
          { value: "0% Lag", label: "Trafik Puncak" }
        ],
        techUsed: ["GraphQL", "React", "Rust Engine", "Elasticsearch", "Kubernetes"],
        gallery: ["/zelixa_commerce_dashboard.png", "/portfolio_mockup.png", "/services_illustration.png"]
      },
      {
        slug: 'zelixa-crm',
        title: 'Zelixa CRM',
        tag: 'Pemasaran',
        desc: 'Sistem manajemen hubungan pelanggan bertenaga AI untuk melacak interaksi, prospek, dan pipeline penjualan.',
        features: ["Skoring prospek otomatis", "Pipeline visual kanban", "Integrasi obrolan multi-channel", "Kampanye email cerdas"],
        longDesc: "Zelixa CRM memberikan visibilitas penuh atas interaksi pelanggan dan siklus penjualan Anda. Memadukan asisten AI untuk memprediksi probabilitas closing prospek dan merekomendasikan tindakan tindak lanjut berikutnya secara otomatis.",
        metrics: [
          { value: "+45%", label: "Tingkat Konversi" },
          { value: "5x", label: "Efisiensi Follow-up" },
          { value: "360°", label: "Profil Pelanggan" }
        ],
        techUsed: ["Next.js", "Python", "FastAPI", "Redis", "PostgreSQL"],
        gallery: ["/zelixa_commerce_dashboard.png", "/portfolio_mockup.png", "/about_illustration.png"]
      },
      {
        slug: 'zelixa-wms',
        title: 'Zelixa WMS',
        tag: 'Logistik',
        desc: 'Optimalkan operasi pergudangan, penataan stok bin, dan pelacakan pemenuhan pesanan real-time.',
        features: ["Penataan lokasi rak dinamis", "Pemindaian barcode terintegrasi", "Prediksi restok otomatis", "Multi-gudang konsolidasi"],
        longDesc: "Zelixa WMS (Warehouse Management System) mengotomatiskan penataan barang di gudang Anda dengan algoritma rute pengambilan terpendek. Terintegrasi dengan sistem POS dan Commerce untuk sinkronisasi inventaris instan.",
        metrics: [
          { value: "99.9%", label: "Akurasi Inventaris" },
          { value: "-35%", label: "Waktu Pengambilan" },
          { value: "100%", label: "Visibilitas Real-time" }
        ],
        techUsed: ["React Native", "Go (Golang)", "PostgreSQL", "MQTT", "Docker"],
        gallery: ["/zelixa_erp_dashboard.png", "/portfolio_mockup.png", "/services_illustration.png"]
      },
      {
        slug: 'zelixa-analytics',
        title: 'Zelixa Analytics',
        tag: 'Intelijen',
        desc: 'Konsolidasikan seluruh data bisnis Anda ke dalam dasbor analitik interaktif dengan rekomendasi prediktif bertenaga AI.',
        features: ["Integrasi multi-sumber data", "Prakiraan keuangan otomatis", "Pembuat laporan PDF instan", "Asisten AI tanya-jawab data"],
        longDesc: "Zelixa Analytics adalah mesin BI (Business Intelligence) canggih yang menghubungkan data ERP, POS, dan CRM Anda. Dilengkapi asisten bahasa alami AI yang memungkinkan Anda menanyakan tren penjualan langsung melalui teks.",
        metrics: [
          { value: "Detik", label: "Kueri Data Besar" },
          { value: "95%", label: "Akurasi Prediksi" },
          { value: "10+", label: "Konektor Database" }
        ],
        techUsed: ["React", "Python / Pandas", "ClickHouse", "OpenAI APIs", "Apache Superset"],
        gallery: ["/zelixa_commerce_dashboard.png", "/portfolio_mockup.png", "/about_illustration.png"]
      },
      {
        slug: 'zelixa-hms',
        title: 'Zelixa HMS',
        tag: 'Kesehatan',
        desc: 'Pusatkan data medis pasien, manajemen antrean klinik, dan rekam medis elektronik (RME) yang sangat aman.',
        features: ["Rekam medis terenkripsi", "Penjadwalan janji temu online", "Dasbor apotek & resep obat", "Klaim asuransi otomatis"],
        longDesc: "Zelixa HMS (Hospital Management System) dirancang khusus untuk memodernisasi klinik dan rumah sakit. Menjaga kepatuhan perlindungan data medis pasien dengan sistem enkripsi end-to-end serta menyederhanakan alur kerja tenaga kesehatan.",
        metrics: [
          { value: "0 Menit", label: "Antrean Pasien" },
          { value: "100%", label: "Kepatuhan HIPAA" },
          { value: "-50%", label: "Beban Kertas Admin" }
        ],
        techUsed: ["Next.js", "Node.js", "MongoDB (Enkripsi)", "WebRTC", "AWS Fargate"],
        gallery: ["/zelixa_hris_dashboard.png", "/portfolio_mockup.png", "/services_illustration.png"]
      }
    ],
    statsData: [
      { value: "99.99%", label: "Uptime Sistem", description: "Deployment kami berjalan pada lingkungan Kubernetes yang sangat tangguh." },
      { value: "10x", label: "Kecepatan Pengiriman", description: "Memanfaatkan mesin boilerplate modern dan alur otomatisasi CI/CD." },
      { value: "50+", label: "Proyek Selesai", description: "Berhasil meluncurkan platform web, aplikasi mobile, dan layanan mikro." },
      { value: "15+", label: "Spesialis Teknis", description: "Insinyur senior, arsitek cloud, dan desainer UI/UX berpengalaman." }
    ],
    whyChooseUsData: [
      {
        title: "Performa Ekstrim",
        desc: "Setiap milidetik sangat berharga. Kami mengaudit ukuran bundel dan memanfaatkan caching CDN untuk pemuatan instan.",
        icon: "⚡",
        glowColor: "from-blue-500/20 to-cyan-500/20"
      },
      {
        title: "Keamanan Kelas Militer",
        desc: "Analisis statis, enkripsi data, dan pemeriksaan penetrasi berkala adalah standar wajib pada setiap sistem yang kami kirim.",
        icon: "🛡️",
        glowColor: "from-purple-500/20 to-pink-500/20"
      },
      {
        title: "Skalabilitas Tanpa Batas",
        desc: "Desain arsitektur mikroservis memungkinkan sistem backend Anda menangani jutaan interaksi pengguna secara bersamaan.",
        icon: "🌐",
        glowColor: "from-emerald-500/20 to-teal-500/20"
      },
      {
        title: "SLA Engineer Langsung",
        desc: "Lewati antrean dukungan teknis biasa. Berkomunikasi langsung dengan pimpinan developer pada saluran Slack proyek khusus.",
        icon: "🤝",
        glowColor: "from-amber-500/20 to-orange-500/20"
      }
    ],
    portfolioProjects: [
      {
        slug: "aether",
        title: "Aether - Dasbor Likuiditas Kripto",
        category: "Aplikasi Web",
        desc: "Dasbor pelacakan keuangan yang menampilkan grafik transaksi langsung, integrasi API dompet kripto, dan socket streaming harga.",
        image: "/portfolio_mockup.png",
        liveLink: "/portfolio/aether",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "WebSockets", "Rust Engine", "AWS Fargate"],
        featured: true,
        longDesc: "Aether adalah platform analitik dan dasbor pemantauan likuiditas real-time untuk pertukaran aset digital global. Platform ini dirancang untuk memecahkan hambatan sinkronisasi data dari berbagai dompet kripto terdesentralisasi dan streaming harga langsung dari bursa global. Dengan menggabungkan data WebSocket latensi tinggi dan mesin kalkulasi Rust, Aether mampu memproses lebih dari 100.000 metrik per detik dengan rendering grafik yang mulus dan tanpa lag.",
        challenges: [
          "Kelebihan beban CPU pada browser akibat pembaruan grafik WebSocket dengan frekuensi sangat tinggi (di atas 60Hz).",
          "Konsistensi data transaksi saat terjadi lonjakan trafik perdagangan dari puluhan API dompet terintegrated.",
          "Skalabilitas backend untuk mendistribusikan data streaming secara real-time ke ribuan klien aktif secara bersamaan."
        ],
        solutions: [
          "Menggunakan Web Worker dan buffer data memori di frontend untuk mengelompokkan pembaruan UI sebelum merender ke grafik Canvas.",
          "Membangun middleware backend menggunakan Rust dengan arsitektur event-driven yang efisien untuk normalisasi data.",
          "Menerapkan klaster AWS Fargate auto-scaling di belakang penyeimbang beban (Load Balancer) dengan Redis Pub/Sub untuk distribusi pesan."
        ],
        metrics: [
          { value: "0.08s", label: "Latensi Update" },
          { value: "100k+", label: "Pesan/Detik" },
          { value: "99.99%", label: "Uptime Sistem" }
        ],
        gallery: ["/portfolio_mockup.png", "/zelixa_commerce_dashboard.png", "/about_illustration.png"],
        liveText: "Lihat Demo Interaktif"
      },
      {
        slug: "zenith",
        title: "Zenith - Platform Logistik Cerdas",
        category: "Aplikasi Mobile",
        desc: "Aplikasi mobile lintas platform untuk optimasi rute kurir, pemetaan real-time, dan verifikasi tanda terima pengiriman digital.",
        image: "/portfolio_mockup.png",
        liveLink: "/portfolio/zenith",
        techStack: ["React Native", "Expo", "FastAPI", "Google Maps", "Redis", "PostgreSQL"],
        longDesc: "Zenith adalah solusi manajemen armada dan logistik terpadu untuk perusahaan pengiriman ekspres nasional. Sistem ini terdiri dari aplikasi kurir mobile yang tangguh dengan pelacakan GPS latar belakang, mesin optimasi rute pengantaran cerdas, dan portal administrasi pusat. Zenith membantu menyinkronkan data lokasi kurir, status paket, dan bukti penerimaan digital (e-POD) secara instan ke server pusat.",
        challenges: [
          "Konsumsi daya baterai perangkat yang boros karena pelacakan lokasi GPS yang berjalan secara berkelanjutan.",
          "Sinkronisasi data pengantaran saat kurir berada di wilayah dengan konektivitas internet buruk atau tanpa sinyal.",
          "Kompleksitas algoritma pencarian rute terpendek untuk puluhan paket pengantaran harian per kurir."
        ],
        solutions: [
          "Menerapkan algoritma pelacakan GPS adaptif yang menyesuaikan frekuensi pembaruan koordinat berdasarkan kecepatan gerak kurir.",
          "Membangun penyimpanan database lokal menggunakan SQLite di dalam aplikasi dengan mekanisme antrean sinkronisasi latar belakang otomatis.",
          "Mengintegrasikan algoritma optimasi rute VRP (Vehicle Routing Problem) pada backend FastAPI dengan cache Redis untuk respons instan."
        ],
        metrics: [
          { value: "-25%", label: "Konsumsi Bahan Bakar" },
          { value: "99.2%", label: "Pengiriman Tepat Waktu" },
          { value: "30 Menit", label: "Hemat Waktu Rute" }
        ],
        gallery: ["/portfolio_mockup.png", "/zelixa_erp_dashboard.png", "/services_illustration.png"],
        liveText: "Kunjungi Portal Logistik"
      },
      {
        slug: "nimbus",
        title: "Nimbus - Orkestrator Multi-cloud",
        category: "Cloud & DevOps",
        desc: "Platform SaaS perusahaan untuk mengonfigurasi, membangun, dan menyebarkan cluster multi-cloud dengan antarmuka seret & lepas.",
        image: "/portfolio_mockup.png",
        liveLink: "/portfolio/nimbus",
        techStack: ["Go (Golang)", "Kubernetes", "Docker", "Terraform", "React", "gRPC"],
        longDesc: "Nimbus adalah platform orkestrasi infrastruktur cloud-native yang menyederhanakan penyebaran klaster Kubernetes di berbagai penyedia cloud (AWS, GCP, Azure, DigitalOcean) melalui satu dasbor terpadu. Dengan fitur desainer seret-dan-lepas yang intuitif, tim DevOps dapat merancang arsitektur jaringan, alokasi memori, dan replikasi database tanpa perlu menulis berkas YAML secara manual dari awal.",
        challenges: [
          "Kompatibilitas API yang berbeda antara penyedia cloud utama (AWS CloudFormation vs GCP Deployment Manager).",
          "Pemberian feedback alur pembuatan infrastruktur secara real-time yang memakan waktu lama saat provisi sumber daya cloud.",
          "Manajemen keamanan kredensial akun cloud pelanggan yang harus dijaga dengan tingkat enkripsi tertinggi."
        ],
        solutions: [
          "Menggunakan HashiCorp Terraform sebagai mesin abstraksi universal yang mengeksekusi templat infrastruktur secara deklaratif.",
          "Membangun sistem streaming log provisi berbasis gRPC server-streaming untuk mengirim log eksekusi langsung ke browser user.",
          "Menerapkan enkripsi kunci simetris AES-256 GCM untuk penyimpanan kredensial cloud di database terisolasi."
        ],
        metrics: [
          { value: "85%", label: "Waktu Provisi Lebih Cepat" },
          { value: "0 Kesalahan", label: "Konfigurasi Ulang" },
          { value: "4 Awan", label: "Dukungan Integrasi" }
        ],
        gallery: ["/portfolio_mockup.png", "/zelixa_hris_dashboard.png", "/about_illustration.png"],
        liveText: "Coba Nimbus SandBox"
      },
      {
        slug: "iris",
        title: "Iris - Pengurai Faktur Bertenaga AI",
        category: "AI & ML",
        desc: "Model otomatisasi OCR yang mengekstrak data tabel faktur dari lembar pindaian kompleks dan mengonversinya menjadi data transaksi database.",
        image: "/portfolio_mockup.png",
        liveLink: "/portfolio/iris",
        techStack: ["Python", "PyTorch", "FastAPI", "OpenAI APIs", "PostgreSQL", "React"],
        longDesc: "Iris adalah solusi pemrosesan dokumen otomatis berbasis AI yang dirancang untuk mempercepat verifikasi faktur keuangan di departemen akuntansi perusahaan. Dengan menggunakan kombinasi model visi komputer OCR dan Model Bahasa Besar (LLM), Iris dapat mengidentifikasi, mengklasifikasikan, dan mengekstrak tabel data produk, nilai pajak, serta informasi vendor dari gambar faktur yang buram atau miring secara akurat.",
        challenges: [
          "Variasi tata letak (layout) faktur yang tidak terhitung jumlahnya dari ribuan vendor berbeda.",
          "Akurasi pembacaan karakter pada gambar faktur dengan kualitas resolusi rendah atau berkas pindaian miring.",
          "Kecepatan pemrosesan dokumen agar laporan audit pengeluaran keuangan dapat disajikan secara real-time."
        ],
        solutions: [
          "Mengembangkan pipeline hibrida: OCR untuk ekstraksi teks spasial, dilanjutkan dengan model LLM ter-fine-tuning untuk klasifikasi semantik.",
          "Menerapkan prapemrosesan citra otomatis (rotasi kemiringan, penyesuaian kontras, penajaman tepi) menggunakan OpenCV sebelum masuk ke modul OCR.",
          "Mendesain antrean pemrosesan asinkron menggunakan Celery dengan broker Redis untuk menangani pemrosesan dokumen paralel."
        ],
        metrics: [
          { value: "98.7%", label: "Akurasi Ekstraksi" },
          { value: "< 3 Detik", label: "Waktu Proses/Lembar" },
          { value: "90%", label: "Pengurangan Input Manual" }
        ],
        gallery: ["/portfolio_mockup.png", "/zelixa_pos_dashboard.png", "/services_illustration.png"],
        liveText: "Unggah Dokumen Uji"
      }
    ],
    processSteps: [
      {
        number: "01",
        title: "Konsultasi & Penemuan",
        desc: "Mengumpulkan kebutuhan sistem, memetakan profil pengguna target, dan menetapkan metrik kinerja.",
        duration: "1-2 Minggu",
        icon: "🔍"
      },
      {
        number: "02",
        title: "UI/UX & Desain Database",
        desc: "Merancang desain Figma fidelitas tinggi dan memetakan struktur database relasional serta topologi cloud.",
        duration: "2-3 Minggu",
        icon: "🎨"
      },
      {
        number: "03",
        title: "Pengembangan Agile Sprint",
        desc: "Pengembangan kode dalam siklus 2 mingguan, menyediakan tautan staging interaktif untuk peninjauan berkala klien.",
        duration: "4-8 Minggu",
        icon: "⚙️"
      },
      {
        number: "04",
        title: "Audit Sistem Ketat",
        desc: "Menjalankan tes unit otomatis, uji integrasi sistem secara menyeluruh, dan protokol pemindaian keamanan.",
        duration: "1-2 Minggu",
        icon: "🧪"
      },
      {
        number: "05",
        title: "Peluncuran & Pemantauan",
        desc: "Penyebaran container blue-green pada infrastruktur cloud dengan logging aktif dan sistem pemantauan uptime.",
        duration: "Berkelanjutan",
        icon: "🚀"
      }
    ],
    techCategories: [
      {
        category: "Frontend & Mobile",
        items: [
          { name: "Next.js", icon: "⚛️", level: "Pakar", percentage: 95 },
          { name: "React Native", icon: "📱", level: "Lanjutan", percentage: 88 },
          { name: "TypeScript", icon: "📘", level: "Pakar", percentage: 92 },
          { name: "Tailwind CSS", icon: "🎨", level: "Pakar", percentage: 96 }
        ]
      },
      {
        category: "Backend & Sistem",
        items: [
          { name: "Node.js / Express", icon: "🟢", level: "Pakar", percentage: 90 },
          { name: "Go (Golang)", icon: "🐹", level: "Lanjutan", percentage: 83 },
          { name: "Python / FastAPI", icon: "🐍", level: "Lanjutan", percentage: 87 },
          { name: "PostgreSQL / Redis", icon: "🗄️", level: "Pakar", percentage: 91 }
        ]
      },
      {
        category: "Cloud Ops & AI",
        items: [
          { name: "AWS & GCP", icon: "☁️", level: "Lanjutan", percentage: 86 },
          { name: "Kubernetes / Docker", icon: "🐳", level: "Pakar", percentage: 90 },
          { name: "Terraform & CI/CD", icon: "🏗️", level: "Lanjutan", percentage: 84 },
          { name: "LLMs / LangChain", icon: "🧠", level: "Lanjutan", percentage: 89 }
        ]
      }
    ],
    testimonialsData: [
      {
        name: "Rizaldi Naldian Putra",
        role: "CEO, TechIndo Solutions",
        text: "Zelixa Tech mentransformasikan database legacy kami menjadi ERP cloud-native yang sangat cepat. Kecepatan database kami meningkat 400% dan deployment kini instan."
      },
      {
        name: "Siti Rahma",
        role: "Direktur Produk, RetailKu",
        text: "Produk POS ini sangat cepat. Kami melewati lonjakan transaksi flash sale Black Friday dengan nol keterlambatan sistem dan nol downtime server."
      },
      {
        name: "Andi Wijaya",
        role: "Founder, StartupX",
        text: "Tim UI/UX mereka berkelas dunia. Akuisisi pengguna kami meningkat sebesar 320% dalam bulan pertama setelah meluncurkan antarmuka baru yang mereka rancang."
      }
    ],
    pricingPlans: [
      {
        name: "MVP Launchpad",
        priceMonthly: "$1,499",
        priceAnnually: "$1,199",
        period: "bulan",
        description: "Sangat cocok untuk startup tahap awal yang ingin merilis MVP interaktif berkualitas tinggi ke pasar dengan cepat.",
        features: [
          "Pengembangan satu platform (Web atau Mobile)",
          "Teknologi Next.js atau React Native",
          "Serah terima desain Figma lengkap",
          "Alokasi tim developer selama 4 minggu",
          "Setup CI/CD ke Vercel/Netlify",
          "Saluran komunikasi langsung Slack"
        ],
        ctaText: "Mulai Bangun MVP"
      },
      {
        name: "Skala Pertumbuhan",
        priceMonthly: "$3,499",
        priceAnnually: "$2,999",
        period: "bulan",
        description: "Dirancang untuk perusahaan mapan yang ingin mengembangkan sistem, integrasi AI, atau model SaaS.",
        features: [
          "Rekayasa platform SaaS skala penuh",
          "Arsitektur backend multi-layanan",
          "Prototipe responsif UI/UX Premium",
          "Alokasi tim developer selama 8 minggu",
          "Setup cluster Kubernetes & Docker",
          "Tes unit otomatis & integrasi E2E",
          "Respons dukungan teknis SLA 4 jam"
        ],
        popular: true,
        ctaText: "Luncurkan Skala Pertumbuhan"
      },
      {
        name: "Kustom Perusahaan",
        priceMonthly: "Kustom",
        priceAnnually: "Kustom",
        period: "tahun",
        description: "Paket kustom yang disesuaikan untuk sistem berkeamanan tinggi, migrasi kode, dan platform enterprise skala penuh.",
        features: [
          "Arsitektur sistem kustom tanpa batas",
          "Modernisasi & penulisan ulang kode legacy",
          "Pemindaian keamanan & uji penetrasi wajib",
          "Alokasi tim developer khusus",
          "Konfigurasi private cloud / on-premise",
          "Transfer penuh kekayaan intelektual (IP)",
          "Dukungan hotline darurat prioritas 24/7"
        ],
        ctaText: "Hubungi Sales"
      }
    ],
    faqData: [
      {
        question: "Berapa lama proses pembuatan software dari awal?",
        answer: "Durasi pengerjaan sangat bervariasi bergantung pada skala aplikasi. Proyek MVP sederhana rata-rata diselesaikan dalam 4 hingga 6 minggu. Sedangkan untuk aplikasi SaaS multi-tenant kustom, arsitektur microservices, atau integrasi AI berskala enterprise biasanya membutuhkan 2 hingga 4 bulan pengerjaan.",
        category: "Proses & Estimasi"
      },
      {
        question: "Apakah saya memiliki hak penuh atas kode sumber (source code)?",
        answer: "Tentu saja. Setelah masa kontrak selesai dan seluruh kewajiban pembayaran dipenuhi, hak milik intelektual secara hukum beralih 100% kepada Anda. Kami menyerahkan seluruh source code, file konfigurasi server, akun repositori, serta berkas desain Figma asli.",
        category: "Hak Cipta & Legal"
      },
      {
        question: "Bagaimana sistem maintenance dan dukungan pasca peluncuran?",
        answer: "Kami menyertakan garansi perbaikan bug secara gratis selama 30 hari pertama pasca software dipublikasikan ke production. Setelah masa tersebut berakhir, Anda dapat melanjutkan kerja sama melalui paket Maintenance SLA bulanan kami yang mencakup backup otomatis, audit keamanan server, optimasi database, dan pemantauan uptime 24/7.",
        category: "Dukungan Teknis"
      },
      {
        question: "Apakah software yang dibuat dapat dihubungkan dengan database internal perusahaan kami?",
        answer: "Sangat bisa. Kami berpengalaman membangun API kustom, pipeline webhook, sinkronisasi data legacy, hingga integrasi sistem ERP besar seperti SAP, Oracle, atau server on-premise internal menggunakan enkripsi TLS yang sangat aman.",
        category: "Teknis & Integrasi"
      },
      {
        question: "Di cloud server mana aplikasi kami nantinya akan di-deploy?",
        answer: "Kami dapat me-deploy aplikasi ke penyedia cloud pilihan Anda, termasuk Amazon Web Services (AWS), Google Cloud Platform (GCP), Microsoft Azure, DigitalOcean, Vercel, maupun bare metal server lokal. Kami mengonfigurasinya menggunakan sistem IaC (Terraform) agar infrastruktur Anda mudah di-setup ulang jika diperlukan.",
        category: "DevOps & Cloud"
      }
    ],
    uiText: {
      aboutTitle: "Siapa Kami",
      aboutSubtitle: "Mendorong Kesuksesan Melalui Keahlian Digital",
      aboutDesc: "Di Zelixa Tech, kami merancang, merekayasa, dan menyebarkan produk perangkat lunak berintegritas tinggi untuk membantu bisnis tumbuh berkembang. Kami beroperasi di persimpangan strategi bisnis, desain pengalaman manusia, dan skalabilitas cloud.",
      aboutBtn: "Jelajahi Solusi",
      servicesTitle: "Layanan & Solusi",
      servicesSubtitle: "Keahlian Utama Kami",
      servicesDesc: "Kapasitas desain dan teknik tingkat tinggi yang disesuaikan untuk mempercepat transformasi digital perusahaan Anda.",
      servicesDocLink: "Baca Dokumen Teknis",
      productsTitle: "Katalog Produk",
      productsSubtitle: "Rangkaian Perangkat Lunak Kami",
      productsDesc: "Produk aplikasi enterprise siap pakai untuk menyelesaikan hambatan operasional bisnis Anda secara instan.",
      whyTitle: "Mengapa Bermitra Dengan Kami",
      whySubtitle: "Dibangun Berbeda. Dirancang Lebih Baik.",
      whyDesc: "Kami berfokus pada standar perangkat lunak yang berdampak langsung pada indikator bisnis Anda: kecepatan performa, perlindungan data, dan ketahanan struktur.",
      portfolioTitle: "Studi Kasus",
      portfolioSubtitle: "Deployment yang Telah Kami Selesaikan",
      portfolioDesc: "Lihat beberapa produk perangkat lunak yang kami rancang, bangun, dan luncurkan ke sistem produksi aktif.",
      portfolioTabs: ['Semua', 'Aplikasi Web', 'Aplikasi Mobile', 'Cloud & DevOps', 'AI & ML'],
      portfolioDocLink: "Baca Dokumen Arsitektur",
      processTitle: "Alur Pengembangan",
      processSubtitle: "Cara Kami Mengirimkan Kode Berkualitas",
      processDesc: "Model pengembangan berbasis pencapaian terstruktur untuk mempertahankan kecepatan pengembangan tanpa mengorbankan kualitas.",
      techTitle: "Rangkaian Teknologi",
      techSubtitle: "Alat Kerja Teruji Kami",
      techDesc: "Kami menggunakan teknologi modern, bertipe data ketat, dan sangat optimal untuk membangun infrastruktur yang kokoh.",
      testimonialTitle: "Kisah Sukses",
      testimonialSubtitle: "Dipercaya oleh Pendiri & Tim Bisnis",
      testimonialDesc: "Ulasan langsung dari para pemimpin startup dan direktur perusahaan yang bermitra dengan Zelixa untuk meluncurkan software.",
      pricingTitle: "Rencana Fleksibel",
      pricingSubtitle: "Harga yang Transparan, Tanpa Keterikatan",
      pricingDesc: "Pilih paket yang sesuai dengan siklus bisnis Anda saat ini. Ubah alokasi bulanan kapan saja.",
      faqTitle: "Pusat Bantuan",
      faqSubtitle: "Pertanyaan yang Sering Diajukan",
      faqDesc: "Temukan jawaban cepat terkait linimasa proyek, hak Kekayaan Intelektual, dan logika penskalaan perangkat lunak.",
      contactTitle: "Hubungi Kami",
      contactSubtitle: "Mulai Pembaruan Digital Anda",
      contactDesc: "Siap mengembangkan sistem Anda? Kirimkan deskripsi proyek Anda dan tim kami akan merespons dalam waktu 24 jam.",
      contactFormName: "Nama Lengkap",
      contactFormEmail: "Alamat Email",
      contactFormBudget: "Alokasi Anggaran Proyek",
      contactFormMsg: "Parameter & Tujuan Proyek",
      contactFormSubmit: "Kirim Proposal Proyek",
      contactFormSubmitting: "Menghubungkan Server...",
      contactFormSuccessTitle: "Koneksi Terjalin!",
      contactFormSuccessDesc: "Rincian proyek Anda telah berhasil dikirim ke dasbor kami. Kami akan segera menghubungi Anda.",
      contactFormSuccessBtn: "Kirim Pesan Lain",
      contactMapTitle: "Koordinat Kantor",
      footerDesc: "Membangun sistem perangkat lunak interaktif dan terukur generasi berikutnya untuk bisnis masa depan.",
      footerSocials: "Temukan Kami",
      footerNewsletterTitle: "Pembaruan Teknologi",
      footerNewsletterDesc: "Berlangganan untuk menerima wawasan terbaru seputar performa Next.js, microservices, dan template desain.",
      footerSubscribeBtn: "Langganan",
      footerCopyright: "Semua hak dilindungi undang-undang. Sudirman CBD, Jakarta, Indonesia.",
      chatTitle: "Zelixa AI Asisten",
      chatStatus: "Sistem Online",
      chatWelcome: "Halo! Saya Zelixa AI Asisten. Informasi apa yang bisa saya bantu hari ini?",
      chatPlaceholder: "Tulis pesan..."
    }
  },
  en: {
    slidesData: [
      {
        title: "Architecting Next-Gen Digital Products",
        subtitle: "We build scalable, high-performance web applications and enterprise systems engineered for massive growth.",
        bgClass: "bg-slate-950"
      },
      {
        title: "Intelligent Cloud & AI Pipelines",
        subtitle: "Deploy secure, multi-tenant cloud ecosystems integrated with cutting-edge artificial intelligence.",
        bgClass: "bg-slate-950"
      },
      {
        title: "Exceptional UI/UX Design Engineering",
        subtitle: "Crafting gorgeous, high-converting digital interfaces that users absolutely love.",
        bgClass: "bg-slate-950"
      }
    ],
    servicesData: [
      {
        title: "Custom Software Engineering",
        desc: "Building tailored, high-performance web and mobile applications engineered to scale alongside your operations.",
        icon: "💻",
        colSpan: 2,
        bgClass: "from-blue-600/10 via-indigo-600/5 to-transparent border-blue-500/20"
      },
      {
        title: "UI/UX Design",
        desc: "Stunning, human-centric user interfaces prioritizing visual impact, conversions, and seamless customer flows.",
        icon: "🎨",
        bgClass: "from-purple-600/10 via-pink-600/5 to-transparent border-purple-500/20"
      },
      {
        title: "Cloud Operations",
        desc: "Secure, reliable, and multi-region cloud infrastructure management using Kubernetes and infrastructure-as-code.",
        icon: "☁️",
        bgClass: "from-emerald-600/10 via-teal-600/5 to-transparent border-emerald-500/20"
      },
      {
        title: "AI & Automation Pipelines",
        desc: "Integrate cutting-edge LLMs, neural networks, and business logic automation straight into your existing workflows.",
        icon: "🧠",
        colSpan: 2,
        bgClass: "from-cyan-600/10 via-blue-600/5 to-transparent border-cyan-500/20"
      }
    ],
    productsData: [
      {
        slug: 'zelixa-erp',
        title: 'Zelixa ERP',
        tag: 'Enterprise',
        desc: 'Centralize your operations with a modern resource planning system offering deep business intelligence.',
        features: ["Multi-tenant isolation", "Real-time ledger syncing", "AI demand forecasting", "Automated compliance audits"],
        longDesc: "Zelixa ERP is a comprehensive Enterprise Resource Planning suite engineered to unify finance, manufacturing, HR, and supply chain operations into a single control panel. Integrated with AI analytics to forecast stock demands and automate accounting compliance audits.",
        metrics: [
          { value: "400%", label: "Audit Speedup" },
          { value: "99.8%", label: "Data Accuracy" },
          { value: "-30%", label: "Operational Overhead" }
        ],
        techUsed: ["React", "Go (Golang)", "PostgreSQL", "Kafka", "Docker"],
        gallery: ["/zelixa_erp_dashboard.png", "/portfolio_mockup.png", "/about_illustration.png"]
      },
      {
        slug: 'zelixa-pos',
        title: 'Zelixa POS',
        tag: 'Retail',
        desc: 'Cloud-native point of sale processing thousands of concurrent transactions instantly with offline resilience.',
        features: ["Sub-second transactions", "Offline-first databases", "Multi-store inventory sync", "Dynamic barcode generation"],
        longDesc: "Zelixa POS delivers high-speed retail checkout capabilities with transaction latencies under 0.2 seconds. Designed with offline-first indexing, store nodes can process sales offline and sync databases once connectivity is restored.",
        metrics: [
          { value: "< 0.2s", label: "Checkout Latency" },
          { value: "100%", label: "Offline Resilience" },
          { value: "50k+", label: "Transact/Day" }
        ],
        techUsed: ["Next.js", "PWA / IndexedDB", "Node.js", "Redis", "SQLite"],
        gallery: ["/zelixa_pos_dashboard.png", "/portfolio_mockup.png", "/services_illustration.png"]
      },
      {
        slug: 'zelixa-hris',
        title: 'Zelixa HRIS',
        tag: 'Management',
        desc: 'Automated payroll, attendance tracking, and human resource management for modern digital teams.',
        features: ["Biometric verification", "Dynamic tax calculations", "Performance scorecards", "Intelligent scheduling"],
        longDesc: "Zelixa HRIS streamlines modern workforce operations with automated payroll engines, GPS-based biometric check-ins, and automated tax calculations. Helps HR teams reduce administrative overhead by up to 80%.",
        metrics: [
          { value: "10 Mins", label: "Payroll Run" },
          { value: "99.9%", label: "Tax Accuracy" },
          { value: "80%", label: "HR Time Saved" }
        ],
        techUsed: ["Next.js", "Python", "FastAPI", "MongoDB", "AWS Lambda"],
        gallery: ["/zelixa_hris_dashboard.png", "/portfolio_mockup.png", "/about_illustration.png"]
      },
      {
        slug: 'zelixa-commerce',
        title: 'Zelixa Commerce',
        tag: 'Sales',
        desc: 'A headless, API-first e-commerce engine designed for high traffic events and modular storefronts.',
        features: ["GraphQL headless API", "Global payment support", "Elastic search scaling", "Dynamic flash-sale logic"],
        longDesc: "Zelixa Commerce is a headless API-first e-commerce engine built to scale through high-volume flash-sales. Decouple your frontend storefront using React, Vue, iOS, or Android, while our high-performance ledger handles checkout locks.",
        metrics: [
          { value: "100k+", label: "Visitors/Min" },
          { value: "99.99%", label: "Load Capacity" },
          { value: "0% Lag", label: "Peak Traffic" }
        ],
        techUsed: ["GraphQL", "React", "Rust Engine", "Elasticsearch", "Kubernetes"],
        gallery: ["/zelixa_commerce_dashboard.png", "/portfolio_mockup.png", "/services_illustration.png"]
      },
      {
        slug: 'zelixa-crm',
        title: 'Zelixa CRM',
        tag: 'Marketing',
        desc: 'An AI-powered customer relationship management platform tracking client interactions, leads, and sales pipelines.',
        features: ["Automated lead scoring", "Visual kanban pipelines", "Multi-channel chat inbox", "Intelligent email triggers"],
        longDesc: "Zelixa CRM brings deep visibility into your customer pipelines and sales funnels. Features automated AI assistants that score prospective closing odds and schedule next-action follow-ups automatically.",
        metrics: [
          { value: "+45%", label: "Conversion Rate" },
          { value: "5x", label: "Follow-up Velocity" },
          { value: "360°", label: "Customer Profile" }
        ],
        techUsed: ["Next.js", "Python", "FastAPI", "Redis", "PostgreSQL"],
        gallery: ["/zelixa_commerce_dashboard.png", "/portfolio_mockup.png", "/about_illustration.png"]
      },
      {
        slug: 'zelixa-wms',
        title: 'Zelixa WMS',
        tag: 'Logistics',
        desc: 'Optimize warehouse dispatch operations, pen inventory layouts, and track order fulfillment in real-time.',
        features: ["Dynamic racking paths", "Integrated barcode scans", "Auto restocking triggers", "Consolidated warehouses"],
        longDesc: "Zelixa WMS (Warehouse Management System) coordinates physical stock layouts with dynamic picking path heuristics. Connects with POS and Commerce databases for automated, real-time inventory adjustments.",
        metrics: [
          { value: "99.9%", label: "Inventory Accuracy" },
          { value: "-35%", label: "Picking Duration" },
          { value: "100%", label: "Live Stock Sync" }
        ],
        techUsed: ["React Native", "Go (Golang)", "PostgreSQL", "MQTT", "Docker"],
        gallery: ["/zelixa_erp_dashboard.png", "/portfolio_mockup.png", "/services_illustration.png"]
      },
      {
        slug: 'zelixa-analytics',
        title: 'Zelixa Analytics',
        tag: 'Intelligence',
        desc: 'Consolidate multiple business streams into interactive dashboards featuring AI-powered predictive recommendations.',
        features: ["Multi-source data feeds", "Automatic cash forecasts", "Instant PDF reports", "Natural query AI assist"],
        longDesc: "Zelixa Analytics is a high-speed Business Intelligence (BI) engine linking your ERP, CRM, and POS databases. Includes an LLM assistant to let you query sales trends directly in plain language.",
        metrics: [
          { value: "Sub-Sec", label: "Big Data Query" },
          { value: "95%", label: "Forecast Precision" },
          { value: "10+", label: "Database Connectors" }
        ],
        techUsed: ["React", "Python / Pandas", "ClickHouse", "OpenAI APIs", "Apache Superset"],
        gallery: ["/zelixa_commerce_dashboard.png", "/portfolio_mockup.png", "/about_illustration.png"]
      },
      {
        slug: 'zelixa-hms',
        title: 'Zelixa HMS',
        tag: 'Healthcare',
        desc: 'Centralize clinic appointments, manage queue lines, and host secure Electronic Health Records (EHR).',
        features: ["Encrypted medical ledgers", "Online doctor bookings", "Pharmacy inventory dashboards", "Automated insurance claims"],
        longDesc: "Zelixa HMS (Hospital Management System) modernizes clinical workflows while complying with HIPAA privacy requirements. Fully features end-to-end encrypted databases for medical charts and patient booking pipelines.",
        metrics: [
          { value: "0 Mins", label: "Patient Wait Times" },
          { value: "100%", label: "HIPAA Compliant" },
          { value: "-50%", label: "Paperwork Reduced" }
        ],
        techUsed: ["Next.js", "Node.js", "MongoDB (Encrypted)", "WebRTC", "AWS Fargate"],
        gallery: ["/zelixa_hris_dashboard.png", "/portfolio_mockup.png", "/services_illustration.png"]
      }
    ],
    statsData: [
      { value: "99.99%", label: "System Uptime", description: "Our deployments run on highly resilient Kubernetes environments." },
      { value: "10x", label: "Delivery Velocity", description: "Leveraging boilerplate engines and CI/CD pipelines." },
      { value: "50+", label: "Completed Projects", description: "Successfully shipped web platforms, apps, and microservices." },
      { value: "15+", label: "Vetted Tech Experts", description: "Senior engineers, cloud architects, and UX designers." }
    ],
    whyChooseUsData: [
      {
        title: "Extreme Performance",
        desc: "Every millisecond counts. We audit bundle sizes, optimize asset pipelines, and utilize CDN caching for instant loads.",
        icon: "⚡",
        glowColor: "from-blue-500/20 to-cyan-500/20"
      },
      {
        title: "Military-Grade Security",
        desc: "Static analysis, encryption-at-rest, and regular penetration checks are standard in every system we ship.",
        icon: "🛡️",
        glowColor: "from-purple-500/20 to-pink-500/20"
      },
      {
        title: "Infinite Scalability",
        desc: "Microservices design allowing your backend systems to handle millions of simultaneous user interactions smoothly.",
        icon: "🌐",
        glowColor: "from-emerald-500/20 to-teal-500/20"
      },
      {
        title: "Direct Engineer SLA",
        desc: "Skip the tier-1 call center support. Communicate directly with lead developer units on dedicated project Slack channels.",
        icon: "🤝",
        glowColor: "from-amber-500/20 to-orange-500/20"
      }
    ],
    portfolioProjects: [
      {
        slug: "aether",
        title: "Aether - Crypto Liquidity Dashboard",
        category: "Web Apps",
        desc: "A financial tracking dashboard showcasing live trade charts, wallet API integrations, and sub-second price socket streaming.",
        image: "/portfolio_mockup.png",
        liveLink: "/portfolio/aether",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "WebSockets", "Rust Engine", "AWS Fargate"],
        featured: true,
        longDesc: "Aether is a real-time liquidity monitoring dashboard and analytics engine engineered for a global digital asset exchange. The platform aggregates asset ledgers across multi-signature decentralized wallets and streams real-time pricing feeds from global spot exchanges. Leveraging sub-second WebSocket pipelines and a performance-optimized Rust computational backend, Aether processes over 100,000 tickers per second to render smooth canvas charts without interface freezing.",
        challenges: [
          "Severe browser thread lag caused by processing high-frequency WebSocket updates (exceeding 60Hz) directly on the UI thread.",
          "Data sync inconsistencies across decentralized wallets during high-throughput network congestion events.",
          "Backend socket connection limits when broadcasting live ticker data to thousands of active browser clients."
        ],
        solutions: [
          "Implemented Web Workers and memory buffers on the frontend to throttle and batch UI updates before rendering to HTML5 Canvas.",
          "Designed an event-driven Rust middleware stack to normalize transaction structures and deduplicate redundant wallet API states.",
          "Deployed auto-scaling AWS Fargate container clusters integrated with Redis Pub/Sub channels to distribute socket payloads efficiently."
        ],
        metrics: [
          { value: "0.08s", label: "Update Latency" },
          { value: "100k+", label: "Messages/Sec" },
          { value: "99.99%", label: "System Uptime" }
        ],
        gallery: ["/portfolio_mockup.png", "/zelixa_commerce_dashboard.png", "/about_illustration.png"],
        liveText: "Launch Interactive Demo"
      },
      {
        slug: "zenith",
        title: "Zenith - Smart Logistics Platform",
        category: "Mobile Apps",
        desc: "A cross-platform mobile application enabling local driver dispatch optimization, real-time map routing, and delivery verification.",
        image: "/portfolio_mockup.png",
        liveLink: "/portfolio/zenith",
        techStack: ["React Native", "Expo", "FastAPI", "Google Maps", "Redis", "PostgreSQL"],
        longDesc: "Zenith is an all-in-one logistics orchestrator and dispatch management suite built for a leading national express courier. The platform comprises a battery-optimized React Native driver app with background GPS telemetry, an AI route planning server, and an administrative hub. Zenith synchronizes live driver locations, shipping schedules, and electronic proof-of-delivery (e-POD) records to core enterprise databases instantly.",
        challenges: [
          "Excessive driver device battery drain caused by continuous, unthrottled background GPS location tracking.",
          "Loss of delivery progress logs when drivers operate in low-connectivity rural regions with zero cellular network signal.",
          "Mathematical complexity in resolving optimal multi-stop vehicle routes for dozens of parcels per driver daily."
        ],
        solutions: [
          "Programmed an adaptive telemetry engine that scales GPS ping rates dynamically based on the vehicle's movement speed.",
          "Designed an offline-first SQLite database layer within the React Native app, caching records and queuing sync runs dynamically.",
          "Developed a multi-stop vehicle routing solver on FastAPI backend nodes, leveraging Redis cache to return optimized routes."
        ],
        metrics: [
          { value: "-25%", label: "Fuel Expenses" },
          { value: "99.2%", label: "On-Time Delivery" },
          { value: "30 Mins", label: "Daily Route Time Saved" }
        ],
        gallery: ["/portfolio_mockup.png", "/zelixa_erp_dashboard.png", "/services_illustration.png"],
        liveText: "Explore Dispatch Portal"
      },
      {
        slug: "nimbus",
        title: "Nimbus - Multi-cloud Orchestrator",
        category: "Cloud & DevOps",
        desc: "An enterprise SaaS platform allowing devs to configure, build, and deploy multi-cloud clusters with drag-and-drop ease.",
        image: "/portfolio_mockup.png",
        liveLink: "/portfolio/nimbus",
        techStack: ["Go (Golang)", "Kubernetes", "Docker", "Terraform", "React", "gRPC"],
        longDesc: "Nimbus is an enterprise cloud orchestration SaaS that simplifies deploying Kubernetes clusters across major public cloud providers (AWS, GCP, Azure, DigitalOcean) through a visual drag-and-drop console. Instead of manually writing error-prone YAML sheets, platform engineers can map subnets, configure storage parameters, and provision high-availability databases visually.",
        challenges: [
          "API design mismatches and structural divergences across distinct cloud provider deployment templates.",
          "Long-running infrastructure build loops blocking client interfaces, leaving users without progress logs during provisioning.",
          "Securing client API access keys and cloud credentials using zero-trust cryptography policies."
        ],
        solutions: [
          "Utilized HashiCorp Terraform as a unified infrastructure-as-code parser to execute cloud resources declaratively.",
          "Built a streaming API using Go gRPC server-streaming to pipe live provisioning logs straight to WebSockets on the UI.",
          "Engineered a zero-trust credential store employing AES-256 GCM authenticated encryption keys rotated periodically."
        ],
        metrics: [
          { value: "85%", label: "Faster Provisioning" },
          { value: "0 Errors", label: "Infrastructure drift" },
          { value: "4 Clouds", label: "Native Integrations" }
        ],
        gallery: ["/portfolio_mockup.png", "/zelixa_hris_dashboard.png", "/about_illustration.png"],
        liveText: "Try Nimbus Sandbox"
      },
      {
        slug: "iris",
        title: "Iris - AI-Powered Invoice Parser",
        category: "AI & ML",
        desc: "An automated OCR model extracting tabular ledger lines from complex scan sheets and converting them to database transactions.",
        image: "/portfolio_mockup.png",
        liveLink: "/portfolio/iris",
        techStack: ["Python", "PyTorch", "FastAPI", "OpenAI APIs", "PostgreSQL", "React"],
        longDesc: "Iris is an enterprise document ingestion pipeline that automates receipt and invoice verification for financial accounts. Combining advanced computer vision and specialized natural language processing (NLP) models, Iris reads, structures, and audits tabular ledger lines, tax calculations, and vendor details from distorted, low-resolution camera scans.",
        challenges: [
          "Infinite variations in invoice formats, tabular structures, and invoice templates across thousands of vendors.",
          "Low OCR character recognition accuracy when processing low-contrast scans, handwritten notes, or skewed receipts.",
          "High processing latency, which bottlenecked real-time expense approvals."
        ],
        solutions: [
          "Designed a hybrid pipeline using custom OCR models for spatial text localization, feeding structured nodes to a fine-tuned LLM.",
          "Created an automatic image pre-processing engine (deskewing, contrast stretching, and noise filters) via OpenCV.",
          "Built an asynchronous task system using Celery with Redis brokers to queue documents and process files concurrently."
        ],
        metrics: [
          { value: "98.7%", label: "Parsing Accuracy" },
          { value: "< 3 Secs", label: "Processing Speed/Page" },
          { value: "90%", label: "Manual Entry Reduced" }
        ],
        gallery: ["/portfolio_mockup.png", "/zelixa_pos_dashboard.png", "/services_illustration.png"],
        liveText: "Upload Test Invoice"
      }
    ],
    processSteps: [
      {
        number: "01",
        title: "Discovery & Blueprint",
        desc: "Gathering system requirements, outlining customer personas, and setting performance metrics.",
        duration: "1-2 Weeks",
        icon: "🔍"
      },
      {
        number: "02",
        title: "UI/UX & DB Topology",
        desc: "Designing high-fidelity Figma styles and mapping entity relationships and cloud topology.",
        duration: "2-3 Weeks",
        icon: "🎨"
      },
      {
        number: "03",
        title: "Iterative Sprint Builds",
        desc: "Developing code in 2-week agile cycles, providing interactive staging URLs for client inspection.",
        duration: "4-8 Weeks",
        icon: "⚙️"
      },
      {
        number: "04",
        title: "Rigorous System Audit",
        desc: "Carrying out automated unit tests, end-to-end integration runs, and security scan protocols.",
        duration: "1-2 Weeks",
        icon: "🧪"
      },
      {
        number: "05",
        title: "Launch & Orchestration",
        desc: "Blue-green container deployment on cloud infrastructure with live logging and uptime systems.",
        duration: "Ongoing",
        icon: "🚀"
      }
    ],
    techCategories: [
      {
        category: "Frontend & Mobile",
        items: [
          { name: "Next.js", icon: "⚛️", level: "Expert", percentage: 95 },
          { name: "React Native", icon: "📱", level: "Advanced", percentage: 88 },
          { name: "TypeScript", icon: "📘", level: "Expert", percentage: 92 },
          { name: "Tailwind CSS", icon: "🎨", level: "Expert", percentage: 96 }
        ]
      },
      {
        category: "Backend & Systems",
        items: [
          { name: "Node.js / Express", icon: "🟢", level: "Expert", percentage: 90 },
          { name: "Go (Golang)", icon: "🐹", level: "Advanced", percentage: 83 },
          { name: "Python / FastAPI", icon: "🐍", level: "Advanced", percentage: 87 },
          { name: "PostgreSQL / Redis", icon: "🗄️", level: "Expert", percentage: 91 }
        ]
      },
      {
        category: "Cloud Ops & AI",
        items: [
          { name: "AWS & GCP", icon: "☁️", level: "Advanced", percentage: 86 },
          { name: "Kubernetes / Docker", icon: "🐳", level: "Expert", percentage: 90 },
          { name: "Terraform & CI/CD", icon: "🏗️", level: "Advanced", percentage: 84 },
          { name: "LLMs / LangChain", icon: "🧠", level: "Advanced", percentage: 89 }
        ]
      }
    ],
    testimonialsData: [
      {
        name: "Rizaldi Naldian Putra",
        role: "CEO, TechIndo Solutions",
        text: "Zelixa Tech transformed our legacy database into a supercharged, cloud-native ERP. Our database speeds increased by 400% and deployment is now instant."
      },
      {
        name: "Siti Rahma",
        role: "Director of Product, RetailKu",
        text: "The POS product is incredibly fast. We survived the Black Friday flash sale rush with zero lags and zero server downtime. Highly recommended."
      },
      {
        name: "Andi Wijaya",
        role: "Founder, StartupX",
        text: "Their UI/UX team is world-class. Our user acquisition went up by 320% within the first month of deploying the new interface they designed."
      }
    ],
    pricingPlans: [
      {
        name: "MVP Launchpad",
        priceMonthly: "$1,499",
        priceAnnually: "$1,199",
        period: "month",
        description: "Perfect for early-stage startup looking to ship a gorgeous, interactive MVP to the market quickly.",
        features: [
          "Single platform build (Web or Mobile)",
          "Next.js or React Native stack",
          "Full Figma design handover",
          "4 weeks developer team allocation",
          "CI/CD setup to Vercel/Netlify",
          "Direct Slack support channel"
        ],
        ctaText: "Start MVP Build"
      },
      {
        name: "Growth Scale",
        priceMonthly: "$3,499",
        priceAnnually: "$2,999",
        period: "month",
        description: "Designed for established companies scaling up systems, integrating AI, or launching SaaS models.",
        features: [
          "Full SaaS platform engineering",
          "Multi-service backend architecture",
          "Premium responsive UI/UX prototype",
          "8 weeks developer team allocation",
          "Kubernetes & Docker cluster setup",
          "Automated unit & E2E tests",
          "4-hour SLA support response"
        ],
        popular: true,
        ctaText: "Launch Growth Phase"
      },
      {
        name: "Enterprise Custom",
        priceMonthly: "Custom",
        priceAnnually: "Custom",
        period: "year",
        description: "Custom agreements tailored for high-security systems, migrations, and full-stack enterprise platforms.",
        features: [
          "Unlimited systems architecture",
          "Legacy modernization & rewrite",
          "Penetration checks & static scans",
          "Dedicated developer team allocation",
          "On-premise / private cloud configs",
          "Full intellectual property transfer",
          "24/7 priority emergency hotlines"
        ],
        ctaText: "Contact Sales"
      }
    ],
    faqData: [
      {
        question: "How long does a typical software project take from start to finish?",
        answer: "Timeline varies depending on requirements. A typical MVP takes 4-6 weeks to build and launch. Standard SaaS models, microservice architectures, or custom AI integrations usually span between 2 to 4 months.",
        category: "Process & Estimates"
      },
      {
        question: "Do I own the full intellectual property (IP) rights to the software?",
        answer: "Yes, after all payment milestones are settled per contract, the IP rights are fully transferred to you. We hand over the complete source code, repository keys, server configuration files, and Figma layers.",
        category: "Legal & Copyright"
      },
      {
        question: "What support SLA is available post-launch?",
        answer: "Every project includes a free 30-day bug warranty. After that, we offer monthly SLA retainer models spanning automatic backups, server security updates, database tuning, and 24/7 uptime audits.",
        category: "Technical Support"
      },
      {
        question: "Can you integrate the new systems with our legacy corporate databases?",
        answer: "Yes, we have deep expertise building custom secure APIs, webhook managers, syncing legacy systems, or plugging in enterprise ERP suites such as SAP or Oracle using fully encrypted pipelines.",
        category: "Technical & Integration"
      },
      {
        question: "Which cloud hosting platform will host our systems?",
        answer: "We deploy systems to your preferred cloud: Amazon Web Services (AWS), Google Cloud Platform (GCP), Microsoft Azure, Vercel, or local bare metal setups. We configure it using infrastructure-as-code (Terraform) for replicability.",
        category: "DevOps & Cloud"
      }
    ],
    uiText: {
      aboutTitle: "Who We Are",
      aboutSubtitle: "Driving Success Through Digital Craftsmanship",
      aboutDesc: "At Zelixa Tech, we design, engineer, and deploy high-integrity software products that enable growth companies to capture market share. We operate at the intersection of business strategy, human experience design, and cloud scalability.",
      aboutBtn: "Explore Solutions",
      servicesTitle: "Services & Solutions",
      servicesSubtitle: "Our Core Expertise",
      servicesDesc: "High-integrity design and engineering capabilities tailored to propel your company's digital transformation.",
      servicesDocLink: "Read Technical Docs",
      productsTitle: "Product Catalog",
      productsSubtitle: "Our Proprietary Software Suites",
      productsDesc: "Ready-to-deploy, white-label enterprise products designed to instantly solve systemic business bottlenecks.",
      whyTitle: "Why Partner With Us",
      whySubtitle: "Built Different. Engineered Better.",
      whyDesc: "We focus on software standards that drive direct bottom-line indicators: performance speed, data protection, and structural durability.",
      portfolioTitle: "Case Studies",
      portfolioSubtitle: "Our Shipped Deployments",
      portfolioDesc: "Take a look at active software applications we designed, built, and launched into live production systems.",
      portfolioTabs: ['All', 'Web Apps', 'Mobile Apps', 'Cloud & DevOps', 'AI & ML'],
      portfolioDocLink: "Read Architecture Document",
      processTitle: "Development Pipeline",
      processSubtitle: "How We Ship Quality Code",
      processDesc: "A structured, milestones-driven deployment model designed to maintain velocity without sacrificing quality.",
      techTitle: "Technology Stack",
      techSubtitle: "Our Battle-Tested Toolchains",
      techDesc: "We use modern, typed, and highly-optimizable technologies designed to build robust infrastructures.",
      testimonialTitle: "Client Success",
      testimonialSubtitle: "Loved by Founders & Teams",
      testimonialDesc: "Hear from startup leaders and enterprise directors who partnered with Zelixa to launch software.",
      pricingTitle: "Flexible Plans",
      pricingSubtitle: "Predictable Pricing, Zero Lock-in",
      pricingDesc: "Choose a package that fits your current lifecycle. Switch or cancel monthly allocations at any time.",
      faqTitle: "Support Center",
      faqSubtitle: "Frequently Asked Questions",
      faqDesc: "Find immediate answers regarding project timelines, Intellectual Property rights, and software scaling logic.",
      contactTitle: "Get In Touch",
      contactSubtitle: "Initiate Your Digital Upgrade",
      contactDesc: "Ready to scale up your systems? Send us a description of your project and our lead engineer will respond within 24 hours.",
      contactFormName: "Full Name",
      contactFormEmail: "Email Address",
      contactFormBudget: "Project Budget Allocation",
      contactFormMsg: "Project Parameters & Objectives",
      contactFormSubmit: "Submit Project Proposal",
      contactFormSubmitting: "Securing Connection...",
      contactFormSuccessTitle: "Transmission Secured!",
      contactFormSuccessDesc: "Your project details have been successfully routed to our engineering dashboard. We will be in touch shortly.",
      contactFormSuccessBtn: "Send Another Message",
      contactMapTitle: "Office Coordinates",
      footerDesc: "Building the next generation of highly interactive and scalable software solutions for forward-thinking businesses.",
      footerSocials: "Connect With Us",
      footerNewsletterTitle: "Engineering Updates",
      footerNewsletterDesc: "Subscribe to receive our latest insights on Next.js performance, microservices configuration, and tech templates.",
      footerSubscribeBtn: "Subscribe",
      footerCopyright: "All rights reserved. Sudirman CBD, Jakarta, Indonesia.",
      chatTitle: "Zelixa AI Assistant",
      chatStatus: "System Online",
      chatWelcome: "Hello! I'm Zelixa AI Assistant. What information can I fetch for you today?",
      chatPlaceholder: "Type a message..."
    }
  }
};
