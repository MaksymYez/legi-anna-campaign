export const PHONE = "+995 577 12 09 18";
export const PHONE_HREF = "+995577120918";

export const MAIN_SITE = "https://legi.ge";

// Campaign discount applied on top of the regular legi.ge price list.
export const DISCOUNT = 0.1;

/** Regular price → campaign price, formatted like "37.35" / "36.00". */
export function discounted(regular: number): string {
  return formatPrice(regular * (1 - DISCOUNT));
}

export function formatPrice(n: number): string {
  return n.toFixed(2);
}

/**
 * Photos. Leave `src` as null to show a labelled placeholder; drop the real
 * file into /public/photos/ and set the path (e.g. "/photos/before-1.webp").
 */
export type Photo = { src: string | null; alt: string };

export const t = {
  slogan: "ვქმნით ხარისხს!",
  nav: {
    result: "შედეგი",
    firepit: "ცეცხლის კერა",
    products: "ფილები",
    pricing: "ფასები",
    contact: "კონტაქტი",
    cta: "შეკვეთა",
    mainSite: "მთავარი საიტი",
  },
  hero: {
    badge: "სპეციალური შეთავაზება",
    eyebrow: "ანა ტყებუჩავა × LEGI",
    title: "ანას ახალი ეზო",
    subtitle: "ახალი ქალაქი, მიქსი და Grande — კაპუჩინოს ფერში",
    lead: "ანა ტყებუჩავამ ეზო LEGI-ს ფილებით განაახლა და ცეცხლის კერაც მოაწყო. იგივე ფილები ახლა შენთვის 10%-იანი ფასდაკლებით — შეზღუდული დროით.",
    ctaPrimary: "მიიღე ფასდაკლება",
    ctaSecondary: "ნახე ფასები",
    discountChip: "ფასდაკლება",
    photo: {
      src: "/photos/ana-path.webp",
      alt: "ანა ტყებუჩავა თავის ეზოში, LEGI-ს კაპუჩინოს ფერის ფილების ბილიკზე",
    } as Photo,
    photoCaption: "ანა ტყებუჩავას ეზო · კაპუჩინო",
  },
  transformation: {
    eyebrow: "მანამდე და შემდეგ",
    title: "როგორ შეიცვალა ეზო",
    text: "გადაწიე ზოლი და ნახე სხვაობა — ერთი და იგივე ეზო, სანამ LEGI-ს ფილებს დავაგებდით და მის შემდეგ.",
    before: "მანამდე",
    after: "შემდეგ",
    pairs: [
      {
        label: "ბილიკი",
        before: { src: "/photos/path-before.webp", alt: "ბილიკი სახლის წინ დაგებამდე" } as Photo,
        after: { src: "/photos/path-after.webp", alt: "ბილიკი LEGI-ს ფილებითა და თეთრი ხრეშით" } as Photo,
      },
      {
        label: "სახლის წინ",
        before: { src: "/photos/house-before.webp", alt: "სახლის წინა ეზო დაგებამდე" } as Photo,
        after: { src: "/photos/house-after.webp", alt: "სახლის წინა ეზო LEGI-ს ფილებით" } as Photo,
      },
      {
        label: "ეზო",
        before: { src: "/photos/yard-before.webp", alt: "ეზო დაგებამდე" } as Photo,
        after: { src: "/photos/yard-after.webp", alt: "ეზო LEGI-ს ფილებით" } as Photo,
      },
      {
        label: "ტერასა",
        before: { src: "/photos/terrace-before.webp", alt: "ტერასა დაგებამდე" } as Photo,
        after: { src: "/photos/terrace-after.webp", alt: "ტერასა LEGI-ს ფილებით" } as Photo,
      },
      {
        label: "ტერასის ხედი",
        before: { src: "/photos/terrace-view-before.webp", alt: "ხედი ტერასიდან დაგებამდე" } as Photo,
        after: { src: "/photos/terrace-view-after.webp", alt: "ხედი ტერასიდან LEGI-ს ფილებით" } as Photo,
      },
    ],
  },
  gallery: {
    eyebrow: "ანა ეზოში",
    title: "ანა თავის ახალ ეზოში",
    text: "ბილიკი, ტერასა და საღამოს მზე — ასე გამოიყურება ეზო, როცა ფილები უკვე დაგებულია.",
    photos: [
      { src: "/photos/ana-terrace.webp", alt: "ანა ტყებუჩავა ტერასაზე, წინ LEGI-ს ფილების ბილიკი", position: "50% 35%", landscape: false },
      { src: "/photos/ana-selfie.webp", alt: "ანა ტყებუჩავას სელფი ეზოში, უკან ახალი ბილიკი", position: "50% 30%", landscape: false },
      { src: "/photos/ana-firepit-aerial.webp", alt: "ცეცხლის კერის მოედანი და ბილიკი ზემოდან, მთების ფონზე", position: "50% 60%", landscape: false },
      { src: "/photos/ana-terrace-seating.webp", alt: "ტერასის სავარძლები და მაგიდა LEGI-ს ფილებზე", position: "50% 50%", landscape: true },
      { src: "/photos/ana-terrace-table.webp", alt: "მაგიდა ვაშლებით ტერასაზე, უკან დაგებული ფილები", position: "50% 50%", landscape: true },
      { src: "/photos/ana-house-path.webp", alt: "სახლის შესასვლელი და ბილიკი LEGI-ს ფილებით", position: "50% 50%", landscape: true },
    ] as (Photo & { position: string; landscape: boolean })[],
  },
  firepit: {
    eyebrow: "ცეცხლის კერა",
    title: "საღამოები კერის გარშემო",
    text: "ეზოს განახლებასთან ერთად ანამ ცეცხლის კერაც მოაწყო. LEGI-ს კერა იგივე ფილებით იწყობა, რომლითაც ბილიკი და ტერასაა დაგებული — ერთი მასალა, ერთი სტილი, მთელ ეზოში.",
    photos: [
      { src: "/photos/ana-firepit.webp", alt: "ანას ცეცხლის კერა LEGI-ს ფილებით მოპირკეთებულ მოედანზე", caption: "ანას ცეცხლის კერა" },
      { src: "/photos/ana-firepit-wide.webp", alt: "ცეცხლის კერის მოედანი და ბილიკი ეზოში", caption: "მოედანი და ბილიკი" },
    ] as (Photo & { caption: string })[],
    points: [
      {
        title: "ბეტონი არ იწვის",
        text: "ბეტონის ფილა ცეცხლის კერის გარშემო უსაფრთხო, არაწვადი საფარია.",
      },
      {
        title: "ადვილი მოვლა",
        text: "ნაცარი და ნახშირის კვალი ფილიდან უბრალოდ ირეცხება.",
      },
      {
        title: "ერთიანი ხედი",
        text: "კერა, ბილიკი და ტერასა ერთი ფერის ფილით — ეზო ერთ მთლიანობად იკითხება.",
      },
    ],
    price: {
      regular: 1990,
      campaign: 1300,
      unit: "₾",
      regularLabel: "ჩვეულებრივი ფასი",
      campaignLabel: "აქციის ფასი",
      save: "დაზოგე",
      limited: "შეზღუდული დროით",
      includes: "ფასში შედის ლითონის და ბეტონის ნაწილები — სრული კომპლექტი.",
      cta: "შეუკვეთე კერა",
    },
    cta: "მინდა ასეთი ეზო",
  },
  pricing: {
    eyebrow: "ფასები",
    title: "ფილები ანას ეზოდან — 10%-ით იაფად",
    text: "ანას ეზოში სამი სახის კაპუჩინოს ფერის ფილაა გამოყენებული. სამივეზე მოქმედებს 10%-იანი ფასდაკლება.",
    promoNote: "−10% ფასდაკლება ანას ეზოს ფილებზე — აქცია მოქმედებს შეზღუდული დროით.",
    regular: "ჩვეულებრივი ფასი",
    campaign: "აქციის ფასი",
    unit: "₾ / მ²",
    save: "დაზოგე",
    cta: "შეუკვეთე",
    note: "ფასები მითითებულია კვადრატულ მეტრზე (მ²), დღგ-ს ჩათვლით. ფასდაკლება ვრცელდება მხოლოდ ამ გვერდზე ნაჩვენებ ფილებზე.",
    products: [
      {
        name: "ახალი ქალაქი",
        color: "კაპუჩინო",
        spec: "60 მმ · 150×150, 300×150, 300×300 მმ",
        text: "გლუვი ზედაპირი და დახვეწილი ფორმა — იდეალურია ეზოსა და სავალი გზისთვის.",
        regular: 41.5,
        photo: { src: "/photos/new-city-cappuccino.webp", alt: "ახალი ქალაქი — კაპუჩინო" } as Photo,
      },
      {
        name: "მიქსი",
        color: "კაპუჩინო",
        spec: "40 მმ · 4 ზომის კომბინაცია",
        text: "ოთხი სხვადასხვა ზომის ფილა — ცოცხალი, მრავალფეროვანი ნახატი ერთფეროვნების გარეშე.",
        regular: 33,
        photo: { src: "/photos/mix-40-cappuccino.webp", alt: "მიქსი 40 მმ — კაპუჩინო" } as Photo,
      },
      {
        name: "Grande",
        color: "კაპუჩინო",
        spec: "80 მმ · 800×400 მმ",
        text: "მსხვილფორმატიანი ფილა მინიმალური ნაკერით — თანამედროვე, სუფთა ვიზუალი.",
        regular: 48,
        photo: { src: "/photos/grande-cappuccino.webp", alt: "Grande — კაპუჩინო" } as Photo,
      },
    ],
  },
  form: {
    eyebrow: "შეკვეთა",
    title: "დაჯავშნე 10%-იანი ფასდაკლება",
    text: "შეავსე ფორმა და ჩვენი გუნდი დაგიკავშირდება 24 საათში — გავთვლით საჭირო რაოდენობას და მოგცემთ ზუსტ ფასს აქციის ფასდაკლებით.",
    name: "სახელი და გვარი",
    phone: "ტელეფონი",
    submit: "გაგზავნა",
    submitting: "იგზავნება...",
    success: "მადლობა! მალე დაგიკავშირდებით.",
    error: "დაფიქსირდა შეცდომა. გთხოვ სცადე თავიდან ან დაგვირეკე.",
    again: "ახალი მოთხოვნა",
    privacy: "გაგზავნით თქვენ ეთანხმებით კონფიდენციალურობის პოლიტიკას.",
    callUs: "ან დაგვირეკე",
  },
  footer: {
    tagline: "ბეტონის ფილა და ბორდიური ევროპული სტანდარტით — 2010 წლიდან.",
    locations: "მისამართები",
    locationList: ["თბილისი", "ქობულეთი", "თერჯოლა"],
    follow: "გამოგვყევი",
    rights: "ყველა უფლება დაცულია.",
    productLine: "ანა ტყებუჩავა × LEGI",
    mainSite: "გადადი მთავარ საიტზე",
    mainSiteText: "ნახე LEGI-ს სრული კატალოგი — ფილები, ბორდიურები და სხვა.",
  },
};
