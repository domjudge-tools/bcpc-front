/**
 * CodeBackground — decorative hero background for BCPC.
 *
 * Renders three visual layers (all CSS-driven, no JS per frame):
 *  1. Floating monospace algorithm/code tokens at very low opacity
 *  2. Two slow-drifting gradient orbs
 *  3. A dot-grid overlay
 *
 * Positions are intentionally kept to screen edges so they never
 * compete with the centered hero content.
 */

interface FloatingToken {
  text: string;
  top: string;
  left?: string;
  right?: string;
  floatDuration: string;
  delay: string;
  size: "text-xs" | "text-sm" | "text-base";
}

// All tokens are kept near screen edges (left/right margins) so they
// don't interfere with the centered content column.
const FLOATING_TOKENS: FloatingToken[] = [
  {
    text: "5859-8312-1853-9392 - تجارت",
    top: "24%",
    left: "8%",
    floatDuration: "27s",
    delay: "3.5s",
    size: "text-base",
  },
  {
    text: "O(n log n)",
    top: "9%",
    left: "3%",
    floatDuration: "22s",
    delay: "0s",
    size: "text-xs",
  },
  {
    text: "while (true) {",
    top: "18%",
    right: "4%",
    floatDuration: "27s",
    delay: "3.5s",
    size: "text-sm",
  },
  {
    text: "dp[i][j] = min(...)",
    top: "30%",
    right: "2%",
    floatDuration: "20s",
    delay: "1.2s",
    size: "text-xs",
  },
  {
    text: "آه دولوپر گردن گیره",
    top: "65%",
    right: "19%",
    floatDuration: "26s",
    delay: "1s",
    size: "text-xs",
  },
  {
    text: "priority_queue<int>",
    top: "44%",
    right: "5%",
    floatDuration: "25s",
    delay: "6s",
    size: "text-xs",
  },
  {
    text: "#include <bits/stdc++.h>",
    top: "58%",
    left: "2%",
    floatDuration: "30s",
    delay: "2s",
    size: "text-xs",
  },
  {
    text: "dijkstra(src, adj)",
    top: "70%",
    right: "3%",
    floatDuration: "23s",
    delay: "4.5s",
    size: "text-xs",
  },
  {
    text: "پول دولوپر خوردن نداره",
    top: "32%",
    right: "23%",
    floatDuration: "26s",
    delay: "1s",
    size: "text-xs",
  },
  {
    text: "long long MOD = 1e9+7;",
    top: "80%",
    left: "4%",
    floatDuration: "19s",
    delay: "7s",
    size: "text-xs",
  },
  {
    text: "Floyd-Warshall",
    top: "88%",
    right: "6%",
    floatDuration: "26s",
    delay: "1s",
    size: "text-xs",
  },
  {
    text: "BFS / DFS",
    top: "38%",
    left: "3%",
    floatDuration: "21s",
    delay: "9s",
    size: "text-xs",
  },
  {
    text: "پول منو بدین",
    top: "88%",
    left: "16%",
    floatDuration: "26s",
    delay: "1s",
    size: "text-base",
  },
  {
    text: "sort(v.begin(), v.end())",
    top: "22%",
    left: "2%",
    floatDuration: "24s",
    delay: "5s",
    size: "text-xs",
  },
];

export function CodeBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Layer 1 — Floating code tokens */}
      {FLOATING_TOKENS.map((token, i) => (
        <span
          key={i}
          className={`animate-code-float absolute font-mono ${token.size} select-none pointer-events-none text-white whitespace-nowrap`}
          style={{
            top: token.top,
            left: token.left,
            right: token.right,
            animationDuration: token.floatDuration,
            animationDelay: token.delay,
            opacity: 0.035,
          }}
        >
          {token.text}
        </span>
      ))}

      {/* Layer 2 — Gradient orbs (slow drift via CSS transform animation) */}
      <div
        className="absolute -top-32 -right-32 size-[600px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.62 0.18 287 / 0.18) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-48 -left-24 size-[500px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.54 0.18 285 / 0.14) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[700px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.62 0.18 287 / 0.2) 0%, transparent 60%)",
        }}
      />

      {/* Layer 3 — Dot grid */}
      <div className="absolute inset-0 hero-dot-grid opacity-40" />

      {/* Layer 4 — Bottom fade to page background */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </div>
  );
}
