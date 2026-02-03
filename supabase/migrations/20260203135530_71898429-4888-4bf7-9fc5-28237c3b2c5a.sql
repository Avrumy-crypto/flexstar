-- Create product_categories table for CMS-editable product pages
CREATE TABLE public.product_categories (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    menu_order INTEGER NOT NULL DEFAULT 0,
    
    -- A. Product Overview Section
    overview_headline TEXT NOT NULL DEFAULT '',
    overview_description TEXT NOT NULL DEFAULT '',
    overview_use_cases TEXT[] NOT NULL DEFAULT '{}',
    overview_image_url TEXT,
    
    -- B. Product Format/Style Options (non-clickable, informational)
    format_options JSONB NOT NULL DEFAULT '[]'::jsonb,
    -- Format: [{ "name": "Stand-Up Pouches", "description": "...", "icon": "..." }]
    
    -- C. Capabilities Section (category-specific)
    capabilities JSONB NOT NULL DEFAULT '{}'::jsonb,
    -- Format: { "closures": [...], "barriers": [...], "materials": [...], "printing": [...], "finishes": [...], "compliance": [...] }
    
    -- D. Materials & Structures
    materials_headline TEXT NOT NULL DEFAULT 'Materials & Structures',
    materials_description TEXT NOT NULL DEFAULT '',
    material_options JSONB NOT NULL DEFAULT '[]'::jsonb,
    -- Format: [{ "name": "PET/PE", "description": "...", "properties": [...] }]
    
    -- E. Product-Specific CTA
    cta_headline TEXT NOT NULL DEFAULT '',
    cta_description TEXT NOT NULL DEFAULT '',
    cta_button_text TEXT NOT NULL DEFAULT 'Request Quote',
    cta_button_link TEXT NOT NULL DEFAULT '/contact',
    
    -- Meta
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.product_categories ENABLE ROW LEVEL SECURITY;

-- Public can read active product categories
CREATE POLICY "Public can read active product categories"
ON public.product_categories
FOR SELECT
USING (is_active = true);

-- Admins can manage product categories
CREATE POLICY "Admins can insert product categories"
ON public.product_categories
FOR INSERT
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update product categories"
ON public.product_categories
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete product categories"
ON public.product_categories
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Add trigger for updated_at
CREATE TRIGGER update_product_categories_updated_at
BEFORE UPDATE ON public.product_categories
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert the 7 product categories with complete content
INSERT INTO public.product_categories (slug, name, menu_order, overview_headline, overview_description, overview_use_cases, format_options, capabilities, materials_headline, materials_description, material_options, cta_headline, cta_description, cta_button_text) VALUES

-- 1. Pouches
('pouches', 'Pouches', 1,
'Pre-Made Pouches for Every Application',
'Complete range of pre-made pouches engineered for food, beverage, pet food, and industrial applications. Available in multiple configurations with custom sizes, barrier properties, and closure systems to meet your exact specifications.',
ARRAY['Food & Snacks', 'Pet Food', 'Beverages', 'Personal Care', 'Industrial Products'],
'[
  {"name": "Stand-Up Pouches", "description": "Self-standing pouches with bottom gusset for excellent shelf presence and stability", "icon": "package"},
  {"name": "Flat Bottom Pouches", "description": "Box-style pouches with flat base for maximum capacity and premium appearance", "icon": "box"},
  {"name": "Three-Side Seal Pouches", "description": "Simple, cost-effective pouches ideal for single-serve and sample packaging", "icon": "square"},
  {"name": "Spouted Pouches", "description": "Pouches with integrated spouts for liquid and semi-liquid products", "icon": "droplet"}
]'::jsonb,
'{
  "closures": [
    {"name": "Press-to-Close Zipper", "description": "Reclosable zipper for consumer convenience"},
    {"name": "Slider Zipper", "description": "Easy-open slider mechanism for frequent access"},
    {"name": "Spout & Cap", "description": "Integrated pour spout with screw or flip cap"},
    {"name": "Tear Notch", "description": "Clean, easy-open tear feature"},
    {"name": "Hang Hole", "description": "Retail-ready hang hole for pegboard display"}
  ],
  "barriers": [
    {"name": "Oxygen Barrier", "description": "EVOH and foil options for oxygen-sensitive products"},
    {"name": "Moisture Barrier", "description": "PE and metallized films for moisture protection"},
    {"name": "Light Barrier", "description": "Opaque and metallized options to block UV/light"},
    {"name": "Aroma Barrier", "description": "Retain product freshness and prevent odor transfer"}
  ],
  "printing": [
    {"name": "Flexographic", "description": "Up to 10-color HD flexo printing"},
    {"name": "Rotogravure", "description": "Premium photographic-quality printing"},
    {"name": "Digital", "description": "Short-run and variable data capabilities"}
  ],
  "finishes": [
    {"name": "Matte Lamination", "description": "Soft, premium matte finish"},
    {"name": "Gloss Lamination", "description": "High-shine reflective finish"},
    {"name": "Soft-Touch", "description": "Tactile velvety surface"},
    {"name": "Spot Varnish", "description": "Selective gloss for visual contrast"}
  ],
  "compliance": [
    {"name": "FDA Compliant", "description": "Food-contact safe materials"},
    {"name": "USDA Certified", "description": "Approved for meat and poultry"},
    {"name": "Child-Resistant", "description": "CR certification available"}
  ]
}'::jsonb,
'Materials & Structures',
'Our pouches are available in a range of material structures to match your barrier, sustainability, and performance requirements. We offer both traditional laminated structures and mono-material recyclable options.',
'[
  {"name": "PET/PE", "description": "Standard clarity laminate with good barrier", "properties": ["Clear", "Printable", "Cost-effective"]},
  {"name": "Nylon/PE", "description": "Puncture-resistant structure for demanding applications", "properties": ["High strength", "Flex-crack resistant", "Freezer-safe"]},
  {"name": "Foil Laminates", "description": "Maximum barrier for oxygen and moisture sensitive products", "properties": ["Complete light block", "Highest barrier", "Extended shelf life"]},
  {"name": "Kraft/PE", "description": "Natural paper look with functional barrier", "properties": ["Premium aesthetics", "Eco-friendly appearance", "Good barrier"]},
  {"name": "Mono-PE (Recyclable)", "description": "Single-material structure for recyclability", "properties": ["Store drop-off recyclable", "Sustainable", "Good barrier"]}
]'::jsonb,
'Ready to Discuss Your Pouch Requirements?',
'Our packaging engineers will help you select the optimal pouch format, materials, and features for your product.',
'Request Pouch Quote'),

-- 2. Rollstock
('rollstock', 'Rollstock', 2,
'Precision Roll Stock for Automated Packaging',
'High-performance continuous film rolls engineered for VFFS, HFFS, and flow-wrap equipment. Precision wound with consistent tension, accurate registration marks, and optimized for high-speed packaging lines.',
ARRAY['Snack Foods', 'Confectionery', 'Bakery', 'Coffee & Tea', 'Powder Products'],
'[
  {"name": "VFFS Film", "description": "Vertical form-fill-seal films for snacks, powders, and granular products", "icon": "arrow-down"},
  {"name": "HFFS Film", "description": "Horizontal form-fill-seal films for bars, baked goods, and solid products", "icon": "arrow-right"},
  {"name": "Flow-Wrap Film", "description": "High-speed wrapper films for individual product wrapping", "icon": "wind"},
  {"name": "Overwrap Film", "description": "Bundle and carton overwrap films for secondary packaging", "icon": "layers"}
]'::jsonb,
'{
  "closures": [
    {"name": "Heat Seal Coating", "description": "Standard heat-activated seal for permanent closure"},
    {"name": "Cold Seal Coating", "description": "Pressure-sensitive seal for heat-sensitive products"},
    {"name": "Peelable Seal", "description": "Easy-open seal with controlled peel force"},
    {"name": "Reclosable Tape", "description": "Integrated reseal strip for consumer convenience"}
  ],
  "barriers": [
    {"name": "High Oxygen Barrier", "description": "EVOH layers for extended freshness"},
    {"name": "Moisture Barrier", "description": "Metallized and coated options"},
    {"name": "Grease Resistance", "description": "Specialized coatings for oily products"},
    {"name": "UV Protection", "description": "Light-blocking for photosensitive products"}
  ],
  "printing": [
    {"name": "HD Flexo", "description": "High-definition flexographic printing"},
    {"name": "Rotogravure", "description": "Premium quality for complex graphics"},
    {"name": "Registration Marks", "description": "Precise eye marks for automated equipment"}
  ],
  "finishes": [
    {"name": "Clear Gloss", "description": "Maximum product visibility"},
    {"name": "Matte OPP", "description": "Premium matte surface"},
    {"name": "Metallized", "description": "Reflective metallic appearance"},
    {"name": "Paper-Look", "description": "Natural kraft appearance"}
  ],
  "compliance": [
    {"name": "FDA Compliant", "description": "Food-contact approved"},
    {"name": "Consistent COF", "description": "Controlled slip for machine performance"},
    {"name": "Static Control", "description": "Anti-static treatment available"}
  ]
}'::jsonb,
'Materials & Structures',
'Our roll stock films are available in multiple substrate combinations optimized for your specific equipment and product requirements.',
'[
  {"name": "BOPP", "description": "Biaxially oriented polypropylene for clarity and stiffness", "properties": ["Excellent clarity", "Good barrier", "Printable"]},
  {"name": "CPP", "description": "Cast polypropylene for heat seal and flexibility", "properties": ["Low seal temp", "Flexible", "Clear"]},
  {"name": "Metallized OPP", "description": "Aluminum-coated film for barrier and aesthetics", "properties": ["High barrier", "Reflective", "Lightweight"]},
  {"name": "PE Blends", "description": "Polyethylene structures for seal and toughness", "properties": ["Excellent seal", "Puncture resistant", "Flexible"]},
  {"name": "Paper Laminates", "description": "Paper-based structures with functional coatings", "properties": ["Sustainable", "Premium look", "Recyclable options"]}
]'::jsonb,
'Need Roll Stock for Your Packaging Line?',
'Our technical team will work with your equipment specifications to deliver optimal film performance.',
'Request Rollstock Quote'),

-- 3. Lidding Film
('lidding-film', 'Lidding Film', 3,
'Performance Lidding for Tray Sealing',
'Engineered lidding films for tray sealing applications across fresh, frozen, and shelf-stable products. Designed for reliable seal performance, controlled peel characteristics, exceptional clarity, and extended shelf life.',
ARRAY['Fresh Produce', 'Deli & Prepared Foods', 'Fresh Meat & Poultry', 'Dairy Products', 'Ready Meals'],
'[
  {"name": "Peelable Lidding", "description": "Easy-open films with controlled peel force for consumer convenience", "icon": "hand"},
  {"name": "Resealable Lidding", "description": "Peel-and-reseal functionality for multi-use applications", "icon": "refresh-cw"},
  {"name": "High-Barrier Lidding", "description": "Maximum protection with oxygen and moisture barriers for MAP", "icon": "shield"},
  {"name": "Anti-Fog Lidding", "description": "Crystal-clear visibility that prevents condensation obscuring product", "icon": "eye"}
]'::jsonb,
'{
  "closures": [
    {"name": "Easy-Peel Seal", "description": "Consistent peel force with clean separation"},
    {"name": "Lock Seal", "description": "Permanent weld seal for maximum security"},
    {"name": "Peel-Reseal", "description": "Multiple open/close cycles with maintained integrity"},
    {"name": "Laser Score", "description": "Precise opening with laser-scored tear lines"}
  ],
  "barriers": [
    {"name": "Oxygen Barrier (EVOH)", "description": "Extended shelf life for MAP applications"},
    {"name": "High Moisture Barrier", "description": "Prevents dehydration and freezer burn"},
    {"name": "Anti-Fog Coating", "description": "Maintains clarity in refrigerated display"},
    {"name": "UV Protection", "description": "Protects color-sensitive products"}
  ],
  "printing": [
    {"name": "Surface Print", "description": "Direct surface printing for promotional graphics"},
    {"name": "Reverse Print", "description": "Protected graphics under lamination"},
    {"name": "Clear Windows", "description": "Unprinted areas for product visibility"}
  ],
  "finishes": [
    {"name": "High Clarity", "description": "Maximum transparency for product appeal"},
    {"name": "Matte Finish", "description": "Premium soft-touch appearance"},
    {"name": "Gloss Finish", "description": "High-shine reflective surface"},
    {"name": "Metallized", "description": "Foil-like appearance with barrier"}
  ],
  "compliance": [
    {"name": "FDA/EU Compliant", "description": "Food-contact approved materials"},
    {"name": "Microwave Safe", "description": "Options for reheating applications"},
    {"name": "MAP Compatible", "description": "Designed for modified atmosphere packaging"}
  ]
}'::jsonb,
'Materials & Structures',
'Our lidding films are engineered to seal reliably to multiple tray substrates including PET, PP, PS, CPET, and aluminum.',
'[
  {"name": "PET/PE", "description": "Standard clarity lidding with good seal range", "properties": ["Clear", "Wide seal window", "Printable"]},
  {"name": "High-Barrier EVOH", "description": "Extended shelf life structure for MAP", "properties": ["Oxygen barrier", "MAP compatible", "Clear"]},
  {"name": "Anti-Fog Coated", "description": "Condensation-resistant for cold chain", "properties": ["Fog-free", "High clarity", "Refrigerator safe"]},
  {"name": "Metallized Lidding", "description": "Foil-like barrier without metal detection issues", "properties": ["High barrier", "Metal detectable", "Printable"]},
  {"name": "Peelable Sealant", "description": "Controlled peel force across tray materials", "properties": ["Consistent peel", "Universal seal", "No tear"]}
]'::jsonb,
'Ready to Optimize Your Tray Sealing?',
'Let our experts match the right lidding solution to your tray format and equipment.',
'Request Lidding Quote'),

-- 4. Thermoform Film
('thermoform-film', 'Thermoform Film', 4,
'High-Performance Thermoforming Films',
'Advanced forming and non-forming films engineered for vacuum skin, MAP, and thermoform-fill-seal applications. Consistent thermoforming behavior with excellent clarity, deep-draw capability, and reliable barrier properties.',
ARRAY['Fresh Meat & Seafood', 'Cheese & Dairy', 'Medical Devices', 'Electronics', 'Industrial Parts'],
'[
  {"name": "Forming Film (Bottom Web)", "description": "Films that thermoform into cavities for product placement", "icon": "layers"},
  {"name": "Non-Forming Film (Top Web)", "description": "Lidding films that seal to formed trays", "icon": "square"},
  {"name": "Skin Pack Film", "description": "Conforming films that vacuum-form tightly around products", "icon": "maximize"},
  {"name": "Shrink Bag Film", "description": "Shrinkable pouches for bone-in and irregular products", "icon": "minimize"}
]'::jsonb,
'{
  "closures": [
    {"name": "Vacuum Seal", "description": "Complete air removal for product protection"},
    {"name": "MAP Seal", "description": "Modified atmosphere for extended freshness"},
    {"name": "Skin Pack Seal", "description": "Conforming seal around product contours"},
    {"name": "Easy-Open", "description": "Consumer-friendly opening features"}
  ],
  "barriers": [
    {"name": "High Oxygen Barrier", "description": "EVOH and PVDC options for sensitive products"},
    {"name": "Moisture Barrier", "description": "Prevents dehydration and freezer burn"},
    {"name": "Puncture Resistance", "description": "Bone-guard for meat applications"},
    {"name": "Abuse Resistance", "description": "Handles distribution stress"}
  ],
  "printing": [
    {"name": "Pre-Print", "description": "Graphics applied before forming"},
    {"name": "In-Mold Labels", "description": "Integrated labeling during forming"},
    {"name": "Clear Display", "description": "Maximum product visibility windows"}
  ],
  "finishes": [
    {"name": "High Gloss", "description": "Premium reflective surface"},
    {"name": "Matte", "description": "Soft, elegant appearance"},
    {"name": "Pearlescent", "description": "Subtle shimmer effect"},
    {"name": "Natural Look", "description": "Paper-like sustainable appearance"}
  ],
  "compliance": [
    {"name": "FDA/USDA Compliant", "description": "Approved for meat and poultry contact"},
    {"name": "Freezer to Oven", "description": "Dual-ovenable options available"},
    {"name": "Medical Grade", "description": "Sterilization-compatible options"}
  ]
}'::jsonb,
'Materials & Structures',
'Our thermoform films are available in multiple configurations to match your forming equipment, product requirements, and sustainability goals.',
'[
  {"name": "Nylon/PE", "description": "Workhorse structure for meat and cheese", "properties": ["Deep draw", "Puncture resistant", "Excellent seal"]},
  {"name": "Multilayer EVOH", "description": "Maximum barrier for extended shelf life", "properties": ["Highest barrier", "Clear", "Formable"]},
  {"name": "PVDC Barrier", "description": "Excellent barrier with good formability", "properties": ["High barrier", "Consistent forming", "Cost-effective"]},
  {"name": "PE/PA/EVOH/PA/PE", "description": "Symmetrical structure for demanding applications", "properties": ["Balanced properties", "Abuse resistant", "Premium barrier"]},
  {"name": "Recyclable Mono-PE", "description": "Single-material for sustainability initiatives", "properties": ["Recyclable", "Good barrier", "Formable"]}
]'::jsonb,
'Need Thermoform Films for Your Line?',
'Our engineers will optimize film selection for your specific thermoformer and product.',
'Request Thermoform Quote'),

-- 5. Sachets & Stick Packs
('sachets-stick-packs', 'Sachets & Stick Packs', 5,
'Single-Serve & Portion Control Packaging',
'Precision-engineered sachets and stick packs for single-serve applications. Ideal for powders, liquids, granules, and semi-solids with accurate dosing, tamper evidence, and extended shelf life protection.',
ARRAY['Coffee & Beverages', 'Condiments & Sauces', 'Nutritional Supplements', 'Pharmaceuticals', 'Personal Care'],
'[
  {"name": "3-Side Seal Sachets", "description": "Simple, efficient format for powders and granules", "icon": "square"},
  {"name": "4-Side Seal Sachets", "description": "Premium format with enhanced seal integrity", "icon": "maximize"},
  {"name": "Stick Packs", "description": "Elongated format ideal for on-the-go consumption", "icon": "minus"},
  {"name": "Twin-Chamber Sachets", "description": "Dual-compartment for mixing at point of use", "icon": "columns"}
]'::jsonb,
'{
  "closures": [
    {"name": "Tear Notch", "description": "Easy-open tear feature"},
    {"name": "Laser Score", "description": "Precision tear line for controlled opening"},
    {"name": "Easy-Peel Corner", "description": "Peel-open design for accessibility"},
    {"name": "Pour Spout", "description": "Directed dispensing for liquids"}
  ],
  "barriers": [
    {"name": "Oxygen Barrier", "description": "Foil and EVOH options for freshness"},
    {"name": "Moisture Barrier", "description": "Critical for hygroscopic products"},
    {"name": "Light Barrier", "description": "UV protection for sensitive formulations"},
    {"name": "Aroma Barrier", "description": "Retains volatile flavors and fragrances"}
  ],
  "printing": [
    {"name": "Up to 10 Colors", "description": "Full-color HD flexographic printing"},
    {"name": "Variable Data", "description": "Lot codes, dates, serialization"},
    {"name": "Metallic Inks", "description": "Premium shelf presence"}
  ],
  "finishes": [
    {"name": "Matte", "description": "Elegant, premium appearance"},
    {"name": "Gloss", "description": "High-impact shelf appeal"},
    {"name": "Foil", "description": "Maximum barrier and premium look"},
    {"name": "Kraft", "description": "Natural, sustainable appearance"}
  ],
  "compliance": [
    {"name": "FDA Compliant", "description": "Food and pharmaceutical grade"},
    {"name": "Child-Resistant", "description": "CR options for medications"},
    {"name": "Tamper-Evident", "description": "Visual indication of opening"}
  ]
}'::jsonb,
'Materials & Structures',
'Our sachets and stick packs are available in a range of structures from economical to ultra-high barrier, matched to your product sensitivity and shelf life requirements.',
'[
  {"name": "PET/PE", "description": "Cost-effective structure for dry products", "properties": ["Economical", "Good barrier", "Clear options"]},
  {"name": "Foil Laminates", "description": "Maximum barrier for sensitive products", "properties": ["Complete barrier", "Long shelf life", "Premium appearance"]},
  {"name": "Metallized Films", "description": "Good barrier with lighter weight", "properties": ["High barrier", "Lightweight", "Reflective"]},
  {"name": "Paper/Foil/PE", "description": "Sustainable appearance with full barrier", "properties": ["Natural look", "High barrier", "Premium feel"]},
  {"name": "Cold-Form Foil", "description": "Pharmaceutical-grade blister alternative", "properties": ["Ultimate barrier", "Push-through", "Unit-dose"]}
]'::jsonb,
'Ready to Package in Single-Serve Format?',
'Our sachet specialists will help optimize your portion control packaging.',
'Request Sachet Quote'),

-- 6. High-Barrier Packaging
('high-barrier-packaging', 'High-Barrier Packaging', 6,
'Maximum Protection Packaging Solutions',
'Ultra-high barrier packaging structures engineered for products requiring extended shelf life, complete oxygen exclusion, and maximum moisture protection. Ideal for retort, aseptic, and long-term ambient storage.',
ARRAY['Retort Foods', 'Shelf-Stable Meals', 'Coffee & Tea', 'Pharmaceuticals', 'Military & Emergency'],
'[
  {"name": "Retort Pouches", "description": "Heat-stable packages for sterilization processing", "icon": "thermometer"},
  {"name": "Foil Laminates", "description": "Aluminum-based structures for complete light and gas barrier", "icon": "shield"},
  {"name": "EVOH Barrier Films", "description": "Transparent high-barrier for product visibility", "icon": "eye"},
  {"name": "Vacuum Skin Packaging", "description": "Tight-fitting barrier for extended meat freshness", "icon": "maximize"}
]'::jsonb,
'{
  "closures": [
    {"name": "Retort-Grade Seal", "description": "Survives 250°F+ processing"},
    {"name": "Hermetic Seal", "description": "Complete air-tight closure"},
    {"name": "Vacuum Seal", "description": "Oxygen removal for freshness"},
    {"name": "Easy-Open", "description": "Consumer convenience despite high barrier"}
  ],
  "barriers": [
    {"name": "Zero Oxygen Transmission", "description": "Foil structures for complete O2 block"},
    {"name": "Ultra-Low MVTR", "description": "Minimal moisture vapor transmission"},
    {"name": "Light Barrier", "description": "Complete UV and visible light protection"},
    {"name": "Aroma Retention", "description": "Volatile compound protection"}
  ],
  "printing": [
    {"name": "Reverse Print", "description": "Protected graphics under barrier layers"},
    {"name": "Retort-Stable Inks", "description": "Colors survive sterilization"},
    {"name": "Photo-Quality", "description": "Rotogravure for premium imaging"}
  ],
  "finishes": [
    {"name": "Matte Foil", "description": "Premium soft metallic appearance"},
    {"name": "Gloss Foil", "description": "High-shine reflective finish"},
    {"name": "Clear Barrier", "description": "See-through with EVOH protection"},
    {"name": "Paper Overwrap", "description": "Sustainable outer layer option"}
  ],
  "compliance": [
    {"name": "FDA Retort Approved", "description": "Cleared for thermal processing"},
    {"name": "USDA Certified", "description": "Approved for meat products"},
    {"name": "Military Spec", "description": "MIL-spec options available"}
  ]
}'::jsonb,
'Materials & Structures',
'Our high-barrier structures are engineered for the most demanding shelf-life requirements, from 12-month ambient to 5+ year emergency ration specifications.',
'[
  {"name": "PET/Foil/Nylon/PP", "description": "Standard retort structure", "properties": ["Retort stable", "High barrier", "Excellent seal"]},
  {"name": "PET/Foil/PET/PP", "description": "Enhanced puncture resistance", "properties": ["Abuse resistant", "Deep draw", "Long shelf life"]},
  {"name": "Transparent EVOH", "description": "Clear barrier without foil", "properties": ["See-through", "High barrier", "Microwave safe"]},
  {"name": "AlOx Coated", "description": "Metallized alternative to foil", "properties": ["Metal-detectable", "High barrier", "Clear options"]},
  {"name": "MIL-PRF Compliant", "description": "Military specification structures", "properties": ["5+ year life", "Extreme conditions", "Tested certified"]}
]'::jsonb,
'Need Extended Shelf Life Packaging?',
'Our barrier specialists will engineer the optimal structure for your shelf life requirements.',
'Request High-Barrier Quote'),

-- 7. Recyclable / Mono-Material Packaging
('recyclable-mono-material', 'Recyclable / Mono-Material Packaging', 7,
'Sustainable Packaging Without Compromise',
'Next-generation mono-material and recyclable structures that deliver performance while meeting circular economy goals. Designed for store drop-off recycling, curbside collection, and brand sustainability commitments.',
ARRAY['Consumer Brands', 'Retail Chains', 'Sustainability Leaders', 'EU Market', 'CPG Companies'],
'[
  {"name": "Mono-PE Pouches", "description": "All-polyethylene structures for PE recycling streams", "icon": "recycle"},
  {"name": "Mono-PP Films", "description": "All-polypropylene for PP recycling infrastructure", "icon": "refresh-cw"},
  {"name": "Paper-Based Laminates", "description": "Fiber-first structures with minimal plastic", "icon": "file"},
  {"name": "Compostable Packaging", "description": "Industrially compostable materials for organic waste streams", "icon": "leaf"}
]'::jsonb,
'{
  "closures": [
    {"name": "Mono-Material Zipper", "description": "PE zippers compatible with pouch recycling"},
    {"name": "Paper-Based Seal", "description": "Fiber-friendly closure systems"},
    {"name": "Compostable Adhesive", "description": "Adhesives that break down with packaging"},
    {"name": "Standard Heat Seal", "description": "Proven seal performance in sustainable materials"}
  ],
  "barriers": [
    {"name": "PE-Based MVTR Barrier", "description": "Moisture protection in mono-material"},
    {"name": "Coated Paper Barrier", "description": "Water and grease resistance for paper"},
    {"name": "Bio-Based Barrier", "description": "Renewable source barrier coatings"},
    {"name": "EVOH-Free Options", "description": "Barrier without mixed materials"}
  ],
  "printing": [
    {"name": "Water-Based Inks", "description": "Reduced environmental impact inks"},
    {"name": "De-Inkable Prints", "description": "Compatible with paper recycling"},
    {"name": "Bio-Based Inks", "description": "Renewable source printing"}
  ],
  "finishes": [
    {"name": "Natural Matte", "description": "Uncoated sustainable appearance"},
    {"name": "Clear Recyclable", "description": "Transparency in mono-material"},
    {"name": "Kraft Look", "description": "Paper-fiber aesthetic"},
    {"name": "Tactile Finishes", "description": "Premium feel in sustainable materials"}
  ],
  "compliance": [
    {"name": "How2Recycle Labeled", "description": "Consumer recycling guidance"},
    {"name": "Store Drop-Off", "description": "Compatible with retail collection"},
    {"name": "EU Plastic Tax Ready", "description": "Meets European regulations"},
    {"name": "BPI Certified", "description": "Industrial compostability certification"}
  ]
}'::jsonb,
'Materials & Structures',
'Our sustainable packaging portfolio balances environmental responsibility with the performance your products require. We help brands achieve recyclability without sacrificing shelf life or protection.',
'[
  {"name": "Mono-PE (MDO-PE)", "description": "Machine-direction oriented PE for stiffness", "properties": ["PE recyclable", "Good barrier", "Clear or white"]},
  {"name": "Mono-PP", "description": "All-polypropylene structure", "properties": ["PP recyclable", "Heat resistant", "Clarity options"]},
  {"name": "Paper/PE Minimal", "description": ">90% paper with thin PE layer", "properties": ["Paper recyclable", "Renewable fiber", "Good barrier"]},
  {"name": "PLA/PBAT Compostable", "description": "Industrially compostable bio-plastics", "properties": ["Compostable", "Bio-based", "Clear options"]},
  {"name": "PCR Content", "description": "Post-consumer recycled material inclusion", "properties": ["Circular economy", "Reduced virgin plastic", "Certified content"]}
]'::jsonb,
'Ready to Meet Your Sustainability Goals?',
'Our sustainability team will help you transition to recyclable packaging without compromising performance.',
'Request Sustainability Quote');