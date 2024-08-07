import { FC } from "react";

interface JobRolesMarqueeProps {
  roles: string[];
  direction?: "left" | "right";
}

export const JobRolesMarquee: FC<JobRolesMarqueeProps> = ({
  roles,
  direction = "left",
}) => (
  <div className="relative overflow-hidden marquee">
    <div
      className={`marquee-content ${
        direction === "right" ? "marquee-content-right" : ""
      }`}
    >
      {roles.map((role, index) => (
        <p
          key={index}
          className="inline-block border border-[#F24E80] text-[#F24E80] bg-[#FFDBE6] rounded-lg px-5 py-2"
        >
          {role}
        </p>
      ))}
      {roles.map((role, index) => (
        <p
          key={`duplicate-${index}`}
          className="inline-block border border-[#F24E80] text-[#F24E80] bg-[#FFDBE6] rounded-lg px-5 py-2"
        >
          {role}
        </p>
      ))}
    </div>
    <div className="absolute top-0 bottom-0 left-0 w-10 bg-gradient-to-r  to-transparent"></div>
    <div className="absolute top-0 bottom-0 right-0 w-10 bg-gradient-to-l  to-transparent"></div>
  </div>
);
