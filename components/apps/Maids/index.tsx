import StyledMaids from "components/apps/Maids/StyledMaids";
import type { ComponentProcessProps } from "components/system/Apps/RenderComponent";
import { useProcesses } from "contexts/process";

const Maids = ({ id }: ComponentProcessProps): JSX.Element => {
  const {
    // eslint-disable-next-line no-empty-pattern
    processes: { [id]: {} = {} },
  } = useProcesses();

  return (
    <StyledMaids>
      <iframe src="https://maid.uz" title="Maids" width="100%" height="100%" />
    </StyledMaids>
  );
};

export default Maids;
