import StyledTimetable from "components/apps/Timetable/StyledTimetable";
import type { ComponentProcessProps } from "components/system/Apps/RenderComponent";
import { useProcesses } from "contexts/process";

const Timetable = ({ id }: ComponentProcessProps): JSX.Element => {
  const {
    // eslint-disable-next-line no-empty-pattern
    processes: { [id]: {} = {} },
  } = useProcesses();

  return (
    <StyledTimetable>
      <iframe
        src="https://hub.maid.uz/td"
        title="Timetable"
        width="100%"
        height="100%"
      />
    </StyledTimetable>
  );
};

export default Timetable;
