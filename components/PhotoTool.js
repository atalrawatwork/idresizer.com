"use client";

import { useCallback, useRef, useState } from "react";
import { TOOLS } from "@/lib/tools";

function formatKB(bytes) {
  return Math.round((bytes / 1024) * 10) / 10;
}

// Draws a center-cropped, exactly-sized JPEG onto an offscreen canvas,
// then steps JPEG quality down until the blob fits under maxKB.
async function processImage(image, tool) {
  const targetRatio = tool.widthPx / tool.heightPx;
  const srcRatio = image.width / image.height;

  let sx, sy, sw, sh;
  if (srcRatio > targetRatio) {
    // source is wider than target: crop left/right
    sh = image.height;
    sw = sh * targetRatio;
    sx = (image.width - sw) / 2;
    sy = 0;
  } else {
    // source is taller than target: crop top/bottom
    sw = image.width;
    sh = sw / targetRatio;
    sx = 0;
    sy = (image.height - sh) / 2;
  }

  const canvas = document.createElement("canvas");
  canvas.width = tool.widthPx;
  canvas.height = tool.heightPx;
  const ctx = canvas.getContext("2d");
  ctx.imageSmoothingQuality = "high";
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(image, sx, sy, sw, sh, 0, 0, tool.widthPx, tool.heightPx);

  const targetBytes = tool.maxKB * 1024;
  let quality = 0.92;
  let blob = await canvasToBlob(canvas, quality);

  while (blob.size > targetBytes && quality > 0.35) {
    quality -= 0.07;
    blob = await canvasToBlob(canvas, quality);
  }

  return { canvas, blob, quality };
}

function canvasToBlob(canvas, quality) {
  return new Promise((resolve) => {
    canvas.toBlob((b) => resolve(b), "image/jpeg", quality);
  });
}

export default function PhotoTool({ defaultSlug }) {
  const [toolSlug, setToolSlug] = useState(defaultSlug || TOOLS[0].slug);
  const [status, setStatus] = useState("idle"); // idle | processing | done | error
  const [resultUrl, setResultUrl] = useState(null);
  const [resultBlob, setResultBlob] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const fileInputRef = useRef(null);

  const tool = TOOLS.find((t) => t.slug === toolSlug);

  const handleFile = useCallback(
    async (file) => {
      if (!file) return;
      if (!file.type.startsWith("image/")) {
        setStatus("error");
        setErrorMsg("Please upload an image file (JPG, PNG, or WEBP).");
        return;
      }

      setStatus("processing");
      setErrorMsg("");

      try {
        const dataUrl = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });

        const image = await new Promise((resolve, reject) => {
          const img = new window.Image();
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = dataUrl;
        });

        const { blob } = await processImage(image, tool);

        if (resultUrl) URL.revokeObjectURL(resultUrl);
        const url = URL.createObjectURL(blob);
        setResultUrl(url);
        setResultBlob(blob);
        setStatus("done");
      } catch (err) {
        setStatus("error");
        setErrorMsg("We couldn't process that photo. Please try a different file.");
      }
    },
    [tool, resultUrl]
  );

  const handleToolChange = (e) => {
    setToolSlug(e.target.value);
    setStatus("idle");
    if (resultUrl) URL.revokeObjectURL(resultUrl);
    setResultUrl(null);
    setResultBlob(null);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    handleFile(file);
  };

  return (
    <div id="tool" className="card grid gap-0 overflow-hidden md:grid-cols-2">
      {/* Left: controls */}
      <div className="p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
          Free · 100% Browser-Based
        </p>
        <h3 className="mt-1 text-xl font-bold text-navy">Resize your photo now</h3>
        <p className="mt-1 text-sm text-slate-500">
          Choose your document type, upload a photo, and download a
          ready-to-submit file. Nothing is uploaded to a server.
        </p>

        <label className="mt-5 block text-sm font-semibold text-navy">
          Document type
        </label>
        <select
          value={toolSlug}
          onChange={handleToolChange}
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-navy shadow-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
        >
          {TOOLS.map((t) => (
            <option key={t.slug} value={t.slug}>
              {t.flag} {t.name}
            </option>
          ))}
        </select>

        <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs text-slate-500">
          <div className="rounded-lg bg-slate-50 py-2">
            <p className="font-semibold text-navy">{tool.widthPx}×{tool.heightPx}px</p>
            <p>Output size</p>
          </div>
          <div className="rounded-lg bg-slate-50 py-2">
            <p className="font-semibold text-navy">Under {tool.maxKB}KB</p>
            <p>File cap</p>
          </div>
          <div className="rounded-lg bg-slate-50 py-2">
            <p className="font-semibold text-navy">{tool.background}</p>
            <p>Background</p>
          </div>
        </div>

        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          className="mt-5 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-brand-200 bg-brand-50/50 px-6 py-8 text-center"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-brand-500">
            <path d="M12 16V4M12 4l-4 4M12 4l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <p className="mt-3 text-sm font-medium text-navy">
            Drag and drop your photo here
          </p>
          <p className="text-xs text-slate-500">or</p>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="btn-primary mt-2"
          >
            Upload Your Photo
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleFile(e.target.files?.[0])}
          />
          <p className="mt-2 text-[11px] text-slate-400">
            Supported formats: JPG, PNG, WEBP (Max 10MB)
          </p>
        </div>

        {status === "error" && (
          <p className="mt-3 text-sm font-medium text-rose-600">{errorMsg}</p>
        )}
      </div>

      {/* Right: preview */}
      <div className="flex flex-col items-center justify-center gap-4 border-t border-slate-100 bg-slate-50 p-6 sm:p-8 md:border-l md:border-t-0">
        {status === "idle" && (
          <div className="flex flex-col items-center gap-2 text-center text-slate-400">
            <div
              className="flex items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white"
              style={{
                width: Math.min(200, 200 * (tool.widthPx / Math.max(tool.widthPx, tool.heightPx))),
                height: Math.min(200, 200 * (tool.heightPx / Math.max(tool.widthPx, tool.heightPx))),
              }}
            >
              <span className="text-xs">Preview appears here</span>
            </div>
            <p className="text-xs">{tool.widthPx}×{tool.heightPx}px output preview</p>
          </div>
        )}

        {status === "processing" && (
          <div className="flex flex-col items-center gap-3">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-brand-200 border-t-brand-600" />
            <p className="text-sm font-medium text-slate-500">Resizing and compressing…</p>
          </div>
        )}

        {status === "done" && resultUrl && (
          <>
            <img
              src={resultUrl}
              alt={`Processed ${tool.name} output`}
              className="max-h-64 rounded-xl border border-slate-200 bg-white object-contain shadow-sm"
              style={{ aspectRatio: `${tool.widthPx} / ${tool.heightPx}` }}
            />
            <div className="flex items-center gap-2 rounded-full bg-mint-50 px-3 py-1 text-xs font-semibold text-mint">
              <span className="h-1.5 w-1.5 rounded-full bg-mint" />
              {tool.widthPx}×{tool.heightPx}px · {formatKB(resultBlob.size)}KB · under {tool.maxKB}KB limit
            </div>
            <a
              href={resultUrl}
              download={`${tool.slug}-idresizer.jpg`}
              className="btn-primary w-full sm:w-auto"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Download JPEG
            </a>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="text-xs font-medium text-slate-500 underline underline-offset-2 hover:text-brand-600"
            >
              Try a different photo
            </button>
          </>
        )}
      </div>
    </div>
  );
}
