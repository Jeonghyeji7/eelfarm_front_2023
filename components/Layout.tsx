import Menu from "./Menu";
import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
  return (
    <div className="main-container flex flex-col">
      <Menu />
      <div className="flex flex-row navbar-content">
        <Navbar />
        <div className="content-container">
          <div className="content-container-scroll">
            {props.children}
          </div>
        </div>
      </div>
      <style jsx>{`
        .main-container {
          width: 1920px;
          height: 1024px;
          background-color: #253647;
        }
        .navbar-content {
          width: 1920px;
          height: 968px;
        }
        .content-container {
          border-top-left-radius: 40px;
          padding: 32px;
          padding-right: 0px;
          padding-bottom: 0px;
          background-color: #fafafa;
          width: 100%;
          height: 100%;
        }
        .content-container-scroll {
          width: 100%;
          height: 936px;
          background-color: #253647;
          overflow-y: auto;
        }
      `}</style>
    </div>
  );
};

export default Layout;
