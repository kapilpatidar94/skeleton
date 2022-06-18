import { paths } from "./constants";

export const menu = {}

export const layout3 =  [
    {
      name: "Dashboard",
      exact: true,
      to: paths.layout3.dashboard,
      iconClassName: "bx bx-home-alt",
    },
    {
      name: "Revenue",
      exact: true,
      to: paths.layout3.revenue,
      iconClassName: "bx bx-bar-chart-alt-2",
    },
    {
      name: "Notifications",
      exact: true,
      to: paths.layout3.notification,
      iconClassName: "bx bx-bell",
    },
    {
      name: "Analytics",
      exact: true,
      to: paths.layout3.analytics,
      iconClassName: "bx bx-pie-chart-alt",
    },
    {
      name: "Wallets",
      exact: true,
      to: paths.layout3.wallet,
      iconClassName: "bx bx-wallet",
    },
  ];