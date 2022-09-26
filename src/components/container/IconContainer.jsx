const IconContainer = ({ children, className, ...rest }) => {
  return (
    <span className={`icon-container ${className}`} {...rest}>
      {children}
    </span>
  );
};

export default IconContainer;
