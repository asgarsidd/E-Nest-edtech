export default function Footer() {
  return (
    <>
      <footer className="bg-gray-100 text-black pt-10 border-3">
        <div className="container mx-auto px-6 flex flex-wrap justify-between ">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">E-NEST</h2>
            <p className="mb-4">Empowering Agri and food technology</p>
            <p>Email</p>
            <p>Talk to A Counsellor</p>
          </div>

          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Quick Link</h3>
            <ul>
              <li className="mb-2">Program</li>
              <li className="mb-2">Test series</li>
              <li className="mb-2">Skill Connect</li>
              <li className="mb-2">Expert Connect</li>
              <li className="mb-2">Study Abroad</li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul>
              <li className="mb-2">About us</li>
              <li className="mb-2">Why choose us</li>
              <li className="mb-2">Policies</li>
              <li className="mb-2">Privacy Policy</li>
            </ul>
          </div>

          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-semibold mb-4">Security</h3>
            <ul>
              <li className="mb-2">Report</li>
              <li className="mb-2">Trademark Notice</li>
              <li className="mb-2">Advertise with us</li>
              <li className="mb-2">Help & Support</li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto px-4 flex flex-wrap justify-center mt-8">
          <div className="w-full md:w-1/2 flex space-x-4 items-center text-center">
            <img
              src="/images/socialmedia/google.png"
              alt="Google Play"
              className="w-32"
            />
            <img
              src="/images/socialmedia/appstore.png"
              alt="App Store"
              className="w-32"
            />
          </div>
 
          <div className="flex flex-col gap-3 items-center ">
            <p className="font-bold text-2xl">Let's get Social:</p>
            <div className="w-full md:w-1/2 flex  space-x-4 mt-4 md:mt-0 justify-end">
              <img
                src="/images/socialmedia/video.png"
                alt="YouTube"
                className="w-6"
              />
              <img
                src="/images/socialmedia/instagram.png"
                alt="Instagram"
                className="w-6"
              />
              <img
                src="/images/socialmedia/twitter.png"
                alt="Facebook"
                className="w-6"
              />
              <img
                src="/images/socialmedia/linkedin.png"
                alt="LinkedIn"
                className="w-6"
              />
            </div>
          </div>
        </div>
        <div className="bg-purple-700 h-auto container mx-auto px-4 mt-8 text-center overflow-hidden items-center">
          <p className="text-white text-center items-center px-auto py-4 md:text-3xl">
            © AgriVision4U Pvt. Ltd. 2024
          </p>
        </div>
      </footer>
    </>
  );
}
