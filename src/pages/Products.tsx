import { useMemo, useState } from "react";
import { ExternalLink, FileDown, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { miscProducts } from "@/data/brochure";
import { cn } from "@/lib/utils";

const assetUrl = (filename: string) =>
  encodeURI(`${import.meta.env.BASE_URL}assets/${filename}`);

const catalogs = [
  {
    label: "Catalog",
    title: "View and download the product catalog.",
    description:
      "Open the PDF in the browser to browse the full catalog, or download it for offline viewing and sharing.",
    pdf: assetUrl("E-Square-Alliance-Lockout-Tagout-Catalogue.pdf"),
  },
  {
    label: "Brochure",
    title: "View and download the road safety products.",
    description:
      "Open the PDF in the browser to browse the full brochure, or download it for offline viewing and sharing.",
    pdf: assetUrl("Pride Services India New Brochure (1).pdf"),
  },
];

const ppeCatalogs = [
  {
    label: "Brochure",
    title: "View and download the PPE catalogue.",
    description:
      "Open the PDF in the browser to browse the full PPE catalogue, or download it for offline viewing and sharing.",
    pdf: assetUrl("karam-brochure.pdf"),
  },
  {
    label: "Brochure",
    title: "View and download the PPE catalogue.",
    description:
      "Open the PDF in the browser to browse the full PPE catalogue, or download it for offline viewing and sharing.",
    pdf: assetUrl("Udyogi-Product-Brochure.pdf"),
  },
];

const safetyCatalogs = [
  {
    label: "Brochure",
    title: "View and download the Kunffi catalogue.",
    description:
      "Open the PDF in the browser to browse the full Kunffi catalogue, or download it for offline viewing and sharing.",
    pdf: assetUrl("knuffi-en-lo-ig-l-201606.pdf"),
  },
];

const productFilters = [
  "All",
  "Personal Protective Equipment",
  "Unique Safety Products",
  "Electrical Supplies",
  "Road Safety Products",
  "Lockout Tagout Products",
  "Material Handling Equipments",
  "Training Kiosks",
];

const filterCategoryMap: Record<string, string[]> = {
  "Personal Protective Equipment": [
    "Hand Protection",
    "Head Protection",
    "Foot Protection",
    "Eye Protection",
  ],
};
const Products = () => {
  const [active, setActive] = useState("All");
  const filtered = useMemo(() => {
    if (active === "All") {
      return products;
    }

    const mappedCategories = filterCategoryMap[active] ?? [active];
    return products.filter((p) => mappedCategories.includes(p.category));
  }, [active]);

  return (
    <>
      <PageHero
        title="Our Products"
        subtitle="Browse brochure-backed PPE, workwear and specialist safety items from Aayush Enterprises."
      />

      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {productFilters.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  "px-5 py-2.5 text-xs font-bold uppercase tracking-wider border-2 transition-all",
                  active === cat
                    ? "bg-secondary text-secondary-foreground border-secondary shadow-bold"
                    : "bg-background text-secondary border-secondary hover:bg-primary hover:border-primary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">No products in this category yet.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
        </div>
      </section>

      {catalogs.map((catalog, index) => (
        <section
          key={catalog.pdf}
          className={`py-16 md:py-20 ${index === 0 ? "bg-muted border-y-2 border-secondary" : "bg-muted border-t-2 border-secondary"}`}
        >
          <div className="container grid gap-10 lg:grid-cols-[1fr_1.1fr] items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-[0.2em] mb-4">
                <FileText className="h-4 w-4" />
                {catalog.label}
              </div>
              <h2 className="font-display text-4xl md:text-5xl uppercase leading-tight max-w-xl">
                {catalog.title}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl">
                {catalog.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold uppercase tracking-wider h-14 px-8">
                  <a href={catalog.pdf} target="_blank" rel="noopener noreferrer">
                    View Catalog <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-secondary font-bold uppercase tracking-wider h-14 px-8">
                  <a href={catalog.pdf} download>
                    Download PDF <FileDown className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="border-2 border-secondary bg-background shadow-bold overflow-hidden">
              <iframe
                title={catalog.label}
                src={catalog.pdf}
                className="h-[70vh] w-full"
              />
            </div>
          </div>
        </section>
      ))}

      {ppeCatalogs.map((catalog) => (
        <section key={catalog.pdf} className="py-16 md:py-20 bg-muted border-t-2 border-secondary">
          <div className="container grid gap-10 lg:grid-cols-[1fr_1.1fr] items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-[0.2em] mb-4">
                <FileText className="h-4 w-4" />
                {catalog.label}
              </div>
              <h2 className="font-display text-4xl md:text-5xl uppercase leading-tight max-w-xl">
                {catalog.title}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl">
                {catalog.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold uppercase tracking-wider h-14 px-8">
                  <a href={catalog.pdf} target="_blank" rel="noopener noreferrer">
                    View Catalog <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-secondary font-bold uppercase tracking-wider h-14 px-8">
                  <a href={catalog.pdf} download>
                    Download PDF <FileDown className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="border-2 border-secondary bg-background shadow-bold overflow-hidden">
              <iframe
                title={catalog.label}
                src={catalog.pdf}
                className="h-[70vh] w-full"
              />
            </div>
          </div>
        </section>
      ))}

      {safetyCatalogs.map((catalog) => (
        <section key={catalog.pdf} className="py-16 md:py-20 bg-muted border-t-2 border-secondary">
          <div className="container grid gap-10 lg:grid-cols-[1fr_1.1fr] items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-[0.2em] mb-4">
                <FileText className="h-4 w-4" />
                {catalog.label}
              </div>
              <h2 className="font-display text-4xl md:text-5xl uppercase leading-tight max-w-xl">
                {catalog.title}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl">
                {catalog.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold uppercase tracking-wider h-14 px-8">
                  <a href={catalog.pdf} target="_blank" rel="noopener noreferrer">
                    View Catalog <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-secondary font-bold uppercase tracking-wider h-14 px-8">
                  <a href={catalog.pdf} download>
                    Download PDF <FileDown className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="border-2 border-secondary bg-background shadow-bold overflow-hidden">
              <iframe
                title={catalog.label}
                src={catalog.pdf}
                className="h-[70vh] w-full"
              />
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 md:py-20 bg-muted border-t-2 border-secondary">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-3">
                <span className="text-primary">●</span> Miscellaneous / Brochure Products
              </div>
              <h2 className="font-display text-4xl md:text-5xl uppercase max-w-2xl">
                Additional Safety <span className="bg-secondary text-secondary-foreground px-2">Items</span>
              </h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {miscProducts.map((item, index) => (
              <div
                key={item.name}
                className={`border-2 p-6 ${
                  index % 2 === 0 ? "bg-card border-secondary" : "bg-secondary text-secondary-foreground border-secondary"
                }`}
              >
                <div className="text-xs font-bold uppercase tracking-[0.3em] mb-3 opacity-75">0{index + 1}</div>
                <h3 className="font-display text-2xl uppercase leading-tight mb-3">{item.name}</h3>
                <p className="text-sm leading-relaxed opacity-80">{item.summary}</p>
                <div className="mt-4 text-xs font-bold uppercase tracking-wider">{item.useCase}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
