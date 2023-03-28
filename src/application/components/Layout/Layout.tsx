import Header from "../Header";
import "./Layout.scss";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="layout">
      <Header />
      <div className="page_body">{children}</div>
    </div>
  );
};

export default Layout;
