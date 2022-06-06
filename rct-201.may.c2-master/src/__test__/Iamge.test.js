import { Image } from "../Components/Image"
import { fireEvent, render, screen } from "@testing-library/react"

describe("image function",function(){
   
    it("should render",function(){
       render(<Image/>)
       let img=screen.getByTestId("image")
       expect(img).toBeInTheDocument();

    })
    it("should render on height change and width change",function(){

        render(<Image height={"200px"} width={"200px"} />)

        let img=screen.getByTestId("image")

        expect(img).toHaveAttribute("height","200px");

        expect(img).toHaveAttribute("width","200px");
     })

     it("should render on alt change",function(){

        render(<Image  alt={"photo"} />)

        let img=screen.getByTestId("image")
        
      
        expect(img).toHaveAttribute("alt","photo");
     })

})