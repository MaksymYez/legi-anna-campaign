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
 * file into /public/photos/ and set the path. File names follow the SEO
 * pattern brand + product + subject, e.g. "/photos/legi-cappuccino-pavers-terrace-after.webp".
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
      src: "/photos/legi-cappuccino-pavers-ana-tkebuchava-path.webp",
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
        before: { src: "/photos/legi-pavers-garden-path-before.webp", alt: "ბილიკი სახლის წინ დაგებამდე" } as Photo,
        after: { src: "/photos/legi-cappuccino-pavers-garden-path-after.webp", alt: "ბილიკი LEGI-ს ფილებითა და თეთრი ხრეშით" } as Photo,
      },
      {
        label: "სახლის წინ",
        before: { src: "/photos/legi-pavers-front-yard-before.webp", alt: "სახლის წინა ეზო დაგებამდე" } as Photo,
        after: { src: "/photos/legi-cappuccino-pavers-front-yard-after.webp", alt: "სახლის წინა ეზო LEGI-ს ფილებით" } as Photo,
      },
      {
        label: "ეზო",
        before: { src: "/photos/legi-pavers-backyard-before.webp", alt: "ეზო დაგებამდე" } as Photo,
        after: { src: "/photos/legi-cappuccino-pavers-backyard-after.webp", alt: "ეზო LEGI-ს ფილებით" } as Photo,
      },
      {
        label: "ტერასა",
        before: { src: "/photos/legi-pavers-terrace-before.webp", alt: "ტერასა დაგებამდე" } as Photo,
        after: { src: "/photos/legi-cappuccino-pavers-terrace-after.webp", alt: "ტერასა LEGI-ს ფილებით" } as Photo,
      },
      {
        label: "ტერასის ხედი",
        before: { src: "/photos/legi-pavers-terrace-view-before.webp", alt: "ხედი ტერასიდან დაგებამდე" } as Photo,
        after: { src: "/photos/legi-cappuccino-pavers-terrace-view-after.webp", alt: "ხედი ტერასიდან LEGI-ს ფილებით" } as Photo,
      },
    ],
  },
  gallery: {
    eyebrow: "ანა ეზოში",
    title: "ანა თავის ახალ ეზოში",
    text: "ბილიკი, ტერასა და საღამოს მზე — ასე გამოიყურება ეზო, როცა ფილები უკვე დაგებულია.",
    photos: [
      { src: "/photos/legi-cappuccino-pavers-ana-tkebuchava-terrace.webp", alt: "ანა ტყებუჩავა ტერასაზე, წინ LEGI-ს ფილების ბილიკი", position: "50% 35%", landscape: false },
      { src: "/photos/legi-cappuccino-pavers-ana-tkebuchava-selfie.webp", alt: "ანა ტყებუჩავას სელფი ეზოში, უკან ახალი ბილიკი", position: "50% 30%", landscape: false },
      { src: "/photos/legi-fire-pit-cappuccino-pavers-chair.webp", alt: "ცეცხლის კერა სავარძლით და შეშის კალათით, უკან სახლი", position: "50% 60%", landscape: false },
      { src: "/photos/legi-cappuccino-pavers-terrace-seating.webp", alt: "ტერასის სავარძლები და მაგიდა LEGI-ს ფილებზე", position: "50% 50%", landscape: true },
      { src: "/photos/legi-cappuccino-pavers-terrace-table.webp", alt: "მაგიდა ვაშლებით ტერასაზე, უკან დაგებული ფილები", position: "50% 50%", landscape: true },
      { src: "/photos/legi-cappuccino-pavers-house-entrance-path.webp", alt: "სახლის შესასვლელი და ბილიკი LEGI-ს ფილებით", position: "50% 50%", landscape: true },
    ] as (Photo & { position: string; landscape: boolean })[],
  },
  firepit: {
    eyebrow: "ცეცხლის კერა",
    title: "საღამოები კერის გარშემო",
    text: "ეზოს განახლებასთან ერთად ანამ ცეცხლის კერაც მოაწყო. LEGI-ს კერა იგივე ფილებით იწყობა, რომლითაც ბილიკი და ტერასაა დაგებული — ერთი მასალა, ერთი სტილი, მთელ ეზოში.",
    photos: [
      { src: "/photos/legi-fire-pit-cappuccino-pavers-aerial-view.webp", alt: "ანას ცეცხლის კერის მოედანი და ბილიკი ზემოდან, გაზონსა და მთების ფონზე", caption: "ანას ცეცხლის კერა · ხედი ზემოდან", position: "50% 50%" },
      { src: "/photos/legi-fire-pit-cappuccino-pavers-closeup.webp", alt: "ცეცხლის კერა ახლოდან — სავარძლები, ფარანი და შეშის კალათა", caption: "კერა ახლოდან", position: "50% 80%" },
    ] as (Photo & { caption: string; position: string })[],
    points: [
      {
        title: "ბეტონი არის ცეცხლგამძლე",
        text: "ფილები არის ცეცხლგამძლე და უძლებს მაღალ გრადუსს.",
      },
      {
        title: "როგორ მოვუაროთ",
        text: "წყლის ნაკადით შესაძლებელია დაბინძურებული ადგილების მორეცხვა — არ სჭირდება ზედმეტი ძალისხმევა.",
      },
      {
        title: "ვიზუალი",
        text: "ბილიკის, ტერასისა და ბუხრის ერთ ტონში შეხამება გვაძლევს ლამაზ და დახვეწილ ვიზუალს.",
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
        photo: { src: "/photos/legi-new-city-paver-cappuccino-60mm.webp", alt: "ახალი ქალაქი — კაპუჩინო" } as Photo,
      },
      {
        name: "მიქსი",
        color: "კაპუჩინო",
        spec: "40 მმ · 4 ზომის კომბინაცია",
        text: "ოთხი სხვადასხვა ზომის ფილა — ცოცხალი, მრავალფეროვანი ნახატი ერთფეროვნების გარეშე.",
        regular: 33,
        photo: { src: "/photos/legi-mix-paver-cappuccino-40mm.webp", alt: "მიქსი 40 მმ — კაპუჩინო" } as Photo,
      },
      {
        name: "Grande",
        color: "კაპუჩინო",
        spec: "80 მმ · 800×400 მმ",
        text: "მსხვილფორმატიანი ფილა მინიმალური ნაკერით — თანამედროვე, სუფთა ვიზუალი.",
        regular: 48,
        photo: { src: "/photos/legi-grande-paver-cappuccino-80mm.webp", alt: "Grande — კაპუჩინო" } as Photo,
      },
    ],
  },
  form: {
    eyebrow: "შეკვეთა",
    title: "ისარგებლე 10%-იანი ფასდაკლებით",
    text: "დაგვიტოვე საკონტაქტო ინფორმაცია და ჩვენ მალე დაგიკავშირდებით.",
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
