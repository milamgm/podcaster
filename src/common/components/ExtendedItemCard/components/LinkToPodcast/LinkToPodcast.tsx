import { Link } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

const LinkToPodcast = ({ children }: Props) => {
  return <Link to="">{children}</Link>;
};

export default LinkToPodcast;
