import { Link, useParams } from "react-router-dom";
import { ArrowRight, Building2, MapPin, Users } from "lucide-react";
import { areaPages, serviceLinks } from "../data/areaPages";

const address =
  "Office No. 66, Ground Floor, Signature Global The Millennia, 1st Street, Garauli Kalan, Sector 37C, Gurgaon, Haryana 122001";

export const AreasWeServe = () => (
  <main>
    <AreaHero
      eyebrow="Areas We Serve"
      title="Areas We Serve in Gurgaon"
      description="Strive Business Solution covers nearby Gurgaon locations from our Sector 37C office, helping employers and job seekers find the right local page for their area."
    />
    <section className="bg-sky-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-xl md:p-10">
          <h2 className="text-3xl font-bold text-gray-900">Gurgaon Area Pages</h2>
          <p className="mt-3 max-w-3xl text-lg text-gray-600">
            Select a nearby location to view the dedicated local page for that area.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {areaPages.map((area) => (
              <Link
                key={area.slug}
                to={`/areas-we-serve/${area.slug}/`}
                className="group rounded-2xl border border-sky-100 bg-sky-50 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:bg-white hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">HR Consultancy in {area.area}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{area.distance}.</p>
                  </div>
                  <ArrowRight className="mt-1 h-5 w-5 text-sky-700 transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <InfoCard
            title="Core Gurgaon Side"
            items={["Sector 37C", "Sector 37D", "Sector 37", "Sector 10A", "Sector 9"]}
          />
          <InfoCard
            title="Nearby Corridors"
            items={["Basai", "Pataudi Road", "Dwarka Expressway", "Hero Honda Chowk", "New Gurgaon connectivity"]}
          />
        </div>
      </div>
    </section>
  </main>
);

export const AreaPage = () => {
  const { slug } = useParams();
  const area = areaPages.find((item) => item.slug === slug);

  if (!area) {
    return (
      <main className="bg-sky-50 py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Area page not found</h1>
          <Link className="mt-6 inline-flex rounded-full bg-sky-700 px-6 py-3 font-semibold text-white" to="/areas-we-serve/">
            Back to Areas We Serve
          </Link>
        </div>
      </main>
    );
  }

  const nearbyAreas = areaPages.filter((item) => item.slug !== area.slug);

  return (
    <main>
      <AreaHero
        eyebrow="Areas We Serve"
        title={`HR Consultancy in ${area.area} Gurgaon`}
        description={`If you are searching for HR Consultancy in ${area.area} Gurgaon, Recruitment Agency in ${area.area} Gurgaon, or a reliable Placement Consultant in ${area.area} Gurgaon, Strive Business Solution supports employers and job seekers across ${area.area} from our Gurgaon office.`}
        breadcrumb={`HR Consultancy in ${area.area}`}
      />

      <section className="bg-sky-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <article className="rounded-3xl border border-sky-100 bg-white p-6 shadow-xl md:p-12">
            <Link className="inline-flex rounded-full border border-sky-200 px-4 py-2 text-sm font-bold text-sky-800 hover:bg-sky-50" to="/areas-we-serve/">
              Back to Areas We Serve
            </Link>

            <LinkBox title="Our HR Services" description="Service pages available on the Strive Business Solution website." links={serviceLinks} />
            <LinkBox
              title="Nearby Gurgaon Areas We Serve"
              description="Move between related area pages to understand our local service coverage."
              links={[["All Gurgaon Areas We Serve", "/areas-we-serve/"], ...nearbyAreas.map((item) => [`HR Consultancy in ${item.area}`, `/areas-we-serve/${item.slug}/`])]}
            />

            <ContentSection title={`Local Hiring Support Near ${area.area}`}>
              <p>
                People searching for HR consultants in {area.area} usually want speed, trust and local hiring understanding. Employers do not only want a resume database. They want candidates who can travel to the office, understand Gurgaon salary expectations, join on time and stay beyond the first few weeks.
              </p>
              <p>
                For {area.area}, relevance comes from practical proximity. Strive Business Solution is based in Sector 37C and serves {area.nearby}. We do not claim a fake branch in {area.area}; we show that the service area is real, nearby and commercially connected.
              </p>
            </ContentSection>

            <ContentSection title={`Why ${area.area} Employers Need a Local Recruitment Partner`}>
              <p>
                {area.area} sits inside a fast-moving Gurgaon hiring market where companies often need staff quickly but cannot afford poor matches. Strive Business Solution works with {area.audience}.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>Recruitment support for junior, mid-level and business-critical roles.</li>
                <li>Candidate screening based on role fit, salary expectation and location practicality.</li>
                <li>Staffing support for sales, operations, admin, HR, customer support and back-office hiring.</li>
                <li>Local Gurgaon hiring guidance for employers who need realistic timelines.</li>
              </ul>
            </ContentSection>

            <div className="grid gap-6 md:grid-cols-2">
              <InfoCard title="Permanent Recruitment" items={["Full-time hiring", "Role clarity", "Relevant shortlisting", "Interview coordination"]} />
              <InfoCard title="Bulk Hiring" items={["Sales teams", "Customer support", "Operations staff", "Field roles"]} />
              <InfoCard title="HR Consulting" items={["Hiring process clarity", "Candidate communication", "Recruitment planning", "Local market guidance"]} />
              <InfoCard title="Placement Support" items={["Genuine openings", "Salary expectation clarity", "Work location matching", "Joining timeline guidance"]} />
            </div>

            <ContentSection title={`Local Relevance Around ${area.area}`}>
              <p>
                Hiring in Gurgaon is heavily shaped by commute and availability. We consider the realities of daily movement around {area.nearby}. Interviews, joining dates and attendance are easier to manage when the hiring discussion includes location from the beginning.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {area.landmarks.map((landmark) => (
                  <span key={landmark} className="rounded-full bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-900">
                    {landmark}
                  </span>
                ))}
              </div>
            </ContentSection>

            <ContentSection title={`Directions from ${area.area}`}>
              <p>
                To visit Strive Business Solution, head toward Signature Global The Millennia, 1st Street, Garauli Kalan, Sector 37C, Gurgaon. We are {area.distance}, with practical access through nearby Gurgaon routes.
              </p>
              <a
                className="mt-4 inline-flex rounded-full bg-sky-700 px-6 py-3 font-bold text-white hover:bg-sky-900"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
              >
                Get Directions
              </a>
            </ContentSection>

            <ContentSection title={`FAQs About HR Consultancy in ${area.area} Gurgaon`}>
              <Faq question={`Do you provide HR consultancy in ${area.area} Gurgaon?`} answer={`Yes. Strive Business Solution serves ${area.area} from our nearby office in Sector 37C, Gurgaon.`} />
              <Faq question={`Are you physically located in ${area.area}?`} answer={`Our office is located at ${address}. We serve ${area.area} as a nearby service area and do not claim a separate branch there.`} />
              <Faq question="What types of roles can you help hire for?" answer="We support hiring for sales, HR, customer support, telecalling, admin, accounts, operations, field staff, back-office and other business roles." />
              <Faq question="Can you help with urgent hiring?" answer="Yes. Timelines depend on the role, salary and interview process, but we work to shortlist relevant candidates quickly." />
            </ContentSection>
          </article>
        </div>
      </section>
    </main>
  );
};

const AreaHero = ({ eyebrow, title, description, breadcrumb }) => (
  <section className="bg-gradient-to-br from-sky-800 to-cyan-500 py-24 text-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-5 text-sm font-semibold opacity-95">
        <Link to="/" className="hover:underline">Home</Link> / {breadcrumb ? <><Link to="/areas-we-serve/" className="hover:underline">Areas We Serve</Link> / {breadcrumb}</> : "Areas We Serve"}
      </div>
      <p className="text-sm font-bold uppercase tracking-wide text-cyan-100">{eyebrow}</p>
      <h1 className="mt-3 max-w-5xl text-4xl font-black leading-tight md:text-6xl">{title}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-sky-50">{description}</p>
    </div>
  </section>
);

const LinkBox = ({ title, description, links }) => (
  <section className="mt-8 rounded-3xl border border-sky-100 bg-sky-50 p-6">
    <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    <p className="mt-2 text-gray-600">{description}</p>
    <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
      {links.map(([label, href]) => (
        <a key={`${label}-${href}`} href={href} className="rounded-2xl border border-sky-100 bg-white px-4 py-3 font-bold text-sky-900 transition hover:bg-sky-700 hover:text-white">
          {label}
        </a>
      ))}
    </div>
  </section>
);

const ContentSection = ({ title, children }) => (
  <section className="mt-12">
    <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
    <div className="mt-4 space-y-4 text-lg leading-8 text-gray-700">{children}</div>
  </section>
);

const InfoCard = ({ title, items }) => (
  <div className="rounded-3xl border border-sky-100 bg-sky-50 p-6">
    <h3 className="flex items-center gap-2 text-xl font-bold text-sky-950">
      <Building2 className="h-5 w-5 text-sky-700" />
      {title}
    </h3>
    <ul className="mt-4 space-y-2 text-gray-700">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-sky-600" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Faq = ({ question, answer }) => (
  <div className="border-b border-sky-100 py-5">
    <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900">
      <Users className="h-5 w-5 text-sky-700" />
      {question}
    </h3>
    <p className="mt-2 text-gray-700">{answer}</p>
  </div>
);

export default AreasWeServe;
