import Link from "next/link";
import Portfolio from "@/components/portfolio/Portfolio";
import projectUs from "@/img/p1.png";
import projectUs2 from "@/img/p2.png";
import projectUs3 from "@/img/p3.png";
import projectUs4 from "@/img/p4.png";
import { BsArrowUpRightCircle } from "react-icons/bs";
export const metadata = {
  title: "Our Portfolio",
  description: "Generated by create next app",
};
const PortfolioPage = () => {
  return (
    <main>
      <section className="bg-black pt-48 pb-28 rounded-3xl">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <h1 className="text-4xl xl:text-6xl font-bold font-roboto-serif text-white leading-normal mb-4">
            Our Portfolio
          </h1>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-7xl grid md:grid-cols-2 gap-10 mx-auto px-5">
          <Portfolio
            imgsrc={projectUs}
            alt="Our Project"
            title="Web UI design"
            des="Creative UI design"
            path="/portfolio-details"
            icon={<BsArrowUpRightCircle size={28} className=" text-white" />}
          />
          <Portfolio
            imgsrc={projectUs2}
            alt="Our Project"
            title="Web UI design"
            des="Creative UI design"
            path="/portfolio-details"
            icon={<BsArrowUpRightCircle size={28} className=" text-white" />}
          />
          <Portfolio
            imgsrc={projectUs3}
            alt="Our Project"
            title="Web UI design"
            des="Creative UI design"
            path="/portfolio-details"
            icon={<BsArrowUpRightCircle size={28} className=" text-white" />}
          />
          <Portfolio
            imgsrc={projectUs4}
            alt="Our Project"
            title="Web UI design"
            des="Creative UI design"
            path="/portfolio-details"
            icon={<BsArrowUpRightCircle size={28} className=" text-white" />}
          />
        </div>
      </section>
      <section className="mb-24">
        <div className="max-w-5xl mx-auto px-5 bg-getin-bg bg-cover bg-no-repeat bg-center py-10 rounded-3xl text-center">
          <h2 className="text-4xl leading-normal xl:text-6xl text-white font-semibold font-roboto-serif xl:leading-[1.3] mb-4">
            Enough talk, let’s get to work
          </h2>
          <Link
            className="inline-block text-black bg-white font-dm-sans px-5 py-2 rounded-full"
            href="/contact"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  );
};

export default PortfolioPage;
