import classNames from "classnames";

export const containerCls = classNames(
  "min-h-screen",
  "bg-light-bg-white",
  "dark:bg-dark-bg-black"
);

export const sidebarContainerCls = classNames(
  "min-h-screen",
  "w-72",
  "bg-light-bg-gray-100",
  "dark:bg-dark-bg-gray-100",
  "flex",
  "flex-col"
);

export const searchbarContainerCls = classNames(
  "h-11",
  "w-64",
  "bg-light-bg-gray-200",
  "dark:bg-dark-bg-gray-200",
  "flex",
  "mt-16",
  "mx-auto",
  "items-center",
  "rounded-3xl"
);
