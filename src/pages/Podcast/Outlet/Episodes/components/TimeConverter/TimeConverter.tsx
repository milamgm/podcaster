import { useTimeConverter } from "../../../../../../common/utilities";

interface Props {
  episode: any;
}

const TimeConverter = ({ episode }: Props) => {
  const time = useTimeConverter(episode.trackTimeMillis);
  return <>{time}</>;
};

export default TimeConverter;
