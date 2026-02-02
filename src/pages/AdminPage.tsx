import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useAllSiteContent } from "@/hooks/useSiteContent";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { LogOut, Save, Plus, Trash2, ArrowLeft, Home, Package, FileText } from "lucide-react";
import type { Json } from "@/integrations/supabase/types";

const sectionTemplates: Record<string, Record<string, string>> = {
  "homepage-hero": {
    headline: "Engineering Excellence in Flexible Packaging",
    subheadline: "From precision extrusion to advanced converting, we manufacture high-performance films and pouches for the world's leading brands.",
    cta_primary: "Request Quote",
    cta_secondary: "View Capabilities",
  },
  "homepage-stats": {
    stat1_value: "500M+",
    stat1_label: "Sq Ft Annually",
    stat2_value: "200+",
    stat2_label: "Global Clients",
    stat3_value: "15+",
    stat3_label: "Years Experience",
    stat4_value: "99.7%",
    stat4_label: "Quality Rate",
  },
  "products-pouches": {
    name: "Pouches",
    description: "Complete range of pre-made pouches including stand-up, flat bottom, retort, and vacuum configurations.",
  },
  "products-rollstock": {
    name: "Roll Stock",
    description: "Continuous film rolls for VFFS, HFFS, and thermoforming equipment.",
  },
  "products-lidding": {
    name: "Lidding Film",
    description: "Peelable and non-peelable lidding solutions for tray sealing applications.",
  },
  "products-shrink": {
    name: "Shrink Sleeves",
    description: "Full-body shrink sleeves and tamper-evident bands with high shrink ratios.",
  },
  "products-thermoforming": {
    name: "Thermoforming Film",
    description: "High-performance forming films for vacuum and MAP packaging applications.",
  },
  "contact-info": {
    email: "info@laminapackaging.com",
    phone: "+1 (234) 567-890",
    address: "1234 Industrial Blvd, Manufacturing District, ST 12345",
  },
};

export default function AdminPage() {
  const { user, isAdmin, isLoading, signOut } = useAuth();
  const { contents, isLoading: contentLoading, refetch } = useAllSiteContent();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [editingSection, setEditingSection] = useState<string | null>(null);
  const [editContent, setEditContent] = useState<Record<string, string>>({});
  const [newSectionKey, setNewSectionKey] = useState("");

  useEffect(() => {
    if (!isLoading && (!user || !isAdmin)) {
      navigate("/admin/auth");
    }
  }, [user, isAdmin, isLoading, navigate]);

  const handleEdit = (sectionKey: string, content: Record<string, unknown>) => {
    setEditingSection(sectionKey);
    // Convert all values to strings for editing
    const stringContent: Record<string, string> = {};
    Object.entries(content).forEach(([key, value]) => {
      stringContent[key] = String(value);
    });
    setEditContent(stringContent);
  };

  const handleSave = async () => {
    if (!editingSection) return;

    try {
      const { data: existing } = await supabase
        .from("site_content")
        .select("id")
        .eq("section_key", editingSection)
        .maybeSingle();

      let result;
      if (existing) {
        result = await supabase
          .from("site_content")
          .update({ content: editContent as unknown as Json })
          .eq("section_key", editingSection);
      } else {
        result = await supabase
          .from("site_content")
          .insert([{ section_key: editingSection, content: editContent as unknown as Json }]);
      }

      if (result.error) throw result.error;

      toast({ title: "Saved!", description: "Content updated successfully." });
      setEditingSection(null);
      refetch();
    } catch (error) {
      console.error("Save error:", error);
      toast({
        title: "Error",
        description: "Failed to save content",
        variant: "destructive",
      });
    }
  };

  const handleAddSection = async () => {
    if (!newSectionKey.trim()) return;

    const template = sectionTemplates[newSectionKey] || { title: "", description: "" };

    try {
      const { error } = await supabase
        .from("site_content")
        .insert([{ section_key: newSectionKey, content: template as unknown as Json }]);

      if (error) throw error;

      toast({ title: "Section Created", description: `${newSectionKey} has been added.` });
      setNewSectionKey("");
      refetch();
    } catch (error) {
      console.error("Add error:", error);
      toast({
        title: "Error",
        description: "Failed to create section",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (sectionKey: string) => {
    if (!confirm(`Are you sure you want to delete "${sectionKey}"?`)) return;

    try {
      const { error } = await supabase
        .from("site_content")
        .delete()
        .eq("section_key", sectionKey);

      if (error) throw error;

      toast({ title: "Deleted", description: "Section removed." });
      refetch();
    } catch (error) {
      console.error("Delete error:", error);
      toast({
        title: "Error",
        description: "Failed to delete section",
        variant: "destructive",
      });
    }
  };

  const handleLogout = async () => {
    await signOut();
    navigate("/admin/auth");
  };

  if (isLoading || contentLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary">
        <div className="animate-pulse text-muted-foreground">Loading admin panel...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary">
      {/* Admin Header */}
      <header className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-sm hover:text-accent transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Site
            </Link>
            <div className="h-6 w-px bg-primary-foreground/20" />
            <h1 className="text-lg font-bold">Content Manager</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-primary-foreground/70">{user?.email}</span>
            <Button variant="heroOutline" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg border border-border p-4 sticky top-24">
              <h2 className="font-bold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
                Quick Actions
              </h2>
              <nav className="space-y-2">
                <Link to="/" className="flex items-center gap-2 text-sm p-2 rounded hover:bg-secondary transition-colors">
                  <Home className="h-4 w-4" />
                  View Homepage
                </Link>
                <Link to="/products" className="flex items-center gap-2 text-sm p-2 rounded hover:bg-secondary transition-colors">
                  <Package className="h-4 w-4" />
                  View Products
                </Link>
              </nav>

              <div className="mt-6 pt-6 border-t border-border">
                <h2 className="font-bold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
                  Add Section
                </h2>
                <select
                  value={newSectionKey}
                  onChange={(e) => setNewSectionKey(e.target.value)}
                  className="w-full p-2 rounded border border-border bg-background text-sm mb-2"
                >
                  <option value="">Select template...</option>
                  {Object.keys(sectionTemplates).map((key) => (
                    <option key={key} value={key}>{key}</option>
                  ))}
                </select>
                <Button
                  onClick={handleAddSection}
                  disabled={!newSectionKey}
                  variant="cta"
                  size="sm"
                  className="w-full"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Section
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {contents.length === 0 ? (
              <div className="bg-card rounded-lg border border-border p-12 text-center">
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h2 className="text-xl font-bold mb-2">No Content Yet</h2>
                <p className="text-muted-foreground mb-6">
                  Start by adding a section from the sidebar.
                </p>
              </div>
            ) : (
              contents.map((section) => (
                <div
                  key={section.id}
                  className="bg-card rounded-lg border border-border overflow-hidden"
                >
                  <div className="px-6 py-4 bg-secondary/50 border-b border-border flex items-center justify-between">
                    <div>
                      <h3 className="font-bold">{section.section_key}</h3>
                      <p className="text-xs text-muted-foreground">
                        Last updated: {new Date(section.updated_at).toLocaleString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {editingSection === section.section_key ? (
                        <>
                          <Button onClick={handleSave} variant="cta" size="sm">
                            <Save className="h-4 w-4 mr-2" />
                            Save
                          </Button>
                          <Button
                            onClick={() => setEditingSection(null)}
                            variant="outline"
                            size="sm"
                          >
                            Cancel
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button
                            onClick={() => handleEdit(section.section_key, section.content)}
                            variant="outline"
                            size="sm"
                          >
                            Edit
                          </Button>
                          <Button
                            onClick={() => handleDelete(section.section_key)}
                            variant="ghost"
                            size="sm"
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    {editingSection === section.section_key ? (
                      <div className="space-y-4">
                        {Object.entries(editContent).map(([key, value]) => (
                          <div key={key}>
                            <label className="text-sm font-medium text-muted-foreground block mb-1">
                              {key.replace(/_/g, " ").toUpperCase()}
                            </label>
                            {value.length > 100 ? (
                              <Textarea
                                value={value}
                                onChange={(e) =>
                                  setEditContent({ ...editContent, [key]: e.target.value })
                                }
                                rows={4}
                              />
                            ) : (
                              <Input
                                value={value}
                                onChange={(e) =>
                                  setEditContent({ ...editContent, [key]: e.target.value })
                                }
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="grid gap-3">
                        {Object.entries(section.content).map(([key, value]) => (
                          <div key={key} className="grid grid-cols-3 gap-4 text-sm">
                            <span className="font-medium text-muted-foreground">
                              {key.replace(/_/g, " ")}
                            </span>
                            <span className="col-span-2 text-foreground">{String(value)}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
