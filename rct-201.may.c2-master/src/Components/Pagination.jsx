import "./all.css"

export const Pagination = ({ total, selected, onPageChange }) => {

  return <div className="pageContainer">

    <div>Prev</div>

    {

      new Array(total).fill(1).map((e,i)=>(
        
        <div>{i+1}</div>
      ))
    }
     <div>Next</div>
  </div>;
};
