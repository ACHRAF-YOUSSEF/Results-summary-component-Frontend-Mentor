import reaction from '../assets/icon-reaction.svg';
import memory from '../assets/icon-memory.svg';
import verbal from '../assets/icon-verbal.svg';
import visual from '../assets/icon-visual.svg';

const RightSide = () => {
  return (
    <div
      className="
        rounded-lg
        px-10
        py-10
        flex
        flex-col
        flex-1
        "
    >
      <h3 className="text-start">Summary</h3>
      <table>
        <tr>
          <td>
            <div className="flex justify-evenly rounded-md mx-2 my-2 py-2 border-transparent border-2 hover:border-Light-red">
              <div className='flex text-start'>
                <img className='mr-1' src={reaction} alt="reaction" />
                <span className="text-Light-red">Reaction</span>
              </div>
              <div className='flex text-end'>
                <span className="text-Dark-gray-blue font-extrabold">80</span>
                <p className="text-Dark-gray-blue">/100</p>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="flex justify-evenly rounded-md mx-2 my-2 py-2 border-transparent border-2 hover:border-Orangey-yellow">
              <div className='flex text-start'>
                <img className='mr-1' src={memory} alt="memory" />
                <span className="text-Orangey-yellow">Memory</span>
              </div>
              <div className='flex text-end'>
                <span className="text-Dark-gray-blue font-extrabold">92</span>
                <p className="text-Dark-gray-blue">/100</p>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="flex justify-evenly rounded-md mx-2 my-2 py-2 border-transparent border-2 hover:border-Green-teal">
              <div className='flex text-start'>
                <img className='mr-1' src={verbal} alt="verbal" />
                <span className="text-Green-teal">Verbal</span>
              </div>
              <div className='flex text-end'>
                <span className="text-Dark-gray-blue font-extrabold">61</span>
                <p className="text-Dark-gray-blue">/100</p>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="flex justify-evenly rounded-md mx-2 my-2 py-2 border-transparent border-2 hover:border-Cobalt-blue">
              <div className='flex text-start'>
                <img className='mr-1' src={visual} alt="visual" />
                <span className="text-Cobalt-blue">Visual</span>
              </div>
              <div className='flex text-end'>
                <span className="text-Dark-gray-blue font-extrabold">72</span>
                <p className="text-Dark-gray-blue">/100</p>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <input
              className="
                rounded-full 
                my-4 
                py-4 
                px-4 
                w-full 
                h-full 
                bg-Dark-gray-blue 
                text-White
                hover:bg-gradient-to-b from-G1-1 to-G1-2
                "
              type="button"
              value="Continue"
            />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default RightSide;