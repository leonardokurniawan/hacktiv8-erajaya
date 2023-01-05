import React from 'react';

const FooterSection = () => {
  return (
    <>
      <div className="grid grid-cols-2 w-full">
        <div className="relative">
          <img
            src="/footer/1.jpg"
            alt="Our Responsibility"
            className="w-full"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50" />
          <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-white flex flex-col items-center justify-center gap-3 w-full">
            <span className="text-[33px] font-sans font-medium">
              Our Responsibility
            </span>
            <span className="text-center text-[16px] font-sans ">
              We are here, we care, and we are responsible
            </span>
            <button className="btn btn-primary bg-erajaya hover:bg-erajaya hover:opacity-80 active:bg-erajaya active:opacity-80 font-sans">
              SEE MORE
            </button>
          </div>
        </div>
        <div className="relative">
          <img src="/footer/2.png" alt="Our Annual Report" className="w-full" />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50" />
          <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-white  flex flex-col items-center justify-center gap-3 w-full">
            <span className="text-[33px] font-sans  font-medium ">
              Get Our Latest Annual Report
            </span>
            <span className="text-center text-[16px] font-sans ">
              Check out our performance over the past year our ambitions for the
              years ahead
            </span>
            <button className="btn btn-primary bg-erajaya hover:bg-erajaya hover:opacity-80 active:bg-erajaya active:opacity-80 font-sans">
              DOWNLOAD
            </button>
          </div>
        </div>
      </div>

      <footer className="bg-[#272727] w-full text-[#8e8e8e] flex justify-center">
        <div className="container px-7 py-10 flex flex-col gap-8 ">
          <div className="grid grid-cols-5">
            <div className="flex flex-col font-sans">
              <h3 className="text-white font-sans">ABOUT US</h3>
              <ul>
                <li>
                  <a href="https://www.erajaya.com/company-profile">
                    Company Profile
                  </a>
                </li>
                <li>
                  <a href="https://www.erajaya.com/vision-mission">
                    Vision &amp; Mission
                  </a>
                </li>
                <li>
                  <a href="https://www.erajaya.com/awards">Awards</a>
                </li>
                <li>
                  <a href="https://www.erajaya.com/milestones">Milestones</a>
                </li>
                <li>
                  <a href="https://www.erajaya.com/management-profiles">
                    Management Profile
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col font-sans">
              <h3 className="text-white font-sans">INVESTOR RELATIONS</h3>
              <ul>
                <li>
                  <a href="https://www.erajaya.com/financial-highlights">
                    Financial Highlights
                  </a>
                </li>
                <li>
                  <a href="https://www.erajaya.com/financial-reports">
                    Financial Reports
                  </a>
                </li>
                <li>
                  <a href="https://www.erajaya.com/annual-reports">
                    Annual Reports
                  </a>
                </li>
                <li>
                  <a href="https://www.erajaya.com/company-presentation">
                    Investor Update
                  </a>
                </li>
                <li>
                  <a href="https://www.erajaya.com/prospectus">Prospectus</a>
                </li>
                <li>
                  <a href="https://www.erajaya.com/general-meetings">
                    General Meeting of Shareholders
                  </a>
                </li>
                <li>
                  <a href="https://www.erajaya.com/dividen-stock-informations">
                    Stock Price Information
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col font-sans">
              <h3 className="text-white font-sans">SOCIAL AND EVENTS</h3>
              <ul>
                <li>
                  <a href="https://www.erajaya.com/news">Newsroom</a>
                </li>
                <li>
                  <a href="#">ESG</a>
                </li>
                <li>
                  <a href="https://www.erajaya.com/social-responsibilities">
                    CSR Events
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col font-sans text-white fpmt">
              <div>
                <a href="https://www.erajaya.com/corporate-governances">
                  <span className="font-sans font-medium">
                    CORPORATE GOVERNANCE
                  </span>
                </a>
              </div>
              <div>
                <a href="https://www.erajaya.com/line-of-verticals">
                  <span className="font-sans font-medium">
                    LINE OF VERTICALS
                  </span>
                </a>
              </div>
              <div>
                <a href="https://www.erajaya.com/careers">
                  <span className="font-sans font-medium">CAREER</span>
                </a>
              </div>
              <div>
                <a href="https://www.erajaya.com/contact">
                  <span className="font-sans font-medium">CONTACT US</span>
                </a>
              </div>
              <div>
                <a href="http://eraspace.com" target="_blank" rel="noreferrer">
                  <span className="font-sans font-medium">E-COMMERCE</span>
                </a>
              </div>
              <div>
                <a href="https://www.erajaya.com/disclaimer">
                  <span className="font-sans font-medium">DISCLAIMER</span>
                </a>
              </div>
            </div>
            <div className="flex flex-col font-sans">
              <h3 className="text-white font-sans font-medium">GET IN TOUCH</h3>
              <address className="font-sans not-italic">
                Jl. Bandengan Selatan No.19-20 <br />
                Pekojan - Tambora, Jakarta Barat <br />
                11240, Indonesia
                <br />
                <span>P. +62 21 690 5788</span> <br />
                <span>F. +62 21 690 5789</span> <br />
                <span>M. corporate@erajaya.com</span> <br />
              </address>
            </div>
          </div>
          <div className="flex p-3 border-t border-[#f3f3f333]">
            <span>Copyright © 2020 ERAJAYA.COM. ALL RIGHTS RESERVED</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
