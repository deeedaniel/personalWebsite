import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Extra() {
  return (
    <div className="h-[100vh] flex bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="mx-auto my-auto flex flex-col w-full max-w-[90vw]">
        <h2 className="text-6xl text-white mx-auto mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-white font-semibold overflow-visible">
          Extra: Videos
        </h2>
        <div className="2xl:px-96 px-12">
          <Carousel
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              <CarouselItem className="flex">
                <iframe
                  className="mx-auto"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/SI--bNjvQSg?si=XHnwfoi_CJDcOubw"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </CarouselItem>
              <CarouselItem className="flex">
                <iframe
                  className="mx-auto"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/UM6B-B2rey8?si=H2FaGPeOmT25tjQ2"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className=" " />
            <CarouselNext className=" " />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
export default Extra;
