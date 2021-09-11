import StyledMonacoEditor from "components/apps/Maids/StyledMonacoEditor";
import type { ComponentProcessProps } from "components/system/Apps/RenderComponent";
import { useProcesses } from "contexts/process";

const MonacoEditor = ({ id }: ComponentProcessProps): JSX.Element => {
  const {
    // eslint-disable-next-line no-empty-pattern
    processes: { [id]: {} = {} },
  } = useProcesses();

  return (
    <StyledMonacoEditor>
      <iframe
        src="https://hub.maid.uz/xd"
        title="Intranet"
        width="100%"
        height="100%"
      />
    </StyledMonacoEditor>
  );
};

export default MonacoEditor;
