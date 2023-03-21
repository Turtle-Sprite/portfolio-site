import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

function ProjectManagement() {
  const [readGenOn, setReadGenOn] = useState(false);
  const [readIva, setReadIva] = useState(false);
  const [readBYG, setReadBYG] = useState(false);

  return (
    <>
      <div className="mt-4 mx-2 card2 hover:bg-none">
        <h1>Project Management</h1>
        <p>
          In New York city, I spent 4 years coordinating projects with social
          impact. I helped organize and keep fundraising projects on track for
          Iva Kaufman and Associates. At Points of Lights' youth and families
          division, generationOn, I was managed the marketing for Campaigns
          programming and oversaw over 200 grantee projects.{" "}
        </p>
      </div>
      <div className="mx-2 card" onClick={() => setReadGenOn((prev) => !prev)}>
        <div className="flex">
          <AiOutlineDown className="w-7 h-7 mt-1 mr-2 resume-list" />
          <h3>Senior Coordinator of Campaigns</h3>
        </div>
        {readGenOn ? (
          <div className="text-left resume-list">
            <h4>March 2015-October 2016</h4>
            <h4>Points of Light, New York, NY</h4>
            <p>
              Responsible for grant disbursement, building marketing content,
              and analyzing incoming data for strategic planning in a national
              nonprofit dedicated to youth activism.{" "}
            </p>
            <li>
              Managed 7 campaign cycles by building marketing campaigns and
              analyzing data for strategic planning.
            </li>
            <li>
              Tracked, coordinated, and reported on the implementation of more
              than 200 grantees volunteer projects.
            </li>
            <li>
              Created the marketing plan, content for webpages, and maintenance
              of website for all program areas.{" "}
            </li>
          </div>
        ) : null}
      </div>
      <div className="mx-2 card" onClick={() => setReadIva((prev) => !prev)}>
        <div className="flex">
          <AiOutlineDown className="w-7 h-7 mt-1 mr-2 resume-list" />
          <h3>Project Coordinator</h3>
        </div>
        {readIva ? (
          <div className="text-left resume-list">
            <h4>November 2013 - April 2015</h4>
            <h4>Iva Kaufman Associates, New York, NY</h4>
            <p>
              Coordinated the projects of a boutique agency dedicated to finding
              funding for environmental projects, social entrepreneurs, and the
              arts.{" "}
            </p>
            <li>Organized projects, contracts, and set funding goals.</li>
            <li>Coordinated newsletter marketing and fundraising campaigns.</li>
            <li>
              Solicited small to medium sized business with a focus on
              sustainability for the non-profit, American Sustainable Business
              Council (ASBC) to: recruit new members, promote community events,
              and provide marketing support for political advocacy campaigns.
            </li>
          </div>
        ) : null}
      </div>
      <div className="mx-2 card" onClick={() => setReadBYG((prev) => !prev)}>
        <div className="flex ">
          <AiOutlineDown className="w-7 h-7 mt-1 mr-2 resume-list" />
          <h3>Content Manager</h3>
        </div>
        {readBYG ? (
          <div className="text-left resume-list">
            <h4>January 2014 - March 2015</h4>
            <h4>TheBarnYardGroup, Stamford, CT</h4>
            <p>
              Organized marketing plans, created content, and collaborated with
              thought-leaders in education and women's economic empowerment to
              promote events and conferences.{" "}
            </p>
            <li>
              Wrote press releases, proposals, reports and case histories.
            </li>
            <li>
              Monitored program budgets and costs to create the most effective
              campaigns for each client.
            </li>
            <li>
              Collaborated with team members to provide social media outreach
              for multiple campaigns while branding social good initiatives.
            </li>
            <li>
              Worked on campaigns for foodtweeks (social impact app), PowerShift
              2014 (Women and Finance Forum), S.H.E. Summit (Women's Leadership
              Conference), The New York International School.
            </li>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default ProjectManagement;
