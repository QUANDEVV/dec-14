import React from 'react'
import images from "../../assets";
import Image from "next/image";

const Report = () => {
  return (
    <div>
      <section>
        <div className="flex gap-20 mt-20 mb-20 sm:flex-col">
          <div className="flex-1">
            <h2 className="text-[42px] ">Proxima AIP</h2>
          </div>
          <div className="flex-1 sm:flex-col">
            <h2 className="text-[28px] sm:flex-col">
              Activate full spectrum AI in days, and drive enterprise
              operations.
            </h2>
          </div>
        </div>
        <div>
          <Image src={images.aips} />
        </div>
      </section>

      <section className="mt-20 mb-20 border-b-2 border-black">
        <div className="flex sm:flex-col">
          <div className="flex-1">
            <h2 className="text-[42px] ">Proxima Bootcamps</h2>
            <h2 className="mt-6 text-[26px]"></h2>

            <div className="  p-4 bg-black justify-center items-start gap-4 inline-flex mt-[41px]">
              <div className="text-lg font-normal leading-normal text-white ">
                schedule Proxima Bootcamp
              </div>
              <div className="relative flex flex-col items-start justify-start w-5 h-6 text-white" />
              →
            </div>
          </div>
          <div className="flex-1 mb-20">
            <Image src={images.why} />
          </div>
        </div>
      </section>

      {/* SECTION 3  */}

      <section className="mt-20 mb-20 border-b-2 border-black">
        <div className="flex gap-12 mt-20 sm:flex-col mb-28">
          <div className="flex-1">
            <h2 className="text-[42px]">Powered by the Proxima Ontology</h2>
          </div>

          <div className="flex-1">
            <h2 className="text-[26px]">
              &quot;ProximaAI: Elevate operations swiftly. A decision-centric
              system integrating AI seamlessly with enterprise data, ensuring
              efficient customer engagement and optimized internal
              processes.&quot;
            </h2>
          </div>
        </div>
        <div className="mb-28">
          <Image src={images.ontology} />
        </div>

        <div className="flex gap-8 sm:flex-col">
          <div className="flex-1">
            <div>
              <Image src={images.ai1} />
            </div>
            <h2 className="text-[42px] mt-6 mb-6">
              Unleash Proxima&#39;s Full Potential.
            </h2>

            <h2 className="text-[16px]">
              ProximaAI&#39;s reporting feature acts as a key component in
              unlocking its full potential. Reports provide organizations with
              actionable insights into customer sentiments, enabling them to
              make informed decisions. This contributes to a clearer
              understanding of customer needs, effective communication, and
              improved overall customer experience.
            </h2>
          </div>
          <div className="flex-1">
            <div>
              <Image src={images.ai2} />
            </div>
            <h2 className="text-[42px] mt-6 mb-6">
              ProximaAI&#39;s Unveiled in Actionable Reporting
            </h2>

            <h2 className="text-[16px]">
              ProximaAI&#39;s reporting feature goes beyond data visualization;
              it translates insights into actionable strategies. Reports become
              a tool for organizations to adapt, respond, and continually
              improve customer service based on the valuable information
              generated from the communication and feedback loop.
            </h2>
          </div>
          <div className="flex-1 mb-20">
            <div>
              <Image src={images.ai3} />
            </div>
            <h2 className="text-[42px] mt-6 mb-6">
              Optimizing Efficiency with ProximaAI's Reports
            </h2>

            <h2 className="text-[16px]">
              ProximaAI&#39;s reporting feature plays a pivotal role in resource
              optimization. By providing organizations with clear and actionable
              data, reports contribute to a strategic allocation of resources,
              minimizing waste, and maximizing efficiency in delivering a
              superior customer service experience.
            </h2>
          </div>
        </div>
      </section>

      {/* SECTION 6 */}
      <section className="mt-20 mb-20 border-b-2 border-black">
        <div className="flex mt-20 mb-20 sm:flex-col ">
          <div className="flex-1">
            <h2 className="text-[42px]">Bring Full Spectrum AI to Life</h2>
          </div>

          <div className="flex-1">
            <h2 className="text-[28px]">
              From secure LLM access to rich end user applications, AIP provides
              an integrated architecture that brings AI to every decision.
            </h2>
          </div>
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
              <p className="sm:w-[250px]"></p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7  */}

      <section className="mt-20 mb-20 border-b-2 border-black">
        <div className="flex sm:flex-col">
          <h2>Proxima in Action</h2>
          <div className="flex-1"></div>
          <div className="flex-1"></div>
          <div className="flex-1"></div>
        </div>
        <div className="flex sm:flex-col">
          <div className="flex-1"></div>
          <div className="flex-1"></div>
          <div className="flex-1"></div>
        </div>
      </section>

      {/* SECTION 8  */}
      <section className="mt-20 border-b-2 border-black ">
        <div className="flex mt-20 mb-20 sm:flex-col ">
          <div className="flex-1 ">
            <h2 className="text-[42px]">AIP Virtual Tables</h2>
          </div>
          <div className="flex-1 text-[28px]">
            Starting has never been easier. Connect your existing data
            investments and go.
          </div>
        </div>

        <div className="flex-1">
          <Image src={images.tables} />
        </div>

        <div className="flex gap-8 mt-20 mb-20">
          <div className="flex-1 text-[26px]">
            Virtual Tables is a connectivity solution that makes it easy to get
            started with AIP, without requiring any data replication or
            duplication →
          </div>
          <div className="flex-1">
            <div className="border-b-2 border-black">
              <h2 className="mt-6 mb-6">
                A fast track for getting started with the Ontology and AIP.
              </h2>
            </div>
            <div className="border-b-2 border-black">
              <h2 className="mt-6 mb-6">Maintain architectural flexibility.</h2>
            </div>
            <div className="border-b-2 border-black">
              <h2 className="mt-6 mb-6">
                Improved performance and cost-efficiency.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* LAST SECTION */}
      <section className="">
        <div className="flex mt-20">
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

export default Report