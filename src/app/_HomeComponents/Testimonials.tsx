import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jack&mouth=smile&eyes=happy",
  },
  {
    name: "Jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://api.dicebear.com/7.x/big-ears/svg?seed=Jill&smile=happy",
  },
  {
    name: "John",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://api.dicebear.com/7.x/miniavs/svg?seed=John",
  },
  {
    name: "Jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://api.dicebear.com/7.x/lorelei/svg?seed=Jane&face=smiling",
  },
  {
    name: "Jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jenny",
  },
  {
    name: "James",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://api.dicebear.com/7.x/big-smile/svg?seed=James",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  body,
}: {
  img: string;
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const Testimonials = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
    </div>
  );
};

export default Testimonials;
