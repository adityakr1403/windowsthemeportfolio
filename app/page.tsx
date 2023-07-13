import WindowSimple from "@/components/windows/window-simple";

export default function Home() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center">
      <WindowSimple title={"Home"}>
        <div className="h-full w-full flex flex-col md:flex-row gap-5 justify-center items-center">
          <div className="avatar w-[200px] h-[200px] rounded-full backdrop-blur-3xl bg-blue-800"></div>
          <div className="details text-gray-100">
            <h1>ADITYA KUMAR</h1>
            <h1>ADITYA KUMAR</h1>
            <h1>ADITYA KUMAR</h1>
            <h1>ADITYA KUMAR</h1>
          </div>
        </div>
      </WindowSimple>
    </section>
  );
}
