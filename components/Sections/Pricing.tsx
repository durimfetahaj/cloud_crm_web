import styled from "styled-components";

interface Price {
  amount: number;
  currency: string;
  frequency: string;
}

interface Plan {
  name: string;
  price: Price;
  features: string[];
}

interface Props {
  plans: Plan[];
}

const PricingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 4rem 2rem;
  background-color: ${(props) => props.theme.background};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

const PlanCard = styled.div`
  width: 300px;
  background-color: ${(props) => props.theme.foreground};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  text-align: center;
  padding: 2rem;
`;

const PlanName = styled.h3`
  margin-bottom: 1rem;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const PriceAmount = styled.div`
  font-weight: bold;
  margin-right: 0.5rem;
`;

const PriceCurrency = styled.div``;

const PriceFrequency = styled.div`
  color: #777;
`;

const FeatureList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: left;
  margin-bottom: 2rem;
`;

const Feature = styled.li`
  margin: 0.5rem 0;
`;

const ActionButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
`;

const Pricing = ({ plans }: Props) => {
  return (
    <PricingContainer>
      {plans.map((plan, index) => (
        <PlanCard key={index}>
          <PlanName>{plan.name}</PlanName>
          <PriceContainer>
            <PriceAmount>{plan.price.amount}</PriceAmount>
            <PriceCurrency>{plan.price.currency}</PriceCurrency>
            <PriceFrequency>{plan.price.frequency}</PriceFrequency>
          </PriceContainer>
          <FeatureList>
            {plan.features.map((feature, index) => (
              <Feature key={index}>{feature}</Feature>
            ))}
          </FeatureList>
          <ActionButton>Select Plan</ActionButton>
        </PlanCard>
      ))}
    </PricingContainer>
  );
};

export default Pricing;
