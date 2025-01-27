/* eslint-disable react/prop-types */
const Button = ({ bgColor, textColor, message }) => {
      return <button className={`py-2 px-5 ${textColor}  md:text-sm leading-none tracking-tighter font-medium rounded-2xl ${bgColor}`}>{message}</button>;
};

export default Button;
