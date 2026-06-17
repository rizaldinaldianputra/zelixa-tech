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
        title: 'Zelixa ERP', 
        tag: 'Korporat', 
        desc: 'Pusatkan operasional Anda dengan sistem perencanaan sumber daya modern yang menawarkan intelijen bisnis mendalam.',
        features: ["Isolasi multi-tenant", "Sinkronisasi buku besar real-time", "Prakiraan permintaan bertenaga AI", "Audit kepatuhan otomatis"],
        longDesc: "Zelixa ERP adalah solusi Enterprise Resource Planning komprehensif yang dirancang untuk mengintegrasikan departemen keuangan, manufaktur, SDM, dan inventaris ke dalam satu dasbor pusat. Dilengkapi analitik AI untuk meramalkan kebutuhan stok produk dan mengotomatiskan laporan audit secara real-time.",
        metrics: [
          { value: "400%", label: "Kecepatan Audit" },
          { value: "99.8%", label: "Akurasi Data" },
          { value: "-30%", label: "Biaya Operasional" }
        ],
        techUsed: ["React", "Go (Golang)", "PostgreSQL", "Kafka", "Docker"]
      },
      { 
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
        techUsed: ["Next.js", "PWA / IndexedDB", "Node.js", "Redis", "SQLite"]
      },
      { 
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
        techUsed: ["Next.js", "Python", "FastAPI", "MongoDB", "AWS Lambda"]
      },
      { 
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
        techUsed: ["GraphQL", "React", "Rust Engine", "Elasticsearch", "Kubernetes"]
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
        title: "Aether - Dasbor Likuiditas Kripto",
        category: "Aplikasi Web",
        desc: "Dasbor pelacakan keuangan yang menampilkan grafik transaksi langsung, integrasi API dompet kripto, dan socket streaming harga.",
        image: "/portfolio_mockup.png",
        liveLink: "#",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "WebSockets"],
        featured: true
      },
      {
        title: "Zenith - Platform Logistik Cerdas",
        category: "Aplikasi Mobile",
        desc: "Aplikasi mobile lintas platform untuk optimasi rute kurir, pemetaan real-time, dan verifikasi tanda terima pengiriman digital.",
        image: "/portfolio_mockup.png",
        liveLink: "#",
        techStack: ["React Native", "Expo", "FastAPI", "Google Maps"]
      },
      {
        title: "Nimbus - Orkestrator Multi-cloud",
        category: "Cloud & DevOps",
        desc: "Platform SaaS perusahaan untuk mengonfigurasi, membangun, dan menyebarkan cluster multi-cloud dengan antarmuka seret & lepas.",
        image: "/portfolio_mockup.png",
        liveLink: "#",
        techStack: ["Go (Golang)", "Kubernetes", "Docker", "Terraform"]
      },
      {
        title: "Iris - Pengurai Faktur Bertenaga AI",
        category: "AI & ML",
        desc: "Model otomatisasi OCR yang mengekstrak data tabel faktur dari lembar pindaian kompleks dan mengonversinya menjadi data transaksi database.",
        image: "/portfolio_mockup.png",
        liveLink: "#",
        techStack: ["Python", "PyTorch", "FastAPI", "OpenAI APIs"]
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
        name: "Budi Santoso", 
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
        techUsed: ["React", "Go (Golang)", "PostgreSQL", "Kafka", "Docker"]
      },
      { 
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
        techUsed: ["Next.js", "PWA / IndexedDB", "Node.js", "Redis", "SQLite"]
      },
      { 
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
        techUsed: ["Next.js", "Python", "FastAPI", "MongoDB", "AWS Lambda"]
      },
      { 
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
        techUsed: ["GraphQL", "React", "Rust Engine", "Elasticsearch", "Kubernetes"]
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
        title: "Aether - Crypto Liquidity Dashboard",
        category: "Web Apps",
        desc: "A financial tracking dashboard showcasing live trade charts, wallet API integrations, and sub-second price socket streaming.",
        image: "/portfolio_mockup.png",
        liveLink: "#",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "WebSockets"],
        featured: true
      },
      {
        title: "Zenith - Smart Logistics Platform",
        category: "Mobile Apps",
        desc: "A cross-platform mobile application enabling local driver dispatch optimization, real-time map routing, and delivery verification.",
        image: "/portfolio_mockup.png",
        liveLink: "#",
        techStack: ["React Native", "Expo", "FastAPI", "Google Maps"]
      },
      {
        title: "Nimbus - Multi-cloud Orchestrator",
        category: "Cloud & DevOps",
        desc: "An enterprise SaaS platform allowing devs to configure, build, and deploy multi-cloud clusters with drag-and-drop ease.",
        image: "/portfolio_mockup.png",
        liveLink: "#",
        techStack: ["Go (Golang)", "Kubernetes", "Docker", "Terraform"]
      },
      {
        title: "Iris - AI-Powered Invoice Parser",
        category: "AI & ML",
        desc: "An automated OCR model extracting tabular ledger lines from complex scan sheets and converting them to database transactions.",
        image: "/portfolio_mockup.png",
        liveLink: "#",
        techStack: ["Python", "PyTorch", "FastAPI", "OpenAI APIs"]
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
        name: "Budi Santoso", 
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
