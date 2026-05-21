const fs = require("fs");
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;
const clientDistPath = path.join(__dirname, "..", "client", "dist");
const hasClientBuild = fs.existsSync(clientDistPath);
const dataDirectory = path.join(__dirname, "data");
const siteContentPath = path.join(dataDirectory, "site-content.json");

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
      href: "#what-we-do"
    },
    mediaType: "image",
    mediaUrl: "/images/background.png",
    mediaAlt: "Mr Vilz hero background"
  }
};

function ensureSiteContentFile() {
  if (!fs.existsSync(dataDirectory)) {
    fs.mkdirSync(dataDirectory, { recursive: true });
  }

  if (!fs.existsSync(siteContentPath)) {
    fs.writeFileSync(siteContentPath, JSON.stringify(defaultSiteContent, null, 2));
  }
}

function normalizeSiteContent(siteContent = {}) {
  return {
    ...defaultSiteContent,
    ...siteContent,
    hero: {
      ...defaultSiteContent.hero,
      ...siteContent.hero
    }
  };
}

function readSiteContent() {
  ensureSiteContentFile();

  try {
    const raw = fs.readFileSync(siteContentPath, "utf8");
    return normalizeSiteContent(JSON.parse(raw));
  } catch (_error) {
    const normalized = normalizeSiteContent();
    fs.writeFileSync(siteContentPath, JSON.stringify(normalized, null, 2));
    return normalized;
  }
}

function writeSiteContent(siteContent) {
  ensureSiteContentFile();
  const normalized = normalizeSiteContent(siteContent);
  fs.writeFileSync(siteContentPath, JSON.stringify(normalized, null, 2));
  return normalized;
}

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/api/health", (_req, res) => {
  res.json({
    message: "Backend is connected."
  });
});

app.get("/api/site-content", (_req, res) => {
  res.json(readSiteContent());
});

app.put("/api/site-content/hero", (req, res) => {
  const currentSiteContent = readSiteContent();
  const nextHero = {
    ...currentSiteContent.hero,
    ...req.body
  };

  if (!["image", "video"].includes(nextHero.mediaType)) {
    return res.status(400).json({
      message: "Hero media type must be either image or video."
    });
  }

  const nextSiteContent = writeSiteContent({
    ...currentSiteContent,
    hero: nextHero
  });

  return res.json({
    hero: nextSiteContent.hero
  });
});

if (hasClientBuild) {
  app.use(express.static(clientDistPath));

  app.get(/^(?!\/api).*/, (_req, res) => {
    res.sendFile(path.join(clientDistPath, "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
