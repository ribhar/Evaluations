import "./all.css"

export const Input = ({
  
  type,
  size,
  variant,
  rightLogo,
  rightLogoOnClick,
  onChange,
}) => {
  return (
    <div className="inputContainer">
      {/* Add Right Logo */}
      <input  style={{ position: "absolute" }} 

          className={`input  ${variant || "ghost"}`}

          type={type}

      />
      <img

        src={rightLogo}

        alt={"eye"}

        height={size}

        onAuxClick={rightLogoOnClick}

        style={{ position: "relative", left: "140px" }}
        
      />
    </div>
  );
};
