import Link from "next/link";
import { IoDocumentTextOutline } from "react-icons/io5";
import { PiCheckSquare } from "react-icons/pi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { CiSquareAlert } from "react-icons/ci";
import { RiDiscountPercentLine } from "react-icons/ri";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { HiOutlineChartPie } from "react-icons/hi2";
import { TbScan } from "react-icons/tb";

const Home = () => {
  return (

    <div className="flex-col space-y-20 py-10">
      <div className="flex-col space-y-10">
        <p className="text-7xl font-bold leading-normal">
          We help you raise capital
        </p>
        <p className="font-light text-2xl">
          {" "}
          Your dedicated team for creating great deals.
        </p>
        <div>
          <Link
            href="https://tally.so/r/mYQMG0"
            className="bg-black text-white font-normal rounded-[12px] p-4"
          >
            Get in touch
          </Link>
        </div>
      </div>

      <div className="flex-col space-y-5">
        <p className="text-5xl font-medium text-center">Our Services</p>
        <p className="font-extralight text-center text-lg">
          Quickly connect with verified buyers & sellers on our platform for
          seamless deal-making.
        </p>


        <div className="flex gap-5 font-normal">
          <div className="space-y-10 w-1/2 text-white rounded-[24px] flex-col space-y-3 flex-grow">
            <div className="bg-black text-white rounded-[24px] p-10 flex-col space-y-5 flex-grow">
              <IoDocumentTextOutline size={30} />
              <p className="font-normal text-4xl"> Pitch Deck</p>
              <p className="font-light text-base">
                We'll weave your story into a powerful narrative to elevate your
                presence in the investor arena.
              </p>
              <p className="underline">
                <Link
                  href="https://tally.so/r/mYQMG0"
                  className="pt-4  text-base "
                >
                  Schedule a Call
                </Link>
              </p>
            </div>
            <div className="bg-black text-white rounded-[24px] p-10 flex-col space-y-5 flex-grow">
              <HiOutlineDocumentReport size={30} />
              <p className="font-normal text-4xl"> Valuation Reports</p>
              <p className="font-light text-base">
                Get to know how much is your company’s worth? This will help you
                raise capital.
              </p>
              <p className="underline">
                <Link href="https://tally.so/r/mYQMG0">Schedule a Call</Link>
              </p>
            </div>
            <div className="bg-black text-white rounded-[24px] p-10 flex-col space-y-5 flex-grow">
              <IoPersonOutline size={30} />
              <p className="font-normal text-4xl"> Virtual CFO</p>
              <p className="font-light text-base">
                Let our experts navigate and optimize your finances.
              </p>
              <p className="underline">
                <Link href="https://tally.so/r/mYQMG0">Schedule a Call</Link>
              </p>
            </div>
          </div>
          <div className="space-y-5 w-1/2 flex flex-col">
            <div className="bg-black text-white rounded-[24px] p-10 h-auto flex-col space-y-5 flex-grow">
              <PiCheckSquare size={30} />
              <p className="font-normal text-4xl"> Financial Model</p>
              <p className="font-light text-base">
                Dreaming of an investor-ready financial model? We've got you
                covered! We'll craft your entire business financial model from
                scratch, ensuring it's ready to impress investors. <br /> <br />
                Our team combines industry insights and financial expertise to
                create a comprehensive model that not only impresses investors
                but also serves as a strategic tool for your business growth.
              </p>
              <p className="underline">
                <Link href="https://tally.so/r/mYQMG0">Schedule a Call</Link>
              </p>
            </div>
            <div className="bg-black text-white rounded-[24px] p-10 flex-col space-y-5 flex-grow">
              <CiSquareAlert size={30} />
              <p className="font-normal text-4xl"> End to End Fund Raising</p>
              <p className="font-light text-base">
                We will handhold your entire fund raising process. We'll be your
                dedicated guide, providing hands-on support throughout the
                entire process
              </p>
              <p className="underline">
                <Link href="https://tally.so/r/mYQMG0">Schedule a Call</Link>
              </p>
            </div>
          </div>
        </div>



      </div>

      <div className="flex-col space-y-5">
        <p className="text-5xl text-center font-medium">
          {" "}
          Investor - Company Matchmaking
        </p>
        <p className="font-extralight text-center text-lg">
          {" "}
          Quickly connect with verified companies and investors on our platform
          for making seamless deals.
        </p>
        <div className="flex gap-5 font-normal">
          <div className="relative bg-black text-white rounded-[24px] p-10 w-1/2 flex-col space-y-5">
            <div className="absolute right-0 top-0 h-16 w-16">
              <div className="absolute right-[-34px] top-[30px] w-[170px] transform rotate-45 bg-white text-center text-black font-normal py-1">
                Coming Soon
              </div>
            </div>
            <RiDiscountPercentLine size={30} />
            <p className="font-normal text-4xl"> Company</p>
            <p className="font-light text-base">
              Companies can list anonymously and attract inbound interest.
            </p>
          </div>
          <div className="relative bg-black text-white rounded-[24px] p-10 w-1/2 flex-col space-y-5">
            <div className="absolute right-0 top-0 h-16 w-16">
              <div className="absolute right-[-34px] top-[30px] w-[170px] transform rotate-45 bg-white text-center text-black font-normal py-1">
                Coming Soon
              </div>
            </div>
            <HiOutlineShoppingCart size={30} />
            <p className="font-normal text-4xl"> Financial Institutions</p>
            <p className="font-light text-base">
              Financial Institutions can explore a diverse selection of verified
              companies.
            </p>
          </div>
        </div>
        <p className="font-light">
          We facilitate hassle-free fundraising and M&A conversations that lead
          to successful deals – only pay us after a deal is done.
        </p>
      </div>

      <div className="flex-col space-y-5">
        <p className="text-5xl text-center font-medium">
          {" "}
          Business Valuation & Funding Readiness Index
        </p>
        <p className="font-extralight text-center text-lg">
          {" "}
          Unlock the value of your business with our intuitive online valuation
          calculator and funding readiness index — precise, quick, and
          hassle-free!
        </p>
        <div className="flex gap-5 font-normal">
          <div className="relative bg-black text-white rounded-[24px] p-10 w-1/2 flex-col space-y-5 sm:w-full ">
            <div className="absolute right-0 top-0 h-16 w-16">
              <div className="absolute right-[-34px] top-[30px] w-[170px] transform rotate-45 bg-white text-center text-black font-normal py-1">
                Coming Soon
              </div>
            </div>
            <HiOutlineChartPie size={30} />
            <p className="text-4xl">
              {" "}
              Business Valuation for Companies
            </p>
            <p className="font-light text-base">
              Get your business valuation through our quick online valuation
              calculator tool.
            </p>
          </div>
          <div className="relative bg-black text-white rounded-[24px] p-10 w-1/2 flex-col space-y-5 sm:w-full ">
            <div className="absolute right-0 top-0 h-16 w-16">
              <div className="absolute right-[-34px] top-[30px] w-[170px] transform rotate-45 bg-white text-center text-black font-normal py-1">
                Coming Soon
              </div>
            </div>
            <TbScan size={30} />
            <p className="text-4xl">
              {" "}
              Funding Readiness Index (FRI)
            </p>
            <p className="font-light text-base">
              Discover your capital-raising readiness! Take our quick
              questionnaire, unlock your score, and receive expert advice to
              bridge the gap. Elevate your fundraising success now!
            </p>
          </div>
        </div>
      </div>

      <div className="text-center flex-col space-y-10">
        <p className="font-light">
          Regardless of whether you're a company representative, an investor, a
          lender, or any other interested party, we're keen on connecting with
          you. Feel free to reach out – we're here to engage!
        </p>
        <div>
          <Link
            href="https://tally.so/r/mYQMG0"
            className="bg-black text-white rounded-[12px] font-normal p-4"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
