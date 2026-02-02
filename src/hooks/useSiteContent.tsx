import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth";
import type { Json } from "@/integrations/supabase/types";

export interface ContentSection {
  id: string;
  section_key: string;
  content: Record<string, unknown>;
  updated_at: string;
}

export function useSiteContent(sectionKey: string) {
  const [content, setContent] = useState<Record<string, unknown> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { isAdmin } = useAuth();

  useEffect(() => {
    fetchContent();
  }, [sectionKey]);

  const fetchContent = async () => {
    try {
      const { data, error } = await supabase
        .from("site_content")
        .select("*")
        .eq("section_key", sectionKey)
        .maybeSingle();

      if (error) {
        console.error("Error fetching content:", error);
        return;
      }

      if (data) {
        setContent(data.content as Record<string, unknown>);
      }
    } catch (error) {
      console.error("Error fetching content:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateContent = async (newContent: Record<string, unknown>) => {
    if (!isAdmin) {
      console.error("Only admins can update content");
      return { error: new Error("Unauthorized") };
    }

    try {
      // Try to update first, if no rows updated, insert
      const { data: existing } = await supabase
        .from("site_content")
        .select("id")
        .eq("section_key", sectionKey)
        .maybeSingle();

      let result;
      if (existing) {
        result = await supabase
          .from("site_content")
          .update({ content: newContent as unknown as Json })
          .eq("section_key", sectionKey);
      } else {
        result = await supabase
          .from("site_content")
          .insert([{ section_key: sectionKey, content: newContent as unknown as Json }]);
      }

      if (result.error) {
        console.error("Error updating content:", result.error);
        return { error: result.error };
      }

      setContent(newContent);
      return { error: null };
    } catch (error) {
      console.error("Error updating content:", error);
      return { error };
    }
  };

  return { content, isLoading, updateContent, refetch: fetchContent };
}

export function useAllSiteContent() {
  const [contents, setContents] = useState<ContentSection[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAllContent();
  }, []);

  const fetchAllContent = async () => {
    try {
      const { data, error } = await supabase
        .from("site_content")
        .select("*")
        .order("section_key");

      if (error) {
        console.error("Error fetching all content:", error);
        return;
      }

      setContents(data as ContentSection[]);
    } catch (error) {
      console.error("Error fetching all content:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { contents, isLoading, refetch: fetchAllContent };
}
