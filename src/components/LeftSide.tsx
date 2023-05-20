const LeftSide = () => {
  return (
    <div
      className="
            bg-gradient-to-b from-G1-1 to-G1-2
            rounded-lg
            px-4
            py-4
            flex
            flex-col
            flex-1
        "
    >
      <h3 className="flex-0 text-Light-lavender p-4 flex text-center justify-center">Your Result</h3>
      <div
        className="
            flex
            flex-col
            items-center
            flex-0
            m-2
            justify-center"
      >
        <div
          className="
                bg-gradient-to-b from-G2-1 to-G2-2
                rounded-full
                py-[12%]
                px-[16%]
            "
        >
          <h2 className="text-White text-6xl font-extrabold">76</h2>
          <p className="text-Light-lavender">of 100</p>
        </div>
      </div>
      <div className="flex-0 flex flex-col p-2 m-8">
        <h2 className="text-White text-xl font-bold p-2">Great</h2>
        <p className="text-Light-lavender font-normal text-sm">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
}

export default LeftSide;