function Home() {
  return (
    <div className="flex justify-center min-h-[calc(100vh-80px)] space-x-10">
      <img
        className="max-h-[30vh] rounded-full my-auto"
        src="/homeImage.png"
        alt="Image of me holding a camera"
      />
      <div className="my-auto">
        <p className="text-2xl text-gray-950">Hey there! I am</p>
        <p className="text-5xl">&#123;Daniel Nguyen&#125;</p>
        <p className="text-xl text-gray-900 mt-1">
          CS@SJSU, Fullstack Engineer
        </p>
      </div>
    </div>
  );
}
export default Home;
