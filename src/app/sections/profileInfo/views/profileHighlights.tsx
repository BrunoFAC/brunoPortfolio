import { HighlightBox } from "@/components";
import { colors } from "@/global";
import { images } from "@/images";
import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  gap: 8px;
  background: ${colors.card.background};
  padding: 8px;
  height: min-content;
  border-radius: 8px;
`;

export const ProfileHighlights: FC = () => {
  const differenceTimezone = new Date().getTimezoneOffset() / 60;

  const calculateTimezone =
    differenceTimezone >= 0
      ? `GMT +${differenceTimezone}`
      : `GMT ${differenceTimezone}`;

  const birthDate = new Date("2001-03-15");
  const startedWorking = new Date("2022-08-01");
  const actualDate = new Date();

  const differenceInMs =
    (actualDate.getTime() - startedWorking.getTime()) /
    (1000 * 60 * 60 * 24 * 365.25); // use of 365.25 to consider leap years
  const diffInMilliseconds = actualDate.getTime() - birthDate.getTime();

  const yearsOfExperience = differenceInMs.toFixed(1);

  const age = new Date(diffInMilliseconds).getUTCFullYear() - 1970;

  const infoArray = [
    {
      icon: images.Dev.src,
      text: "Freelancer",
    },
    {
      icon: images.Clock.src,
      text: calculateTimezone,
    },
    {
      icon: images.ID.src,
      text: `${age} y/o`,
    },
    {
      icon: images.Experience.src,
      text: `+ ${yearsOfExperience} Years`,
    },
    {
      icon: images.Pin.src,
      text: "Portugal",
    },
    {
      icon: images.Coffee.src,
      text: "Coffee Addict",
    },
    {
      icon: images.Language.src,
      text: "Portuguese & English",
    },
  ];

  return (
    <Container>
      {infoArray.map((e, key) => (
        <HighlightBox key={`${e.text}-${key}`} icon={e.icon} text={e.text} />
      ))}
    </Container>
  );
};
