import Image from "next/image";
import React from "react";
import styled from "styled-components";

type Props = {
  imageUrl: string;
};

const LogoContainer = styled.div`
  @media (min-width: 900px) {
    margin-right: 100px;
  }
`;

const Logo = ({ imageUrl }: Props) => {
  return (
    <LogoContainer>
      <Image src={imageUrl} alt="Logo" width={200} height={40} priority />
    </LogoContainer>
  );
};

export default Logo;
