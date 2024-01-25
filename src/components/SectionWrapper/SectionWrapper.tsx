import { FC, ReactNode } from "react";
import { MAX_WIDTH } from "../../constants/BreakPoints";
import styled from "styled-components";

const StyledSectionWrapper = styled.div<{
  color: string;
  paddingBottom: number;
}>`
  align-items: center;
  background: ${({ color }) => color};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: start;
  padding-bottom: ${({ paddingBottom }) => paddingBottom}px;
  /* height: 92vh;
      scroll-snap-align: start;
      scroll-snap-type: y mandatory;*/
`;

const StyledInnerWrapper = styled.div<{ marginTop: number }>`
  width: 100%;
  height: 100%;
  position: relative;
  max-width: ${MAX_WIDTH}px;
  margin-top: ${({ marginTop }) => {
    return `${marginTop}rem`;
  }};
`;

interface ISectionWrapperProps {
  color: string;
  marginTop?: number;
  paddingBottom?: number;
  children: ReactNode;
}

const SectionWrapper: FC<React.PropsWithChildren<ISectionWrapperProps>> = ({
  children,
  color,
  marginTop = 0,
  paddingBottom = 0,
}) => {
  return (
    <StyledSectionWrapper
      color={color}
      paddingBottom={paddingBottom}
      className="SectionWrapper"
    >
      <StyledInnerWrapper marginTop={marginTop} className="InnerSectionWrapper">
        {children}
      </StyledInnerWrapper>
    </StyledSectionWrapper>
  );
};

export default SectionWrapper;
