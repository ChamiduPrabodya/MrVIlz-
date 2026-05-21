import { useEffect, useState } from "react";

function toDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("Failed to read file."));
    reader.readAsDataURL(file);
  });
}

export default function HeroAdminPanel({ hero, onSave, saveState }) {
  const [formState, setFormState] = useState(hero);
  const [uploadState, setUploadState] = useState("idle");

  useEffect(() => {
    setFormState(hero);
  }, [hero]);

  function updateField(field, value) {
    setFormState((current) => ({
      ...current,
      [field]: value
    }));
  }

  function updateAction(actionKey, field, value) {
    setFormState((current) => ({
      ...current,
      [actionKey]: {
        ...current[actionKey],
        [field]: value
      }
    }));
  }

  async function handleFileChange(event) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setUploadState("loading");

    try {
      const mediaUrl = await toDataUrl(file);
      updateField("mediaUrl", mediaUrl);
      setUploadState("done");
    } catch (_error) {
      setUploadState("error");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSave(formState);
  }

  return (
    <section className="admin-panel-section">
      <div className="container">
        <form className="admin-panel" onSubmit={handleSubmit}>
          <div className="admin-panel-head">
            <div>
              <p className="eyebrow">Admin hero editor</p>
              <h2>Change the hero background without editing code.</h2>
            </div>
            <div className={`admin-status admin-status-${saveState}`}>
              {saveState === "saving" ? "Saving..." : null}
              {saveState === "saved" ? "Saved" : null}
              {saveState === "error" ? "Save failed" : null}
              {saveState === "idle" ? "Admin mode active" : null}
            </div>
          </div>

          <div className="admin-grid">
            <label>
              <span>Eyebrow</span>
              <input
                value={formState.eyebrow}
                onChange={(event) => updateField("eyebrow", event.target.value)}
              />
            </label>

            <label>
              <span>Title</span>
              <input
                value={formState.title}
                onChange={(event) => updateField("title", event.target.value)}
              />
            </label>

            <label className="admin-grid-wide">
              <span>Subtitle</span>
              <textarea
                rows="3"
                value={formState.subtitle}
                onChange={(event) => updateField("subtitle", event.target.value)}
              />
            </label>

            <label>
              <span>Primary label</span>
              <input
                value={formState.primaryAction.label}
                onChange={(event) =>
                  updateAction("primaryAction", "label", event.target.value)
                }
              />
            </label>

            <label>
              <span>Primary link</span>
              <input
                value={formState.primaryAction.href}
                onChange={(event) =>
                  updateAction("primaryAction", "href", event.target.value)
                }
              />
            </label>

            <label>
              <span>Secondary label</span>
              <input
                value={formState.secondaryAction.label}
                onChange={(event) =>
                  updateAction("secondaryAction", "label", event.target.value)
                }
              />
            </label>

            <label>
              <span>Secondary link</span>
              <input
                value={formState.secondaryAction.href}
                onChange={(event) =>
                  updateAction("secondaryAction", "href", event.target.value)
                }
              />
            </label>

            <label>
              <span>Background type</span>
              <select
                value={formState.mediaType}
                onChange={(event) => updateField("mediaType", event.target.value)}
              >
                <option value="image">Image</option>
                <option value="video">Video</option>
              </select>
            </label>

            <label className="admin-grid-wide">
              <span>Background URL or data URL</span>
              <input
                value={formState.mediaUrl}
                onChange={(event) => updateField("mediaUrl", event.target.value)}
                placeholder="https://... or uploaded file result"
              />
            </label>

            <label className="admin-grid-wide">
              <span>Upload image or video file</span>
              <input
                type="file"
                accept="image/*,video/*"
                onChange={handleFileChange}
              />
              <small>
                {uploadState === "loading" ? "Preparing file..." : null}
                {uploadState === "done"
                  ? "File loaded into the editor. Save to make it live."
                  : null}
                {uploadState === "error" ? "Could not read that file." : null}
                {uploadState === "idle"
                  ? "Best for optimized images or short compressed videos."
                  : null}
              </small>
            </label>
          </div>

          <div className="admin-actions">
            <button className="button button-primary" type="submit">
              Save Hero
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
