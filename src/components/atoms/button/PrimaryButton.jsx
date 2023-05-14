import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children } = props;
  return <SButtonr>{children}</SButtonr>;
};

const SButtonr = styled(BaseButton)`
  background-color: #40514e;
`;
