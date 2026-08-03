import { ShieldCheck, Target, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import hero2 from "@/assets/hero-2.jpg";
import { company, companyValues } from "@/data/brochure";
import { Link } from "react-router-dom";

const stats = [
  { value: "2017", label: "Established" },
  { value: "3", label: "Branch Offices" },
  { value: "5", label: "Service Verticals" },
  { value: "24", label: "Brands Represented" },
];

const aboutGallery = [
  {
    src: "/assets/aboutusimages/aboutusimages.jpeg",
    title: "Worksite protection",
    text: "Industrial safety essentials built for demanding environments.",
    badge: "Featured view",
  },
  {
    src: "/assets/aboutusimages/aboutusimages1.jpeg",
    title: "Safety systems",
    text: "Products and solutions presented in a clean, modern language.",
    badge: "Product story",
  },
  {
    src: "/assets/aboutusimages/aboutusimages2.jpeg",
    title: "Operations on ground",
    text: "A visual snapshot of the practical, real-world side of the brand.",
    badge: "On site",
  },
] as const;

const About = () => {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Aayush Enterprises is a safety solutions company based in Aurangabad, Maharashtra, focused on protecting lives through products, services and systems."
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={hero2} alt="Industrial safety equipment" width={1920} height={1080} loading="lazy" className="w-full aspect-[4/3] object-cover border-2 border-secondary" />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 border-2 border-secondary shadow-bold hidden md:block">
              <div className="font-display text-5xl">{company.established}</div>
              <div className="text-xs font-bold uppercase tracking-wider">Established Since</div>
            </div>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-3">
              <span className="text-primary">●</span> Our Story
            </div>
            <h2 className="font-display text-4xl md:text-5xl uppercase leading-tight">
              {company.tagline}. <br />
              Safety across every worksite.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Founded in {company.established}, Aayush Enterprises is headquartered in Aurangabad, Maharashtra with three branch offices and two manufacturing locations. The company provides complete safety solutions across Workplace Safety Gears, System Installations, Car Hire Services, Auditing and Consulting Services and Turn Key Projects.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The brochure emphasizes protecting people at the workplace regardless of their work type, supported by trainings, consulting, digital printing, car hire and complete system installations.
            </p>
            <Button asChild className="mt-8 bg-secondary text-secondary-foreground font-bold uppercase h-12 px-7">
              <Link to="/brands">See Our Brands</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-background pb-20 md:pb-28">
        <div className="container">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-3">
              <span className="text-primary">•</span> About Us Gallery
            </div>
            <h2 className="font-display text-4xl md:text-6xl uppercase leading-[0.92]">
              A visual story of the
              <span className="inline-block bg-secondary text-secondary-foreground px-2 mx-2">brand</span>
              and the work behind it.
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              These images help break up the text-heavy story with a more contemporary, magazine-style presentation that highlights the company’s identity, products and on-site presence.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="grid gap-5">
              <article className="group relative overflow-hidden rounded-[2rem] border-2 border-secondary bg-card shadow-bold">
                <img
                  src={aboutGallery[0].src}
                  alt={aboutGallery[0].title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/85 via-secondary/20 to-transparent" />
                <div className="absolute left-0 right-0 bottom-0 p-6 md:p-8 text-secondary-foreground">
                  <div className="inline-flex items-center gap-2 rounded-full border border-secondary-foreground/20 bg-background/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.25em] backdrop-blur-sm">
                    {aboutGallery[0].badge}
                  </div>
                  <h3 className="mt-4 font-display text-3xl md:text-4xl uppercase leading-none">
                    {aboutGallery[0].title}
                  </h3>
                  <p className="mt-3 max-w-lg text-sm md:text-base text-secondary-foreground/80">
                    {aboutGallery[0].text}
                  </p>
                </div>
              </article>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {aboutGallery.slice(1).map((item, index) => (
                <article
                  key={item.src}
                  className={`group relative overflow-hidden rounded-[2rem] border-2 border-secondary bg-card shadow-bold ${
                    index === 0 ? "min-h-[18rem]" : "min-h-[18rem]"
                  }`}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/85 via-secondary/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-secondary-foreground">
                    <div className="inline-flex items-center gap-2 rounded-full border border-secondary-foreground/20 bg-background/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.25em] backdrop-blur-sm">
                      {item.badge}
                    </div>
                    <h3 className="mt-4 font-display text-2xl md:text-3xl uppercase leading-none">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-secondary-foreground/80">
                      {item.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary text-secondary-foreground py-20">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i} className="border-l-4 border-primary pl-5 text-left">
              <div className="font-display text-5xl md:text-6xl text-primary">{s.value}</div>
              <div className="text-xs font-bold uppercase tracking-wider mt-2 text-secondary-foreground/80">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container grid md:grid-cols-3 gap-8">
          {[
            { icon: Target, title: "Vision", text: "To be a market leader in protecting employees and workforce at various organizations and to develop a world class safety culture within the society by 2030." },
            { icon: Eye, title: "Mission", text: "To deliver complete safety solutions through trusted brands, expert services and practical on-site systems." },
            { icon: ShieldCheck, title: "Values", text: "Safety of employee and product, quality of services, integrity, customer satisfaction, continuous improvement and agile teamwork." },
          ].map((c, i) => (
            <div key={i} className="bg-card border-2 border-secondary p-8 hover:bg-secondary hover:text-secondary-foreground transition-colors group">
              <div className="h-14 w-14 grid place-items-center bg-primary text-primary-foreground border-2 border-secondary mb-5 group-hover:rotate-6 transition-transform">
                <c.icon className="h-7 w-7" strokeWidth={2.5} />
              </div>
              <h3 className="font-display text-3xl uppercase mb-3">{c.title}</h3>
              <p className="text-sm leading-relaxed opacity-80">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-3">
              <span className="text-primary">●</span> Offices
            </div>
            <h2 className="font-display text-4xl md:text-5xl uppercase leading-tight">Office, branches and manufacturing support.</h2>
            <p className="mt-4 text-muted-foreground">
              Headquarters, manufacturing facilities and branch offices are part of the brochure footprint.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="border-2 border-secondary bg-background p-6">
              <div className="font-display text-2xl uppercase mb-2">Head Office / HQ</div>
              <p className="text-sm text-muted-foreground">{company.headquarters}</p>
            </div>
            {company.manufacturingSites.map((site, index) => (
              <div key={site} className="border-2 border-secondary bg-background p-6">
                <div className="font-display text-2xl uppercase mb-2">Manufacturing Site {index + 1}</div>
                <p className="text-sm text-muted-foreground">{site}</p>
              </div>
            ))}
            <div className="border-2 border-secondary bg-background p-6">
              <div className="font-display text-2xl uppercase mb-2">Branch Offices</div>
              <p className="text-sm text-muted-foreground">{company.branchOffices.join(", ")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-3">
              <span className="text-primary">●</span> Values
            </div>
            <h2 className="font-display text-4xl md:text-6xl uppercase">
              Built on <span className="bg-secondary text-secondary-foreground px-2">principles</span>
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {companyValues.map((value, i) => (
              <div key={value} className="border-2 border-secondary bg-card p-6 flex gap-4 items-start">
                <div className="h-12 w-12 shrink-0 grid place-items-center bg-primary text-primary-foreground border-2 border-secondary font-display text-xl">
                  0{i + 1}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
