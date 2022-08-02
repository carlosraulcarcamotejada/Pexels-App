import { FC } from "react";

const Footer: FC = ():JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="px-2 py-4 font-normal bg-gray-300 dark:bg-gray-900 shadow-sm select-none">
      <p className="dark:text-gray-500 text-gray-600">Copyright &copy; Carlos Cárcamo  &#183; {currentYear}</p>
    </div>
  );
};

export default Footer;
