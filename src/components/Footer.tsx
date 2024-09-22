import { FC } from "react";

const Footer: FC = () => {
    return (
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Ayman Shaheen. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;
  
