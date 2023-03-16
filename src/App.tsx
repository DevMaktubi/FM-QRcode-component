function App() {
  return (
    <main className="w-full h-screen overflow-x-hidden flex justify-center items-center">
      <div className="w-80 h-[500px] p-4 flex flex-col items-center bg-white rounded-2xl">
        <div className="md:bg-blue flex justify-center items-center rounded-2xl w-72 h-72">
          <img src="/assets/image-qr-code.png" alt="qrcode" />
        </div>
        <div className="my-6 w-full flex flex-col justify-center items-center">
          <h1 className="font-bold text-heading text-dark-navy leading-7 mb-4 text-center">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-body text-gray max-w-[256px] text-center leading-5">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
