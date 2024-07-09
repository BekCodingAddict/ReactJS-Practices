import { useState } from "react";
import Star from "./Star";

const ratingText = [
  {
    text: "We're sorry to hear that you had a bad experince. We would like to learn more about that happened and now we can make things right.",
  },
  {
    text: "We apoligize for the inconvenience you experinced. We appreciate your feedback and would like to work you adress and issues.",
  },
  {
    text: "Thank you for your feedback. We're sorry to hear that kyour experince wasn;t perfect.We would love to hear more about your concerns to see how we can improve.",
  },
  {
    text: "Thank you for your positive feedback!.We're glad to know that you had a gread exprerince and we appreciate your support.",
  },

  {
    text: "Excellent! We're thrilled to hear your had such a positive experince. Thank you for choosing our platform.",
  },
];

function StarRating({ sumOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  return (
    <div className="flex h-[400px] w-[680px] flex-col items-center justify-center gap-1 rounded-[1rem] bg-white p-[30px_20px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)]">
      <h1 className="text-3xl font-bold text-black">
        How many stars would you give?
      </h1>
      <div>
        {Array.from({ length: sumOfStars }, (_, i) => (
          <Star
            key={i}
            onRate={() => setRating(i + 1)}
            full={rating <= i ? true : false}
          />
        ))}
      </div>
      <p className="ml-[4rem] mr-[4rem] h-1/3 text-stone-500">
        {ratingText[rating - 1]?.text}
      </p>
    </div>
  );
}

export default StarRating;
