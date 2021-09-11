import { overrideSubMenuStyling } from "components/apps/MonacoEditor/functions";
import styled from "styled-components";

const StyledMail = styled.div.attrs({ onBlur: overrideSubMenuStyling })`
  color: ${({ theme }) => theme.colors.text};
  height: ${({ theme }) => `calc(100% - ${theme.sizes.taskbar.height})`};
  width: 100%;
`;

export default StyledMail;
