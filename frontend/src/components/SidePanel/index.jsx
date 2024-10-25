import { useEffect, useState } from 'react';
import { Drawer } from 'antd';
import CollapseBox from '../CollapseBox';

export default function SidePanel() {
  const [isPanelClose, setSidePanel] = useState(false);
  const [opacitySider, setOpacitySider] = useState(0);

  useEffect(() => {
    if (isPanelClose) {
      setOpacitySider(0);
    } else {
      setOpacitySider(1);
    }
  }, [isPanelClose]);

  const collapsePanel = () => {
    setSidePanel(true);
  };

  return (
    <Drawer
      title="Panel Title"
      placement="right"
      onClose={collapsePanel}
      open={!isPanelClose}
      width={450}
    >
      <div
        className="sidePanelContent"
        style={{
          opacity: opacitySider,
        }}
      >
        <CollapseBox
          buttonTitle="Add New Entity"
          topContent={<div>Top Content</div>}
          bottomContent={<div>Bottom Content</div>}
        />
      </div>
    </Drawer>
  );
}
