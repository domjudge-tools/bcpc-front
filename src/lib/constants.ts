// ─── Site Identity ─────────────────────────────────────────────────────────
export const SITE_NAME = "مسابقه برنامه‌نویسی دانشگاه بیرجند";
export const SITE_SHORT_NAME = "BCPC";
export const SITE_YEAR = "2026";
export const SITE_UNIVERSITY = "دانشگاه بیرجند";
export const SITE_DESCRIPTION =
  "رقابت برنامه‌نویسی دانشجویی دانشگاه بیرجند؛ جایی برای رقابت، حل مسئله و محک زدن مهارت‌های برنامه‌نویسی";

// ─── Contest Date ────────────────────────────────────────────────────────────
export const CONTEST_DATE = new Date("2026-11-15T09:00:00");
export const CONTEST_DATE_PERSIAN = "۱۵ آبان ۱۴۰۵";
export const CONTEST_LOCATION = "دانشگاه بیرجند · دانشکده فنی و مهندسی";

// ─── Hero Section ───────────────────────────────────────────────────────────
export const HERO_BADGE = "ICPC Regional · University of Birjand";
export const HERO_EYEBROW = "پنجمین دوره مسابقه";
export const HERO_TITLE_LINE1 = "مسابقه برنامه‌نویسی";
export const HERO_TITLE_ACCENT = "بیرجند";
export const HERO_SUBTITLE =
  "سه نفر، یک کامپیوتر و پنج ساعت زمان. آماده‌اید مهارت‌تان را به چالش بکشید و ببینید در رقابت با بهترین تیم‌ها چه نتیجه‌ای می‌گیرید؟";
export const COUNTDOWN_LABEL = "تا شروع مسابقه";

// ─── CTAs ────────────────────────────────────────────────────────────────────
export const CTA_REGISTER = "ثبت‌نام در مسابقه";
export const CTA_REGISTER_SHORT = "ثبت‌نام";
export const CTA_ABOUT = "درباره BCPC";
export const CTA_LEARN_MORE = "بیشتر بدانید";

// ─── Navigation Links ────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { href: "/", label: "خانه" },
  { href: "/about", label: "درباره مسابقه" },
  { href: "/gallery", label: "گالری" },
  { href: "/contact", label: "تماس با ما" },
] as const;

// ─── Stats ───────────────────────────────────────────────────────────────────
export const STATS = [
  { label: "تیم شرکت‌کننده", value: 48, suffix: "+" },
  { label: "مسئله مسابقه", value: 12, suffix: "" },
  { label: "دانشگاه شرکت‌کننده", value: 8, suffix: "" },
  { label: "دوره مسابقه", value: 5, suffix: "" },
] as const;

// ─── Highlights ─────────────────────────────────────────────────────────────
export const HIGHLIGHTS = [
  {
    title: "یک رقابت تیمی واقعی",
    description:
      "در تیم‌های سه‌نفره کنار هم‌تیمی‌هایتان فکر کنید، راه‌حل پیدا کنید و برای رسیدن به رتبه‌های برتر رقابت کنید.",
    icon: "Users",
  },
  {
    title: "رقابت برای برد",
    description:
      "تیم‌های برتر علاوه بر کسب رتبه، جوایز نقدی و لوح تقدیر دریافت می‌کنند.",
    icon: "Trophy",
  },
  {
    title: "آشنایی با آدم‌های هم‌مسیر",
    description:
      "با دانشجویان، برنامه‌نویسان و علاقه‌مندان دنیای رقابتی برنامه‌نویسی آشنا شوید و ارتباط‌های جدید بسازید.",
    icon: "Network",
  },
] as const;

// ─── Contest Format ──────────────────────────────────────────────────────────
export const CONTEST_FORMAT = [
  {
    title: "تیم‌های ۳ نفره",
    description:
      "هر تیم از سه دانشجو تشکیل می‌شود. موفقیت در مسابقه فقط به کدنویسی خوب بستگی ندارد؛ همکاری و مدیریت درست زمان هم مهم است.",
    icon: "Users",
  },
  {
    title: "یک کامپیوتر برای هر تیم",
    description:
      "هر سه عضو تیم باید مسئله‌ها را با یک کامپیوتر حل کنند؛ درست مثل مسابقات رسمی ICPC.",
    icon: "Monitor",
  },
  {
    title: "۵ ساعت رقابت",
    description:
      "پنج ساعت فرصت دارید تا در میان مجموعه‌ای از مسئله‌های متنوع و چالش‌برانگیز، هر تعداد مسئله که می‌توانید حل کنید.",
    icon: "Clock",
  },
  {
    title: "داوری لحظه‌ای",
    description:
      "راه‌حل را ارسال کنید و نتیجه را سریع ببینید. سیستم داوری به‌صورت خودکار مشخص می‌کند که پاسخ شما پذیرفته شده یا نه.",
    icon: "Zap",
  },
] as const;

// ─── What is ICPC Section ────────────────────────────────────────────────────
export const ICPC_SECTION_EYEBROW = "آشنایی با ICPC";
export const ICPC_SECTION_TITLE = "ICPC چیست؟";

export const ICPC_PARAGRAPHS = [
  "ICPC (International Collegiate Programming Contest) یکی از معتبرترین و شناخته‌شده‌ترین مسابقات برنامه‌نویسی دانشجویی در جهان است. این مسابقه بیش از ۵۰ سال است که برگزار می‌شود و هر سال دانشجوهایی از دانشگاه‌های سراسر دنیا در آن با یکدیگر رقابت می‌کنند.",
  "BCPC با هدف ایجاد تجربه‌ای نزدیک به فضای مسابقات ICPC در دانشگاه بیرجند برگزار می‌شود. تیم‌های برتر این رقابت می‌توانند مسیر خود را برای حضور در مراحل بالاتر مسابقات ICPC ادامه دهند.",
] as const;

export const ICPC_HIGHLIGHTS = [
  { icon: "Globe2", text: "رقابت دانشجویان از بیش از ۱۰۰ کشور" },
  { icon: "CalendarDays", text: "بیش از ۵۰ سال سابقه برگزاری" },
  { icon: "Star", text: "یکی از معتبرترین مسابقات برنامه‌نویسی دانشجویی جهان" },
] as const;

export const ICPC_PIPELINE = [
  {
    step: "01",
    label: "BCPC",
    sublabel: "مرحله محلی · دانشگاه بیرجند",
    isCurrent: true,
  },
  {
    step: "02",
    label: "ICPC Regional",
    sublabel: "مرحله منطقه‌ای · ایران",
    isCurrent: false,
  },
  {
    step: "03",
    label: "World Finals",
    sublabel: "مرحله جهانی · ICPC",
    isCurrent: false,
  },
] as const;

// ─── Timeline Section ────────────────────────────────────────────────────────
export const TIMELINE_SECTION_EYEBROW = "تقویم مسابقه";
export const TIMELINE_SECTION_TITLE = "تا روز مسابقه چه مراحلی داریم؟";
export const TIMELINE_SECTION_SUBTITLE =
  "از ثبت‌نام تا روز مسابقه، مسیر پیش رو را قدم‌به‌قدم ببینید.";

// ─── Timeline ────────────────────────────────────────────────────────────────
export const TIMELINE = [
  {
    phase: "ثبت‌نام تیم‌ها",
    date: "مهر ۱۴۰۵",
    description:
      "تیم سه‌نفره‌تان را تشکیل دهید و اطلاعات اعضای تیم را ثبت کنید. ظرفیت ثبت‌نام محدود است.",
    icon: "ClipboardList",
    status: "upcoming" as const,
  },
  {
    phase: "سشن تمرینی",
    date: "اوایل آبان ۱۴۰۵",
    description:
      "قبل از مسابقه اصلی، در یک جلسه تمرینی با محیط مسابقه، سیستم داوری و نحوه حل و ارسال مسئله‌ها آشنا شوید.",
    icon: "Code2",
    status: "upcoming" as const,
  },
  {
    phase: "روز مسابقه",
    date: CONTEST_DATE_PERSIAN,
    description:
      "پنج ساعت فرصت دارید تا با یک کامپیوتر، ۱۲ مسئله را حل کنید و برای رسیدن به رتبه‌های برتر بجنگید.",
    icon: "Trophy",
    status: "upcoming" as const,
  },
  {
    phase: "اعلام نتایج و اختتامیه",
    date: CONTEST_DATE_PERSIAN,
    description:
      "در پایان، نتایج اعلام می‌شود و از تیم‌های برتر با اهدای جوایز و لوح تقدیر تقدیر خواهد شد.",
    icon: "Award",
    status: "upcoming" as const,
  },
] as const;

// ─── Prizes ──────────────────────────────────────────────────────────────────
export const PRIZES = [
  {
    rank: 2,
    title: "مقام دوم",
    medal: "🥈",
    reward: "جایزه نقدی + لوح تقدیر",
    variant: "silver" as const,
  },
  {
    rank: 1,
    title: "مقام اول",
    medal: "🥇",
    reward: "جایزه نقدی + لوح تقدیر + معرفی به مرحله ملی",
    variant: "gold" as const,
  },
  {
    rank: 3,
    title: "مقام سوم",
    medal: "🥉",
    reward: "جایزه نقدی + لوح تقدیر",
    variant: "bronze" as const,
  },
] as const;

// ─── FAQ ─────────────────────────────────────────────────────────────────────
export const FAQ_ITEMS = [
  {
    question: "چه کسانی می‌توانند در مسابقه شرکت کنند؟",
    answer:
      "تمام دانشجویان مقطع کارشناسی و کارشناسی ارشد دانشگاه بیرجند می‌توانند در BCPC شرکت کنند. برای شرکت در مسابقه محدودیت سنی یا شرط معدل وجود ندارد.",
  },
  {
    question: "چطور یک تیم تشکیل دهیم؟",
    answer:
      "هر تیم باید دقیقاً سه عضو داشته باشد و اعضای تیم باید از یک دانشگاه باشند. ثبت‌نام به‌صورت انفرادی یا با تیم‌های کمتر از سه نفر امکان‌پذیر نیست.",
  },
  {
    question: "چه زبان‌های برنامه‌نویسی پشتیبانی می‌شوند؟",
    answer:
      "زبان‌های C، C++17 و Java پشتیبانی می‌شوند. در برخی مسائل امکان استفاده از Python نیز وجود دارد. برای نوشتن کد می‌توانید از هر IDE یا ویرایشگر متنی نصب‌شده روی سیستم مسابقه استفاده کنید.",
  },
  {
    question: "آیا در طول مسابقه به اینترنت دسترسی داریم؟",
    answer:
      "خیر. در طول مسابقه دسترسی به اینترنت مجاز نیست. هر تیم می‌تواند یک دفترچه یادداشت فیزیکی حداکثر ۲۵ صفحه‌ای همراه خود داشته باشد.",
  },
  {
    question: "مسابقه حضوری است یا آنلاین؟",
    answer:
      "BCPC به‌صورت کاملاً حضوری و در دانشگاه بیرجند برگزار می‌شود. حضور هر سه عضو تیم در محل مسابقه الزامی است.",
  },
  {
    question: "رتبه‌بندی تیم‌ها چگونه انجام می‌شود؟",
    answer:
      "تیم‌ها ابتدا بر اساس تعداد مسئله‌های حل‌شده رتبه‌بندی می‌شوند. اگر تعداد مسئله‌های حل‌شده برابر باشد، تیمی که زمان کمتری داشته باشد رتبه بالاتری می‌گیرد. برای هر ارسال نادرست نیز ۲۰ دقیقه جریمه زمانی در نظر گرفته می‌شود.",
  },
] as const;

// ─── Sponsors ────────────────────────────────────────────────────────────────
export const SPONSORS = [
  {
    name: "دانشگاه بیرجند",
    tagline: "",
    tier: "gold" as const,
  },
  {
    name: "انجمن علمی مهندسی کامپیوتر دانشگاه بیرجند",
    tagline: "",
    tier: "platinum" as const,
  },
  {
    name: "دانشکده مهندسی کامپیوتر",
    tagline: "",
    tier: "silver" as const,
  },
] as const;

export const SPONSORS_SECTION_EYEBROW = "حامیان مسابقه";
export const SPONSORS_SECTION_TITLE = "با حمایت همراهان BCPC";
export const SPONSORS_SECTION_SUBTITLE =
  "برگزاری BCPC با همراهی دانشگاه و مجموعه‌هایی انجام می‌شود که از رشد برنامه‌نویسی و رقابت‌های دانشجویی حمایت می‌کنند.";

export const SPONSORS_TIER_LABELS = {
  platinum: "platinum",
  gold: "gold",
  silver: "silver",
} as const;

export const SPONSORS_BECOME_TEXT = "حامی BCPC شوید";
export const SPONSORS_BECOME_HREF = "/contact";

// ─── Footer ──────────────────────────────────────────────────────────────────
export const FOOTER_LINKS = [
  {
    title: "مسابقه",
    links: [
      { href: "/about", label: "درباره BCPC" },
      { href: "/register", label: "ثبت‌نام" },
      { href: "/gallery", label: "گالری" },
    ],
  },
  {
    title: "راهنما",
    links: [
      { href: "/contact", label: "تماس با ما" },
      { href: "/login", label: "ورود به سامانه مسابقه" },
    ],
  },
] as const;

export const FOOTER_COPYRIGHT = `تمامی حقوق محفوظ است · BCPC ${SITE_YEAR} · دانشگاه بیرجند`;
export const FOOTER_TAGLINE = "رقابت برنامه‌نویسی دانشجویی دانشگاه بیرجند";
export const FOOTER_BACK_TO_TOP = "بازگشت به بالا";
export const FOOTER_SOCIAL_ARIA = "شبکه‌های اجتماعی";
export const FOOTER_SOCIAL = [
  { href: "#", label: "اینستاگرام", icon: "Globe2" },
  { href: "#", label: "تلگرام", icon: "MessageCircle" },
  { href: "#", label: "گیت‌هاب", icon: "Code2" },
] as const;

// ─── Hero — Countdown time-unit labels ──────────────────────────────────────
export const TIME_UNIT_LABELS = {
  days: "روز",
  hours: "ساعت",
  minutes: "دقیقه",
  seconds: "ثانیه",
} as const;

export const SCROLL_INDICATOR_TEXT = "برای ادامه اسکرول کنید";

// ─── Stats Section ───────────────────────────────────────────────────────────
export const STATS_SECTION_ARIA = "آمار مسابقه";

// ─── What is ICPC — extra strings ───────────────────────────────────────────
export const ICPC_HIGHLIGHTS_ARIA = "درباره ICPC";
export const ICPC_PIPELINE_ARIA = "مسیر مسابقات ICPC";
export const ICPC_PIPELINE_HEADER = "// مسیر پیشرفت";
export const ICPC_PIPELINE_YOU_HERE = "شما اینجا هستید";
export const ICPC_PIPELINE_NOTE =
  "تیم‌های برتر هر مرحله می‌توانند به مرحله بعد راه پیدا کنند";

// ─── Contest Format Section ──────────────────────────────────────────────────
export const FORMAT_SECTION_EYEBROW = "ساختار مسابقه";
export const FORMAT_SECTION_TITLE_PREFIX = "با حال‌وهوای";
export const FORMAT_SECTION_TITLE_ACCENT = "ICPC جهانی";
export const FORMAT_SECTION_SUBTITLE =
  "BCPC با الهام از فرمت مسابقات بین‌المللی ICPC برگزار می‌شود تا تجربه‌ای واقعی از یک رقابت برنامه‌نویسی تیمی را در دانشگاه بیرجند تجربه کنید.";

export const FORMAT_SECTION_NOTE =
  "مسابقه BCPC زیر نظر انجمن علمی دانشجویی دانشگاه بیرجند و بر اساس استانداردهای مسابقات ICPC برگزار می‌شود";

// ─── Highlights Section ──────────────────────────────────────────────────────
export const HIGHLIGHTS_SECTION_EYEBROW = "چرا BCPC؟";
export const HIGHLIGHTS_SECTION_TITLE = "چرا باید در BCPC شرکت کنید؟";
export const HIGHLIGHTS_SECTION_SUBTITLE =
  "اینجا فقط قرار نیست کد بزنید؛ قرار است رقابت کنید، مسئله حل کنید و تجربه‌ای متفاوت از برنامه‌نویسی تیمی داشته باشید.";

export const HIGHLIGHTS_SECTION_LINK = "آشنایی بیشتر با مسابقه";

// ─── Timeline Section ────────────────────────────────────────────────────────
export const TIMELINE_SECTION_OL_ARIA = "مراحل برگزاری مسابقه";

// ─── Header / Navigation ─────────────────────────────────────────────────────
export const HEADER_LOGO_LETTER = "B";
export const HEADER_LOGO_ARIA = `${SITE_SHORT_NAME} — صفحه اصلی`;
export const NAV_DESKTOP_ARIA = "ناوبری اصلی";
export const NAV_MOBILE_ARIA = "منوی موبایل";
export const MOBILE_MENU_OPEN_ARIA = "باز کردن منو";
export const MOBILE_MENU_CLOSE_ARIA = "بستن منو";

// ─── Prizes Section ──────────────────────────────────────────────────────────
export const PRIZES_SECTION_EYEBROW = "جوایز مسابقه";
export const PRIZES_SECTION_TITLE = "برای بهترین‌ها";
export const PRIZES_SECTION_SUBTITLE =
  "تیم‌های برتر علاوه بر دریافت جوایز نقدی و لوح تقدیر، فرصت ادامه مسیر در مراحل بالاتر مسابقات ICPC را هم خواهند داشت.";

export const PRIZES_RANK_LABEL = "مقام";
export const PRIZES_ARIA = "جوایز مسابقه";

// ─── FAQ Section ─────────────────────────────────────────────────────────────
export const FAQ_SECTION_EYEBROW = "سؤالات متداول";
export const FAQ_SECTION_TITLE = "سؤالات شما، پاسخ‌های ما";
export const FAQ_SECTION_SUBTITLE =
  "پاسخ سؤال‌تان را پیدا نکردید؟ از طریق صفحه تماس با ما با تیم برگزارکننده در ارتباط باشید.";

export const FAQ_OPEN_ARIA = "نمایش پاسخ";
export const FAQ_CLOSE_ARIA = "بستن پاسخ";
export const FAQ_CONTACT_LINK = "/contact";
export const FAQ_CONTACT_TEXT = "تماس با ما";
export const FAQ_BOTTOM_NOTE = "آماده رقابتید؟ جای شما بین تیم‌ها خالی است.";
