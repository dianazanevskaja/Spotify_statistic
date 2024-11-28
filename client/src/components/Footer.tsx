import styled from "styled-components";
import { PageText } from "../helpers/PageText";
import { colors } from "../constants";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: ${colors.textColor};
  color: ${colors.bgColor};
  padding: 1rem;
  text-align: center;
`;

const Text = styled(PageText)`
  font-size: ${(props) => (props.fontSize ? props.fontSize : ".9em")};
`;

const BoldText = styled(Text)`
  font-weight: bold;
  padding: 0.4em;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <Text>
        © {currentYear} - <BoldText fontSize="1.2em">SpotiStats</BoldText>
      </Text>
      <Text>
        Made by <BoldText fontSize="1.2em">Diana Zanevskaja</BoldText>
      </Text>
    </FooterContainer>
  );
};

export default Footer;
