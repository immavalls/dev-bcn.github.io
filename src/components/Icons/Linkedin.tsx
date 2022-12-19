import { FC } from "react";
import { StyledSocialMediaWrapper } from "./Twitter";

interface ILinkedinIconProps {
  color: string;
  linkedinUrl: string;
}

const LinkedinIcon: FC<ILinkedinIconProps> = ({ color, linkedinUrl }) => {
  return (
    <StyledSocialMediaWrapper href={linkedinUrl} target={"_blank"}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill={color}
        stroke={color}
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-linkedin"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    </StyledSocialMediaWrapper>
  );
};

export default LinkedinIcon;
