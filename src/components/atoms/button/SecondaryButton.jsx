import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { children } = props;
  return <SButtonr>{children}</SButtonr>;
};

const SButtonr = styled(BaseButton)`
  background-color: #11999e;
`;
