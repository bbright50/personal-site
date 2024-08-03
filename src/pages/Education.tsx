export default function Education() {
  return (
    <div className="bg-[url('src/assets/white-w-yellow-bg.svg')] w-full p-4 md:p-8">
      <div className="flex justify-between">
        <h2 className="text-xl ml-6 mt-4">Biochemistry (Coursework)</h2>
        <h2 className="text-xl hidden lg:block mt-4">Jan 2015 – Apr 2016</h2>
        <h2 className="text-xl block lg:hidden mt-4 ">01/15 - 04/16</h2>
      </div>
      <h3 className="text-sm ml-8">
        The University of Utah - Salt Lake City, UT
      </h3>
      <ul className="list-disc list-inside ml-6 mt-2">
        <li>
          Helped my classmates holding study groups and tutoring, while being in
          the top 1% of each of my classes.
        </li>
      </ul>
      <div className="flex justify-between">
        <h2 className="text-xl ml-6 mt-4">Genetics</h2>
        <h2 className="text-xl hidden lg:block mt-4">Jan 2009 – Dec 2014</h2>
        <h2 className="text-xl block lg:hidden mt-4 ">01/09 - 12/14</h2>
      </div>
      <h3 className="text-sm ml-8">Brigham Young University - Provo, UT</h3>
      <ul className="list-disc list-inside ml-6 mt-2">
        <li>
          Studied for a Bachelor&apos;s degree in Genetics before and after
          serving a 2 year LDS mission (2009-2011). Transferred as a Junior.
        </li>
      </ul>

      <h1 className="text-2xl mt-8">Certifications</h1>
      <div className="flex justify-between">
        <h2 className="text-xl ml-6 mt-4">Frontend Developer Career Path</h2>
        <h2 className="text-xl mt-4">Jan 2024 - Jun 2024</h2>
      </div>
      <h3 className="text-sm ml-8">Scrimba</h3>
      <ul className="list-disc list-inside ml-6 mt-2">
        <li>Added on a course in Tailwind CSS</li>
      </ul>
    </div>
  );
}
