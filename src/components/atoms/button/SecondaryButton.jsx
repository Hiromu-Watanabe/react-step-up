import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { children, onClick } = props;
  return <SButtonr onClick={onClick}>{children}</SButtonr>;
};

const SButtonr = styled(BaseButton)`
  background-color: #11999e;
`;
