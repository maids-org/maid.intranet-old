import StyledIntranet from "components/apps/Intranet/StyledIntranet";
import type { ComponentProcessProps } from "components/system/Apps/RenderComponent";
import { useProcesses } from "contexts/process";

const Intranet = ({ id }: ComponentProcessProps): JSX.Element => {
  const {
    // eslint-disable-next-line no-empty-pattern
    processes: { [id]: {} = {} },
  } = useProcesses();

  return (
    <StyledIntranet>
      <iframe
        src="https://hub.maid.uz/xd"
        title="Intranet"
        width="100%"
        height="100%"
      />
    </StyledIntranet>
  );
};

export default Intranet;
