import { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import Image from "next/image";

type Tab = {
  label: string;
  iconUrl: string;
  content: string;
};

type Props = {
  tabs: Tab[];
};

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TabList = styled.div`
  display: flex;
  justify-content: center;
`;

const TabButton = styled.button<{ active: boolean }>`
  margin: 0 10px;
  padding: 12px 16px;
  border: ${({ active, theme }) =>
    active ? `1px solid ${theme.colors.border.dark}` : "none"};
  background-color: ${({ active }) => (active ? "white" : "transparent")};
  color: ${({ active }) => (active ? "black" : "inherit")};
  font-size: 16px;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;

  img {
    margin-right: 12px;
  }
`;

const TabContent = styled.div<{ active: boolean }>`
  display: ${({ active }) => (active ? "flex" : "none")};
  justify-content: center;
  margin-top: 20px;
  ${({ active }) =>
    active &&
    css`
      animation: ${slideIn} 0.5s ease-in-out;
    `}
`;

const RcTabs: React.FC<Props> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <TabsWrapper>
      <TabList>
        {tabs.map((tab, index) => (
          <TabButton
            key={index}
            active={index === activeTab}
            onClick={() => setActiveTab(index)}
          >
            <Image alt={tab.label} src={tab.iconUrl} height="35" width="35" />
            {tab.label}
          </TabButton>
        ))}
      </TabList>
      {tabs.map((tab, index) => (
        <TabContent key={index} active={index === activeTab}>
          <img src={tab.content} alt={tab.label} />
        </TabContent>
      ))}
    </TabsWrapper>
  );
};

export default RcTabs;