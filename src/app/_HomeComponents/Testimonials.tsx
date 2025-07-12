import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

interface Testimonial {
  name: {
    en: string;
    ar: string;
  };
  body: {
    en: string;
    ar: string;
  };
  img: string;
}

export const reviews: Testimonial[] = [
  {
    name: {
      en: "Jack",
      ar: "جاك",
    },
    body: {
      en: "I've never seen anything like this before. It's amazing. I love it.",
      ar: "لم أرَ شيئًا مثل هذا من قبل. إنه رائع. أنا أحبه.",
    },
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jack&mouth=smile&eyes=happy",
  },
  {
    name: {
      en: "Jill",
      ar: "جيل",
    },
    body: {
      en: "I don't know what to say. I'm speechless. This is amazing.",
      ar: "لا أعرف ماذا أقول. أنا عاجز عن الكلام. هذا مدهش.",
    },
    img: "https://api.dicebear.com/7.x/big-ears/svg?seed=Jill&smile=happy",
  },
  {
    name: {
      en: "John",
      ar: "جون",
    },
    body: {
      en: "I'm at a loss for words. This is amazing. I love it.",
      ar: "أنا عاجز عن الكلام. هذا رائع. أنا أحبه.",
    },
    img: "https://api.dicebear.com/7.x/miniavs/svg?seed=John",
  },
  {
    name: {
      en: "Jane",
      ar: "جين",
    },
    body: {
      en: "I'm at a loss for words. This is amazing. I love it.",
      ar: "أنا عاجز عن الكلام. هذا رائع. أنا أحبه.",
    },
    img: "https://api.dicebear.com/7.x/lorelei/svg?seed=Jane&face=smiling",
  },
  {
    name: {
      en: "Jenny",
      ar: "جيني",
    },
    body: {
      en: "I'm at a loss for words. This is amazing. I love it.",
      ar: "أنا عاجز عن الكلام. هذا رائع. أنا أحبه.",
    },
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jenny",
  },
  {
    name: {
      en: "James",
      ar: "جيمس",
    },
    body: {
      en: "I'm at a loss for words. This is amazing. I love it.",
      ar: "أنا عاجز عن الكلام. هذا رائع. أنا أحبه.",
    },
    img: "https://api.dicebear.com/7.x/big-smile/svg?seed=James",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

interface ReviewCardProps {
  img: string;
  name: {
    en: string;
    ar: string;
  };
  body: {
    en: string;
    ar: string;
  };
  lang?: "en" | "ar"; // Added language prop
}

const ReviewCard = ({
  img,
  name,
  body,
  lang = "en", // Default to English
}: ReviewCardProps) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium">{name[lang]}</figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body[lang]}</blockquote>
    </figure>
  );
};

interface TestimonialsProps {
  lang?: "en" | "ar";
}

const Testimonials = ({ lang = "en" }: TestimonialsProps) => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name.en} {...review} lang={lang} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name.en} {...review} lang={lang} />
        ))}
      </Marquee>
    </div>
  );
};

export default Testimonials;
