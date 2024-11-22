import { FC } from "react";
import { HeaderWrapper } from "@/components";
import { Title, Subtitle, Highlight } from "@/styles";

export const Header: FC = () => {
  return (
    <HeaderWrapper>
      <Title>Tech Stacks</Title>
      <Subtitle>
        The <Highlight>primary technologies</Highlight> I currently work with
      </Subtitle>
    </HeaderWrapper>
  );
};
