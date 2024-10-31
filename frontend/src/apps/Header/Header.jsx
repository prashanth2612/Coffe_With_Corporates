import { LogoutOutlined, ToolOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown } from "antd";
import { Header } from "antd/es/layout/layout";
import UpgradeButton from "./UpgradeButton";

export default function HeaderContent() {
  const ProfileDropDown = () => {
    return (
      <div className="profileDropdown">
        <Avatar
          size="large"
          className="last"
          src=""
          style={{
            color: "#f56a00",
            backgroundColor: "#fde3cf",
            boxShadow: "rgba(150, 190, 238, 0.35) 0px 0px 6px 1px",
          }}
        >
          B.E
        </Avatar>
        <div className="profileDropdownInfo">
          <p>PRASHANTH GOUD</p>
          <p>COFFEWITHCORPORATES@GMAIL.COM</p>
        </div>
      </div>
    );
  };

  const DropdownMenu = ({ text }) => {
    return <span>{text}</span>;
  };

  const items = [
    {
      label: <ProfileDropDown />,
      key: "pd",
    },
    {
      icon: <UserOutlined />,
      key: "settings",
      label: <DropdownMenu text={"Profile Settings....."} />,
    },
    {
      icon: <ToolOutlined />,
      key: "settingApp",
      label: "App settings",
    },
    {
      type: "divider",
    },
    {
      icon: <LogoutOutlined />,
      key: "logout",
      label: "Logout",
    },
  ];

  return (
    <Header
      style={{
        padding: "20px",
        background: "#f9fafc",
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "flex-start",
        gap: "15px",
      }}
    >
      <Dropdown
        menu={{
          items,
        }}
        placement="bottomRight"
        trigger={["click"]}
        style={{
          width: "280px",
          float: "right",
        }}
      >
        <Avatar
          className="last"
          src={"https://www.w3schools.com/howto/img_avatar.png"}
          style={{
            color: "#f56a00",
            backgroundColor: "#fafac",
            boxShadow: "rgba(150, 190, 238, 0.35) 0px 0px 10px 2px",
            float: "right",
            cursor: "pointer",
          }}
          size={"large"}
        >
          First L from be
        </Avatar>
      </Dropdown>
      <UpgradeButton style={{ color: "red" }} />
      
    </Header>
  );
}

// Avatar
//langauge controller
//upgradation button

/** ----- FURTHER ------ **
 *
 *  backend or redux --> User Name
 *  Add Links to the Profile and app settings
 *  Admin Photo from backend
 *  ! Internationalization
 *  ! Currency
 */
