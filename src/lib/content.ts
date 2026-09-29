// TODO: replace with the campaign's dedicated phone number.
export const PHONE = "+995 5XX XX XX XX";
export const PHONE_HREF = "+9955XXXXXXXX";

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
    products: "ფილები",
    pricing: "ფასები",
    contact: "კონტაქტი",
    cta: "შეკვეთა",
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
      src: null,
      alt: "ანა ტყებუჩავას ეზო LEGI-ს კაპუჩინოს ფერის ფილებით და ცეცხლის კერით",
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
        label: "ეზო",
        before: { src: null, alt: "ეზო დაგებამდე" } as Photo,
        after: { src: null, alt: "ეზო LEGI-ს ფილებით" } as Photo,
      },
      {
        label: "ცეცხლის კერა",
        before: { src: null, alt: "ცეცხლის კერის ადგილი მოწყობამდე" } as Photo,
        after: { src: null, alt: "ცეცხლის კერა LEGI-ს ფილებით" } as Photo,
      },
      {
        label: "ბილიკი",
        before: { src: null, alt: "ბილიკი დაგებამდე" } as Photo,
        after: { src: null, alt: "ბილიკი LEGI-ს ფილებით" } as Photo,
      },
    ],
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
        swatch: "#977258",
        photo: { src: null, alt: "ახალი ქალაქი — კაპუჩინო" } as Photo,
      },
      {
        name: "მიქსი",
        color: "კაპუჩინო",
        spec: "60 მმ · 4 ზომის კომბინაცია",
        text: "ოთხი სხვადასხვა ზომის ფილა — ცოცხალი, მრავალფეროვანი ნახატი ერთფეროვნების გარეშე.",
        regular: 40,
        swatch: "#a07c62",
        photo: { src: null, alt: "მიქსი — კაპუჩინო" } as Photo,
      },
      {
        name: "Grande",
        color: "კაპუჩინო",
        spec: "80 მმ · 800×400 მმ",
        text: "მსხვილფორმატიანი ფილა მინიმალური ნაკერით — თანამედროვე, სუფთა ვიზუალი.",
        regular: 48,
        swatch: "#8c6a52",
        photo: { src: null, alt: "Grande — კაპუჩინო" } as Photo,
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
  },
};
