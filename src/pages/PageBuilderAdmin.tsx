import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Plus, Save, Trash2, ChevronUp, ChevronDown } from "lucide-react";

/**
 * ✅ V1 Page Builder:
 * - Blocks array stored in Supabase (site_pages.blocks)
 * - Click a block in preview to edit
 * - Add/remove/reorder blocks
 *
 * LIMITATIONS (still very powerful):
 * - Not true free-form dragging (you can reorder, not pixel-place)
 * - No full responsive breakpoint editor (easy to add later)
 */

type BlockType = "hero" | "stats" | "imageText" | "cta";

type HeroBlock = {
  id: string;
  type: "hero";
  headline: string;
  subheadline: string;
  primaryText: string;
  primaryHref: string;
  secondaryText: string;
  secondaryHref: string;
  backgroundImage: string; // URL
};

type StatsBlock = {
  id: string;
  type: "stats";
  items: { value: string; label: string }[];
};

type ImageTextBlock = {
  id: string;
  type: "imageText";
  title: string;
  body: string;
  image: string;
  imageSide: "left" | "right";
};

type CtaBlock = {
  id: string;
  type: "cta";
  title: string;
  body: string;
  buttonText: string;
  buttonHref: string;
};

type Block = HeroBlock | StatsBlock | ImageTextBlock | CtaBlock;

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

const BLOCK_TEMPLATES: Record<BlockType, () => Block> = {
  hero: () => ({
    id: uid(),
    type: "hero",
    headline: "Advanced Flexible Packaging",
    subheadline: "Precision packaging that protects products and elevates brands.",
    primaryText: "Request Quote",
    primaryHref: "/contact",
    secondaryText: "Our Capabilities",
    secondaryHref: "/capabilities",
    backgroundImage: "/images/hero.jpg",
  }),
  stats: () => ({
    id: uid(),
    type: "stats",
    items: [
      { value: "500M+", label: "Sq Ft Annually" },
      { value: "200+", label: "Global Clients" },
      { value: "15+", label: "Years Experience" },
      { value: "99.7%", label: "Quality Rate" },
    ],
  }),
  imageText: () => ({
    id: uid(),
    type: "imageText",
    title: "Quality You Can Trust",
    body: "We manufacture high-performance films for demanding applications.",
    image: "/images/feature.jpg",
    imageSide: "right",
  }),
  cta: () => ({
    id: uid(),
    type: "cta",
    title: "Ready to start?",
    body: "Let’s find the perfect packaging solution for your product.",
    buttonText: "Contact Us",
    buttonHref: "/contact",
  }),
};

export default function PageBuilderAdmin() {
  const { user, isAdmin, isLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [slug, setSlug] = useState("home");
  const [pageId, setPageId] = useState<string | null>(null);
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!isLoading && (!user || !isAdmin)) navigate("/admin/auth");
  }, [user, isAdmin, isLoading, navigate]);

  useEffect(() => {
    if (!isLoading && user && isAdmin) loadPage(slug);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, isLoading, user, isAdmin]);

  const selected = useMemo(
    () => blocks.find((b) => b.id === selectedId) || null,
    [blocks, selectedId]
  );

  async function loadPage(pageSlug: string) {
    setBusy(true);
    try {
      const { data, error } = await supabase
        .from("site_pages")
        .select("id, slug, blocks")
        .eq("slug", pageSlug)
        .maybeSingle();

      if (error) throw error;

      if (!data) {
        // Create default page if missing
        const initialBlocks: Block[] = [
          BLOCK_TEMPLATES.hero(),
          BLOCK_TEMPLATES.stats(),
          BLOCK_TEMPLATES.imageText(),
          BLOCK_TEMPLATES.cta(),
        ];

        const { data: created, error: createErr } = await supabase
          .from("site_pages")
          .insert([{ slug: pageSlug, blocks: initialBlocks }])
          .select("id, blocks")
          .single();

        if (createErr) throw createErr;

        setPageId(created.id);
        setBlocks(created.blocks as unknown as Block[]);
        setSelectedId(created.blocks?.[0]?.id ?? null);
      } else {
        setPageId(data.id);
        const loaded = (data.blocks as unknown as Block[]) ?? [];
        setBlocks(loaded);
        setSelectedId(loaded?.[0]?.id ?? null);
      }
    } catch (e) {
      console.error(e);
      toast({ title: "Error", description: "Failed to load page", variant: "destructive" });
    } finally {
      setBusy(false);
    }
  }

  async function savePage() {
    if (!pageId) return;
    setBusy(true);
    try {
      const { error } = await supabase
        .from("site_pages")
        .update({ blocks })
        .eq("id", pageId);

      if (error) throw error;

      toast({ title: "Saved", description: "Page updated successfully." });
    } catch (e) {
      console.error(e);
      toast({ title: "Error", description: "Failed to save", variant: "destructive" });
    } finally {
      setBusy(false);
    }
  }

  function addBlock(type: BlockType) {
    const b = BLOCK_TEMPLATES[type]();
    setBlocks((prev) => [...prev, b]);
    setSelectedId(b.id);
  }

  function removeBlock(id: string) {
    setBlocks((prev) => prev.filter((b) => b.id !== id));
    setSelectedId((cur) => (cur === id ? null : cur));
  }

  function moveBlock(id: string, dir: -1 | 1) {
    setBlocks((prev) => {
      const idx = prev.findIndex((b) => b.id === id);
      if (idx < 0) return prev;
      const nextIdx = idx + dir;
      if (nextIdx < 0 || nextIdx >= prev.length) return prev;
      const copy = [...prev];
      const tmp = copy[idx];
      copy[idx] = copy[nextIdx];
      copy[nextIdx] = tmp;
      return copy;
    });
  }

  function updateSelected(patch: Partial<Block>) {
    if (!selectedId) return;
    setBlocks((prev) =>
      prev.map((b) => (b.id === selectedId ? ({ ...b, ...patch } as Block) : b))
    );
  }

  async function handleLogout() {
    await signOut();
    navigate("/admin/auth");
  }

  return (
    <div className="min-h-screen bg-secondary">
      {/* Header */}
      <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-sm hover:text-accent transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Site
            </Link>
            <div className="h-6 w-px bg-primary-foreground/20" />
            <h1 className="text-lg font-bold">Page Builder</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-primary-foreground/70">{user?.email}</span>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-[320px_1fr_360px] gap-6">
          {/* Left: Pages + add blocks */}
          <aside className="bg-card rounded-2xl border border-border p-4 h-fit sticky top-24">
            <div className="mb-4">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                Page
              </p>
              <div className="flex gap-2">
                <Input value={slug} onChange={(e) => setSlug(e.target.value)} />
                <Button variant="outline" onClick={() => loadPage(slug)} disabled={busy}>
                  Load
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Examples: <span className="font-medium">home</span>, <span className="font-medium">products</span>
              </p>
            </div>

            <div className="border-t border-border pt-4">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                Add Block
              </p>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" onClick={() => addBlock("hero")} className="justify-start">
                  <Plus className="h-4 w-4 mr-2" /> Hero
                </Button>
                <Button variant="outline" onClick={() => addBlock("stats")} className="justify-start">
                  <Plus className="h-4 w-4 mr-2" /> Stats
                </Button>
                <Button variant="outline" onClick={() => addBlock("imageText")} className="justify-start">
                  <Plus className="h-4 w-4 mr-2" /> Image/Text
                </Button>
                <Button variant="outline" onClick={() => addBlock("cta")} className="justify-start">
                  <Plus className="h-4 w-4 mr-2" /> CTA
                </Button>
              </div>
            </div>

            <div className="border-t border-border pt-4 mt-4">
              <Button onClick={savePage} disabled={busy} className="w-full">
                <Save className="h-4 w-4 mr-2" /> Save Page
              </Button>
            </div>
          </aside>

          {/* Middle: Preview canvas */}
          <section className="bg-card rounded-2xl border border-border overflow-hidden">
            <div className="px-4 py-3 border-b border-border flex items-center justify-between">
              <p className="text-sm font-semibold">Preview</p>
              <p className="text-xs text-muted-foreground">
                Click a block to edit • Reorder from the list
              </p>
            </div>

            <div className="p-4 space-y-4">
              {blocks.map((b) => (
                <div
                  key={b.id}
                  onClick={() => setSelectedId(b.id)}
                  className={[
                    "rounded-xl border transition-all cursor-pointer",
                    selectedId === b.id ? "border-accent ring-2 ring-accent/20" : "border-border hover:border-accent/50",
                  ].join(" ")}
                >
                  <BlockPreview block={b} />
                </div>
              ))}
              {blocks.length === 0 && (
                <div className="p-10 text-center text-muted-foreground">
                  No blocks yet — add one from the left.
                </div>
              )}
            </div>
          </section>

          {/* Right: Inspector */}
          <aside className="bg-card rounded-2xl border border-border p-4 h-fit sticky top-24">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
              Blocks
            </p>

            <div className="space-y-2 mb-6">
              {blocks.map((b, i) => (
                <div
                  key={b.id}
                  className={[
                    "flex items-center justify-between gap-2 rounded-lg border p-2",
                    selectedId === b.id ? "border-accent bg-accent/5" : "border-border",
                  ].join(" ")}
                >
                  <button
                    type="button"
                    className="text-left flex-1"
                    onClick={() => setSelectedId(b.id)}
                  >
                    <p className="text-sm font-medium">{b.type.toUpperCase()}</p>
                    <p className="text-xs text-muted-foreground">#{i + 1}</p>
                  </button>

                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" onClick={() => moveBlock(b.id, -1)} disabled={i === 0}>
                      <ChevronUp className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => moveBlock(b.id, 1)}
                      disabled={i === blocks.length - 1}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-destructive hover:text-destructive"
                      onClick={() => removeBlock(b.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                Inspector
              </p>

              {!selected ? (
                <p className="text-sm text-muted-foreground">Click a block in Preview.</p>
              ) : (
                <Inspector block={selected} onChange={updateSelected} />
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

/** ---------- Preview components ---------- */

function BlockPreview({ block }: { block: Block }) {
  switch (block.type) {
    case "hero":
      return (
        <div className="relative overflow-hidden rounded-xl">
          <div className="h-[260px] w-full">
            <img
              src={block.backgroundImage}
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h2 className="text-2xl font-bold text-white">{block.headline}</h2>
              <p className="text-white/70 mt-2 max-w-xl">{block.subheadline}</p>
              <div className="mt-4 flex gap-2">
                <span className="inline-flex px-3 py-1.5 rounded-full bg-white/10 text-white text-sm">
                  {block.primaryText}
                </span>
                <span className="inline-flex px-3 py-1.5 rounded-full bg-white/5 text-white/80 text-sm">
                  {block.secondaryText}
                </span>
              </div>
            </div>
          </div>
        </div>
      );

    case "stats":
      return (
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {block.items.map((s, idx) => (
              <div key={idx} className="rounded-xl border border-border p-4 text-center">
                <p className="text-2xl font-bold text-accent">{s.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case "imageText":
      return (
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            {block.imageSide === "left" && (
              <img src={block.image} alt="" className="rounded-xl w-full h-[200px] object-cover" />
            )}
            <div>
              <h3 className="text-xl font-bold">{block.title}</h3>
              <p className="text-muted-foreground mt-2">{block.body}</p>
            </div>
            {block.imageSide === "right" && (
              <img src={block.image} alt="" className="rounded-xl w-full h-[200px] object-cover" />
            )}
          </div>
        </div>
      );

    case "cta":
      return (
        <div className="p-10 text-center">
          <h3 className="text-2xl font-bold">{block.title}</h3>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto">{block.body}</p>
          <div className="mt-4 inline-flex px-4 py-2 rounded-full bg-accent/10 text-accent font-medium">
            {block.buttonText}
          </div>
        </div>
      );

    default:
      return null;
  }
}

/** ---------- Inspector (editable fields) ---------- */

function Inspector({
  block,
  onChange,
}: {
  block: Block;
  onChange: (patch: Partial<Block>) => void;
}) {
  if (block.type === "hero") {
    return (
      <div className="space-y-3">
        <Field label="Headline">
          <Input value={block.headline} onChange={(e) => onChange({ headline: e.target.value })} />
        </Field>
        <Field label="Subheadline">
          <Textarea value={block.subheadline} onChange={(e) => onChange({ subheadline: e.target.value })} rows={4} />
        </Field>
        <Field label="Background Image URL">
          <Input value={block.backgroundImage} onChange={(e) => onChange({ backgroundImage: e.target.value })} />
        </Field>

        <div className="grid grid-cols-2 gap-3">
          <Field label="Primary Text">
            <Input value={block.primaryText} onChange={(e) => onChange({ primaryText: e.target.value })} />
          </Field>
          <Field label="Primary Link">
            <Input value={block.primaryHref} onChange={(e) => onChange({ primaryHref: e.target.value })} />
          </Field>
          <Field label="Secondary Text">
            <Input value={block.secondaryText} onChange={(e) => onChange({ secondaryText: e.target.value })} />
          </Field>
          <Field label="Secondary Link">
            <Input value={block.secondaryHref} onChange={(e) => onChange({ secondaryHref: e.target.value })} />
          </Field>
        </div>
      </div>
    );
  }

  if (block.type === "stats") {
    return (
      <div className="space-y-3">
        {block.items.map((item, idx) => (
          <div key={idx} className="rounded-xl border border-border p-3 space-y-2">
            <p className="text-xs font-semibold text-muted-foreground">Stat #{idx + 1}</p>
            <Field label="Value">
              <Input
                value={item.value}
                onChange={(e) => {
                  const items = [...block.items];
                  items[idx] = { ...items[idx], value: e.target.value };
                  onChange({ items });
                }}
              />
            </Field>
            <Field label="Label">
              <Input
                value={item.label}
                onChange={(e) => {
                  const items = [...block.items];
                  items[idx] = { ...items[idx], label: e.target.value };
                  onChange({ items });
                }}
              />
            </Field>
          </div>
        ))}
      </div>
    );
  }

  if (block.type === "imageText") {
    return (
      <div className="space-y-3">
        <Field label="Title">
          <Input value={block.title} onChange={(e) => onChange({ title: e.target.value })} />
        </Field>
        <Field label="Body">
          <Textarea value={block.body} onChange={(e) => onChange({ body: e.target.value })} rows={4} />
        </Field>
        <Field label="Image URL">
          <Input value={block.image} onChange={(e) => onChange({ image: e.target.value })} />
        </Field>
        <Field label="Image Side (left/right)">
          <Input
            value={block.imageSide}
            onChange={(e) => onChange({ imageSide: e.target.value as "left" | "right" })}
          />
        </Field>
      </div>
    );
  }

  // CTA
  return (
    <div className="space-y-3">
      <Field label="Title">
        <Input value={block.title} onChange={(e) => onChange({ title: e.target.value })} />
      </Field>
      <Field label="Body">
        <Textarea value={block.body} onChange={(e) => onChange({ body: e.target.value })} rows={4} />
      </Field>
      <Field label="Button Text">
        <Input value={block.buttonText} onChange={(e) => onChange({ buttonText: e.target.value })} />
      </Field>
      <Field label="Button Link">
        <Input value={block.buttonHref} onChange={(e) => onChange({ buttonHref: e.target.value })} />
      </Field>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1">
      <label className="text-xs font-semibold text-muted-foreground">{label}</label>
      {children}
    </div>
  );
}
