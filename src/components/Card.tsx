import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Card = () => {
  return (
    <div 
        className="
            flex
            justify-center
            items-center
            md:h-screen
            h-full
            bg-grey
        ">
        <div 
            className="
                flex
                md:flex-row
                flex-col
                text-center
                rounded-lg
                bg-White
            ">
            <LeftSide />
            <RightSide />
        </div>
    </div>
  )
}

export default Card;