import React from "react";
import Footer from "rc-footer";
import "rc-footer/assets/index.css";
const Test = () => {
  return (
    <div>
      <Footer
        columns={[
          {
            icon: (
              <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
            ),
            title: "语雀",
            url: "https://yuque.com",
            description: "知识创作与分享工具",
            openExternal: true,
          },
          {
            icon: (
              <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
            ),
            title: "语雀",
            url: "https://yuque.com",
            description: "知识创作与分享工具",
            openExternal: true,
          },
          {
            icon: (
              <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
            ),
            title: "语雀",
            url: "https://yuque.com",
            description: "知识创作与分享工具",
            openExternal: true,
          },
        ]}
      />
    </div>
  );
};

export default Test;
