import Image from "next/image";
import Link from "next/link";

const Portfolio = (props) => {
  return (
    <div className="group rounded-2xl relative">
      <Image
        className="mb-5 w-full h-auto"
        src={props.imgsrc}
        alt={props.alt}
      />
      <h4 className="text-xl font-roboto-serif font-medium">{props.title}</h4>
      <p>{props.des}</p>
      <Link
        href={props.path}
        className="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:block z-10 duration-100"
      >
        {props.icon}
      </Link>
    </div>
  );
};

export default Portfolio;
