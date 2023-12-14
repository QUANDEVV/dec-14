import "../styles/globals.css";
import Script from "next/script";
import Footer from "../components/Footer";
import Nav from "../components/nav";
import Modal from "react-modal";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { AiFillCloseCircle } from "react-icons/ai";
import { Space_Grotesk } from "next/font/google";
import { IoChatbubblesOutline } from "react-icons/io5";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const inter = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

const MyApp = ({ Component, pageProps }) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [overlayVisible, setOverlayVisible] = useState(false);
  // const [showNabar , setShowNavbar] = useState(true)
  const [useNavbars, setUseNavbars] = useState(false);
  const [showButton,  setShowButton] = useState(true)

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
    setModalIsOpen(false);
  
  };

  const router = useRouter();
  const { pathname } = router;

  let pageType = "";

  if (pathname.startsWith("/Product")) {
    pageType = "product";
  } else if (pathname.startsWith("/Industry")) {
    pageType = "industry";
  } else if (pathname.startsWith("/Apollo")) {
    pageType = "apollo";
  } else if (pathname.startsWith("/Bootcamps")) {
    pageType = "bootcamps";
  }

  return (
    <ThemeProvider attribute="class">
      <Provider store={store}>
        <div
          className={`${inter.className}  bg-white  sm:mx-[10px] min-h-screen  mx-[240px]   `}
        >
          <Nav pageType={pageType} />
          <div className="pt-65">
            <Component {...pageProps} />
          </div>

          <div
            className={`relative overlay-container ${
              overlayVisible ? "active" : ""
            }`}
          >
            <div className="relative flex">
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                className={`fixed right-[3.5rem] z-10 border-2 border-proxima bottom-[6.5rem] bg-white p-5 h-auto w-[14rem] rounded-lg ${
                  modalIsOpen ? "modal-fade-in" : "modal-fade-out"
                }`}
                overlayClassName="modal-overlay"
              >
                <div className="modal-inner-content">
                  <h2 className="flex items-center justify-between w-full mb-2 text-xs font-bold text-black">
                    Welcome to ProximaAI 👋!
                    <AiFillCloseCircle
                      onClick={() => setModalIsOpen(false)}
                      className="float-right cursor-pointer text-primary text-proxima"
                      size={20}
                    />
                  </h2>
                  <p className="text-xs text-gray-600">
                    We are excited to have you here. Feel free to explore and
                    connect with us...
                  </p>
                </div>
              </Modal>

              {showButton && !overlayVisible && (
                <button
                  onClick={toggleOverlay}
                  style={{
                    position: "fixed",
                    bottom: "50px",
                    right: "50px",
                    zIndex: 1000,
                    cursor: "pointer",
                  }}
                >
                  <div className="flex items-center justify-center w-12 h-12 text-2xl rounded-full bg-proxima ">
                    <IoChatbubblesOutline size={24} className="text-white" />
                  </div>
                </button>
              )}
            </div>
            <div
              className={`chatbot-overlay ${
                overlayVisible ? "active" : ""
              } bottom-[50px] right-[45px] sm:bottom-0 sm:right-0 `}
              style={{
                position: "fixed",

                zIndex: 999,
                transition: "opacity 0.3s, visibility 0.3s",
                opacity: overlayVisible ? 1 : 0,
                visibility: overlayVisible ? "visible" : "hidden",
              }}
            >
              <iframe
                // src="https://chatter-coral.vercel.app/"
                // src="http://localhost:3001/"
                src="http://localhost:3001/?auth_uri=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImV4cCI6MTcwNzExNTA3NX0.m6DxoEiIkQuUVx7hv3fhflSqzhEuyvXtPK9A2zX4pyg&is_auth=false&theme=light&color=orange"
                title="Chatbot"
                className='  w-[450px] h-[650px]  sm:h-screen  sm:w-screen   borderRadius:"10px ,'
                style={{
                  border: "none",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              ></iframe>
            </div>
          </div>
          <>
            <Footer />
          </>
        </div>
        <Script
          src="https://kit.fontawesome.com/d45b25ceeb.js"
          crossorigin="anonymous"
        />
      </Provider>
    </ThemeProvider>
  );
};

export default MyApp;
