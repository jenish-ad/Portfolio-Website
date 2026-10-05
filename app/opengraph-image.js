import { ImageResponse } from "next/og";

export const alt = "Jenish Adhikari, Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const headline = {
  fontSize: 104,
  fontWeight: 800,
  lineHeight: 0.9,
  letterSpacing: "-0.05em",
  textTransform: "uppercase",
};

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#f3ede4",
          color: "#1a1714",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: "-0.04em" }}>
          JENISH ADHIKARI
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ width: 160, height: 6, background: "#ff4d00", marginBottom: 36 }} />
          <div style={headline}>Full-Stack</div>
          <div style={{ ...headline, color: "#ff4d00" }}>Developer</div>
          <div style={{ fontSize: 30, marginTop: 36, color: "#1a1714b3" }}>
            I build web apps, AI tools and data-driven systems · Nepal
          </div>
        </div>
      </div>
    ),
    size
  );
}
