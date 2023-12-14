import React from 'react';
import Image from 'next/image';
import images from '../assets';
import AllFeatures from '../components/ALL FEATURES/AllFeatures';
import Report from '../components/ALL FEATURES/Report';
import Descriptive from '../components/ALL FEATURES/Descriptive';
import Predictive from '../components/ALL FEATURES/Predictive';
import Search from '../components/ALL FEATURES/Search';
import Community from '../components/ALL FEATURES/community';
import Chatinteractions from '../components/ALL FEATURES/chatinteractions';
import Chatanalysis from '../components/ALL FEATURES/chatanalysis';
import Survey from '../components/ALL FEATURES/Survey';
import Dashboard from '../components/ALL FEATURES/Dashboards';
import Navs from '../components/PRODUCT/nav';
import { IoIosArrowRoundForward } from "react-icons/io"
import { HiOutlineDocumentReport } from "react-icons/hi";


import videos from "../public/videos/AIP 1.mp4";
import videoss from "../public/videos/AIP 2.mp4";
import videosss from "../public/videos/AIP 3.mp4";









const Product = () => {
  return (
    <div className="">
      <section
        className="border-2 border-black "
        style={{ borderLeftWidth: 0, borderRightWidth: 0, borderTopWidth: 0 }}
      >
        <div className="flex  mt-[136px] mb-[148px] md:flex-col justify-start sm:mt-[5px]">
          <div className="text-container">
            <div className="text-5xl font-[400]">
              Revolutionizing Customer
              <br />
              Interactions:
              <br />
              Proxima&#39;s Innovative
              <br />
              Product Solutions&quot;
            </div>

            <div className="  p-4 bg-neutral-800 justify-center items-start gap-4 inline-flex mt-[41px]">
              <div className="text-lg font-normal leading-normal text-white ">
                Request a Demo
              </div>
              <div className="relative flex flex-col items-start justify-start w-5 h-6 text-white" />
              →
            </div>
          </div>
          <div className="flex w-auto ml-60 md:ml-0 md:m-2">
            <Image src={images.aip} alt="" />
          </div>
        </div>
      </section>
      {/* SECTION 2 */}
      <section
        className="border-2  border-black +"
        style={{ borderLeftWidth: 0, borderRightWidth: 0, borderTopWidth: 0 }}
      >
        <div className="mt-16 mb-40 ml-3 sm:mb-10 sm:mt-2">
          <div className="text-6xl font-semibold sm:text-3xl">Proxima Edge</div>

          <div className="flex gap-4 mt-28 sm:overflow-x-auto sm:mt-10 sm:flex-col">
            <div className="flex-1 p-4 rounded ml-44 sm:ml-0 ">
              {/* <h2 className="mb-4 text-4xl font-semibold"></h2> */}
              <Image src={images.reports} alt="" />
            </div>

            <div className="flex flex-col flex-1 p-4 rounded ">
              <div className="flex flex-col gap-[32px]">
                <h2 className="text-xl sm:text-1xl ">
                  Elevating your customer <br /> Interactions Experience
                </h2>
              </div>

              <p
                className="relative mt-12 border-2 border-black"
                style={{
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  borderTopWidth: 0,
                }}
              >
                <span
                  className="text-4xl absolute top-[-20px] right-1"
                  style={{ marginTop: "-6px" }}
                >
                  →
                </span>
                Learn more about proximaais Edge and customer interaction
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 3  */}
      <section
        className="mb-32 border-2  border-black +"
        style={{ borderLeftWidth: 0, borderRightWidth: 0, borderTopWidth: 0 }}
      >
        <div className="flex mb-14 sm:flex-col ">
          <div className="flex-1">
            <h2 className="mt-8 mb-8 text-2xl">Proxima for Business</h2>

            <div>
              <Image src={images.boot} alt="" />
            </div>
          </div>

          <div className="flex-1 sm:mt-12">
            <h2 className="mt-8 mb-8 text-2xl">Proxima for Social Media</h2>
            <div>
              <Image src={images.boot} alt="" />
            </div>
          </div>
        </div>

        <div className="text-center font-[500] mt-1">
          " AIP will allow customers to leverage the "<br /> power of our
          existing machine learning <br /> technologies alongside...large
          language <br /> models, directly in our existing platforms.
        </div>
        <div className="mt-8 mb-16 text-center">
          ↳ Alex Karp, CEO & Co-Founder, Palantir Technologies Inc.
        </div>
      </section>

      <section
        className="mb-40 sm:mb-10 border-2  border-black +"
        style={{ borderLeftWidth: 0, borderRightWidth: 0, borderTopWidth: 0 }}
      >
        <div className="">
          <div className="">
            <h3 className="text-6xl sm:text-3xl sm:font-semibold">
              ProximaAI: Revolutionizing <br /> Customer Interaction with <br />{" "}
              Responsible, Compliant AI <br /> for Enterprise Excellence→
            </h3>
          </div>

          <div className="flex gap-8 mt-20 mb-40 sm:flex-col">
            <div className="flex-1 mx-20">
              <Image src={images.ice} />
            </div>

            <div className="flex-1 ">
              <div className="border-b-2 border-black ">
                <h2 className="font-bold ">
                  Responsible and Compliant AI Advantage:
                </h2>
                <h2 className="mt-6 mb-6">
                  At ProximaAI, we understand the importance of responsible and
                  compliant AI solutions. Our platform empowers enterprises with
                  a distinct advantage by ensuring adherence to ethical
                  practices and regulatory standards. By leveraging AI
                  responsibly, organizations can build trust with their
                  customers and establish a reputation for integrity in their
                  industry.
                </h2>
              </div>

              <div className="flex-1 mt-10">
                <div className="border-b-2 border-black">
                  <h2 className="font-bold ">Enterprise-wide Efficiency:</h2>
                  <h2 className="mt-6 mb-6">
                    Our innovative approach focuses on creating a clear and
                    consistent communication and feedback loop. ProximaAI
                    enables organizations to streamline their operations,
                    ensuring that customer sentiments, feedback, complaints, and
                    interests are channeled efficiently to the relevant
                    departments. This not only minimizes resource usage but also
                    maximizes efficiency in addressing customer needs.
                  </h2>
                </div>
              </div>
              <div className="flex-1 mt-10 ">
                <div className="border-b-2 border-black">
                  <h2 className="font-bold ">Community-Centric Engagement:</h2>
                  <h2 className="mt-6 mb-6">
                    ProximaAI goes beyond conventional customer interaction. We
                    believe in fostering closely-knit communities where
                    customers can share experiences and insights. This
                    community-centric approach not only enhances customer
                    understanding but also strengthens the bond between
                    customers and the products or services offered by the
                    organization.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 5 */}
      <section
        className="border-2  border-black +"
        style={{ borderLeftWidth: 0, borderRightWidth: 0, borderTopWidth: 0 }}
      >
        <div className="flex gap-4 sm:overflow-x-auto sm:flex-col">
          <div className="flex-1 p-4 rounded">
            <video className="w-full h-auto " autoPlay muted loop>
              <source src={videos} type="video/mp4" />
            </video>
            <h2 className="mt-5 mb-4 text-2xl f">
              ProximaAI Maximizes Customer Engagement
            </h2>

            <p className="sm:w-[300px]">
              Utilizing features like reports, dashboards, and communities,
              ProximaAI ensures a seamless communication loop. Surveys and chat
              interactions efficiently channel customer sentiments, fostering
              understanding and shared experiences, while advanced analytics
              optimize resource usage for maximum efficiency and satisfaction.
            </p>
          </div>

          <div className="flex-1 p-4 rounded">
            <video className="w-full h-auto mx-auto m " autoPlay muted loop>
              <source src={videoss} type="video/mp4" />
            </video>
            <h2 className="mt-5 mb-4 text-2xl f">
              Data-Driven Excellence with ProximaAI
            </h2>
            <p className="sm:w-[300px]">
              Through dynamic reports, interactive dashboards, and advanced
              analytics, ProximaAI propels organizations towards data-driven
              excellence. Community building and surveys enhance customer
              understanding, while chat interactions efficiently channel
              feedback. The strategic use of search engines completes the cycle,
              ensuring organizations derive maximum value from customer data.
            </p>

            {/* <p className="mt-6 sm:w-[300px]">
              Bring intelligence to your entire enterprise, and to the core of
              the decisions and operations that matter most.
            </p> */}
          </div>

          <div className="flex-1 p-4 rounded">
            <video className="w-full h-auto mx-auto m " autoPlay muted loop>
              <source src={videosss} type="video/mp4" />
            </video>
            <h2 className="mt-5 mb-4 text-2xl f">
              Efficiency Redefined: ProximaAI's Customer-Centric Approach
            </h2>
            <p className="sm:w-[300px]">
              ProximaAI's features, including surveys, chat analysis, and
              community building, redefine customer service. Dynamic reports and
              interactive dashboards offer real-time insights, optimizing
              resource usage for efficient handling of customer sentiments and
              complaints, ultimately enhancing overall customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6       */}
      <section
        className="border-2  border-black +"
        style={{ borderLeftWidth: 0, borderRightWidth: 0, borderTopWidth: 0 }}
      >
        <div className="mt-12 mb-12 ">
          <h2 className="text-4xl font-[410]">PROXIMA FEATURES</h2>
        </div>

        <div className="overflow-x-auto">
          <div className="flex ">
            <div className="flex-1 p-4 rounded">
              <div>
                <Image src={images.f1} />
              </div>
              <h2 className="mb-4 text-2xl f">Reports</h2>

              <p className="sm:w-[250px]">
                Proxima AI provides detailed and insightful reports that offer a
                comprehensive overview of customer sentiments, feedback,
                complaints, and interests. These reports enable organizations to
                gain valuable insights into customer interactions, allowing them
                to make informed decisions and improvements.
              </p>
            </div>

            <div className="flex-1 p-4 rounded">
              <div>
                <Image src={images.f2} />
              </div>
              <h2 className="mb-4 text-2xl f">Descriptive Analytics</h2>

              <p className="sm:w-[250px]">
                Leveraging descriptive analytics, Proxima AI helps organizations
                make sense of historical customer data. This feature provides a
                detailed understanding of past interactions, allowing businesses
                to identify patterns and trends that can inform strategic
                decision-making.
              </p>
            </div>
            <div className="flex-1 p-4 rounded">
              <div>
                <Image src={images.f3} />
              </div>
              <h2 className="mb-4 text-2xl f">Predictive Analysis</h2>

              <p className="sm:w-[250px]">
                Proxima AI goes beyond the present by offering predictive
                analytics capabilities. By analyzing historical data, the
                platform can forecast future trends and customer behaviors,
                empowering organizations to proactively address potential issues
                and opportunities.
              </p>
            </div>
            <div className="flex-1 p-4 rounded">
              <div>
                <Image src={images.f4} />
              </div>
              <h2 className="mb-4 text-2xl f">Search Engine</h2>

              <p className="sm:w-[250px]">
                Proxima AI incorporates a powerful search engine that allows
                organizations to quickly and efficiently retrieve relevant
                information from customer interactions. This feature streamlines
                the process of addressing customer queries and concerns.
              </p>
            </div>
          </div>
          <div className="flex ">
            <div className="flex-1 p-4 rounded ">
              <div>
                <Image src={images.f5} />
              </div>
              <h2 className="mb-4 text-2xl f">Community</h2>

              <p className="sm:w-[250px]">
                Proxima AI fosters closely-knit customer communities, providing
                a space where customers can share their experiences with a
                company&#39;s products. This community-building approach
                enhances understanding and solidarity among customers,
                contributing to a positive brand image.
              </p>
            </div>
            <div className="flex-1 p-4 rounded">
              <div>
                <Image src={images.f6} />
              </div>
              <h2 className="mb-4 text-2xl f">Chat Interactions</h2>

              <p className="sm:w-[250px]">
                The platform facilitates real-time chat interactions between
                customers and businesses, fostering immediate communication.
                This feature ensures that customer inquiries are addressed
                promptly, contributing to a positive customer experience.
              </p>
            </div>{" "}
            <div className="flex-1 p-4 rounded">
              <div>
                <Image src={images.f7} />
              </div>
              <h2 className="mb-4 text-2xl f">Chat Analysis</h2>

              <p className="sm:w-[250px]">
                Proxima AI employs advanced algorithms to analyze chat
                interactions, extracting valuable insights from customer
                conversations. This analysis helps organizations understand
                customer preferences, concerns, and satisfaction levels, guiding
                them in refining their communication strategies.
              </p>
            </div>{" "}
            <div className="flex-1 p-4 rounded">
              <div>
                <Image src={images.f8} />
              </div>
              <h2 className="mb-4 text-2xl f">Survey</h2>

              <p className="sm:w-[250px]">
                The platform facilitates the creation and deployment of surveys
                to gather feedback from customers. Surveys play a crucial role
                in understanding customer satisfaction, preferences, and areas
                for improvement, enabling organizations to tailor their
                strategies accordingly.
              </p>
            </div>
            <div className="flex"></div>
          </div>
          <div className="flex ">
            <div className="flex-1 p-4 rounded">
              <div>
                <Image src={images.f9} />
              </div>
              <h2 className="mb-4 text-2xl f">Dashboards</h2>

              <p className="sm:w-[250px]">
                The platform features dynamic dashboards that present real-time
                data in a visually appealing and easy-to-understand format.
                These dashboards offer a snapshot of key performance indicators,
                helping organizations monitor and analyze customer-related
                metrics efficiently.
              </p>
            </div>
            <div className="flex-1 p-4 rounded">
              <h2 className="mb-4 text-2xl f"></h2>

              <p className="sm:w-[250px]"></p>
            </div>{" "}
            <div className="flex-1 p-4 rounded">
              <h2 className="mb-4 text-2xl f"></h2>

              <p className="sm:w-[250px]"></p>
            </div>{" "}
            <div className="flex-1 p-4 rounded">
              <h2 className="mb-4 text-2xl f"></h2>
              <p className="sm:w-[250px]">hey</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20 mb-20 ">
        <div className="flex">
          <div className="flex-1 text-7xl sm:text-4xl ">
            Get Started with Proxima
          </div>

          <div className="flex-1 ">
            <div className="border-b-2 border-black">
              <h2 className="mt-6 mb-6">FIRST NAME</h2>
            </div>
            <div className="border-b-2 border-black">
              <h2 className="mt-6 mb-6">LAST NAME</h2>
            </div>
            <div className="border-b-2 border-black">
              <h2 className="mt-6 mb-6">JOB TITLE</h2>
            </div>
            <div className="border-b-2 border-black">
              <h2 className="mt-6 mb-6">BUSINESS EMAIL</h2>
            </div>
            <div className="border-b-2 border-black">
              <h2 className="mt-6 mb-6">PHONE NUMBER</h2>
            </div>
            <div className="border-b-2 border-black">
              <h2 className="mt-6 mb-6">COMPANY / INSTITUTION</h2>
            </div>
            <div className="border-b-2 border-black">
              <h2 className="mt-6 mb-6">COUNTRY</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Product;



