import Image from "next/image";
import { FC } from "react";

interface StepCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

export const StepCard: FC<StepCardProps> = ({
  title,
  description,
  imageSrc,
}) => (
  <div className="flex flex-col rounded-2xl shadow-custom bg-white">
    <Image src={imageSrc} alt={title} className="rounded-t-2xl w-96 h-60" />

    <p className="mt-3 font-medium px-4">{title}</p>
    <p className="text-sm w-72 text-[#565656] dmsansfont px-4 pb-5">
      {description}
    </p>
  </div>
);
