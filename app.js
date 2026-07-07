const distributions = window.HCMUS_DISTRIBUTIONS;
const vactDistributions = window.HCMUS_VACT;

const vactCutoffs = {
  "7140103": { 2025: 797 },
  "7420101": { 2023: 650, 2024: 665, 2025: 696 },
  "7420101_DKD": { 2023: 650, 2024: 665, 2025: 673 },
  "7420201": { 2023: 830, 2024: 835, 2025: 817 },
  "7420201_DKD": { 2023: 830, 2024: 835, 2025: 800 },
  "7440102_DKD": { 2023: 720, 2024: 720, 2025: 804 },
  "7440102_NN": { 2023: 720, 2024: 840, 2025: 917 },
  "7440112": { 2023: 845, 2024: 860, 2025: 886 },
  "7440112_DKD": { 2023: 830, 2024: 860, 2025: 797 },
  "7440122": { 2023: 650, 2024: 700, 2025: 790 },
  "7440122_DKD": { 2023: 650, 2024: 700, 2025: 742 },
  "7440201_NN": { 2023: 600, 2024: 630, 2025: 707 },
  "7440228": { 2023: 600, 2024: 630, 2025: 711 },
  "7440301": { 2023: 600, 2024: 630, 2025: 658 },
  "7440301_DKD": { 2023: 600, 2024: 630, 2025: 573 },
  "7460101_NN": { 2023: 830, 2024: 870, 2025: 910 },
  "7460108_NN": { 2023: 950, 2024: 980, 2025: 1019 },
  "7480101_TT": { 2023: 1035, 2024: 1052, 2025: 1136 },
  "7480107": { 2023: 1001, 2024: 1032, 2025: 1092 },
  "7480201_DKD": { 2023: 925, 2024: 925, 2025: 906 },
  "7480201_NN": { 2023: 940, 2024: 945, 2025: 972 },
  "7510401_DKD": { 2023: 845, 2024: 870, 2025: 842 },
  "7510402": { 2023: 730, 2024: 780, 2025: 832 },
  "7510406": { 2023: 600, 2024: 640, 2025: 673 },
  "7520207": { 2023: 790, 2024: 910, 2025: 910 },
  "7520207_DKD": { 2023: 750, 2024: 820, 2025: 864 },
  "75202a1": { 2025: 1002 },
  "7520402": { 2023: 700, 2024: 735, 2025: 876 },
  "7520403": { 2023: 860, 2024: 840, 2025: 882 },
  "7520501": { 2023: 600, 2024: 630, 2025: 723 },
  "7850101": { 2023: 650, 2024: 690, 2025: 693 },
};

const vactToThptScale = [
  [1139, 30],
  [1108, 29.75],
  [995, 27.25],
  [967, 26.7],
  [948, 26.25],
  [932, 25.85],
  [918, 25.6],
  [905, 25.5],
  [894, 25.25],
  [883, 25],
  [873, 24.95],
  [863, 24.75],
  [855, 24.6],
  [847, 24.45],
  [839, 24.25],
  [831, 24.2],
  [824, 24],
  [816, 23.95],
  [809, 23.75],
  [802, 23.7],
  [795, 23.5],
  [789, 23.45],
  [783, 23.35],
  [777, 23.25],
  [771, 23.2],
  [766, 23],
  [760, 22.95],
  [755, 22.75],
  [750, 22.7],
  [745, 22.6],
  [740, 22.5],
  [735, 22.45],
  [730, 22.25],
  [725, 22.2],
  [721, 22],
  [716, 21.95],
  [712, 21.85],
  [707, 21.75],
  [703, 21.7],
  [699, 21.5],
  [694, 21.45],
  [690, 21.3],
  [686, 21.2],
  [682, 21.1],
  [678, 21],
  [674, 20.95],
  [671, 20.75],
  [667, 20.7],
  [663, 20.5],
  [659, 20.45],
  [655, 20.3],
  [651, 20.2],
  [648, 20.05],
  [644, 19.95],
  [641, 19.85],
  [637, 19.75],
  [633, 19.6],
  [629, 19.5],
  [626, 19.35],
  [622, 19.25],
  [618, 19.15],
  [615, 19],
  [611, 18.95],
  [608, 18.75],
  [604, 18.7],
  [600, 18.5],
  [597, 18.45],
  [593, 18.25],
  [589, 18.1],
  [586, 18],
  [582, 17.85],
  [578, 17.75],
  [574, 17.6],
  [570, 17.45],
  [566, 17.3],
  [562, 17.15],
  [558, 17],
  [554, 16.85],
  [550, 16.7],
  [545, 16.55],
  [541, 16.4],
  [536, 16.2],
  [532, 16.05],
  [527, 15.9],
  [522, 15.75],
  [517, 15.55],
  [512, 15.4],
  [506, 15.2],
  [501, 15],
  [495, 14.8],
  [489, 14.55],
  [483, 14.35],
  [476, 14.1],
  [469, 13.85],
  [461, 13.6],
  [453, 13.3],
  [443, 13],
  [431, 12.6],
  [417, 12.2],
  [399, 11.6],
  [370, 10.85],
];

const combos = {
  A00: "Toán - Lý - Hóa",
  A01: "Toán - Lý - Anh",
  A02: "Toán - Lý - Sinh",
  B00: "Toán - Hóa - Sinh",
  B08: "Toán - Sinh - Anh",
  C01: "Toán - Văn - Lý",
  D01: "Toán - Văn - Anh",
  D07: "Toán - Hóa - Anh",
  D90: "Toán - Anh - Tin",
};

const programs = [
  ["7140103", "Công nghệ giáo dục", "A00", { 2025: { A00: 24.25, A01: 22.88, B00: 23.13, C01: 24.25, D01: 22.5, D07: 22.5 } }],
  ["7420101", "Sinh học", "B00", { 2023: 21.5, 2024: 23.5, 2025: { A00: 22.1, B00: 20.96, D01: 20.57 } }],
  ["7420101_DKD", "Sinh học (CT TCTA)", "B00", { 2023: 21.5, 2024: 23.5, 2025: { A00: 21.5, B00: 20.25, D01: 20.06 } }],
  ["7420201", "Công nghệ Sinh học", "B00", { 2023: 24.68, 2024: 24.9, 2025: { A00: 24.72, B00: 23.72, D01: 22.86 } }],
  ["7420201_DKD", "Công nghệ Sinh học (CT TCTA)", "B00", { 2023: 24.68, 2024: 24.9, 2025: { A00: 24.3, B00: 23.15, D01: 22.55 } }],
  ["7440102_DKD", "Vật lý học (CT TCTA)", "A00", { 2023: 22, 2024: 23, 2025: { A00: 24.4, A01: 23.1, C01: 24.4 } }],
  ["7440102_NN", "Nhóm ngành Vật lý, Công nghệ Vật lý điện tử và tin học, Công nghệ bán dẫn", "A00", { 2023: 22, 2024: 25.1, 2025: { A00: 26.75, A01: 25.5, C01: 26.25 } }],
  ["7440112", "Hóa học", "A00", { 2023: 24.5, 2024: 25.42, 2025: { A00: 26.18, B00: 25.37, C01: 25.87, D07: 24.68 } }],
  ["7440112_DKD", "Hóa học (CT TCTA)", "A00", { 2023: 24.2, 2024: 24.65, 2025: { A00: 24.25, B00: 23.13, C01: 24.25, D07: 22.5 } }],
  ["7440122", "Khoa học Vật liệu", "A00", { 2023: 17, 2024: 22.3, 2025: { A00: 24.1, A01: 22.65, B00: 23.05, C01: 24.1, D07: 22.35 } }],
  ["7440122_DKD", "Khoa học Vật liệu (CT TCTA)", "A00", { 2023: 17, 2024: 22.3, 2025: { A00: 23.2, A01: 21.85, B00: 22.1, C01: 23.35, D07: 21.35 } }],
  ["7440201_NN", "Nhóm ngành Địa chất học, Kinh tế đất đai", "A00", { 2023: 17, 2024: 19.5, 2025: { A00: 22.3, A01: 21.05, B00: 21.19, C01: 22.55, D01: 20.71, D07: 20.46 } }],
  ["7440228", "Hải dương học", "A00", { 2023: 19, 2024: 20, 2025: { A00: 22.4, A01: 21.15, C01: 22.65 } }],
  ["7440301", "Khoa học Môi trường", "A00", { 2023: 17, 2024: 19, 2025: { A00: 21.2, A01: 20.06, B00: 19.95, C01: 21.81, D07: 19.39 } }],
  ["7440301_DKD", "Khoa học Môi trường (CT TCTA)", "A00", { 2023: 17, 2024: 18.5, 2025: { A00: 19, A01: 18, B00: 17.6, C01: 20, D07: 17 } }],
  ["7460101_NN", "Nhóm ngành Toán học, Toán ứng dụng, Toán tin", "A00", { 2023: 25.3, 2024: 25.55, 2025: { A00: 26.61, A01: 25.36, B00: 25.66, D01: 24.66, D07: 25.11 } }],
  ["7460108_NN", "Nhóm ngành Khoa học dữ liệu, Thống kê", "A00", { 2023: 26.4, 2024: 26.85, 2025: { A00: 28.5, A01: 27.92, B00: 27.92, D01: 27.17, D07: 27.67 } }],
  ["7480101_TT", "Khoa học máy tính (CT Tiên tiến)", "A00", { 2023: 28.05, 2024: 28.5, 2025: { A00: 29.92, A01: 29.81, B00: 29.81, D07: 29.56 } }],
  ["7480107", "Trí tuệ nhân tạo", "A00", { 2023: 27, 2024: 27.7, 2025: { A00: 29.39, A01: 29.1, B00: 29.1, D07: 28.85 } }],
  ["7480201_DKD", "Công nghệ thông tin (CT TCTA)", "A00", { 2023: 26, 2024: 26, 2025: { A00: 25.87, A01: 24.62, B00: 24.99, D07: 24.37 } }],
  ["7480201_NN", "Nhóm ngành Máy tính và Công nghệ thông tin", "A00", { 2023: 26.5, 2024: 26.75, 2025: { A00: 27.27, A01: 26.27, B00: 26.66, D07: 26.16 } }],
  ["7510401_DKD", "Công nghệ Kỹ thuật Hóa học (CT TCTA)", "A00", { 2023: 24.7, 2024: 25, 2025: { A00: 25.22, B00: 24.22, C01: 25.08, D07: 23.61 } }],
  ["7510402", "Công nghệ Vật liệu", "A00", { 2023: 23, 2024: 24, 2025: { A00: 25.07, A01: 23.82, B00: 24.07, C01: 24.86, D07: 23.54 } }],
  ["7510406", "Công nghệ Kỹ thuật Môi trường", "A00", { 2023: 17, 2024: 19, 2025: { A00: 21.5, A01: 20.25, B00: 20.25, C01: 22, D07: 19.56 } }],
  ["7520207", "Kỹ thuật điện tử - viễn thông", "A00", { 2023: 24.55, 2024: 25.9, 2025: { A00: 26.6, A01: 25.35, C01: 26.15, D07: 25.1 } }],
  ["7520207_DKD", "Kỹ thuật điện tử - viễn thông (CT TCTA)", "A00", { 2023: 23.25, 2024: 25.4, 2025: { A00: 25.7, A01: 24.45, C01: 25.5, D07: 24.15 } }],
  ["75202a1", "Thiết kế vi mạch", "A00", { 2025: { A00: 28.27, A01: 27.61, C01: 27.77, D07: 27.36 } }],
  ["7520402", "Kỹ thuật hạt nhân", "A00", { 2023: 17, 2024: 23.6, 2025: { A00: 25.97, A01: 24.7, C01: 25.7 } }],
  ["7520403", "Vật lý y khoa", "A00", { 2023: 24, 2024: 24.6, 2025: { A00: 26.13, A01: 24.88, C01: 25.84 } }],
  ["7520501", "Kỹ thuật địa chất", "A00", { 2023: 17, 2024: 19.5, 2025: { A00: 22.7, A01: 21.45, B00: 21.45, C01: 22.95, D01: 21.15, D07: 20.9 } }],
  ["7850101", "Quản lý tài nguyên và môi trường", "A00", { 2023: 18.5, 2024: 22, 2025: { A00: 22, A01: 20.75, B00: 20.75, C01: 22.25, D07: 20.25 } }],
].map(([code, name, defaultCombo, cutoffs]) => ({ code, name, defaultCombo, cutoffs }));

const state = {
  selectedCode: programs[0].code,
  edits: JSON.parse(localStorage.getItem("hcmusCutoffEdits") || "{}"),
};

const els = {
  modeSelect: document.querySelector("#modeSelect"),
  comboSelect: document.querySelector("#comboSelect"),
  sourceYear: document.querySelector("#sourceYear"),
  targetYear: document.querySelector("#targetYear"),
  rounding: document.querySelector("#rounding"),
  roundingLabel: document.querySelector("#roundingLabel"),
  margin: document.querySelector("#margin"),
  marginLabel: document.querySelector("#marginLabel"),
  searchInput: document.querySelector("#searchInput"),
  candidateCount: document.querySelector("#candidateCount"),
  spotlightName: document.querySelector("#spotlightName"),
  spotlightMeta: document.querySelector("#spotlightMeta"),
  spotlightScore: document.querySelector("#spotlightScore"),
  spotlightRange: document.querySelector("#spotlightRange"),
  percentileReadout: document.querySelector("#percentileReadout"),
  chancePanel: document.querySelector("#chancePanel"),
  chanceBadge: document.querySelector("#chanceBadge"),
  userVactScore: document.querySelector("#userVactScore"),
  userTranscriptScore: document.querySelector("#userTranscriptScore"),
  admissionWeight: document.querySelector("#admissionWeight"),
  convertedVact: document.querySelector("#convertedVact"),
  weightedScore: document.querySelector("#weightedScore"),
  targetScore30: document.querySelector("#targetScore30"),
  scoreGap: document.querySelector("#scoreGap"),
  resultBody: document.querySelector("#resultBody"),
  editorGrid: document.querySelector("#editorGrid"),
  chart: document.querySelector("#distributionChart"),
  exportCsv: document.querySelector("#exportCsv"),
  resetEdits: document.querySelector("#resetEdits"),
};

function setup() {
  installInteractionGuards();

  Object.entries(combos).forEach(([value, label]) => {
    if (hasHistogram("2026", value)) els.comboSelect.add(new Option(`${value} - ${label}`, value));
  });
  els.comboSelect.value = "A00";
  syncModeControls();

  ["change", "input"].forEach((eventName) => {
    document.addEventListener(eventName, (event) => {
      if (event.target === els.modeSelect) syncModeControls();
      if (event.target.matches("select,input")) render();
    });
  });

  els.exportCsv.addEventListener("click", exportCsv);
  els.resetEdits?.addEventListener("click", () => {
    state.edits = {};
    localStorage.removeItem("hcmusCutoffEdits");
    render();
  });

  render();
}

function installInteractionGuards() {
  const blockedKeys = new Set(["F12"]);
  document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    const blockedShortcut =
      blockedKeys.has(event.key) ||
      (event.ctrlKey && event.shiftKey && ["i", "j", "c"].includes(key)) ||
      (event.ctrlKey && ["u", "s", "p", "c", "x", "v", "a"].includes(key)) ||
      (event.metaKey && ["c", "x", "v", "a", "s", "p"].includes(key));

    if (blockedShortcut) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, true);

  ["contextmenu", "copy", "cut", "paste", "dragstart", "selectstart"].forEach((eventName) => {
    document.addEventListener(eventName, (event) => {
      event.preventDefault();
      event.stopPropagation();
    }, true);
  });
}

function mode() {
  return els.modeSelect.value;
}

function syncModeControls() {
  const isVact = mode() === "vact";
  const years = isVact ? Object.keys(vactDistributions.years) : Object.keys(distributions.years);
  els.sourceYear.innerHTML = "";
  els.targetYear.innerHTML = "";
  years.forEach((year) => {
    els.sourceYear.add(new Option(year, year));
    els.targetYear.add(new Option(year, year));
  });
  els.sourceYear.value = isVact ? "2025" : "2025";
  els.targetYear.value = isVact ? "2026" : "2026";
  els.comboSelect.disabled = isVact;
  els.rounding.innerHTML = isVact
    ? '<option value="1" selected>1 điểm</option><option value="5">5 điểm</option><option value="10">10 điểm</option>'
    : '<option value="0.01">0.01</option><option value="0.05" selected>0.05</option><option value="0.1">0.10</option>';
  els.margin.value = isVact ? 15 : 0.25;
  els.margin.step = isVact ? 1 : 0.05;
  els.margin.max = isVact ? 100 : 2;
  els.roundingLabel.firstChild.textContent = isVact ? "Làm tròn V-ACT" : "Làm tròn";
  els.marginLabel.firstChild.textContent = isVact ? "Biên độ thận trọng V-ACT" : "Biên độ thận trọng";
}

function hasHistogram(year, combo) {
  return distributions.years[year]?.histograms[combo]?.total > 0;
}

function histogram(year, combo) {
  return distributions.years[year].histograms[combo];
}

function cutoffFor(program, year, combo) {
  const key = `${mode()}:${program.code}:${year}:${combo}`;
  const edited = state.edits[key];
  if (edited !== undefined) return Number(edited);
  if (mode() === "vact") return vactCutoffs[program.code]?.[year] ?? null;
  const source = program.cutoffs[year];
  if (source == null) return null;
  if (typeof source === "number") return source;
  return source[combo] ?? source[program.defaultCombo] ?? null;
}

function vactBands(year) {
  return vactDistributions.years[year]?.bands ?? [];
}

function vactTotal(year) {
  return vactBands(year).reduce((sum, band) => sum + band.count, 0);
}

function topPercentAt(bands, score) {
  for (const band of bands) {
    if (score <= band.high && score >= band.low) {
      const span = Math.max(1, band.high - band.low);
      const fraction = (score - band.low) / span;
      return Math.max(0.01, band.percent - fraction);
    }
  }
  if (score > bands[0].high) return 0.01;
  if (score < bands.at(-1).low) return 100;
  const nearest = bands.reduce((best, band) => {
    const distance = Math.min(Math.abs(score - band.high), Math.abs(score - band.low));
    return distance < best.distance ? { band, distance } : best;
  }, { band: bands[0], distance: Infinity }).band;
  return nearest.percent;
}

function scoreAtTopPercent(bands, topPercent) {
  const percent = Math.min(100, Math.max(1, Math.ceil(topPercent)));
  const band = bands.find((item) => item.percent === percent) ?? bands.at(-1);
  const fraction = percent - topPercent;
  return band.low + Math.max(0, Math.min(1, fraction)) * (band.high - band.low);
}

function percentileAt(hist, score) {
  let belowOrEqual = 0;
  for (const [value, count] of hist.bins) {
    if (value <= score) belowOrEqual += count;
    else break;
  }
  return hist.total ? belowOrEqual / hist.total : null;
}

function scoreAtPercentile(hist, percentile) {
  const target = hist.total * percentile;
  let running = 0;
  for (const [value, count] of hist.bins) {
    running += count;
    if (running >= target) return value;
  }
  return hist.bins.at(-1)?.[0] ?? null;
}

function roundTo(value, step) {
  return Math.round(value / step) * step;
}

function formatScore(value) {
  return value == null || Number.isNaN(value) ? "-" : value.toFixed(2);
}

function formatValue(value) {
  if (value == null || Number.isNaN(value)) return "-";
  return mode() === "vact" ? String(Math.round(value)) : formatScore(value);
}

function vactToScale30(score) {
  if (score == null || Number.isNaN(score)) return null;
  const table = vactToThptScale;
  if (score >= table[0][0]) return table[0][1];
  if (score <= table.at(-1)[0]) return table.at(-1)[1];
  for (let index = 0; index < table.length - 1; index += 1) {
    const [highScore, highThpt] = table[index];
    const [lowScore, lowThpt] = table[index + 1];
    if (score <= highScore && score >= lowScore) {
      const span = highScore - lowScore || 1;
      const ratio = (score - lowScore) / span;
      return lowThpt + ratio * (highThpt - lowThpt);
    }
  }
  return null;
}

function weightedAdmissionScore(vactScore, transcriptScore) {
  const converted = vactToScale30(vactScore);
  if (converted == null || transcriptScore == null || Number.isNaN(transcriptScore)) return null;
  return converted * 0.8 + transcriptScore * 0.2;
}

function numberOrNull(input) {
  return input.value === "" ? null : Number(input.value);
}

function chanceFromGap(gap, uncertainty) {
  if (gap == null || Number.isNaN(gap)) return null;
  const scale = Math.max(0.18, uncertainty / 30);
  const probability = 1 / (1 + Math.exp(-gap / scale));
  return Math.max(1, Math.min(99, Math.round(probability * 100)));
}

function predictionFor(program) {
  const combo = els.comboSelect.value;
  const sourceYear = els.sourceYear.value;
  const targetYear = els.targetYear.value;
  const base = cutoffFor(program, sourceYear, combo);
  if (mode() === "vact") {
    const sourceBands = vactBands(sourceYear);
    const targetBands = vactBands(targetYear);
    if (base == null || !sourceBands.length || !targetBands.length) {
      return { program, base, percentile: null, predicted: null };
    }
    const p = topPercentAt(sourceBands, base);
    const raw = scoreAtTopPercent(targetBands, p);
    return { program, base, percentile: p, predicted: roundTo(raw, Number(els.rounding.value)) };
  }
  if (base == null || !hasHistogram(sourceYear, combo) || !hasHistogram(targetYear, combo)) {
    return { program, base, percentile: null, predicted: null };
  }
  const p = percentileAt(histogram(sourceYear, combo), base);
  const raw = scoreAtPercentile(histogram(targetYear, combo), p);
  const predicted = roundTo(raw, Number(els.rounding.value));
  return { program, base, percentile: p, predicted };
}

function allRows() {
  const query = els.searchInput.value.trim().toLowerCase();
  return programs
    .filter((program) => `${program.code} ${program.name}`.toLowerCase().includes(query))
    .map(predictionFor)
    .sort((a, b) => (b.predicted ?? -1) - (a.predicted ?? -1));
}

function render() {
  const combo = els.comboSelect.value;
  const targetYear = els.targetYear.value;
  const total = mode() === "vact"
    ? vactTotal(targetYear)
    : hasHistogram(targetYear, combo) ? histogram(targetYear, combo).total : 0;
  els.candidateCount.textContent = total.toLocaleString("vi-VN");

  const rows = allRows();
  if (!rows.some((row) => row.program.code === state.selectedCode) && rows[0]) {
    state.selectedCode = rows[0].program.code;
  }

  renderTable(rows);
  const selectedRow = rows.find((row) => row.program.code === state.selectedCode) || rows[0];
  renderSpotlight(selectedRow);
  renderChance(selectedRow);
  if (els.editorGrid) renderEditor();
  drawChart(selectedRow);
}

function renderTable(rows) {
  const margin = Number(els.margin.value);
  els.resultBody.innerHTML = rows
    .map((row) => {
      const range = row.predicted == null ? "-" : `${formatValue(row.predicted - margin)} - ${formatValue(row.predicted + margin)}`;
      const percentile = row.percentile == null ? "-" : mode() === "vact" ? `Top ${row.percentile.toFixed(2)}%` : `${(row.percentile * 100).toFixed(2)}%`;
      const predicted = mode() === "vact" && row.predicted != null
        ? `${formatValue(row.predicted)} (${formatScore(vactToScale30(row.predicted))})`
        : formatValue(row.predicted);
      return `
        <tr class="${row.program.code === state.selectedCode ? "is-selected" : ""}" data-code="${row.program.code}">
          <td>${row.program.code}</td>
          <td>${row.program.name}</td>
          <td class="numeric">${formatValue(row.base)}</td>
          <td class="numeric">${percentile}</td>
          <td class="numeric">${predicted}</td>
          <td class="numeric">${range}</td>
        </tr>
      `;
    })
    .join("");

  els.resultBody.querySelectorAll("tr").forEach((tr) => {
    tr.addEventListener("click", () => {
      state.selectedCode = tr.dataset.code;
      render();
    });
  });
}

function renderSpotlight(row) {
  if (!row) return;
  const margin = Number(els.margin.value);
  els.spotlightName.textContent = `${row.program.code} - ${row.program.name}`;
  const methodText = mode() === "vact" ? "V-ACT / ĐGNL" : `Tổ hợp ${els.comboSelect.value}`;
  els.spotlightMeta.textContent = `${methodText}, quy đổi từ năm ${els.sourceYear.value} sang ${els.targetYear.value}; điểm gốc ${formatValue(row.base)}.`;
  els.spotlightScore.textContent = mode() === "vact" ? formatScore(vactToScale30(row.predicted)) : formatValue(row.predicted);
  els.spotlightRange.textContent = row.predicted == null
    ? "Thiếu điểm gốc"
    : mode() === "vact"
      ? `${formatValue(row.predicted)} V-ACT, tương đương ${formatScore(vactToScale30(row.predicted))}/30`
      : `${formatValue(row.predicted - margin)} - ${formatValue(row.predicted + margin)}`;
  els.percentileReadout.textContent = row.percentile == null ? "-" : mode() === "vact" ? `Bách phân vị top ${row.percentile.toFixed(2)}%` : `Bách phân vị ${(row.percentile * 100).toFixed(2)}%`;
}

function renderChance(row) {
  const isVact = mode() === "vact";
  els.chancePanel.classList.toggle("is-visible", isVact);
  if (!isVact || !row) return;

  const userVact = numberOrNull(els.userVactScore);
  const transcript = numberOrNull(els.userTranscriptScore);
  const converted = vactToScale30(userVact);
  const weighted = weightedAdmissionScore(userVact, transcript);
  const target30 = vactToScale30(row.predicted);
  const gap = weighted == null || target30 == null ? null : weighted - target30;
  const upper = vactToScale30((row.predicted ?? 0) + (Number(els.margin.value) || 15));
  const lower = vactToScale30((row.predicted ?? 0) - (Number(els.margin.value) || 15));
  const uncertainty30 = upper != null && lower != null ? Math.abs(upper - lower) : 0.5;
  const chance = chanceFromGap(gap, uncertainty30);

  els.convertedVact.textContent = formatScore(converted);
  els.weightedScore.textContent = formatScore(weighted);
  els.targetScore30.textContent = formatScore(target30);
  els.scoreGap.textContent = gap == null ? "-" : `${gap >= 0 ? "+" : ""}${formatScore(gap)}`;
  els.chanceBadge.textContent = chance == null ? "-" : `${chance}%`;
}

function renderEditor() {
  const combo = els.comboSelect.value;
  const year = els.sourceYear.value;
  const max = mode() === "vact" ? 1200 : 30;
  const step = mode() === "vact" ? 1 : 0.01;
  els.editorGrid.innerHTML = programs
    .slice(0, 12)
    .map((program) => {
      const value = cutoffFor(program, year, combo);
      return `
        <div class="edit-card">
          <strong>${program.code} - ${program.name}</strong>
          <div class="edit-row">
            <span>${year}</span>
            <input type="number" min="0" max="${max}" step="${step}" value="${value ?? ""}" data-edit="${mode()}:${program.code}:${year}:${combo}" />
          </div>
        </div>
      `;
    })
    .join("");

  els.editorGrid.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", () => {
      if (input.value === "") delete state.edits[input.dataset.edit];
      else state.edits[input.dataset.edit] = Number(input.value);
      localStorage.setItem("hcmusCutoffEdits", JSON.stringify(state.edits));
    });
  });
}

function drawChart(row) {
  const canvas = els.chart;
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const cssWidth = canvas.clientWidth;
  const cssHeight = canvas.clientHeight;
  canvas.width = cssWidth * dpr;
  canvas.height = cssHeight * dpr;
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, cssWidth, cssHeight);

  if (mode() === "vact") {
    drawVactChart(ctx, cssWidth, cssHeight, row);
    return;
  }

  const combo = els.comboSelect.value;
  const source = histogram(els.sourceYear.value, combo);
  const target = histogram(els.targetYear.value, combo);
  const pad = { left: 46, right: 18, top: 18, bottom: 34 };
  const width = cssWidth - pad.left - pad.right;
  const height = cssHeight - pad.top - pad.bottom;
  const maxCount = Math.max(...source.bins.map((b) => b[1]), ...target.bins.map((b) => b[1]));

  const x = (score) => pad.left + (score / 30) * width;
  const y = (count) => pad.top + height - (count / maxCount) * height;

  ctx.strokeStyle = "#d9e0ea";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(pad.left, pad.top);
  ctx.lineTo(pad.left, pad.top + height);
  ctx.lineTo(pad.left + width, pad.top + height);
  ctx.stroke();

  for (let score = 0; score <= 30; score += 5) {
    ctx.fillStyle = "#627083";
    ctx.fillText(String(score), x(score) - 5, pad.top + height + 22);
  }

  plotLine(ctx, source.bins, x, y, "#1557b0");
  plotLine(ctx, target.bins, x, y, "#d94f86");

  if (row?.base != null) marker(ctx, x(row.base), pad.top, height, "#1557b0", `Gốc ${formatScore(row.base)}`);
  if (row?.predicted != null) marker(ctx, x(row.predicted), pad.top, height, "#d94f86", `Dự báo ${formatScore(row.predicted)}`);

  legend(ctx, pad.left + 8, pad.top + 16, "#1557b0", els.sourceYear.value);
  legend(ctx, pad.left + 92, pad.top + 16, "#d94f86", els.targetYear.value);
}

function drawVactChart(ctx, cssWidth, cssHeight, row) {
  const source = vactBands(els.sourceYear.value);
  const target = vactBands(els.targetYear.value);
  const pad = { left: 48, right: 18, top: 18, bottom: 34 };
  const width = cssWidth - pad.left - pad.right;
  const height = cssHeight - pad.top - pad.bottom;
  const maxScore = 1200;
  const minScore = 0;
  const x = (percent) => pad.left + (percent / 100) * width;
  const y = (score) => pad.top + height - ((score - minScore) / (maxScore - minScore)) * height;

  ctx.strokeStyle = "#d9e0ea";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(pad.left, pad.top);
  ctx.lineTo(pad.left, pad.top + height);
  ctx.lineTo(pad.left + width, pad.top + height);
  ctx.stroke();

  for (let p = 0; p <= 100; p += 20) {
    ctx.fillStyle = "#627083";
    ctx.fillText(`${p}%`, x(p) - 8, pad.top + height + 22);
  }
  for (let score = 0; score <= 1200; score += 300) {
    ctx.fillStyle = "#627083";
    ctx.fillText(String(score), 8, y(score) + 4);
  }

  plotVactLine(ctx, source, x, y, "#1557b0");
  plotVactLine(ctx, target, x, y, "#d94f86");

  if (row?.base != null && row?.percentile != null) markerHorizontal(ctx, y(row.base), pad.left, width, "#1557b0", `Gốc ${formatValue(row.base)}`);
  if (row?.predicted != null && row?.percentile != null) markerHorizontal(ctx, y(row.predicted), pad.left, width, "#d94f86", `Dự báo ${formatValue(row.predicted)}`);
  if (row?.percentile != null) marker(ctx, x(row.percentile), pad.top, height, "#0f8b8d", `Top ${row.percentile.toFixed(2)}%`);

  legend(ctx, pad.left + 8, pad.top + 16, "#1557b0", els.sourceYear.value);
  legend(ctx, pad.left + 92, pad.top + 16, "#d94f86", els.targetYear.value);
}

function plotVactLine(ctx, bands, x, y, color) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  bands.forEach((band, index) => {
    const px = x(band.percent);
    const py = y((band.high + band.low) / 2);
    if (index === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  });
  ctx.stroke();
}

function markerHorizontal(ctx, yPos, left, width, color, label) {
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(left, yPos);
  ctx.lineTo(left + width, yPos);
  ctx.stroke();
  ctx.fillText(label, left + width - 92, Math.max(18, yPos - 5));
}

function plotLine(ctx, bins, x, y, color) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  bins.forEach(([score, count], index) => {
    if (index === 0) ctx.moveTo(x(score), y(count));
    else ctx.lineTo(x(score), y(count));
  });
  ctx.stroke();
}

function marker(ctx, xPos, top, height, color, label) {
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(xPos, top);
  ctx.lineTo(xPos, top + height);
  ctx.stroke();
  ctx.fillText(label, Math.min(xPos + 6, ctx.canvas.width - 140), top + 32);
}

function legend(ctx, x, y, color, label) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y - 9, 18, 8);
  ctx.fillStyle = "#172033";
  ctx.fillText(label, x + 24, y);
}

function exportCsv() {
  const margin = Number(els.margin.value);
  const header = ["ma_nganh", "ten_nganh", "to_hop", "nam_goc", "nam_du_bao", "diem_goc", "bach_phan_vi", "du_bao", "khoang_duoi", "khoang_tren"];
  const lines = [header.join(",")];
  allRows().forEach((row) => {
    lines.push([
      row.program.code,
      `"${row.program.name.replaceAll('"', '""')}"`,
      mode() === "vact" ? "V-ACT" : els.comboSelect.value,
      els.sourceYear.value,
      els.targetYear.value,
      formatValue(row.base),
      row.percentile == null ? "" : mode() === "vact" ? row.percentile.toFixed(4) : (row.percentile * 100).toFixed(4),
      formatValue(row.predicted),
      row.predicted == null ? "" : formatValue(row.predicted - margin),
      row.predicted == null ? "" : formatValue(row.predicted + margin),
    ].join(","));
  });
  const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `hcmus-du-bao-${els.targetYear.value}-${els.comboSelect.value}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

window.addEventListener("resize", () => drawChart(allRows().find((row) => row.program.code === state.selectedCode)));
setup();
