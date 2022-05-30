
  export const Image = ({  borderRadius, fit, m,src, alt , width, height,}) => {

    return (

      <div>

        <img data-testid="image" src={src} alt={alt} height={height} width={width} style={{borderRadius:borderRadius,fit:fit}} />
      
      </div>
    );
  };
  
  
  