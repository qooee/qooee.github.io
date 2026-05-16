import { execFileSync } from "node:child_process";
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const outputDir = join(root, "static/images/screenshots");
const tempDir = join(root, ".tmp/screenshots");

mkdirSync(outputDir, { recursive: true });
mkdirSync(tempDir, { recursive: true });

const width = 1179;
const height = 2556;
const safeTop = 166;
const tabTop = 2308;
const bottomHome = 2517;
const navy = "#001524";
const blue = "#2b7fc3";
const grey = "#8b8f94";
const lightGrey = "#f0f1f3";
const line = "#d7d7d7";
const teal = "#bff1ed";
const pink = "#f8ccd7";
const sky = "#cbe1fb";
const honey = "#ffe8bf";
const green = "#dbe7d6";

const escapeXML = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

function text(value, x, y, options = {}) {
  const {
    size = 44,
    weight = 400,
    fill = "#000",
    anchor = "start",
    opacity = 1,
    family = "-apple-system, BlinkMacSystemFont, 'SF Pro Display', Arial, sans-serif",
  } = options;
  return `<text x="${x}" y="${y}" font-family="${family}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}" opacity="${opacity}">${escapeXML(value)}</text>`;
}

function iconText(value, x, y, options = {}) {
  return text(value, x, y, {
    family: "'SF Pro Display', Arial, sans-serif",
    ...options,
  });
}

function rect(x, y, w, h, rx = 0, fill = "#fff", extra = "") {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" ${extra}/>`;
}

function circle(cx, cy, r, fill, extra = "") {
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" ${extra}/>`;
}

function lineEl(x1, y1, x2, y2, stroke = line, strokeWidth = 1) {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-width="${strokeWidth}"/>`;
}

function statusBar() {
  return [
    text("9:41", 162, 105, { size: 54, weight: 700 }),
    rect(401, 34, 377, 111, 56, "#000"),
    rect(1014, 70, 64, 38, 11, "none", `stroke="#000" stroke-width="4"`),
    rect(1081, 82, 7, 15, 4, "#000"),
    rect(1022, 78, 48, 22, 7, "#000", `opacity="0.9"`),
    `<path d="M848 94h8V78h-8z M863 94h8V69h-8z M878 94h8V60h-8z M893 94h8V51h-8z" fill="#000"/>`,
    `<path d="M932 72c26-21 63-21 89 0M949 91c16-13 39-13 55 0M965 108c8-7 19-7 27 0" stroke="#000" stroke-width="7" stroke-linecap="round" fill="none"/>`,
  ].join("");
}

function tabBar(active) {
  const items = [
    ["Contacts", "people", 148],
    ["Updates", "bell", 443],
    ["Card", "card", 738],
    ["Settings", "gear", 1030],
  ];
  return [
    lineEl(0, tabTop, width, tabTop, "#c7c7c7", 1),
    rect(0, tabTop + 1, width, height - tabTop - 1, 0, "#fafafa"),
    ...items.map(([label, kind, x]) => tabItem(label, kind, x, active === label)),
    rect(379, bottomHome, 421, 15, 8, "#111", `opacity="0.72"`),
  ].join("");
}

function tabItem(label, kind, x, active) {
  const fill = active ? blue : "#939694";
  const y = 2388;
  const icon =
    kind === "people"
      ? `${circle(x - 25, y - 31, 23, fill)}${circle(x + 30, y - 31, 23, fill)}${rect(x - 62, y + 1, 65, 36, 23, fill)}${rect(x - 2, y + 1, 76, 36, 23, fill)}`
      : kind === "bell"
        ? `<path d="M${x - 38} ${y + 17}h76c-13-15-19-36-19-69 0-24-16-42-38-42s-38 18-38 42c0 33-6 54-19 69z" fill="${fill}"/>${circle(x + 39, y - 75, 18, fill)}${circle(x, y + 37, 12, fill)}`
        : kind === "card"
          ? `${rect(x - 39, y - 83, 78, 78, 10, fill)}${circle(x, y - 48, 13, "#fff")}${rect(x - 24, y - 25, 48, 18, 12, "#fff")}`
          : `<path d="M${x} ${y - 84}l14 8 16-6 14 24 15 4v28l-15 4-14 24-16-6-14 8-14-8-16 6-14-24-15-4v-28l15-4 14-24 16 6z" fill="${fill}"/><circle cx="${x}" cy="${y - 32}" r="18" fill="#fff"/>`;
  return `${icon}${text(label, x, 2463, { size: 34, fill, anchor: "middle" })}`;
}

function navIcons(includeGroup = true) {
  return [
    includeGroup ? text("Qooee", 900, 232, { size: 34, weight: 700, fill: navy, anchor: "end" }) : "",
    includeGroup ? iconText("☷", 1016, 236, { size: 42, fill: blue, anchor: "middle" }) : "",
    iconText("+", 1096, 238, { size: 72, fill: blue, anchor: "middle" }),
  ].join("");
}

function initialsBadge(x, y, initials, fill, textFill) {
  return `${circle(x, y, 66, fill)}${text(initials, x, y + 18, { size: 43, weight: 700, fill: textFill, anchor: "middle" })}`;
}

function chevron(x, y) {
  return `<path d="M${x} ${y - 16}l18 18-18 18" fill="none" stroke="#b8b8b8" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>`;
}

function row(y, item) {
  return [
    initialsBadge(126, y + 72, item.initials, item.bg, item.fg),
    text(item.name, 228, y + 90, { size: 48, weight: 600 }),
    item.subtitle ? text(item.subtitle, 230, y + 140, { size: 31, fill: "#7f8386" }) : "",
    item.pill ? `${rect(778, y + 50, 286, 56, 28, honey)}${text(item.pill, 921, y + 88, { size: 31, weight: 700, fill: "#f59a00", anchor: "middle" })}` : "",
    chevron(1098, y + 75),
    lineEl(228, y + 180, width, y + 180),
  ].join("");
}

function contactsScreen() {
  const rows = [
    { name: "Jamie Anderson", subtitle: "Anderson Studio", initials: "JA", bg: teal, fg: "#00b8ad" },
    { name: "Priya Bennett", subtitle: "Harbor Ventures", initials: "PB", bg: teal, fg: "#00b8ad" },
    { name: "Mason Brooks", subtitle: "Northline Advisory", initials: "MB", bg: pink, fg: "#ff315f", pill: "pending" },
    { name: "Arjun Chen", subtitle: "Design Partners", initials: "AC", bg: pink, fg: "#ff315f" },
    { name: "Noah Clarke", subtitle: "Qooee", initials: "NC", bg: sky, fg: "#0877ee" },
  ];
  return phone([
    navIcons(true),
    text("Contacts", 48, 398, { size: 82, weight: 800 }),
    rect(48, 452, 1083, 108, 28, "#ededef"),
    `<circle cx="105" cy="507" r="29" stroke="#85878b" stroke-width="7" fill="none"/><path d="M127 529l39 39" stroke="#85878b" stroke-width="7" stroke-linecap="round"/>`,
    text("Search name, job title, organisation or address", 143, 524, { size: 43, fill: "#85878b" }),
    text("A", 62, 725, { size: 44, weight: 700, fill: grey }),
    row(782, rows[0]),
    text("B", 62, 1078, { size: 44, weight: 700, fill: grey }),
    row(1138, rows[1]),
    row(1350, rows[2]),
    text("C", 62, 1668, { size: 44, weight: 700, fill: grey }),
    row(1725, rows[3]),
    row(1936, rows[4]),
    alphabetRail(),
    tabBar("Contacts"),
  ]);
}

function alphabetRail() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#".split("");
  return [
    rect(1107, 990, 65, 932, 32, "#f5f5f5", `opacity="0.92"`),
    ...letters.map((letter, index) => text(letter, 1139, 1040 + index * 32, {
      size: 28,
      weight: 700,
      fill: "ABECDGKLMPQRSW".includes(letter) ? blue : "#d0d2d4",
      anchor: "middle",
    })),
  ].join("");
}

function updatesScreen() {
  const updates = [
    ["Jamie Anderson changed name to Priya Rodriguez", "1 hr ago"],
    ["Priya Bennett changed organisation to Harbor Ventures", "2 hrs ago"],
    ["Noah Clarke changed department to Partnerships", "3 hrs ago"],
    ["Aisha Lopez changed job title to Data Scientist", "4 hrs ago"],
    ["Leo Thompson changed email to leo.thompson@example.com", "5 hrs ago"],
    ["Mina Morgan changed phone to +1 (415) 555-7305", "7 hrs ago"],
  ];
  const y0 = 642;
  return phone([
    text("Updates", 48, 398, { size: 82, weight: 800 }),
    text("Recent updates", 61, 570, { size: 45, weight: 700, fill: grey }),
    lineEl(60, 594, width, 594),
    ...updates.map(([title, time], index) => updateRow(y0 + index * 277, title, time)),
    tabBar("Updates"),
  ]);
}

function updateRow(y, title, time) {
  const lines = wrap(title, 36, 2);
  return [
    ...lines.map((lineText, index) => text(lineText, 61, y + index * 64, { size: 49 })),
    text(time, 61, y + 128, { size: 36, fill: "#828486" }),
    chevron(1098, y + 70),
    lineEl(60, y + 182, width, y + 182),
  ].join("");
}

function myCardScreen() {
  return phone([
    text("My Card", 48, 398, { size: 82, weight: 800 }),
    text("Card views", 61, 570, { size: 45, weight: 700, fill: grey }),
    lineEl(60, 594, width, 594),
    chip(61, 638, "Main card", true),
    chip(312, 638, "Consulting", false),
    chip(590, 638, "Speaking", false),
    actionRow(732, "Manage audience", "person.2", "14"),
    text("Preview", 61, 920, { size: 45, weight: 700, fill: grey }),
    lineEl(60, 944, width, 944),
    initialsBadge(126, 1054, "ME", sky, "#0877ee"),
    text("Morgan Ellis", 228, 1036, { size: 49, weight: 700 }),
    text("Qooee", 228, 1092, { size: 39 }),
    text("Product", 228, 1144, { size: 39, fill: "#7f8386" }),
    text("Founder", 228, 1196, { size: 39, fill: "#7f8386" }),
    detailRow(1292, "Given name", "Morgan"),
    detailRow(1390, "Family name", "Ellis"),
    detailRow(1488, "Organisation", "Qooee"),
    detailRow(1586, "Department", "Product"),
    detailRow(1684, "Email", "morgan@qooee.net"),
    actionRow(1788, "Edit this view", "pencil", ""),
    actionRow(1886, "New card view", "+", ""),
    text("Share", 61, 2030, { size: 45, weight: 700, fill: grey }),
    lineEl(60, 2054, width, 2054),
    `<path d="${qrPath(485, 2093, 7)}" fill="#000"/>`,
    text("Share link", 655, 2194, { size: 42, weight: 700 }),
    tabBar("Card"),
  ]);
}

function chip(x, y, label, selected) {
  return [
    rect(x, y, label.length * 22 + 100, 64, 32, selected ? navy : "#fff", `stroke="${selected ? navy : line}" stroke-width="1"`),
    selected ? text("✓", x + 30, y + 43, { size: 28, fill: "#fff", weight: 700 }) : "",
    text(label, x + (selected ? 66 : 28), y + 43, { size: 31, fill: selected ? "#fff" : navy, weight: selected ? 700 : 500 }),
  ].join("");
}

function actionRow(y, title, symbol, value) {
  const icon = symbol === "+"
    ? text("+", 84, y + 57, { size: 46, fill: blue, anchor: "middle" })
    : symbol === "pencil"
      ? text("✎", 84, y + 54, { size: 34, fill: blue, anchor: "middle" })
      : `${circle(78, y + 39, 15, blue)}${circle(105, y + 39, 15, blue)}${rect(52, y + 59, 46, 26, 15, blue)}${rect(90, y + 59, 52, 26, 15, blue)}`;
  return [
    icon,
    text(title, 134, y + 61, { size: 41 }),
    value ? text(value, 1057, y + 61, { size: 38, fill: grey, anchor: "end" }) : "",
    chevron(1098, y + 43),
    lineEl(60, y + 94, width, y + 94),
  ].join("");
}

function detailRow(y, label, value) {
  return [
    text(label, 61, y + 46, { size: 45, fill: "#7f8386" }),
    text(value, 1118, y + 46, { size: 45, anchor: "end" }),
    lineEl(60, y + 78, width, y + 78),
  ].join("");
}

function qrPath(x, y, scale) {
  const cells = [
    "111111100101101111111",
    "100000100111101000001",
    "101110101001101011101",
    "101110101111001011101",
    "101110100100101011101",
    "100000101010101000001",
    "111111101010101111111",
    "000000001101000000000",
    "110101111010111011011",
    "011001001111001010100",
    "101111111000111110111",
    "000100010101000100010",
    "111011101110111010101",
    "010000001001001111000",
    "101111111011101001111",
    "000000101100100101001",
    "111111101001111101101",
    "100000100111000000101",
    "101110101001101111111",
    "100000101110101100001",
    "111111101001111101011",
  ];
  const rects = [];
  for (let row = 0; row < cells.length; row += 1) {
    for (let col = 0; col < cells[row].length; col += 1) {
      if (cells[row][col] === "1") {
        rects.push(`M${x + col * scale} ${y + row * scale}h${scale}v${scale}h-${scale}z`);
      }
    }
  }
  return rects.join("");
}

function wrap(value, maxChars, maxLines = 3) {
  const words = value.split(" ");
  const lines = [];
  let current = "";
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines.slice(0, maxLines);
}

function phone(content) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  ${rect(0, 0, width, height, 0, "#fff")}
  ${statusBar()}
  ${content.join("")}
</svg>`;
}

const screens = {
  "qooee-contacts-list": contactsScreen(),
  "qooee-updates-feed": updatesScreen(),
  "qooee-my-card": myCardScreen(),
};

for (const [name, svg] of Object.entries(screens)) {
  const svgPath = join(tempDir, `${name}.svg`);
  const pngPath = join(outputDir, `${name}.png`);
  writeFileSync(svgPath, svg);
  execFileSync("rsvg-convert", [
    "--format",
    "png",
    "--width",
    String(width),
    "--height",
    String(height),
    "--output",
    pngPath,
    svgPath,
  ]);
}

rmSync(tempDir, { recursive: true, force: true });
