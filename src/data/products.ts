import helmet from "@/assets/product-helmet.jpg";
import gloves from "@/assets/product-gloves.jpg";
import shoes from "@/assets/product-shoes.jpg";
import jacket from "@/assets/product-jacket.jpg";
import ppe from "@/assets/product-ppe.jpg";
import goggles from "@/assets/product-goggles.jpg";
import { uniqueSafetyProducts } from "@/data/uniqueSafetyProducts";

export type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
  shortDesc: string;
  description: string;
  specs: { label: string; value: string }[];
};

export const categories = [
  "All",
  "Head Protection",
  "Hand Protection",
  "Foot Protection",
  "Protective Clothing",
  "PPE Kits",
  "Eye Protection",
  "Respiratory Protection",
  "Unique Safety Products",
  "Electrical Supplies",
  "Road Safety Products",
  "Lockout Tagout Products",
];

export const products: Product[] = [
  {
    id: "industrial-safety-helmet",
    name: "Industrial Safety Helmet",
    category: "Head Protection",
    image: helmet,
    shortDesc: "ABS shell with 6-point suspension for industrial sites.",
    description:
      "Heavy-duty industrial helmet suited for construction, fabrication and maintenance work. Designed for all-day comfort with a 6-point textile suspension and rapid ratchet harness.",
    specs: [
      { label: "Material", value: "High-density ABS" },
      { label: "Standard", value: "IS 2925 / ANSI Z89.1" },
      { label: "Suspension", value: "6-point ratchet" },
      { label: "Color", value: "Hi-Vis Yellow" },
    ],
  },
  {
    id: "industrial-hand-gloves",
    name: "Industrial Hand Gloves",
    category: "Hand Protection",
    image: gloves,
    shortDesc: "Grip-focused gloves for mechanical and general protection.",
    description:
      "Work gloves for handling, assembly and general industrial activity. Comfortable fit with palm grip that supports mechanical and maintenance work.",
    specs: [
      { label: "Use", value: "Mechanical, maintenance" },
      { label: "Grip", value: "Palm-coated finish" },
      { label: "Sizes", value: "S / M / L / XL" },
      { label: "Protection", value: "General industrial handling" },
    ],
  },
  {
    id: "safety-shoes",
    name: "Safety Shoes",
    category: "Foot Protection",
    image: shoes,
    shortDesc: "Slip-resistant shoes for workplace protection.",
    description:
      "Industrial safety shoes for site, factory and warehouse applications. Built for dependable foot protection, grip and all-day wear comfort.",
    specs: [
      { label: "Sole", value: "PU / Nitrile options" },
      { label: "Standard", value: "Industrial safety footwear" },
      { label: "Toe Cap", value: "Impact-resistant" },
      { label: "Use", value: "General industrial use" },
    ],
  },
  {
    id: "reflective-safety-jacket",
    name: "Reflective Safety Jacket",
    category: "Protective Clothing",
    image: jacket,
    shortDesc: "High-visibility jacket for road and site work.",
    description:
      "Reflective jacket for road work, traffic control, warehouse movement and construction sites. Lightweight, visible and designed for day and night use.",
    specs: [
      { label: "Visibility", value: "Fluorescent with reflective tape" },
      { label: "Fabric", value: "Lightweight polyester" },
      { label: "Use", value: "Road and site safety" },
      { label: "Closure", value: "Zip front" },
    ],
  },
  {
    id: "complete-ppe-kit",
    name: "Complete PPE Safety Kit",
    category: "PPE Kits",
    image: ppe,
    shortDesc: "Head-to-toe protection bundle for work sites.",
    description:
      "Comprehensive PPE kit including helmet, eye protection, hearing protection, gloves, dust mask and visibility wear for complete on-site protection.",
    specs: [
      { label: "Includes", value: "6 protection items" },
      { label: "Use", value: "Construction, factories" },
      { label: "Packaging", value: "Reusable carry bag" },
      { label: "Customizable", value: "Yes - bulk orders" },
    ],
  },
  {
    id: "safety-goggles",
    name: "Safety Goggles",
    category: "Eye Protection",
    image: goggles,
    shortDesc: "Eye protection for dust, splash and debris.",
    description:
      "Wide-vision goggles for dust, splash and debris protection. Designed for industrial use with comfortable sealing and a secure fit.",
    specs: [
      { label: "Lens", value: "Polycarbonate" },
      { label: "Protection", value: "Dust, splash and debris" },
      { label: "Fit", value: "Adjustable strap" },
      { label: "Use", value: "Industrial eye protection" },
    ],
  },
  {
    id: "respiratory-protection-kit",
    name: "Respiratory Protection Kit",
    category: "Respiratory Protection",
    image: ppe,
    shortDesc: "Respiratory gear for dust and vapour exposure.",
    description:
      "Respiratory protection for dusty, chemical and high-risk industrial work areas. Suitable for site-level protection and controlled access environments.",
    specs: [
      { label: "Type", value: "Half / full face options" },
      { label: "Use", value: "Dust and vapour exposure" },
      { label: "Compatibility", value: "PAPR and filters" },
      { label: "Application", value: "Industrial safety" },
    ],
  },
  ...uniqueSafetyProducts,
  {
    id: "honeywell-electrosoft-leather-protector-over-gloves",
    name: "Honeywell Electrosoft - Leather Protector Over Gloves",
    category: "Electrical Supplies",
    image: "/assets/electrical-supplies/honeywell-electrosoft-leather-protector-over-gloves.png",
    shortDesc: "Water-repellent leather overglove for dielectric glove protection.",
    description:
      "Water-repellent and siliconed leather overglove for dielectric gloves in the Electrosoft latex range. Designed to add mechanical protection over insulating gloves.",
    specs: [
      { label: "Material", value: "Yellow cowhide grain leather" },
      { label: "Treatment", value: "Water-repellent and silicon" },
      { label: "Closure", value: "Velcro adjustment strap" },
      { label: "Use", value: "Overglove for dielectric gloves" },
    ],
  },
  {
    id: "honeywell-electrosoft-gloves-class-0-to-class-4",
    name: "Honeywell Electrosoft Gloves (Class 0 to Class 4)",
    category: "Electrical Supplies",
    image: "/assets/electrical-supplies/honeywell-electrosoft-gloves-class-0-to-class-4.png",
    shortDesc: "Insulating latex gloves for high voltage work up to 36kV.",
    description:
      "Beige natural latex insulating glove for handling high voltage up to 36,000 volts. Must be used with a leather protector for mechanical protection.",
    specs: [
      { label: "Voltage", value: "Up to 36,000 volts" },
      { label: "Material", value: "Natural latex" },
      { label: "Category", value: "AZC" },
      { label: "Use", value: "High voltage handling" },
    ],
  },
  {
    id: "honeywell-insulating-rubber-mats",
    name: "Honeywell Insulating Rubber Mats",
    category: "Electrical Supplies",
    image: "/assets/electrical-supplies/honeywell-insulating-rubber-mats.png",
    shortDesc: "Electrical safety mats for substations and control rooms.",
    description:
      "Insulating mats that protect workers against electric shock across substations, transformer rooms, LT and HT control panels, switch rooms, battery rooms and generator rooms.",
    specs: [
      { label: "Use", value: "Electrical safety flooring" },
      { label: "Application", value: "Substations and control rooms" },
      { label: "Protection", value: "Anti-shock barrier" },
      { label: "Format", value: "Matting rolls / sheets" },
    ],
  },
  {
    id: "salisbury-20817-static-discharge-stick",
    name: "Salisbury by Honeywell - 20817 Static Discharge Stick",
    category: "Electrical Supplies",
    image: "/assets/electrical-supplies/salisbury-20817-static-discharge-stick.png",
    shortDesc: "Tool for safely removing static charge after de-energizing.",
    description:
      "Static discharge stick designed to safely remove static charge after de-energizing. The tool is pre-assembled and includes a brass alloy U-hook and closed-cell foam filled tubular construction.",
    specs: [
      { label: "Use", value: "Static discharge after de-energizing" },
      { label: "Hook", value: "Brass alloy U-hook" },
      { label: "Handle", value: "Foam-filled tubular stick" },
      { label: "Application", value: "Electrical maintenance" },
    ],
  },
  {
    id: "salisbury-24309-single-grounding-assemblies-sets",
    name: "Salisbury by Honeywell - 24309 Single Grounding Assemblies & Sets",
    category: "Electrical Supplies",
    image: "/assets/electrical-supplies/salisbury-24309-single-grounding-assemblies-sets.png",
    shortDesc: "Temporary grounding assemblies for standard field applications.",
    description:
      "Completed single grounding assemblies for ordering convenience. These grounding sets offer versatility when performing temporary grounding across standard application needs.",
    specs: [
      { label: "Use", value: "Temporary grounding" },
      { label: "Format", value: "Single grounding assemblies" },
      { label: "Benefit", value: "Versatile field use" },
      { label: "Application", value: "Electrical safety grounding" },
    ],
  },
  {
    id: "salisbury-24401-rescue-hook",
    name: "Salisbury by Honeywell - 24401 Rescue Hook",
    category: "Electrical Supplies",
    image: "/assets/electrical-supplies/salisbury-24401-rescue-hook.png",
    shortDesc: "Insulated rescue hook for emergency release from contact.",
    description:
      "Insulated rescue hook used to release a victim from contact in vaults, confined spaces and near electrical cabinets or switchgear. Built with an insulated handle and coated body hook.",
    specs: [
      { label: "Use", value: "Emergency victim release" },
      { label: "Handle", value: "Fiberglass reinforced and insulated" },
      { label: "Hook", value: "Coated heat-treated body hook" },
      { label: "Length", value: "6 ft standard" },
    ],
  },
  {
    id: "salisbury-24403-rescue-hook",
    name: "Salisbury by Honeywell - 24403 Rescue Hook",
    category: "Electrical Supplies",
    image: "/assets/electrical-supplies/salisbury-24403-rescue-hook.png",
    shortDesc: "Insulated rescue hook for electrical rescue situations.",
    description:
      "Salisbury insulated rescue hook is an invaluable tool for workplaces where a victim may need to be released from contact near electrical equipment or in confined spaces.",
    specs: [
      { label: "Use", value: "Electrical rescue" },
      { label: "Handle", value: "Foam-filled fiberglass reinforced" },
      { label: "Hook", value: "Coated heat-treated body hook" },
      { label: "Length", value: "6 ft standard" },
    ],
  },
  {
    id: "salisbury-4214-universal-switch-stick",
    name: "Salisbury by Honeywell - 4214 Universal Switch Stick",
    category: "Electrical Supplies",
    image: "/assets/electrical-supplies/salisbury-4214-universal-switch-stick.png",
    shortDesc: "Fiberglass reinforced hot stick for live line work.",
    description:
      "Universal switch stick constructed from fiberglass reinforced plastic for live line and hotstick applications. Designed for solid construction and standard FRP compliance.",
    specs: [
      { label: "Material", value: "Fiberglass reinforced plastic" },
      { label: "Use", value: "Hot stick / live line tools" },
      { label: "Standard", value: "ASTM F711 and IEC 855" },
      { label: "Application", value: "Switching and live work" },
    ],
  },
  {
    id: "salisbury-4556-voltage-detector",
    name: "Salisbury by Honeywell - 4556 Voltage Detector 240V to 230kV",
    category: "Electrical Supplies",
    image: "/assets/electrical-supplies/salisbury-4556-voltage-detector.png",
    shortDesc: "Self-testing voltage detector with audible and visual confirmation.",
    description:
      "Self-testing voltage detector for continuous and automatic testing. An intermittent flash and beep confirms the detector is functioning properly before work begins.",
    specs: [
      { label: "Range", value: "240V to 230kV" },
      { label: "Use", value: "Voltage verification" },
      { label: "Feedback", value: "Flash and beep" },
      { label: "Application", value: "Arc flash boundary checks" },
    ],
  },
  {
    id: "salisbury-51511-dielectric-over-shoes",
    name: "Salisbury by Honeywell - 51511 Di - Electric Over Shoes",
    category: "Electrical Supplies",
    image: "/assets/electrical-supplies/salisbury-51511-dielectric-over-shoes.png",
    shortDesc: "ASTM dielectric footwear for individual worker protection.",
    description:
      "Dielectric over shoes tested for safe worker protection. Waterproof, ozone resistant and built as a safer alternative to grounding mats in electrical areas.",
    specs: [
      { label: "Material", value: "Premium ozone resistant rubber" },
      { label: "Use", value: "Dielectric footwear" },
      { label: "Standard", value: "ASTM F1117 / F1116" },
      { label: "Application", value: "Worker electrical protection" },
    ],
  },
  {
    id: "salisbury-apr0-insulating-apron",
    name: "Salisbury by Honeywell - APR0 Insulating Apron",
    category: "Electrical Supplies",
    image: "/assets/electrical-supplies/salisbury-apr0-insulating-apron.png",
    shortDesc: "Type II rubber insulating apron for low-voltage hazards.",
    description:
      "Type II rubber insulating apron that adds another layer of protection against low-voltage electrical hazards. Includes Nomex bib straps and waist straps with nonmetallic buckles.",
    specs: [
      { label: "Type", value: "Type II rubber" },
      { label: "Standard", value: "ASTM F2320" },
      { label: "Straps", value: "Nomex bib and waist straps" },
      { label: "Application", value: "Low voltage protection" },
    ],
  },
  {
    id: "salisbury-sk20-arc-flash-protection-kit",
    name: "Salisbury by Honeywell - SK20 Arc Flash Protection kit",
    category: "Electrical Supplies",
    image: "/assets/electrical-supplies/salisbury-sk20-arc-flash-protection-kit.png",
    shortDesc: "20 cal/cm2 arc flash protection kit for electrical work.",
    description:
      "Arc flash protection kit with 20 cal/cm2 ATPV rating, made from arc flash resistant material and sewn with Nomex thread for compliant electrical safety work.",
    specs: [
      { label: "Rating", value: "20 cal/cm2 ATPV" },
      { label: "Material", value: "Arc flash resistant" },
      { label: "Compliance", value: "ASTM F1506 / NFPA 70E" },
      { label: "Sizes", value: "S / M / L / XL" },
    ],
  },
  {
    id: "salisbury-sk40-arc-flash-protection-kit",
    name: "Salisbury by Honeywell - SK40 Arc Flash Protection kit",
    category: "Electrical Supplies",
    image: "/assets/electrical-supplies/salisbury-sk40-arc-flash-protection-kit.png",
    shortDesc: "40 cal/cm2 arc flash protection kit for higher exposure work.",
    description:
      "Arc flash protection kit with 40 cal/cm2 ATPV rating. Built from arc flash resistant material and designed for use where a higher level of electrical protection is required.",
    specs: [
      { label: "Rating", value: "40 cal/cm2 ATPV" },
      { label: "Material", value: "Arc flash resistant" },
      { label: "Compliance", value: "ASTM F1506 / NFPA 70E" },
      { label: "Sizes", value: "S / M / L / XL" },
    ],
  },
  {
    id: "salisbury-skca8-arc-flash-protection-coverall-kit",
    name: "Salisbury by Honeywell - SKCA8 Arc Flash Protection Coverall Kit",
    category: "Electrical Supplies",
    image: "/assets/electrical-supplies/salisbury-skca8-arc-flash-protection-coverall-kit.png",
    shortDesc: "8 cal/cm2 arc flash coverall kit with full-body protection.",
    description:
      "Arc flash protection coverall kit with 8 cal/cm2 ATPV rating. Features full cut, set-in sleeves, front closure, Nomex wristlets and compliant arc flash construction.",
    specs: [
      { label: "Rating", value: "8 cal/cm2 ATPV" },
      { label: "Material", value: "Arc flash resistant" },
      { label: "Closure", value: "FR hook and pile front closure" },
      { label: "Sizes", value: "S / M / L / XL" },
    ],
  },
  {
    id: "salisbury-switchboard-matting",
    name: "Salisbury by Honeywell - Switchboard Matting",
    category: "Electrical Supplies",
    image: "/assets/electrical-supplies/salisbury-switchboard-matting.png",
    shortDesc: "Permanent matting for switchgear and high-voltage apparatus.",
    description:
      "Switchboard matting placed in front of switchgear, motor control centers and other high-voltage apparatus to provide personal protection for workers.",
    specs: [
      { label: "Use", value: "Switchboard protection" },
      { label: "Material", value: "Type II insulating material" },
      { label: "Thickness", value: "Class 2 and Class 4 options" },
      { label: "Application", value: "Switchgear and control rooms" },
    ],
  },
  {
    id: "salisbury-tk9-basic-electrician-insulated-tool-kit",
    name: "Salisbury by Honeywell - TK 9 Basic Electrician Insulated Tool Kit",
    category: "Electrical Supplies",
    image: "/assets/electrical-supplies/salisbury-tk9-basic-electrician-insulated-tool-kit.png",
    shortDesc: "Insulated hand tool kit for electricians and live work.",
    description:
      "Insulated tool kit with hand tools rated for exposure up to 1000VAC and dielectric testing at 10,000VAC. Built to support compliance with OSHA and NFPA 70E.",
    specs: [
      { label: "Voltage", value: "Up to 1000VAC" },
      { label: "Tested", value: "10,000VAC dielectric" },
      { label: "Compliance", value: "ASTM F1505-07 / IEC 900" },
      { label: "Application", value: "Electrician insulated tools" },
    ],
  },
  {
    id: "area-barricading-tape",
    name: "Area Barricading Tape",
    category: "Road Safety Products",
    image: "/assets/road-safety-products/area-barricading-tape.jpg",
    shortDesc: "Red and white caution tape for quick hazard isolation.",
    description:
      "Barricading tape with CAUTION / DANGER print for temporary restriction, hazard marking and quick perimeter control around work zones.",
    specs: [
      { label: "Format", value: "Roll with dispenser" },
      { label: "Color", value: "Red / White" },
      { label: "Printing", value: "CAUTION / Danger" },
      { label: "Roll Length", value: "305 m" },
    ],
  },
  {
    id: "convex-mirror",
    name: "Convex Mirror",
    category: "Road Safety Products",
    image: "/assets/road-safety-products/convex-mirror.png",
    shortDesc: "Polycarbonate mirror for traffic visibility and surveillance.",
    description:
      "Wide-angle convex mirror for corners, driveways and traffic-prone areas. Built from flexible polycarbonate for improved impact resistance and outdoor visibility.",
    specs: [
      { label: "Material", value: "Polycarbonate" },
      { label: "Use", value: "Traffic safety and surveillance" },
      { label: "Durability", value: "Impact resistant" },
      { label: "Application", value: "Vandal-prone and blind spots" },
    ],
  },
  {
    id: "l-rubber-wheel-chock",
    name: "L Rubber Wheel Chock",
    category: "Road Safety Products",
    image: "/assets/road-safety-products/l-rubber-wheel-chock.png",
    shortDesc: "Heavy-duty wheel stop for parked vehicle control.",
    description:
      "Rubber wheel chock for stabilizing parked vehicles, trailers and loading bays. A simple control item for preventing unintended movement during loading or maintenance.",
    specs: [
      { label: "Size", value: "9.5 x 7 x 6.5 in" },
      { label: "Weight", value: "5.5 kg" },
      { label: "Material", value: "Rubber" },
      { label: "Use", value: "Vehicle parking and loading safety" },
    ],
  },
  {
    id: "laminated-dock-bumper",
    name: "Laminated Dock Bumper",
    category: "Road Safety Products",
    image: "/assets/road-safety-products/laminated-dock-bumper.jpg",
    shortDesc: "Dock protection block for impact absorption at loading bays.",
    description:
      "Laminated dock bumper designed to reduce impact damage at docks and loading points. Suitable for frequent truck movement where repeated bumping protection is needed.",
    specs: [
      { label: "Size", value: "4.5 x 10 x 14 in" },
      { label: "Weight", value: "12 kg" },
      { label: "Material", value: "Tyre laminates and gun metal" },
      { label: "Use", value: "Dock and loading bay protection" },
    ],
  },
  {
    id: "modular-barrier-system",
    name: "Modular Barrier System",
    category: "Road Safety Products",
    image: "/assets/road-safety-products/modular-barrier-system.jpg",
    shortDesc: "Pole-and-chain barrier for controlled access zones.",
    description:
      "Modular barrier setup for cordoning off entries, queue lines and no-entry zones. The pole-and-chain format is easy to deploy and reposition as site needs change.",
    specs: [
      { label: "Base", value: "Black PVC rubber" },
      { label: "Pole", value: "Metal pipe in red / white" },
      { label: "Chain", value: "2 m PVC chain" },
      { label: "Height", value: "3 ft system" },
    ],
  },
  {
    id: "road-studs",
    name: "Road Studs",
    category: "Road Safety Products",
    image: "/assets/road-safety-products/road-studs.png",
    shortDesc: "Reflective studs for lane marking and night visibility.",
    description:
      "Road studs for lane definition, directional guidance and reflective visibility on roads, parking areas and internal traffic routes.",
    specs: [
      { label: "Type", value: "Safety road studs" },
      { label: "Visibility", value: "Reflective" },
      { label: "Use", value: "Lane marking and traffic guidance" },
      { label: "Application", value: "Roads, parking and driveways" },
    ],
  },
  {
    id: "speed-breaker",
    name: "Speed Breaker",
    category: "Road Safety Products",
    image: "/assets/road-safety-products/speed-breaker.png",
    shortDesc: "ABS speed breaker segment with concrete fill for strength.",
    description:
      "Modular speed breaker section made from UV-protected virgin ABS plastic and filled with cement concrete for added strength and long service life.",
    specs: [
      { label: "Material", value: "UV-protected virgin ABS" },
      { label: "Core", value: "Cement concrete fill" },
      { label: "Use", value: "Traffic calming" },
      { label: "Installation", value: "Modular road segment" },
    ],
  },
  {
    id: "traffic-barricades",
    name: "Traffic Barricades",
    category: "Road Safety Products",
    image: "/assets/road-safety-products/traffic-barricades.png",
    shortDesc: "UV-stabilized plastic barricades in red, yellow or white.",
    description:
      "Lightweight plastic barricades for traffic diversion, lane control and temporary site segregation. UV-stabilized construction suits outdoor use in busy circulation areas.",
    specs: [
      { label: "Material", value: "UV-stabilized plastic" },
      { label: "Colors", value: "Red / Yellow / White" },
      { label: "Use", value: "Traffic diversion and control" },
      { label: "Format", value: "Portable barricade unit" },
    ],
  },
  {
    id: "traffic-batons",
    name: "Traffic Batons",
    category: "Road Safety Products",
    image: "/assets/road-safety-products/traffic-batons.jpg",
    shortDesc: "Handheld batons for traffic direction and control.",
    description:
      "Traffic batons in red and green colors for marshaling vehicles, guiding movement and supporting nighttime control work.",
    specs: [
      { label: "Colors", value: "Red and green" },
      { label: "Use", value: "Traffic direction" },
      { label: "Form", value: "Handheld baton" },
      { label: "Application", value: "Parking, lanes and site control" },
    ],
  },
  {
    id: "traffic-chain",
    name: "Traffic Chain",
    category: "Road Safety Products",
    image: "/assets/road-safety-products/traffic-chain.jpg",
    shortDesc: "Detachable plastic chain in red and white.",
    description:
      "Plastic detachable chain for low-cost barrier marking, entry control and temporary pedestrian separation in indoor and outdoor areas.",
    specs: [
      { label: "Material", value: "Plastic" },
      { label: "Color", value: "Red / White" },
      { label: "Type", value: "Detachable chain" },
      { label: "Use", value: "Queue management and cordoning" },
    ],
  },
  {
    id: "traffic-cone",
    name: "Traffic Cone",
    category: "Road Safety Products",
    image: "/assets/road-safety-products/traffic-cone.jpg",
    shortDesc: "Heavy-base cone with reflective strips for roadway marking.",
    description:
      "Multipurpose traffic cone with a heavy rubber base and reflective bands for visibility in parking lots, road work zones and temporary control points.",
    specs: [
      { label: "Base", value: "Heavy-duty rubber" },
      { label: "Reflective", value: "4 in reflective strips" },
      { label: "Use", value: "Temporary traffic control" },
      { label: "Color", value: "High-visibility red" },
    ],
  },
  {
    id: "traffic-vest",
    name: "Traffic Vest",
    category: "Road Safety Products",
    image: "/assets/road-safety-products/traffic-vest.jpg",
    shortDesc: "Hi-vis reflective vest for roadside visibility.",
    description:
      "Reflective vest in orange or lime green with reflective strips and Velcro closure. Built for visibility during road work, security tasks and movement around traffic.",
    specs: [
      { label: "Colors", value: "Orange / Lime Green" },
      { label: "Closure", value: "Velcro" },
      { label: "Visibility", value: "Reflective strips" },
      { label: "Use", value: "Roadside and site visibility" },
    ],
  },
  {
    id: "circuit-breaker-lockout",
    name: "Circuit Breaker Lockout",
    category: "Lockout Tagout Products",
    image: "/assets/lockout-tagout-products/circuit-breaker-lockout.png",
    shortDesc: "Universal lockout device for circuit breakers and switches.",
    description:
      "Universal circuit breaker lockout device for isolating electrical energy sources and helping teams comply with lockout and tagout procedures.",
    specs: [
      { label: "Use", value: "Circuit breakers and switches" },
      { label: "Compliance", value: "OSHA 1910.147 guidance" },
      { label: "Fit", value: "Universal lockout form" },
      { label: "Application", value: "Electrical isolation" },
    ],
  },
  {
    id: "cylinder-lockout",
    name: "Cylinder Lockout",
    category: "Lockout Tagout Products",
    image: "/assets/lockout-tagout-products/cylinder-lockout.png",
    shortDesc: "Adjustable lockout for gas cylinder caps and threads.",
    description:
      "Adjustable gas cylinder lockout for varying cap diameters and thread types. Designed to install quickly and isolate cylinder valves during maintenance.",
    specs: [
      { label: "Use", value: "Gas cylinder caps" },
      { label: "Fit", value: "Adjustable" },
      { label: "Installation", value: "Installs in seconds" },
      { label: "Application", value: "Compressed gas isolation" },
    ],
  },
  {
    id: "electrical-panel-lockout",
    name: "Electrical Panel Lockout",
    category: "Lockout Tagout Products",
    image: "/assets/lockout-tagout-products/electrical-panel-lockout.png",
    shortDesc: "Panel lockout for switches, breakers and emergency stops.",
    description:
      "Electrical panel lockout solution for HT and LT panels, switches, breakers, isolators and control points. Supports custom lockout needs for plant safety.",
    specs: [
      { label: "Use", value: "HT / LT electrical panels" },
      { label: "Targets", value: "Switches, breakers, isolators" },
      { label: "Customizable", value: "Yes" },
      { label: "Application", value: "Control point isolation" },
    ],
  },
  {
    id: "group-lock-boxes",
    name: "Group Lock Boxes",
    category: "Lockout Tagout Products",
    image: "/assets/lockout-tagout-products/group-lock-boxes.jpg",
    shortDesc: "Central lock box for team-based isolation workflows.",
    description:
      "Group lock boxes are used when multiple authorized workers need to control a single isolation point. The box keeps keys secured until every personal lock is removed.",
    specs: [
      { label: "Use", value: "Team lockout control" },
      { label: "Function", value: "Stores machine keys safely" },
      { label: "Access", value: "Multiple padlocks" },
      { label: "Application", value: "Complex maintenance jobs" },
    ],
  },
  {
    id: "lockout-accessories",
    name: "Lockout Accessories",
    category: "Lockout Tagout Products",
    image: "/assets/unique-safety-products/manual-resuscitator.png",
    shortDesc: "Supporting accessories for custom lockout procedures.",
    description:
      "Lockout accessories for supporting site-specific lockout and tagout procedures across machines, process areas and plant equipment.",
    specs: [
      { label: "Use", value: "Support tools and gadgets" },
      { label: "Application", value: "Machine and plant lockout" },
      { label: "Format", value: "Custom requirement based" },
      { label: "Compliance", value: "OSHA-aligned support" },
    ],
  },
  {
    id: "lockout-hasp",
    name: "Lockout Hasp",
    category: "Lockout Tagout Products",
    image: "/assets/lockout-tagout-products/lockout-hasp.png",
    shortDesc: "Multi-padlock hasp for shared isolation points.",
    description:
      "Safety lockout hasp used to isolate one energy source with multiple padlocks. Each authorised person can secure the point before maintenance begins.",
    specs: [
      { label: "Use", value: "Multiple padlocks" },
      { label: "Function", value: "Shared isolation point" },
      { label: "Application", value: "Energy source control" },
      { label: "Safety", value: "Prevents re-energising" },
    ],
  },
  {
    id: "lockout-key-padlock-cabinet",
    name: "Lockout Key & Padlock Cabinet",
    category: "Lockout Tagout Products",
    image: "/assets/lockout-tagout-products/lockout-key-padlock-cabinet.png",
    shortDesc: "Secure cabinet for storing keys and padlocks.",
    description:
      "Lockout key and padlock cabinet for organizing padlocks, keys and access control items at a central point in the facility.",
    specs: [
      { label: "Use", value: "Key and padlock storage" },
      { label: "Format", value: "Wall cabinet" },
      { label: "Application", value: "Centralized access control" },
      { label: "Visibility", value: "High-contrast labeling" },
    ],
  },
  {
    id: "lockout-kits",
    name: "Lockout Kits",
    category: "Lockout Tagout Products",
    image: "/assets/lockout-tagout-products/lockout-kits.png",
    shortDesc: "Portable lockout kits for electrical and mechanical jobs.",
    description:
      "Portable lockout kits tailored for specific applications, from breaker and valve isolation pouches to larger LOTO bag kits for broader maintenance work.",
    specs: [
      { label: "Use", value: "Portable isolation kits" },
      { label: "Options", value: "Small pouch or bag kits" },
      { label: "Coverage", value: "Electrical and mechanical" },
      { label: "Application", value: "Site maintenance" },
    ],
  },
  {
    id: "lockout-posters",
    name: "Lockout Posters",
    category: "Lockout Tagout Products",
    image: "/assets/lockout-tagout-products/lockout-posters.jpg",
    shortDesc: "Safety posters to remind teams about lockout procedures.",
    description:
      "High-visibility lockout posters for reinforcing lockout and tagout awareness before maintenance and service work begins.",
    specs: [
      { label: "Use", value: "Safety communication" },
      { label: "Format", value: "Poster signage" },
      { label: "Application", value: "Workshops and plants" },
      { label: "Message", value: "Before it is too late" },
    ],
  },
  {
    id: "lockout-safety-padlock",
    name: "Lockout Safety Padlock",
    category: "Lockout Tagout Products",
    image: "/assets/lockout-tagout-products/lockout-safety-padlock.jpg",
    shortDesc: "Color-coded safety padlock for visible isolation control.",
    description:
      "Safety lockout padlock available in multiple colors for clear isolation visibility. Personalization options such as numbering and department labels are available.",
    specs: [
      { label: "Use", value: "Lockout / tagout padlocking" },
      { label: "Colors", value: "Multiple colors available" },
      { label: "Customizing", value: "Numbering and labels" },
      { label: "Application", value: "Visible isolation control" },
    ],
  },
  {
    id: "lockout-signs-labels",
    name: "Lockout Signs & Labels",
    category: "Lockout Tagout Products",
    image: "/assets/lockout-tagout-products/lockout-signs-labels.png",
    shortDesc: "Warning signs and labels for energy control points.",
    description:
      "Lockout signs and labels that mark energy control points and provide a clear warning around machinery, equipment and electrical hazards.",
    specs: [
      { label: "Use", value: "Hazard communication" },
      { label: "Purpose", value: "Mark lockout points" },
      { label: "Application", value: "Equipment and electrical areas" },
      { label: "Visibility", value: "High warning contrast" },
    ],
  },
  {
    id: "lockout-tagout-station",
    name: "Lockout Tagout Station",
    category: "Lockout Tagout Products",
    image: "/assets/lockout-tagout-products/lockout-tagout-station.png",
    shortDesc: "Wall or portable station for lockout hardware storage.",
    description:
      "Lockout stations and kits hold padlocks, hasps and tags at a central point, helping maintenance teams isolate equipment quickly and consistently.",
    specs: [
      { label: "Use", value: "Central lockout storage" },
      { label: "Mounting", value: "Portable or wall mounted" },
      { label: "Contents", value: "Padlocks, hasps and tags" },
      { label: "Application", value: "Machine and department safety" },
    ],
  },
  {
    id: "lockout-tags",
    name: "Lockout Tags",
    category: "Lockout Tagout Products",
    image: "/assets/lockout-tagout-products/lockout-tags.png",
    shortDesc: "DANGER tags for do-not-operate isolation points.",
    description:
      "Lockout tags used to warn workers not to operate isolated equipment. The tags include clear DANGER messaging and space for lockout details.",
    specs: [
      { label: "Message", value: "DANGER / Do not operate" },
      { label: "Use", value: "Tagout warning" },
      { label: "Format", value: "Double-sided tag" },
      { label: "Application", value: "Machine lockout points" },
    ],
  },
  {
    id: "multipurpose-cable-lockout",
    name: "Multipurpose Cable Lockout",
    category: "Lockout Tagout Products",
    image: "/assets/lockout-tagout-products/multipurpose-cable-lockout.png",
    shortDesc: "Flexible cable lockout for multiple energy sources.",
    description:
      "Cable lockout device for isolating multiple energy sources with one flexible unit. The cable grips firmly and supports multiple padlocks on a single device.",
    specs: [
      { label: "Use", value: "Multiple energy sources" },
      { label: "Cable", value: "Flexible locking cable" },
      { label: "Locks", value: "Multiple padlocks supported" },
      { label: "Application", value: "Complex machine isolation" },
    ],
  },
  {
    id: "open-lockout-station",
    name: "Open Lockout Station",
    category: "Lockout Tagout Products",
    image: "/assets/lockout-tagout-products/open-lockout-station.jpg",
    shortDesc: "Open-front station for quick access to lockout hardware.",
    description:
      "One-piece safety lockout station that keeps padlocks, hasps and tags in a central, visible location for easy access by maintenance teams.",
    specs: [
      { label: "Use", value: "Central lockout access" },
      { label: "Format", value: "One-piece station" },
      { label: "Material", value: "Special grade polystyrene mix" },
      { label: "Application", value: "Wall mounted or portable" },
    ],
  },
  {
    id: "plug-lockout",
    name: "Plug Lockout",
    category: "Lockout Tagout Products",
    image: "/assets/lockout-tagout-products/plug-lockout.png",
    shortDesc: "Prevents electrical plugs from being inserted into outlets.",
    description:
      "Plug lockout prevents electrical plugs from being inserted into a wall outlet when a plug is not under the exclusive control of the service person.",
    specs: [
      { label: "Use", value: "Electrical plug isolation" },
      { label: "Function", value: "Blocks wall outlet insertion" },
      { label: "Application", value: "Maintenance and servicing" },
      { label: "Safety", value: "Stops accidental energizing" },
    ],
  },
  {
    id: "pneumatic-lockout",
    name: "Pneumatic Lockout",
    category: "Lockout Tagout Products",
    image: "/assets/lockout-tagout-products/pneumatic-lockout.png",
    shortDesc: "Quick-connect lockout for compressed air sources.",
    description:
      "Pneumatic lockout isolates compressed air energy without requiring expensive inline valves. It fits male fittings and helps lock out pneumatic equipment quickly.",
    specs: [
      { label: "Use", value: "Compressed air isolation" },
      { label: "Connection", value: "Quick-connect" },
      { label: "Fit", value: "Male fittings" },
      { label: "Application", value: "Pneumatic equipment" },
    ],
  },
  {
    id: "valve-lockout",
    name: "Valve Lockout",
    category: "Lockout Tagout Products",
    image: "/assets/lockout-tagout-products/valve-lockout.png",
    shortDesc: "Lockout solution for ball, gate, plug and butterfly valves.",
    description:
      "Valve lockout supports a wide range of valve styles, from manual handwheel valves to powered actuated valve systems, to help isolate process energy sources.",
    specs: [
      { label: "Use", value: "Valve isolation" },
      { label: "Types", value: "Ball, gate, plug, globe, butterfly" },
      { label: "Operation", value: "Manual or powered" },
      { label: "Application", value: "Process and plant safety" },
    ],
  },
];

