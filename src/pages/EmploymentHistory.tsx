export default function EmploymentHistory() {
  return (
    <div className="flex flex-col bg-[url('src/assets/white-w-yellow-bg.svg')] w-full text-2xl p-4 md:p-8">
      <div className="text-center">Employment History</div>
      <div>
        <div className="flex justify-between">
          <h2 className="hidden lg:block ml-6 mt-4">
            Frontend Developer - Intern
          </h2>
          <h2 className="block lg:hidden ml-6 mt-4">Frontend Dev</h2>
          <h2 className="hidden lg:block mt-4">Mar 2024 - Present</h2>
          <h2 className="block lg:hidden mt-4 ">03/24 - Now</h2>
        </div>
        <h3 className="text-base ml-8">Successr.ai - Lehi, UT</h3>
        <ul className="list-disc list-inside ml-6 mt-2 text-lg">
          <li>
            Worked directly with executive team to build brand-new,
            mobile-first, responsive front-end for entire company from scratch
            (React/Vite/TailwindCSS/TypeScript).
          </li>
          <li>
            Collaborated with design contractors to translate Figma design into
            layout and component library.
          </li>
          <li>
            Used Git for version control, Linear for project management, Agile
            development practices.
          </li>
        </ul>
        <div className="flex justify-between">
          <h2 className="hidden lg:block ml-6 mt-4">
            Account Executive I & II
          </h2>
          <h2 className="block lg:hidden ml-6 mt-4">AE I & II</h2>
          <h2 className="hidden lg:block mt-4">May 2023 - Mar 2024</h2>
          <h2 className="block lg:hidden mt-4">05/23 - 03/24</h2>
        </div>
        <h3 className="text-base ml-8">KENECT - Pleasant Grove, UT</h3>
        <ul className="list-disc list-inside ml-6 text-lg">
          <li>
            Lead and trained 8-person team to become highest revenue-producing
            team month over month.
          </li>
          <li>
            Top Account Executive in &apos;23 Q3 and Q4; only non-director to
            qualify for President&apos;s Club 2023 (top 5%).
          </li>
          <li>
            40% close rate with 170% of average monthly quota attainment,
            $600,000 increase in overall company ARR.
          </li>
          <li>
            Expanded product adoption with 800+ SMB and Mid Market clients worth
            on average $10-100M.
          </li>
        </ul>
        <div className="flex justify-between">
          <h2 className="hidden lg:block ml-6 mt-4">
            Full Cycle Account Executive
          </h2>
          <h2 className="block lg:hidden ml-6 mt-4"> Outbound AE</h2>
          <h2 className="hidden lg:block mt-4">Apr 2022 – Jan 2023</h2>
          <h2 className="block lg:hidden mt-4 ">04/22 - 01/23</h2>
        </div>
        <h3 className="text-base ml-8">Thumbtack - Sandy, UT</h3>
        <ul className="list-disc list-inside ml-6 mt-2 text-lg">
          <li>
            Self-sourced 150+ end-to-end deals with onboarding, worth $150,000
            overall company ARR.
          </li>
          <li>
            Attained 110-130% average monthly quota working with SMB to Mid
            Market Businesses (size from $1-10M).
          </li>
          <li>
            Saved accounts on the verge of cancellation, added additional spend
            to those accounts.
          </li>
        </ul>
        <div className="flex justify-between">
          <h2 className="hidden lg:block ml-6 mt-4">Account Executive</h2>
          <h2 className="block lg:hidden ml-6 mt-4">AE</h2>
          <h2 className="hidden lg:block mt-4">May 2021 – Apr 2022</h2>
          <h2 className="block lg:hidden mt-4 ">05/21 - 04/22</h2>
        </div>
        <h3 className="text-base ml-8">GoHealth - Pleasant Grove, UT</h3>
        <ul className="list-disc list-inside ml-6 mt-2 text-lg">
          <li>
            Top performer in a new pilot program; had company-record 56% sales
            conversions in the company.
          </li>
          <li>Mentored and coached teammates and other sales professionals.</li>
        </ul>
      </div>
    </div>
  );
}
