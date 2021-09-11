import StyledTelegram from "components/apps/Telegram/StyledTelegram";
import type { ComponentProcessProps } from "components/system/Apps/RenderComponent";
import { useProcesses } from "contexts/process";

const Intranet = ({ id }: ComponentProcessProps): JSX.Element => {
  const {
    // eslint-disable-next-line no-empty-pattern
    processes: { [id]: {} = {} },
  } = useProcesses();

  return (
    <StyledTelegram>
      <iframe
        src="https://evgeny-nadymov.github.io/telegram-react/"
        title="Telegram"
        width="100%"
        height="100%"
      />
    </StyledTelegram>
  );
};

export default Intranet;
