import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HeroAdminPanel from "./components/HeroAdminPanel";
import WhatWeDoSection from "./components/WhatWeDoSection";
import OngoingProjectsSection from "./components/OngoingProjectsSection";
import TeamSection from "./components/TeamSection";

const defaultSiteContent = {
  hero: {
    eyebrow: "Protecting Sri Lanka's marine future",
    title: "Mr Vilz",
    subtitle: "We are striving to protect the marine environment of Sri Lanka.",
    primaryAction: {
      label: "Be Involved",
      href: "#projects"
    },
    secondaryAction: {
      label: "About Us",
      href: "#about"
    },
    mediaType: "image",
    mediaUrl: "/mrvilz-logo.jpeg",
    mediaAlt: "Mr Vilz hero background"
  }
};

function mergeSiteContent(content) {
  return {
    ...defaultSiteContent,
    ...content,
    hero: {
      ...defaultSiteContent.hero,
      ...content?.hero
    }
  };
}

export default function App() {
  const [siteContent, setSiteContent] = useState(defaultSiteContent);
  const [isLoadingContent, setIsLoadingContent] = useState(true);
  const [saveState, setSaveState] = useState("idle");
  const isAdminMode = useMemo(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return new URLSearchParams(window.location.search).has("admin");
  }, []);

  useEffect(() => {
    let isMounted = true;

    async function loadSiteContent() {
      try {
        const response = await fetch("/api/site-content");

        if (!response.ok) {
          throw new Error("Failed to load site content.");
        }

        const data = await response.json();

        if (isMounted) {
          setSiteContent(mergeSiteContent(data));
        }
      } catch (_error) {
        if (isMounted) {
          setSiteContent(defaultSiteContent);
        }
      } finally {
        if (isMounted) {
          setIsLoadingContent(false);
        }
      }
    }

    loadSiteContent();

    return () => {
      isMounted = false;
    };
  }, []);

  async function handleHeroSave(nextHero) {
    setSaveState("saving");

    try {
      const response = await fetch("/api/site-content/hero", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(nextHero)
      });

      if (!response.ok) {
        throw new Error("Failed to save hero content.");
      }

      const data = await response.json();
      setSiteContent((current) =>
        mergeSiteContent({
          ...current,
          hero: data.hero
        })
      );
      setSaveState("saved");
      window.setTimeout(() => {
        setSaveState("idle");
      }, 2400);
    } catch (_error) {
      setSaveState("error");
    }
  }

  return (
    <div className="site-shell" id="home">
      <Header />

      <main className="page-main">
        <HeroSection hero={siteContent.hero} isLoading={isLoadingContent} />
        {isAdminMode ? (
          <HeroAdminPanel
            hero={siteContent.hero}
            onSave={handleHeroSave}
            saveState={saveState}
          />
        ) : null}
        <WhatWeDoSection />
        <OngoingProjectsSection />
        <TeamSection />
      </main>
    </div>
  );
}
