from pathlib import Path

out = Path(r"d:\portfolio\portfolio-v2-master\public\images\projects\covers")
out.mkdir(parents=True, exist_ok=True)


def make_svg(title: str, subtitle: str, panels: list[tuple]) -> str:
    accent = "#e07a3d"
    rects = "".join(
        f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="8" fill="{fill}" opacity="0.92"/>'
        for x, y, w, h, fill in panels
    )
    return f"""<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1a1410"/>
      <stop offset="100%" stop-color="#2a1f18"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="980" cy="120" r="180" fill="{accent}" opacity="0.12"/>
  <circle cx="160" cy="520" r="140" fill="{accent}" opacity="0.08"/>
  <rect x="48" y="48" width="1104" height="534" rx="20" fill="#120e0c" stroke="{accent}" stroke-opacity="0.35"/>
  <text x="80" y="110" fill="{accent}" font-family="Segoe UI, Arial, sans-serif" font-size="28" font-weight="700">{title}</text>
  <text x="80" y="150" fill="#d6cfc7" font-family="Segoe UI, Arial, sans-serif" font-size="18">{subtitle}</text>
  {rects}
</svg>
"""


covers = {
    "transapp.svg": make_svg(
        "Transapp",
        "Offline translation · transcription · briefing",
        [
            (80, 200, 420, 280, "#241c16"),
            (520, 200, 300, 130, "#2d221a"),
            (520, 350, 300, 130, "#2d221a"),
            (840, 200, 260, 280, "#241c16"),
        ],
    ),
    "stratamind.svg": make_svg(
        "StrataMind",
        "Self-hosted RAG · citations · OCR · Ollama",
        [
            (80, 200, 280, 280, "#241c16"),
            (380, 200, 680, 60, "#2d221a"),
            (380, 280, 680, 200, "#241c16"),
        ],
    ),
    "audio-analyst.svg": make_svg(
        "AI Audio Analyst",
        "Local speech-to-text · summaries · SRT/JSON",
        [
            (80, 200, 1040, 80, "#2d221a"),
            (80, 300, 1040, 40, "#241c16"),
            (80, 360, 1040, 40, "#241c16"),
            (80, 420, 700, 40, "#241c16"),
            (80, 480, 500, 40, "#2d221a"),
        ],
    ),
    "portfolio.svg": make_svg(
        "Muhammad Sawaiz",
        "AI Engineer portfolio · Next.js · ML and NLP",
        [
            (80, 200, 500, 280, "#241c16"),
            (600, 200, 520, 130, "#2d221a"),
            (600, 350, 250, 130, "#241c16"),
            (870, 350, 250, 130, "#241c16"),
        ],
    ),
}

for name, content in covers.items():
    (out / name).write_text(content, encoding="utf-8")
    print("wrote", name)
