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

export const layout4 = [
  {
    name: "Dashboard",
    exact: true,
    to: "/",
    iconClassName: "bi bi-speedometer2",
  },
  {
    name: "Content",
    exact: true,
    to: `/content`,
    iconClassName: "bi bi-speedometer2",
    subMenus: [
      { name: "Courses", to: "/content/courses" },
      { name: "Videos", to: "/content/videos" },
    ],
  },
  { name: "Design", to: `/design`, iconClassName: "bi bi-vector-pen" },
  {
    name: "Content 2",
    exact: true,
    to: `/content-2`,
    iconClassName: "bi bi-speedometer2",
    subMenus: [
      { name: "Courses", to: "/content-2/courses" },
      { name: "Videos", to: "/content-2/videos" },
    ],
  },
  { name: "Design 2", to: `/design-2`, iconClassName: "bi bi-vector-pen" },
  { name: "Design 3", to: `/design-3`, iconClassName: "bi bi-vector-pen" },
  { name: "Design 4", to: `/design-4`, iconClassName: "bi bi-vector-pen" },
];