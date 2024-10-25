import { Layout } from "antd";
import Navigation from "./Navigation/Navigation";
import HeaderContent from "./Header/Header";

const ErpApp = () => {
  const { Content } = Layout;

  return (
    <Layout>
      <Navigation />
      <Layout>
        <HeaderContent />
        <Content
          style={{
            margin: "40px auto 30px",
            overflow: "initial",
            width: "100%",
            padding: "0 50px",
            maxWidth: 1400,
          }}
        >
          {/* Content goes here */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default ErpApp;
