import { useEffect, useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Award,
  CheckCircle2,
  CircleUserRound,
  Factory,
  HardHat,
  HeartPulse,
  Radar,
  ScanSearch,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import HeroSlider from "@/components/HeroSlider";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { coreVerticals } from "@/data/brochure";
import completeSystemInstallation from "@/assets/complete system installation .jpeg";
import industrialConsultingServices from "@/assets/industrial consulting services.jpeg";
import capabilityBuilding from "@/assets/capability building.jpeg";
import revampingImage from "@/assets/revamping image.jpeg";
import carHireServices from "@/assets/car hire services.jpeg";
import ourExpertiseSolutions from "@/assets/image.png";

const premiumStory = [
  { icon: HeartPulse, title: "Core Mission", desc: "Achieve zero workplace fatalities and injuries." },
  { icon: ShieldCheck, title: "Founded In 2017", desc: "Occupational Health and Safety for modern workplaces." },
  { icon: Radar, title: "Our Approach", desc: "Heavy-duty physical protection with smart, modern technology." },
  { icon: Factory, title: "Industries Served", desc: "Construction, manufacturing, chemical processing, warehousing, and energy." },
];

const premiumCapabilities = [
  { icon: HardHat, title: "Advanced Wearables", desc: "Smart PPE including helmets, vests, and eyewear designed to protect and monitor." },
  { icon: ScanSearch, title: "Hazard Prevention", desc: "Advanced site monitoring tools detect gas leaks, structural weaknesses, and environmental threats." },
  { icon: Users, title: "Safety Consulting", desc: "Tailored risk assessment and training modules help businesses align with global safety standards." },
  { icon: AlertTriangle, title: "Tech-Driven Solutions", desc: "Real-time alert systems keep workers connected to safety hubs instantly." },
];

const premiumReasons = [
  { icon: Award, title: "Uncompromising Quality", desc: "Every product we distribute or manufacture undergoes rigorous stress testing to meet international safety benchmarks." },
  { icon: Factory, title: "Proven Track Record", desc: "Since 2017, we have helped facilities reduce their annual incident rates." },
  { icon: CheckCircle2, title: "Worker-Centric Design", desc: "Ergonomic designs ensure that workers actually want to wear their protective equipment." },
];

type FeaturedVertical = (typeof coreVerticals)[number] & {
  image: string;
};

const featuredVerticals = [
  { ...coreVerticals[2], image: completeSystemInstallation },
  { ...coreVerticals[4], image: industrialConsultingServices },
  { ...coreVerticals[1], image: capabilityBuilding },
  { ...coreVerticals[0], image: ourExpertiseSolutions },
  { ...coreVerticals[3], image: carHireServices },
] satisfies FeaturedVertical[];

const reviews = [
  {
    name: "Aarav Sharma",
    role: "Plant Manager, Pune",
    review: "The team delivered the safety setup on time and kept every detail practical for our plant operations.",
  },
  {
    name: "Priya Nair",
    role: "Operations Head, Kochi",
    review: "Clear communication, dependable service, and safety products that actually fit our workplace needs.",
  },
  {
    name: "Rohan Mehta",
    role: "Project Lead, Indore",
    review: "Their consulting helped us improve site compliance without slowing down execution on the ground.",
  },
  {
    name: "Sneha Iyer",
    role: "Admin Manager, Bengaluru",
    review: "We saw a professional approach from planning to installation, with strong attention to worker safety.",
  },
  {
    name: "Vikram Singh",
    role: "Site Supervisor, Jaipur",
    review: "Responsive support, good product knowledge, and a team that understands industrial requirements well.",
  },
  {
    name: "Neha Patel",
    role: "HR Manager, Ahmedabad",
    review: "The safety solutions were easy to adopt and improved confidence across our workforce quickly.",
  },
];

const reviewSlides = [reviews.slice(0, 3), reviews.slice(3, 6)];

const Home = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const interval = setInterval(() => {
      carouselApi.scrollNext();
    }, 4500);

    return () => clearInterval(interval);
  }, [carouselApi]);

  return (
    <>
      <HeroSlider />

      <section className="py-16 md:py-20 bg-background border-b-2 border-secondary/10">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
            {featuredVerticals.map((item, index) => (
              <div
                key={item.title}
                className={`group relative overflow-hidden rounded-[2.3rem] border transition-all duration-300 hover:-translate-y-1 xl:min-h-[31rem] ${
                  index === 1
                    ? "border-transparent bg-[#101010] text-white shadow-[0_24px_60px_rgba(0,0,0,0.32)]"
                    : "border-secondary/15 bg-gradient-to-b from-white via-white to-slate-50 shadow-[0_20px_45px_rgba(15,23,42,0.08)]"
                }`}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-[3px] ${
                    index === 1 ? "bg-primary" : "bg-gradient-to-r from-primary via-primary/70 to-transparent"
                  }`}
                />
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain object-center p-3 transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
                </div>
                <div className="relative p-5 md:p-6">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <div className={`h-9 w-9 rounded-full border ${index === 1 ? "border-white/10 bg-white/5" : "border-secondary/10 bg-white"}`} />
                    <div className={`text-[0.65rem] font-bold uppercase tracking-[0.32em] ${index === 1 ? "text-primary" : "text-primary"}`}>
                      {index === 1 ? "Featured" : "Service"}
                    </div>
                  </div>
                  <h3 className={`font-display text-[1.65rem] md:text-[1.85rem] uppercase leading-[0.94] mb-4 ${index === 1 ? "text-white" : "text-secondary"}`}>
                    {item.title}
                  </h3>
                  <ul className={`space-y-2.5 text-[0.93rem] leading-relaxed ${index === 1 ? "text-white/78" : "text-muted-foreground"}`}>
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${index === 1 ? "bg-primary" : "bg-primary"}`} />
                        <span className="max-w-[16rem]">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="mb-10 max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-3">People Reviews</div>
            <h2 className="font-display text-4xl md:text-5xl uppercase leading-tight">What Clients Say</h2>
         
          </div>

          <Carousel opts={{ align: "start", loop: true }} setApi={setCarouselApi} className="relative">
            <CarouselContent>
              {reviewSlides.map((slide, slideIndex) => (
                <CarouselItem key={slideIndex}>
                  <div className="grid gap-6 md:grid-cols-3">
                    {slide.map((review) => (
                      <article
                        key={review.name}
                        className="rounded-[2rem] border-2 border-secondary/15 bg-gradient-to-b from-white to-slate-50 p-6 shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                            <CircleUserRound className="h-16 w-16" strokeWidth={1.4} />
                          </div>
                          <div className="mt-4 font-display text-xl uppercase leading-none">{review.name}</div>
                          <div className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                            {review.role}
                          </div>
                        </div>
                        <p className="mt-5 text-sm leading-7 text-center text-muted-foreground">"{review.review}"</p>
                      </article>
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-2 top-1/2 -translate-y-1/2 md:-left-4" />
            <CarouselNext className="-right-2 top-1/2 -translate-y-1/2 md:-right-4" />
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Home;



