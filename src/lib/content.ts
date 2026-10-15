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
    firepit: "გარე ბუხარი",
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
    subtitle: "ახალი ქალაქი, მიქსი და Grande კაპუჩინოს ფერში",
    lead: "ანა ტყებუჩავამ ეზო LEGI-ის ფილებით განაახლა და გარე ბუხარიც მოაწყო. ზუსტად იგივე ფილები ახლა შენთვის 10%-იანი ფასდაკლებითაა, შეზღუდული დროით.",
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
    text: "გადაწიე მარჯვნივ და ნახე სხვაობა: ეზო ფილების დაგებამდე და მის შემდეგ.",
    before: "მანამდე",
    after: "შემდეგ",
    pairs: [
      {
        label: "ბილიკი",
        before: { src: "/photos/legi-pavers-garden-path-before.webp", alt: "ბილიკი სახლის წინ დაგებამდე" } as Photo,
        after: { src: "/photos/legi-cappuccino-pavers-garden-path-after.webp", alt: "ბილიკი LEGI-ს ფილებითა და თეთრი ხრეშით" } as Photo,
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
    ],
  },
  gallery: {
    eyebrow: "ანას ეზოში",
    title: "ანა თავის ახალ ეზოში",
    text: "ბილიკი, ტერასა და საღამოს მზე. ასე გამოიყურება ეზო, როცა ფილები უკვე დაგებულია.",
    photos: [
      { src: "/photos/legi-cappuccino-pavers-ana-tkebuchava-terrace.webp", alt: "ანა ტყებუჩავა ტერასაზე, წინ LEGI-ს ფილების ბილიკი", position: "50% 35%", landscape: false },
      { src: "/photos/legi-cappuccino-pavers-ana-tkebuchava-selfie.webp", alt: "ანა ტყებუჩავას სელფი ეზოში, უკან ახალი ბილიკი", position: "50% 30%", landscape: false },
      { src: "/photos/legi-fire-pit-cappuccino-pavers-chair.webp", alt: "გარე ბუხარი სავარძლით და შეშის კალათით, უკან სახლი", position: "50% 60%", landscape: false },
      { src: "/photos/legi-cappuccino-pavers-terrace-seating.webp", alt: "ტერასის სავარძლები და მაგიდა LEGI-ს ფილებზე", position: "50% 50%", landscape: true },
      { src: "/photos/legi-cappuccino-pavers-terrace-table.webp", alt: "მაგიდა ვაშლებით ტერასაზე, უკან დაგებული ფილები", position: "50% 50%", landscape: true },
      { src: "/photos/legi-cappuccino-pavers-house-entrance-path.webp", alt: "სახლის შესასვლელი და ბილიკი LEGI-ს ფილებით", position: "50% 50%", landscape: true },
    ] as (Photo & { position: string; landscape: boolean })[],
  },
  firepit: {
    eyebrow: "გარე ბუხარი",
    title: "საღამოები ბუხრის გარშემო",
    text: "ეზოს განახლებასთან ერთად ანამ გარე ბუხარიც მოაწყო. LEGI-ს ბუხარი იგივე ფილებით იწყობა, რომლითაც ბილიკი და ტერასაა დაგებული: ერთი მასალა, ერთი სტილი, მთელ ეზოში.",
    photos: [
      { src: "/photos/legi-fire-pit-cappuccino-pavers-aerial-view.webp", alt: "ანას გარე ბუხრის მოედანი და ბილიკი ზემოდან, გაზონსა და მთების ფონზე", caption: "ანას გარე ბუხარი · ხედი ზემოდან", position: "50% 50%" },
      { src: "/photos/legi-fire-pit-cappuccino-pavers-closeup.webp", alt: "გარე ბუხარი ახლოდან: სავარძლები, ფარანი და შეშის კალათა", caption: "ბუხარი ახლოდან", position: "50% 80%" },
    ] as (Photo & { caption: string; position: string })[],
    points: [
      {
        title: "ბეტონი არის ცეცხლგამძლე",
        text: "ბლოკები არის ცეცხლგამძლე და უძლებს მაღალ ტემპერატურას.",
      },
      {
        title: "როგორ მოვუაროთ",
        text: "წყლის ნაკადით შესაძლებელია დაბინძურებული ადგილების მორეცხვა, არ სჭირდება ზედმეტი ძალისხმევა.",
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
      regularLabel: "სტანდარტული ფასი",
      campaignLabel: "აქციის ფასი",
      save: "დაზოგე",
      limited: "შეზღუდული დროით",
      includes: "ფასში შედის ლითონის და ბეტონის ნაწილები, სრული კომპლექტი.",
      cta: "შეუკვეთე ბუხარი",
    },
    cta: "მინდა ასეთი ეზო",
  },
  kit: {
    eyebrow: "რა შედის კომპლექტში",
    title: "რისგან შედგება გარე ბუხარი",
    text: "ბუხარი ორი ნაწილისგან შედგება და სრულად დაკომპლექტებული მოგეწოდება: ლითონის კონსტრუქცია და ბეტონის ბლოკები. ვიდეოში ნახავ, როგორ ეწყობა ისინი ერთმანეთზე.",
    video: {
      src: "/video/legi-fire-pit-kit-exploded-view.mp4",
      poster: "/photos/legi-fire-pit-kit-exploded-view.webp",
      label: "გარე ბუხრის კომპლექტის ანიმაცია: ლითონის კონსტრუქცია და ბეტონის ბლოკები ზომებით",
      caption: "ბუხარი ნაწილებად · ზომები სმ-ში",
      play: "ანიმაციის ნახვა",
      replay: "თავიდან ნახვა",
    },
    parts: [
      {
        title: "ლითონის კონსტრუქცია",
        text: "ლითონის კონსტრუქცია ბლოკებს იცავს პირდაპირი ცეცხლისგან, ასევე უზრუნველყოფს ცეცხლის თანაბრად გადანაწილებას.",
        specs: ["96 × 96 სმ", "ღიობი 66 სმ", "სიღრმე 43 სმ", "≈ 70 კგ"],
      },
      {
        title: "ბეტონის ბლოკები",
        text: "გარე ბუხარი სამ რიგად დაწყობილი ბეტონის ბლოკებისგან არის შემდგარი, რომელიც უძლებს მაღალ ტემპერატურას.",
        specs: ["სიგრძე 60 და 40 სმ", "სიგანე 15 სმ", "3 რიგი", "24 ბლოკი", "29.7 / 20.8 კგ ცალი", "≈ 600 კგ სულ"],
      },
    ],
    includes: "ფასში შედის როგორც ლითონის კონსტრუქცია, ასევე ბლოკები.",
    weight: "გარე ბუხრის კომპლექტი 670 კგ-მდე იწონის და სწორედ მისი წონა განაპირობებს კონსტრუქციის სიმყარეს. რეკომენდებულია, ბუხარი სწორ და მყარ ზედაპირზე მოეწყოს, მაგალითად ფილებზე.",
    assembly: {
      title: "მონტაჟი წებოსა და ცემენტის გარეშე",
      lead: "გარე ბუხარი მშრალი წესით ეწყობა: ბეტონის ბლოკებს საკუთარი წონა ამაგრებს, ამიტომ მონტაჟისთვის არც ხსნარის და არც წებოს გამოყენებაა საჭირო. მისი აწყობა მარტივია და სპეციალისტის დახმარების გარეშეც შესაძლებელია. საჭიროების შემთხვევაში, ბუხარი მარტივად იშლება და მისი სხვა ადგილას გადატანაც შესაძლებელია.",
      chips: ["წებოს გარეშე", "ცემენტის გარეშე", "ოსტატის გარეშე"],
      steps: [
        { title: "მოამზადე საფუძველი", text: "ბუხარი სწორ და მყარ ზედაპირზე უნდა აიწყოს, ამისთვის საჭიროა ზედაპირის მომზადება." },
        { title: "დააწყვე ბლოკები", text: "ბლოკები სამ ფენად დააწყვე ისე, რომ ზედა ფენის ბლოკებმა ქვედა ფენის შეერთების ადგილები გადაფაროს, როგორც ვიდეოშია ნაჩვენები. თითოეული ბლოკი 30 კგ-მდე იწონის." },
        { title: "ბოლო ეტაპი არის ლითონის კონსტრუქცია", text: "კონსტრუქცია 70 კგ-მდე იწონის." },
      ],
    },
    disclaimer: {
      title: "ცეცხლგამძლეა? რა თქმა უნდა",
      text: "ბლოკები თავისთავად ცეცხლგამძლეა. სასურველია, ბლოკები დაცული იყოს ტემპერატურის მკვეთრი ცვლილებისგან: მაგალითად, გახურებულ ბლოკებზე წყლის დასხმისას ზედაპირზე შესაძლოა წვრილი ბზარები ან ფერის ცვლილება გაჩნდეს. ეს ბუნებრივი პროცესია.",
    },
    cta: "შეუკვეთე ბუხარი",
  },
  pricing: {
    eyebrow: "ფასები",
    title: "ფილები ანას ეზოდან 10% ფასდაკლებით",
    text: "ანას ეზოში სამი სახის კაპუჩინოს ფერის ფილაა გამოყენებული. სამივეზე მოქმედებს 10%-იანი ფასდაკლება.",
    promoNote: "−10% ფასდაკლება ანას ეზოს ფილებზე. აქცია მოქმედებს შეზღუდული დროით.",
    regular: "სტანდარტული ფასი",
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
        text: "გლუვი ზედაპირი და დახვეწილი ფორმა, იდეალურია ეზოსა და სავალი გზისთვის.",
        regular: 41.5,
        photo: { src: "/photos/legi-new-city-paver-cappuccino-60mm.webp", alt: "ახალი ქალაქი, კაპუჩინო" } as Photo,
      },
      {
        name: "მიქსი",
        color: "კაპუჩინო",
        spec: "40 მმ · 4 ზომის კომბინაცია",
        text: "ოთხი სხვადასხვა ზომის ფილა: ცოცხალი, მრავალფეროვანი და თანამედროვე ვიზუალი.",
        regular: 33,
        photo: { src: "/photos/legi-mix-paver-cappuccino-40mm.webp", alt: "მიქსი 40 მმ, კაპუჩინო" } as Photo,
      },
      {
        name: "Grande",
        color: "კაპუჩინო",
        spec: "80 მმ · 800×400 მმ",
        text: "მსხვილი ფორმატის ფილა მინიმალური ნაკერით: თანამედროვე და სუფთა ვიზუალი.",
        regular: 48,
        photo: { src: "/photos/legi-grande-paver-cappuccino-80mm.webp", alt: "Grande, კაპუჩინო" } as Photo,
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
    privacy: "ინფორმაციის გაგზავნით თქვენ ეთანხმებით კონფიდენციალურობის პოლიტიკას.",
    callUs: "ან დაგვირეკე",
  },
  footer: {
    tagline: "ბეტონის ფილა და ბორდიური ევროპული სტანდარტით, 2010 წლიდან.",
    locations: "მისამართები",
    locationList: ["თბილისი", "ქობულეთი", "თერჯოლა"],
    follow: "გამოგვყევი",
    rights: "ყველა უფლება დაცულია.",
    productLine: "ანა ტყებუჩავა × LEGI",
    mainSite: "გადადი მთავარ საიტზე",
    mainSiteText: "ნახე LEGI-ს სრული კატალოგი: ფილები, ბორდიურები და სხვა.",
  },
};
