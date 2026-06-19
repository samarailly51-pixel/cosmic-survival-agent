const STORAGE_KEY = "cosmic-survival-agent-state-v7";

const t = {
  title: "\u672a\u6765\u661f\u9645\u751f\u5b58\u6307\u5357",
  intro:
    "\u4e00\u5f20\u4ee5 AI \u4e3a\u4e2d\u5fc3\u7684\u6df1\u7a7a\u661f\u56fe\uff0c\u628a\u884c\u661f\u3001\u57fa\u5730\u3001\u4eba\u7c7b\u72b6\u6001\u548c\u751f\u5b58\u51b3\u7b56\u8fde\u6210\u4e00\u7247\u661f\u4e91\u3002",
  sol: "\u4efb\u52a1\u65e5",
  delay: "\u4fe1\u53f7\u5ef6\u8fdf",
  risk: "\u5f53\u524d\u98ce\u9669",
  agent: "\u661f\u56fe\u5bfc\u822a AI\uff1a\u795d\u878d-03",
  send: "\u53d1\u9001",
  placeholder: "\u95ee\uff1a\u5f53\u524d\u661f\u533a\u6700\u9700\u8981\u6211\u6ce8\u610f\u4ec0\u4e48\uff1f",
  checklist: "\u4eca\u65e5\u6e05\u5355",
  protocol: "Sol \u4efb\u52a1\u534f\u8bae",
  event: "\u4e8b\u4ef6\u51b3\u7b56",
  missionLog: "\u4efb\u52a1\u65e5\u5fd7",
  knowledge: "\u77e5\u8bc6\u82af\u7247",
  standby: "\u5f85\u547d",
  controllable: "\u53ef\u63a7",
  tense: "\u7d27\u5f20",
  danger: "\u5371\u9669",
};

const visualSettings = {
  particleScale: 1,
  lineBrightness: 1,
  showAllLabels: true,
  paused: false,
};

const quickCommands = [
  ["\u5965\u6797\u5e15\u65af\u57fa\u5730", "\u68c0\u67e5\u5965\u6797\u5e15\u65af\u57fa\u5730"],
  ["\u6e29\u5ba4\u8231", "\u6e29\u5ba4\u4eca\u5929\u8981\u6ce8\u610f\u4ec0\u4e48"],
  ["\u6c34\u5faa\u73af\u6838\u5fc3", "\u6c34\u5faa\u73af\u5f02\u5e38\u600e\u4e48\u6392\u67e5"],
  ["\u5c18\u66b4\u524d\u7ebf", "\u68c0\u67e5\u706b\u661f\u5c18\u66b4\u98ce\u9669"],
  ["\u5730\u7403\u901a\u4fe1", "\u5730\u7403\u901a\u4fe1\u5ef6\u8fdf\u600e\u4e48\u5904\u7406"],
  ["\u5fc3\u7406\u4fe1\u6807", "\u6211\u611f\u89c9\u5f88\u5b64\u72ec\uff0c\u600e\u4e48\u529e"],
];

const commandDeck = {
  arrival: [
    ["\u6c14\u95f8\u590d\u6838", "\u6c14\u95f8\u73b0\u5728\u5b89\u5168\u5417"],
    ["\u6e29\u5ba4\u8231", "\u6e29\u5ba4\u4eca\u5929\u8981\u6ce8\u610f\u4ec0\u4e48"],
    ["\u6c34\u5faa\u73af", "\u6c34\u5faa\u73af\u5f02\u5e38\u600e\u4e48\u6392\u67e5"],
    ["\u5730\u7403\u62a5\u5e73\u5b89", "\u5e2e\u6211\u7ed9\u5730\u7403\u5199\u4e00\u6761\u62a5\u5e73\u5b89\u6d88\u606f"],
    ["\u8bad\u7ec3\u63d0\u9192", "\u4eca\u5929\u7684\u4f4e\u91cd\u529b\u8bad\u7ec3\u600e\u4e48\u505a"],
    ["\u63a8\u9001\u98ce\u9669", "\u751f\u6210\u4e00\u6b21\u7a81\u53d1\u4e8b\u4ef6"],
  ],
  storm: [
    ["\u8282\u7535\u65b9\u6848", "\u5c18\u66b4\u6765\u4e86\u600e\u4e48\u8282\u7535"],
    ["\u53ec\u56de\u5de1\u68c0\u8f66", "\u5de1\u68c0\u8f66\u8fd8\u80fd\u5728\u5916\u9762\u5417"],
    ["\u592a\u9633\u80fd\u677f", "\u592a\u9633\u80fd\u677f\u88ab\u5c18\u571f\u76d6\u4f4f\u600e\u4e48\u529e"],
    ["\u4e8b\u4ef6\u51b3\u7b56", "\u5e2e\u6211\u5206\u6790\u53f3\u4fa7\u4e8b\u4ef6"],
  ],
  morale: [
    ["\u60f3\u5bb6", "\u6211\u60f3\u5bb6\u4e86"],
    ["\u961f\u53cb\u51b2\u7a81", "\u961f\u53cb\u72b6\u6001\u4e0d\u5bf9\u600e\u4e48\u529e"],
    ["\u7761\u524d\u6d41\u7a0b", "\u7ed9\u6211\u4e00\u4e2a\u7761\u524d\u5b89\u5b9a\u6d41\u7a0b"],
    ["\u7ee7\u7eed\u5de1\u68c0", "\u6211\u8fd8\u662f\u5148\u5de1\u68c0\u5427"],
  ],
  systems: [
    ["\u6c34\u5faa\u73af", "\u6c34\u5faa\u73af\u5f02\u5e38\u600e\u4e48\u6392\u67e5"],
    ["\u6e29\u5ba4", "\u6e29\u5ba4\u4eca\u5929\u8981\u6ce8\u610f\u4ec0\u4e48"],
    ["\u6c27\u6c14", "\u6c27\u6c14\u4e0b\u964d\u4e86\u600e\u4e48\u529e"],
    ["\u4e8b\u4ef6\u51b3\u7b56", "\u5e2e\u6211\u5206\u6790\u53f3\u4fa7\u4e8b\u4ef6"],
  ],
};

const taskMeta = {
  "\u68c0\u67e5\u5965\u6797\u5e15\u65af\u57fa\u5730": "\u4e3b\u57fa\u5730 / \u6c14\u95f8\u3001\u5c45\u4f4f\u8231\u3001\u7535\u529b\u603b\u7ebf",
  "\u6e29\u5ba4\u4eca\u5929\u8981\u6ce8\u610f\u4ec0\u4e48": "\u6e29\u5ba4\u8231 / \u4f5c\u7269\u3001\u6c27\u6c14\u3001\u83cc\u7fa4",
  "\u6c34\u5faa\u73af\u5f02\u5e38\u600e\u4e48\u6392\u67e5": "\u6c34\u5faa\u73af\u6838\u5fc3 / \u8fc7\u6ee4\u3001\u56de\u6536\u3001\u5236\u6c27",
  "\u68c0\u67e5\u706b\u661f\u5c18\u66b4\u98ce\u9669": "\u5c18\u66b4\u524d\u7ebf / \u7535\u529b\u4e0e\u5916\u90e8\u8bbe\u5907\u98ce\u9669",
  "\u5730\u7403\u901a\u4fe1\u5ef6\u8fdf\u600e\u4e48\u5904\u7406": "\u5730\u7403\u901a\u4fe1 / \u5ef6\u8fdf\u56de\u4fe1\u4e0e\u4efb\u52a1\u81ea\u4e3b",
  "\u6211\u611f\u89c9\u5f88\u5b64\u72ec\uff0c\u600e\u4e48\u529e": "\u5fc3\u7406\u4fe1\u6807 / \u5b64\u72ec\u3001\u51b2\u7a81\u3001\u7761\u7720",
};

const solProtocols = [
  {
    title: "\u62b5\u8fbe\u6821\u51c6",
    focus: "\u786e\u8ba4\u5965\u6797\u5e15\u65af\u57fa\u5730\u3001\u95ed\u73af\u751f\u547d\u652f\u6301\u548c\u5bf9\u5730\u901a\u4fe1\u80fd\u7a33\u5b9a\u8fd0\u884c\u3002",
    tasks: [
      { key: "base", label: "\u4e3b\u57fa\u5730\u590d\u6838", command: "\u68c0\u67e5\u5965\u6797\u5e15\u65af\u57fa\u5730", match: ["\u5965\u6797\u5e15\u65af\u57fa\u5730", "\u62b5\u8fbe\u6d41\u7a0b"] },
      { key: "loop", label: "\u95ed\u73af\u7cfb\u7edf\u8bfb\u6570", command: "\u6e29\u5ba4\u4eca\u5929\u8981\u6ce8\u610f\u4ec0\u4e48", match: ["\u6e29\u5ba4\u8231", "\u6c34\u5faa\u73af\u6838\u5fc3", "\u751f\u547d\u652f\u6301\u7cfb\u7edf"] },
      { key: "earth", label: "\u5730\u7403\u5ef6\u8fdf\u56de\u4fe1", command: "\u5730\u7403\u901a\u4fe1\u5ef6\u8fdf\u600e\u4e48\u5904\u7406", match: ["\u5730\u7403\u901a\u4fe1"] },
    ],
  },
  {
    title: "\u5c18\u66b4\u9884\u6848",
    focus: "\u628a\u5916\u90e8\u98ce\u9669\u8f6c\u6362\u6210\u53ef\u6267\u884c\u7684\u7535\u529b\u3001\u5de1\u68c0\u548c\u5c01\u95ed\u7b56\u7565\u3002",
    tasks: [
      { key: "storm", label: "\u5c18\u66b4\u524d\u7ebf\u8bc4\u4f30", command: "\u68c0\u67e5\u706b\u661f\u5c18\u66b4\u98ce\u9669", match: ["\u5c18\u66b4\u524d\u7ebf", "\u672a\u77e5\u98ce\u9669\u6e90"] },
      { key: "airlock", label: "\u6c14\u95f8\u4e0e\u5de1\u68c0\u7b56\u7565", command: "\u6c14\u95f8\u73b0\u5728\u5b89\u5168\u5417", match: ["\u5965\u6797\u5e15\u65af\u57fa\u5730", "\u6c14\u95f8\u95e8\u5916\u4fa7\u4f20\u611f\u5668\u5931\u8054"] },
      { key: "power", label: "\u7535\u529b\u964d\u8f7d\u51b3\u7b56", command: "\u5c18\u66b4\u6765\u4e86\u600e\u4e48\u8282\u7535", match: ["\u8282\u7535\u65b9\u6848", "\u592a\u9633\u80fd\u677f", "\u7535\u529b\u964d\u8f7d\u51b3\u7b56"] },
    ],
  },
  {
    title: "\u751f\u6001\u95ed\u73af",
    focus: "\u628a\u6c34\u3001\u6c27\u6c14\u3001\u4f5c\u7269\u548c\u4eba\u7684\u72b6\u6001\u4e32\u6210\u4e00\u4e2a\u53ef\u6301\u7eed\u5faa\u73af\u3002",
    tasks: [
      { key: "greenhouse", label: "\u6e29\u5ba4\u83cc\u7fa4\u5904\u7f6e", command: "\u6e29\u5ba4\u4eca\u5929\u8981\u6ce8\u610f\u4ec0\u4e48", match: ["\u6e29\u5ba4\u8231", "\u6e29\u5ba4\u57f9\u517b\u76d8\u51fa\u73b0\u672a\u77e5\u83cc\u6591"] },
      { key: "water", label: "\u6c34\u5faa\u73af\u538b\u5dee\u6821\u51c6", command: "\u6c34\u5faa\u73af\u5f02\u5e38\u600e\u4e48\u6392\u67e5", match: ["\u6c34\u5faa\u73af\u6838\u5fc3"] },
      { key: "morale", label: "\u5fc3\u7406\u4fe1\u6807\u7ef4\u62a4", command: "\u6211\u611f\u89c9\u5f88\u5b64\u72ec\uff0c\u600e\u4e48\u529e", match: ["\u5fc3\u7406\u4fe1\u6807", "\u5730\u7403\u5bb6\u5ead\u89c6\u9891\u62b5\u8fbe"] },
    ],
  },
];

const defaultState = {
  sol: 1,
  delay: "12 \u5206 42 \u79d2",
  currentEvent: 0,
  knowledgeIndex: 0,
  protocolIndex: 0,
  completedProtocolTasks: [],
  completedPhases: [],
  suggestions: quickCommands,
  currentTask: "\u5965\u6797\u5e15\u65af\u57fa\u5730",
  missionLog: [
    {
      sol: 1,
      title: "\u62b5\u8fbe\u5965\u6797\u5e15\u65af\u57fa\u5730",
      body: "\u661f\u56fe\u5df2\u9501\u5b9a\u706b\u661f\u4efb\u52a1\u7f51\u7edc\u3002\u4f18\u5148\u7ea7\uff1a\u4e3b\u57fa\u5730\u3001\u6e29\u5ba4\u8231\u3001\u6c34\u5faa\u73af\u6838\u5fc3\u3002",
      effects: [],
    },
  ],
  metrics: {
    oxygen: 93,
    water: 68,
    power: 77,
    morale: 61,
    radiation: 28,
    dust: 36,
  },
  checklist: [
    { text: "\u5b8c\u6210\u6c14\u95f8\u4e8c\u6b21\u5bc6\u5c01\u68c0\u67e5", done: false },
    { text: "\u8bb0\u5f55\u6c34\u56de\u6536\u7cfb\u7edf\u5f02\u5473\u4e0e\u6ee4\u82af\u538b\u5dee", done: false },
    { text: "\u7ed9\u6e29\u5ba4 3 \u53f7\u683d\u57f9\u76d8\u8865\u5149 42 \u5206\u949f", done: false },
    { text: "\u5411\u5730\u7403\u53d1\u9001 280 \u5b57\u4ee5\u5185\u72b6\u6001\u6458\u8981", done: false },
    { text: "\u8fdb\u884c 18 \u5206\u949f\u4f4e\u91cd\u529b\u808c\u8089\u8bad\u7ec3", done: false },
  ],
  messages: [
    {
      role: "system",
      text:
        "\u6df1\u7a7a\u6c11\u7528\u5bfc\u822a\u534f\u8bae\u5df2\u542f\u52a8\u3002\u8fd9\u4e0d\u518d\u53ea\u662f\u706b\u661f\u624b\u518c\uff0c\u800c\u662f\u4e00\u5f20\u53ef\u6269\u5c55\u5230\u4efb\u4f55\u661f\u533a\u7684\u751f\u5b58\u661f\u56fe\u3002",
    },
    {
      role: "ai",
      text:
        "\u6b22\u8fce\u8fdb\u5165\u661f\u4e91\u5bfc\u822a\u754c\u9762\u3002\u4e2d\u5fc3\u5149\u70b9\u662f\u6211\uff0c\u5468\u56f4\u6bcf\u4e00\u4e2a\u8282\u70b9\u90fd\u662f\u4e00\u4e2a\u53ef\u88ab\u5206\u6790\u7684\u751f\u5b58\u95ee\u9898\uff1a\u80fd\u6e90\u3001\u901a\u4fe1\u3001\u751f\u6001\u3001\u5fc3\u7406\u3001\u822a\u884c\u4e0e\u672a\u77e5\u4e8b\u4ef6\u3002\n\n\u70b9\u51fb\u661f\u56fe\u4e0a\u7684\u8282\u70b9\uff0c\u6211\u4f1a\u628a\u5b83\u8f6c\u5316\u6210\u4e00\u6b21\u51b3\u7b56\u6a21\u62df\u3002",
    },
  ],
};

const metricConfig = {
  oxygen: { label: "\u6c27\u6c14", unit: "%", color: "var(--cyan)" },
  water: { label: "\u6c34\u5faa\u73af", unit: "%", color: "var(--cyan)" },
  power: { label: "\u7535\u529b", unit: "%", color: "var(--amber)" },
  morale: { label: "\u5fc3\u7406\u97e7\u6027", unit: "%", color: "var(--green)" },
  radiation: { label: "\u8f90\u5c04\u98ce\u9669", unit: "%", color: "var(--red)" },
  dust: { label: "\u7c92\u5b50\u98ce\u66b4", unit: "%", color: "var(--rose)" },
};

const starMapNodes = [
  { label: "\u6b27\u9633", sub: "\u6df1\u7a7a\u901a\u4fe1", x: 0.16, y: 0.18, color: "#9cecff", size: 3.6 },
  { label: "\u767d\u5c45\u6613", sub: "\u751f\u6001\u8231", x: 0.36, y: 0.46, color: "#fff0a8", size: 6.2 },
  { label: "\u8d3e\u4f11", sub: "\u80fd\u6e90\u7ad9", x: 0.32, y: 0.75, color: "#d8ff52", size: 7.8 },
  { label: "\u7a0b\u73b2", sub: "\u5916\u90e8\u8230\u961f", x: 0.88, y: 0.78, color: "#ffe4e7", size: 6.5 },
  { label: "\u5143\u7a39", sub: "\u91c7\u6837\u961f", x: 0.52, y: 0.34, color: "#c8fff5", size: 4.5 },
  { label: "\u59da\u5408", sub: "\u5fc3\u7406\u4fe1\u6807", x: 0.55, y: 0.39, color: "#aaffdf", size: 5.2 },
  { label: "\u674e\u767d", sub: "\u8fdc\u822a\u8f68\u9053", x: 0.35, y: 0.9, color: "#ff9fce", size: 3.8 },
  { label: "\u5c91\u53c2", sub: "\u5c0f\u884c\u661f\u5e26", x: 0.78, y: 0.42, color: "#9cecff", size: 2.8 },
  { label: "\u6d77\u5b50", sub: "\u51b7\u51bb\u6c34\u5e93", x: 0.63, y: 0.82, color: "#9fffea", size: 3.4 },
  { label: "\u9f50\u5df1", sub: "\u6b96\u6c11\u4e2d\u7ee7", x: 0.18, y: 0.68, color: "#dbe8ff", size: 12 },
];

const cosmicDust = Array.from({ length: 90 }, (_, index) => ({
  x: fract(Math.sin(index * 31.7) * 43758.5453),
  y: fract(Math.sin(index * 91.3) * 24634.6345),
  speed: 0.25 + fract(Math.sin(index * 17.1) * 1000) * 0.75,
  color: ["#9cecff", "#ffffff", "#ff9fce", "#e5d276", "#b79cff"][index % 5],
  size: 0.7 + fract(Math.sin(index * 47.2) * 1000) * 2.6,
}));

const events = [
  {
    title: "\u6c14\u95f8\u95e8\u5916\u4fa7\u4f20\u611f\u5668\u5931\u8054",
    severity: "\u4e2d\u7b49",
    body:
      "\u5916\u95e8\u4ecd\u663e\u793a\u95ed\u9501\uff0c\u4f46\u4f20\u611f\u5668 2B \u6ca1\u6709\u8fd4\u56de\u538b\u529b\u6570\u636e\u3002\u76f4\u63a5\u51fa\u8231\u4f1a\u8282\u7701 11 \u5206\u949f\uff0c\u4e5f\u53ef\u80fd\u628a\u4eca\u5929\u53d8\u6210\u7eaa\u5ff5\u65e5\u3002",
    choices: [
      {
        text: "\u6d3e\u5c0f\u578b\u5de1\u68c0\u8f66\u8d34\u8fd1\u8bfb\u53d6",
        result:
          "\u5de1\u68c0\u8f66\u786e\u8ba4\u662f\u7ebf\u7f06\u63a5\u70b9\u88ab\u5c18\u571f\u6c61\u67d3\u3002\u4f60\u82b1\u4e86 22 \u5206\u949f\uff0c\u4f46\u907f\u514d\u4e86\u4e00\u6b21\u9ad8\u98ce\u9669 EVA\u3002",
        effects: { power: -4, dust: 4, morale: 3 },
      },
      {
        text: "\u7a7f\u8231\u5916\u670d\u4eba\u5de5\u68c0\u67e5",
        result:
          "\u4f60\u4fee\u597d\u4e86\u63a5\u70b9\uff0c\u4f46\u5438\u5165\u5f0f\u8fc7\u6ee4\u5668\u78e8\u635f\u589e\u52a0\u3002\u4e0b\u6b21\u522b\u628a\u52c7\u6562\u5f53\u5feb\u6377\u952e\u3002",
        effects: { oxygen: -5, radiation: 8, morale: 2 },
      },
      {
        text: "\u9501\u5b9a\u6c14\u95f8\uff0c\u7b49\u5f85\u5730\u7403\u5efa\u8bae",
        result:
          "\u5730\u7403\u56de\u4fe1\u8981 25 \u5206\u949f\u3002\u4fdd\u5b88\u6ca1\u9519\uff0c\u4f46\u6e29\u5ba4\u7ef4\u62a4\u88ab\u5ef6\u540e\u4e86\u3002",
        effects: { water: -3, morale: -4, dust: -2 },
      },
    ],
  },
  {
    title: "\u6e29\u5ba4\u57f9\u517b\u76d8\u51fa\u73b0\u672a\u77e5\u83cc\u6591",
    severity: "\u504f\u9ad8",
    body:
      "\u83cc\u6591\u6cbf\u683d\u57f9\u76d8\u8fb9\u7f18\u6269\u6563\uff0c\u5f62\u6001\u4e0d\u50cf\u767b\u8bb0\u83cc\u682a\u3002\u5b83\u53ef\u80fd\u662f\u6c61\u67d3\uff0c\u4e5f\u53ef\u80fd\u662f\u706b\u661f\u519c\u4e1a\u8bba\u6587\u7684\u6807\u9898\u3002",
    choices: [
      {
        text: "\u9694\u79bb\u57f9\u517b\u76d8\u5e76\u4fdd\u7559\u6837\u672c",
        result:
          "\u6c61\u67d3\u88ab\u9650\u5236\u5728 3 \u53f7\u76d8\u3002\u6837\u672c\u4f1a\u8fdb\u5165\u540e\u7eed\u5206\u6790\uff0c\u4eca\u5929\u7684\u6c99\u62c9\u6682\u65f6\u5c11\u4e00\u534a\u3002",
        effects: { water: -2, morale: 4 },
      },
      {
        text: "\u5168\u76d8\u6d88\u6740",
        result:
          "\u6e29\u5ba4\u5b89\u5168\u4e86\uff0c\u4f46\u4f5c\u7269\u4ea7\u91cf\u4e0b\u964d\u3002AI \u5c06\u4f60\u7684\u64cd\u4f5c\u547d\u540d\u4e3a'\u5e72\u51c0\u4f46\u997f'\u3002",
        effects: { water: -7, oxygen: -3, morale: -2 },
      },
      {
        text: "\u7ee7\u7eed\u89c2\u5bdf 6 \u5c0f\u65f6",
        result:
          "\u83cc\u6591\u6269\u6563\u901f\u5ea6\u6bd4\u9884\u4f30\u5feb\u3002\u4f60\u83b7\u5f97\u4e86\u6570\u636e\uff0c\u4e5f\u83b7\u5f97\u4e86\u66f4\u591a\u9ebb\u70e6\u3002",
        effects: { oxygen: -6, water: -5, morale: -5 },
      },
    ],
  },
  {
    title: "\u5730\u7403\u5bb6\u5ead\u89c6\u9891\u62b5\u8fbe",
    severity: "\u60c5\u7eea",
    body:
      "\u89c6\u9891\u53d1\u9001\u4e8e 24 \u5206\u949f\u524d\u3002\u4f60\u80fd\u770b\u5230\u719f\u6089\u7684\u53a8\u623f\u3001\u751f\u65e5\u86cb\u7cd5\u548c\u4e00\u4e2a\u660e\u663e\u5fcd\u4f4f\u6ca1\u54ed\u7684\u4eba\u3002",
    choices: [
      {
        text: "\u7acb\u523b\u56de\u590d\uff0c\u8bda\u5b9e\u8bf4\u60f3\u5bb6",
        result:
          "\u60c5\u7eea\u66f2\u7ebf\u56de\u5347\u3002\u8bda\u5b9e\u4e0d\u662f\u7cfb\u7edf\u6f0f\u6d1e\uff0c\u662f\u957f\u671f\u4efb\u52a1\u7684\u7ef4\u62a4\u534f\u8bae\u3002",
        effects: { morale: 9 },
      },
      {
        text: "\u5148\u5199\u4efb\u52a1\u62a5\u544a\uff0c\u518d\u56de\u590d",
        result:
          "\u4f60\u5b8c\u6210\u4e86\u62a5\u544a\uff0c\u4f46\u9519\u8fc7\u4e86\u60c5\u7eea\u7a97\u53e3\u3002\u6548\u7387\u5076\u5c14\u4e5f\u4f1a\u6709\u4ee3\u4ef7\u3002",
        effects: { morale: -3, power: 2 },
      },
      {
        text: "\u5b58\u6863\uff0c\u4eca\u665a\u518d\u770b",
        result:
          "\u4f60\u628a\u60c5\u7eea\u63a8\u8fdf\u4e86\uff0c\u4e0d\u662f\u89e3\u51b3\u4e86\u3002AI \u5df2\u5b89\u6392\u7761\u524d\u5fc3\u7406\u76d1\u6d4b\u3002",
        effects: { morale: -6 },
      },
    ],
  },
];

const knowledge = [
  {
    title: "\u706b\u661f\u5c18\u571f\u4e0d\u662f\u666e\u901a\u7070\u5c18",
    body:
      "\u706b\u661f\u5c18\u7c92\u7ec6\u3001\u5e26\u9759\u7535\uff0c\u53ef\u80fd\u78e8\u635f\u5bc6\u5c01\u5708\u3001\u592a\u9633\u80fd\u677f\u548c\u8fc7\u6ee4\u5668\u3002\u6bcf\u6b21\u51fa\u8231\u540e\u7684\u6e05\u6d01\u6d41\u7a0b\uff0c\u6bd4\u4f60\u60f3\u8c61\u4e2d\u66f4\u63a5\u8fd1\u751f\u547d\u4fdd\u9669\u3002",
  },
  {
    title: "\u4f4e\u91cd\u529b\u4f1a\u6162\u6162\u5077\u8d70\u808c\u8089",
    body:
      "\u706b\u661f\u91cd\u529b\u7ea6\u4e3a\u5730\u7403\u7684 38%\u3002\u8bad\u7ec3\u4e0d\u662f\u5065\u8eab\u7231\u597d\uff0c\u662f\u4fdd\u6301\u9aa8\u5bc6\u5ea6\u3001\u5faa\u73af\u7cfb\u7edf\u548c\u8fd4\u7a0b\u80fd\u529b\u7684\u786c\u9700\u6c42\u3002",
  },
  {
    title: "\u5ef6\u8fdf\u901a\u4fe1\u6539\u53d8\u51b2\u7a81\u65b9\u5f0f",
    body:
      "\u5730\u706b\u4e4b\u95f4\u7684\u901a\u4fe1\u5ef6\u8fdf\u4f1a\u8ba9\u5b9e\u65f6\u6c42\u52a9\u5931\u6548\u3002\u6b96\u6c11\u8005\u5fc5\u987b\u628a\u8bb8\u591a\u51b3\u5b9a\u524d\u7f6e\u6210\u6d41\u7a0b\uff0c\u800c\u4e0d\u662f\u7b49\u8fdc\u65b9\u6279\u51c6\u3002",
  },
  {
    title: "\u6c34\u5faa\u73af\u662f\u57fa\u5730\u7684\u5fc3\u8df3",
    body:
      "\u6c34\u4e0d\u4ec5\u7528\u4e8e\u996e\u7528\uff0c\u4e5f\u53c2\u4e0e\u5236\u6c27\u3001\u79cd\u690d\u3001\u536b\u751f\u548c\u6e29\u63a7\u3002\u4e00\u6b21\u5c0f\u6cc4\u6f0f\u5728\u5730\u7403\u53eb\u7ef4\u4fee\uff0c\u5728\u706b\u661f\u53eb\u5267\u60c5\u8f6c\u6298\u3002",
  },
];

let state = loadState();
let isThinking = false;
let activeNodeIndex = -1;
let frozenTime = 0;

const $ = (selector) => document.querySelector(selector);
const statusGrid = $("#statusGrid");
const riskAdvisor = $("#riskAdvisor");
const basePhase = $("#basePhase");
const solCounter = $("#solCounter");
const delayCounter = $("#delayCounter");
const riskLabel = $("#riskLabel");
const chatWindow = $("#chatWindow");
const commandForm = $("#commandForm");
const commandInput = $("#commandInput");
const checklistEl = $("#checklist");
const checkProgress = $("#checkProgress");
const protocolTitle = $("#protocolTitle");
const protocolProgress = $("#protocolProgress");
const protocolCard = $("#protocolCard");
const eventCard = $("#eventCard");
const eventSeverity = $("#eventSeverity");
const missionLogEl = $("#missionLog");
const missionLogTitle = $("#missionLogTitle");
const missionLogCount = $("#missionLogCount");
const knowledgeCard = $("#knowledgeCard");
const chipIndex = $("#chipIndex");
const resetButton = $("#resetButton");
const agentPanel = $(".agent-panel");
const neuralInterface = $("#neuralInterface");
const neuralCanvas = $("#neuralCanvas");
const neuralBackdrop = $("#neuralBackdrop");
const coreStatus = $("#coreStatus");
const particleSize = $("#particleSize");
const lineBrightness = $("#lineBrightness");
const labelsToggle = $("#labelsToggle");
const motionToggle = $("#motionToggle");
const inspectorTitle = $("#inspectorTitle");
const inspectorMeta = $("#inspectorMeta");

const neuralCtx = neuralCanvas.getContext("2d");
const backdropCtx = neuralBackdrop.getContext("2d");
let neuralPulse = 0;
let backdropPulse = 0;
let neuralAnimationFrame = 0;

hydrateStaticText();
render();
initNeuralCanvases();

commandForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const command = commandInput.value.trim();
  if (!command) return;
  commandInput.value = "";
  handleCommand(command);
});

particleSize.addEventListener("input", () => {
  visualSettings.particleScale = Number(particleSize.value);
  pulseNetwork(0.7);
});

lineBrightness.addEventListener("input", () => {
  visualSettings.lineBrightness = Number(lineBrightness.value);
  pulseNetwork(0.7);
});

labelsToggle.addEventListener("click", () => {
  visualSettings.showAllLabels = !visualSettings.showAllLabels;
  labelsToggle.classList.toggle("is-on", visualSettings.showAllLabels);
  labelsToggle.textContent = visualSettings.showAllLabels ? "\u663e\u793a\u5168\u90e8" : "\u805a\u7126\u6807\u7b7e";
  pulseNetwork(1);
});

motionToggle.addEventListener("click", () => {
  visualSettings.paused = !visualSettings.paused;
  motionToggle.classList.toggle("is-on", visualSettings.paused);
  motionToggle.textContent = visualSettings.paused ? "\u7ee7\u7eed" : "\u6682\u505c";
});

resetButton.addEventListener("click", () => {
  state = structuredClone(defaultState);
  saveState();
  pulseNetwork(1.4);
  render();
});

window.addEventListener("resize", () => {
  resizeCanvas(neuralCanvas);
  resizeCanvas(neuralBackdrop);
  renderSuggestions();
});

function hydrateStaticText() {
  $("#appTitle").textContent = t.title;
  $("#appIntro").textContent = t.intro;
  $("#solLabel").textContent = t.sol;
  $("#delayLabel").textContent = t.delay;
  $("#riskTitle").textContent = t.risk;
  $("#agentName").textContent = t.agent;
  $("#sendButton").textContent = t.send;
  $("#checkTitle").textContent = t.checklist;
  protocolTitle.textContent = t.protocol;
  $("#eventTitle").textContent = t.event;
  missionLogTitle.textContent = t.missionLog;
  $("#knowledgeTitle").textContent = t.knowledge;
  eventSeverity.textContent = t.standby;
  commandInput.placeholder = t.placeholder;
  labelsToggle.classList.add("is-on");
  renderSuggestions();
}

function loadState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? { ...structuredClone(defaultState), ...JSON.parse(stored) } : structuredClone(defaultState);
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function render() {
  agentPanel.classList.toggle("thinking", isThinking);
  renderMetrics();
  renderRiskAdvisor();
  renderBasePhase();
  renderChat();
  renderChecklist();
  renderProtocol();
  renderEvent();
  renderMissionLog();
  renderKnowledge();
  renderSuggestions();
  solCounter.textContent = `Sol ${String(state.sol).padStart(3, "0")}`;
  delayCounter.textContent = state.delay;
  riskLabel.textContent = getRiskLabel();
  coreStatus.textContent = getCoreStatus();
  saveState();
}

function renderMetrics() {
  statusGrid.innerHTML = Object.entries(state.metrics)
    .map(([key, value]) => {
      const config = metricConfig[key];
      return `
        <article class="metric">
          <span>${escapeHtml(config.label)}</span>
          <strong>${value}${config.unit}</strong>
          <div class="meter" style="--bar-color: ${config.color}">
            <i style="--value: ${value}%"></i>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderRiskAdvisor() {
  const diagnosis = getRiskDiagnosis();
  riskAdvisor.innerHTML = `
    <div class="risk-advisor-head">
      <span>AI \u98ce\u9669\u8bca\u65ad</span>
      <strong>${escapeHtml(diagnosis.level)}</strong>
    </div>
    <p>${escapeHtml(diagnosis.summary)}</p>
    <div class="risk-chain">
      ${diagnosis.chain.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
    </div>
    <button type="button" data-risk-command="${escapeHtml(diagnosis.command)}">${escapeHtml(diagnosis.action)}</button>
  `;
  const button = riskAdvisor.querySelector("[data-risk-command]");
  button.addEventListener("click", () => {
    inspectorTitle.textContent = "\u98ce\u9669\u8bca\u65ad";
    inspectorMeta.textContent = button.dataset.riskCommand;
    pulseNetwork(1.4);
    handleCommand(button.dataset.riskCommand);
  });
}

function renderBasePhase() {
  const stability = getBaseStability();
  const completedCount = state.completedPhases?.length || 0;
  const current = getCurrentProtocol();
  const caption = getBasePhaseCaption(stability);
  basePhase.innerHTML = `
    <div class="base-phase-head">
      <span>\u57fa\u5730\u9636\u6bb5\u72b6\u6001</span>
      <strong>${escapeHtml(stability.label)}</strong>
    </div>
    <div class="phase-meter" style="--phase-value: ${stability.score}%">
      <i></i>
    </div>
    <div class="phase-stats">
      <span>\u5df2\u7a33\u5b9a\u9636\u6bb5 ${completedCount}</span>
      <span>\u5f53\u524d\u4e3b\u7ebf ${escapeHtml(current.title)}</span>
    </div>
    <p>${escapeHtml(caption)}</p>
  `;
}

function renderChat() {
  const messages = isThinking
    ? [...state.messages, { role: "thinking", text: "\u795d\u878d-03 \u6b63\u5728\u6838\u5bf9\u57fa\u5730\u8bfb\u6570" }]
    : state.messages;
  chatWindow.innerHTML = messages
    .map((message) => `<div class="message ${message.role}">${escapeHtml(message.text)}</div>`)
    .join("");
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function renderChecklist() {
  checklistEl.innerHTML = state.checklist
    .map(
      (item, index) => `
        <div class="check-item">
          <input id="check-${index}" type="checkbox" ${item.done ? "checked" : ""} />
          <label for="check-${index}">${escapeHtml(item.text)}</label>
        </div>
      `,
    )
    .join("");

  checklistEl.querySelectorAll("input").forEach((input, index) => {
    input.addEventListener("change", () => {
      state.checklist[index].done = input.checked;
      state.metrics.morale = clamp(state.metrics.morale + (input.checked ? 2 : -2));
      if (input.checked) markProtocolProgress(state.checklist[index].text);
      render();
    });
  });

  const done = state.checklist.filter((item) => item.done).length;
  checkProgress.textContent = `${done}/${state.checklist.length}`;
}

function renderProtocol() {
  const protocol = getCurrentProtocol();
  const doneKeys = new Set(state.completedProtocolTasks || []);
  const done = protocol.tasks.filter((task) => doneKeys.has(task.key)).length;
  const isComplete = done === protocol.tasks.length;
  protocolProgress.textContent = `${done}/${protocol.tasks.length}`;
  protocolCard.innerHTML = `
    <div class="protocol-head">
      <strong>${escapeHtml(protocol.title)}</strong>
      <span>Phase ${String((state.protocolIndex || 0) + 1).padStart(2, "0")}</span>
    </div>
    <p>${escapeHtml(protocol.focus)}</p>
    <div class="protocol-tasks">
      ${protocol.tasks
        .map(
          (task) => `
            <div class="protocol-task ${doneKeys.has(task.key) ? "is-done" : ""}">
              <i></i>
              <span>${escapeHtml(task.label)}</span>
            </div>
          `,
        )
        .join("")}
    </div>
    <button class="protocol-advance" type="button" ${isComplete ? "" : "disabled"}>
      ${isComplete ? "\u63a8\u8fdb\u5230\u4e0b\u4e00 Sol" : "\u5b8c\u6210\u534f\u8bae\u540e\u89e3\u9501"}
    </button>
  `;
  const advanceButton = protocolCard.querySelector(".protocol-advance");
  advanceButton.addEventListener("click", advanceProtocol);
}

function renderEvent() {
  const event = events[state.currentEvent % events.length];
  eventSeverity.textContent = event.severity;
  eventCard.innerHTML = `
    <h3>${escapeHtml(event.title)}</h3>
    <p>${escapeHtml(event.body)}</p>
    <div class="choices">
      ${event.choices
        .map((choice, index) => `<button class="choice-button" type="button" data-choice="${index}">${escapeHtml(choice.text)}</button>`)
        .join("")}
    </div>
  `;
  eventCard.querySelectorAll("[data-choice]").forEach((button) => {
    button.addEventListener("click", () => resolveChoice(Number(button.dataset.choice)));
  });
}

function renderMissionLog() {
  const logs = state.missionLog || [];
  missionLogCount.textContent = String(logs.length).padStart(2, "0");
  missionLogEl.innerHTML = logs
    .slice(-5)
    .reverse()
    .map(
      (entry) => `
        <article class="log-entry">
          <span>Sol ${String(entry.sol).padStart(3, "0")}</span>
          <strong>${escapeHtml(entry.title)}</strong>
          <p>${escapeHtml(entry.body)}</p>
          ${
            entry.effects?.length
              ? `<small>${escapeHtml(entry.effects.join("\uff0c"))}</small>`
              : ""
          }
        </article>
      `,
    )
    .join("");
}

function renderKnowledge() {
  const item = knowledge[state.knowledgeIndex % knowledge.length];
  chipIndex.textContent = String((state.knowledgeIndex % knowledge.length) + 1).padStart(2, "0");
  knowledgeCard.innerHTML = `
    <h3>${escapeHtml(item.title)}</h3>
    <p>${escapeHtml(item.body)}</p>
  `;
  knowledgeCard.onclick = () => {
    state.knowledgeIndex += 1;
    render();
  };
}

function handleCommand(command) {
  if (isThinking) return;
  addMessage("user", command);
  isThinking = true;
  pulseNetwork(1.2);
  render();
  window.setTimeout(() => {
    const response = getAgentResponse(command);
    addMessage("ai", response.text);
    const changes = applyEffectsWithCausality(response.effects || {});
    if (changes.length) addMessage("system", formatEffects(changes));
    if (response.advanceEvent) state.currentEvent += 1;
    if (response.advanceSol) state.sol += 1;
    state.currentTask = response.task || getTaskLabel(command);
    markProtocolProgress(state.currentTask, command);
    state.suggestions = getProtocolSuggestions(response.suggestions || getContextSuggestions());
    addMissionLog(state.currentTask, summarizeCommand(command), changes);
    activeNodeIndex = -1;
    inspectorTitle.textContent = "\u8def\u5f84\u5df2\u91cd\u6784";
    inspectorMeta.textContent = "\u65b0\u661f\u56fe\u8282\u70b9\u5df2\u751f\u6210";
    isThinking = false;
    pulseNetwork(1.6);
    render();
  }, getThinkingDelay(command));
}

function getAgentResponse(command) {
  const context = getContextLine();
  if (command.includes("\u5965\u6797\u5e15\u65af") || command.includes("\u4e3b\u57fa\u5730") || command.includes("\u6c14\u95f8")) {
    return {
      effects: { power: -1, morale: 2 },
      suggestions: commandDeck.arrival,
      task: "\u5965\u6797\u5e15\u65af\u57fa\u5730",
      text:
        `${context}\n\n\u5965\u6797\u5e15\u65af\u57fa\u5730\u662f\u5f53\u524d\u4efb\u52a1\u7f51\u7684\u4e2d\u5fc3\u8282\u70b9\u3002\u6211\u5efa\u8bae\u6309\u4e09\u6761\u7ebf\u68c0\u67e5\uff1a\u6c14\u95f8\u5bc6\u5c01\u3001\u4e3b\u7535\u529b\u603b\u7ebf\u3001\u5c45\u4f4f\u8231\u538b\u529b\u66f2\u7ebf\u3002\n\n\u5982\u679c\u4e3b\u57fa\u5730\u7a33\u5b9a\uff0c\u540e\u9762\u7684\u6e29\u5ba4\u3001\u6c34\u5faa\u73af\u548c\u5c18\u66b4\u524d\u7ebf\u624d\u6709\u5904\u7406\u7a7a\u95f4\u3002`,
    };
  }

  if (command.includes("\u5730\u7403\u901a\u4fe1") || command.includes("\u62a5\u5e73\u5b89") || command.includes("\u6d88\u606f")) {
    return {
      effects: { morale: 4, power: -1 },
      suggestions: commandDeck.arrival,
      task: "\u5730\u7403\u901a\u4fe1",
      text:
        `${context}\n\n\u5730\u706b\u901a\u4fe1\u5ef6\u8fdf\u4f1a\u628a'\u8bf7\u793a'\u53d8\u6210'\u5907\u6848'\u3002\u4f60\u9700\u8981\u628a\u53d1\u7ed9\u5730\u7403\u7684\u4fe1\u606f\u5199\u6210\u4e09\u5c42\uff1a\u5f53\u524d\u72b6\u6001\u3001\u4f60\u5df2\u91c7\u53d6\u7684\u64cd\u4f5c\u3001\u5982\u679c\u65e0\u56de\u590d\u5c06\u6267\u884c\u7684\u4e0b\u4e00\u6b65\u3002\n\n\u4e0d\u8981\u53ea\u8bf4'\u4e00\u5207\u6b63\u5e38'\u3002\u90a3\u53e5\u8bdd\u5728\u6df1\u7a7a\u91cc\u57fa\u672c\u7b49\u4e8e\u6ca1\u53d1\u3002`,
    };
  }

  if (command.includes("\u7a81\u53d1") || command.includes("\u4e8b\u4ef6")) {
    return {
      advanceEvent: true,
      effects: { dust: 5, morale: -2 },
      suggestions: commandDeck.systems,
      task: "\u672a\u77e5\u98ce\u9669\u6e90",
      text:
        `${context}\n\n\u6211\u5df2\u7ecf\u628a\u65b0\u4e8b\u4ef6\u63a8\u5230\u53f3\u4fa7\u51b3\u7b56\u677f\u3002\u4e0d\u8981\u5148\u627e\u6807\u51c6\u7b54\u6848\uff0c\u5148\u770b\u4f60\u60f3\u4fdd\u4ec0\u4e48\uff1a\u65f6\u95f4\u3001\u8bbe\u5907\uff0c\u8fd8\u662f\u4eba\u7684\u72b6\u6001\u3002\n\n\u6211\u4f1a\u6839\u636e\u4f60\u7684\u9009\u62e9\u7acb\u523b\u66f4\u65b0\u8d44\u6e90\u8bfb\u6570\u3002`,
    };
  }

  if (command.includes("\u7b2c\u4e00\u5929") || command.includes("\u521a\u5230") || command.includes("\u6d41\u7a0b")) {
    return {
      effects: { morale: 3 },
      suggestions: commandDeck.arrival,
      task: "\u62b5\u8fbe\u6d41\u7a0b",
      text:
        `${context}\n\n\u7b2c\u4e00\u5929\u4e0d\u8981\u628a\u81ea\u5df1\u5f53\u82f1\u96c4\uff0c\u628a\u81ea\u5df1\u5f53\u4e00\u4e2a\u9700\u8981\u6821\u51c6\u7684\u65b0\u7cfb\u7edf\u3002\n\n1. \u5148\u770b\u6c14\u95f8\u3001\u6c27\u6c14\u3001\u901a\u4fe1\u548c\u6c34\u56de\u6536\u8bfb\u6570\u3002\n2. \u53ea\u505a\u57fa\u5730\u5185\u77ed\u8ddd\u79bb\u5de1\u68c0\u3002\n3. \u7ed9\u5730\u7403\u53d1\u4e00\u6761\u77ed\u6d88\u606f\uff0c\u4e0d\u8981\u53ea\u5199'\u4e00\u5207\u6b63\u5e38'\u3002\n4. \u5b8c\u6210 18 \u5206\u949f\u4f4e\u91cd\u529b\u8bad\u7ec3\u3002\u706b\u661f\u91cd\u529b\u5f88\u6e29\u67d4\uff0c\u4f46\u5b83\u62ff\u8d70\u808c\u8089\u7684\u65f6\u5019\u4e00\u70b9\u4e0d\u5ba2\u6c14\u3002`,
    };
  }

  if (command.includes("\u5c18\u66b4") || command.includes("\u6c99\u5c18")) {
    return {
      effects: { power: -2, dust: 6 },
      suggestions: commandDeck.storm,
      task: "\u5c18\u66b4\u524d\u7ebf",
      text:
        `${context}\n\n\u5c18\u66b4\u4e0d\u662f'\u5929\u6c14\u4e0d\u597d'\uff0c\u5b83\u662f\u4e00\u4e2a\u4f1a\u540c\u65f6\u78e8\u635f\u8bbe\u5907\u3001\u964d\u4f4e\u53d1\u7535\u3001\u5e72\u6270\u4f20\u611f\u5668\u7684\u6162\u6027\u4e8b\u6545\u3002\n\n\u6211\u5efa\u8bae\u73b0\u5728\u505a\u4e09\u4ef6\u4e8b\uff1a\u53ec\u56de\u5916\u90e8\u5de1\u68c0\u8f66\uff0c\u5173\u6389\u975e\u5fc5\u8981\u52a0\u70ed\u56de\u8def\uff0c\u628a\u8fdb\u6c14\u6ee4\u7f51\u6e05\u6d01\u63d0\u5230\u6700\u9ad8\u4f18\u5148\u7ea7\u3002\u6211\u5df2\u628a\u7535\u529b\u548c\u5c18\u66b4\u6307\u6570\u8ba1\u5165\u9884\u6d4b\u3002`,
    };
  }

  if (command.includes("\u8f90\u5c04")) {
    return {
      effects: { radiation: -4, power: -1 },
      suggestions: getProtocolSuggestions(commandDeck.storm),
      task: "\u8f90\u5c04\u98ce\u9669\u7ba1\u7406",
      text:
        `${context}\n\n\u8f90\u5c04\u98ce\u9669\u4e0d\u9002\u5408\u9760\u4e34\u573a\u82f1\u52c7\u89e3\u51b3\u3002\u628a\u5b83\u5f53\u6210\u4e00\u4e2a\u65f6\u95f4\u9884\u7b97\uff1a\u51cf\u5c11\u5916\u90e8\u66b4\u9732\u3001\u628a\u5de1\u68c0\u6539\u4e3a\u673a\u5668\u6267\u884c\u3001\u628a\u9ad8\u5bc6\u5ea6\u7269\u8d44\u79fb\u5230\u5c45\u4f4f\u8231\u5916\u4fa7\u5f53\u4e34\u65f6\u5c4f\u853d\u3002\n\n\u6211\u5df2\u628a\u8f90\u5c04\u6307\u6570\u4e0b\u8c03\uff0c\u4f46\u7535\u529b\u4f1a\u7565\u6709\u6d88\u8017\uff1a\u76d1\u6d4b\u3001\u8231\u95e8\u9501\u5b9a\u548c\u5de1\u68c0\u8c03\u5ea6\u90fd\u9700\u8981\u7535\u3002`,
    };
  }

  if (command.includes("\u5b64\u72ec") || command.includes("\u60f3\u5bb6") || command.includes("\u5fc3\u7406")) {
    return {
      effects: { morale: 7 },
      suggestions: commandDeck.morale,
      task: "\u5fc3\u7406\u4fe1\u6807",
      text:
        `${context}\n\n\u6211\u4e0d\u4f1a\u628a\u5b64\u72ec\u6807\u8bb0\u6210\u6545\u969c\u3002\u5728\u706b\u661f\uff0c\u5b83\u66f4\u50cf\u4e00\u4e2a\u957f\u671f\u73af\u5883\u53c2\u6570\uff1a\u4e0d\u80fd\u88ab\u6d88\u9664\uff0c\u4f46\u53ef\u4ee5\u88ab\u7ba1\u7406\u3002\n\n\u73b0\u5728\u505a\u4e00\u4e2a\u5c0f\u52a8\u4f5c\uff1a\u7ed9\u5730\u7403\u5f55 90 \u79d2\u8bed\u97f3\uff0c\u8bf4\u4e00\u4e2a\u4f60\u4eca\u5929\u770b\u5230\u7684\u5177\u4f53\u753b\u9762\u3002\u4e0d\u8981\u603b\u7ed3\uff0c\u4e0d\u8981\u8868\u73b0\u5f97\u5f88\u597d\u3002\u8bf4\u771f\u8bdd\u6bd4\u5199\u6f02\u4eae\u65e5\u5fd7\u66f4\u6709\u7528\u3002`,
    };
  }

  if (command.includes("\u6c34") || command.includes("\u79cd\u690d") || command.includes("\u6e29\u5ba4")) {
    return {
      effects: { water: -1, oxygen: 2 },
      suggestions: commandDeck.systems,
      task: command.includes("\u6c34") ? "\u6c34\u5faa\u73af\u6838\u5fc3" : "\u6e29\u5ba4\u8231",
      text:
        `${context}\n\n\u6e29\u5ba4\u548c\u6c34\u5faa\u73af\u662f\u4e00\u5957\u8fde\u5728\u4e00\u8d77\u7684\u751f\u547d\u652f\u6301\u7cfb\u7edf\u3002\u522b\u5148\u6025\u7740\u770b\u53f6\u5b50\uff0c\u5148\u770b\u6c34\u8def\u538b\u5dee\uff1b\u522b\u5148\u6000\u7591\u690d\u7269\uff0c\u5148\u68c0\u67e5\u5149\u7167\u5468\u671f\u3002\n\n\u6211\u5efa\u8bae\u987a\u5e8f\uff1a\u6c34\u8def\uff0c\u5149\u7167\uff0c\u6e29\u5ea6\uff0c\u83cc\u7fa4\u3002\u690d\u7269\u5728\u8fd9\u91cc\u4e0d\u662f\u88c5\u9970\uff0c\u5b83\u4eec\u662f\u98df\u7269\u3001\u6c27\u6c14\u548c\u57fa\u5730\u8fd8\u6ca1\u6709\u53d8\u6210\u94c1\u76d2\u5b50\u7684\u8bc1\u636e\u3002`,
    };
  }

  if (command.includes("\u6c27") || command.includes("\u547c\u5438") || command.includes("\u6cc4\u6f0f")) {
    return {
      effects: { oxygen: -2, morale: -1 },
      suggestions: commandDeck.systems,
      task: "\u751f\u547d\u652f\u6301\u7cfb\u7edf",
      text:
        `${context}\n\n\u5148\u522b\u8dd1\u3002\u6c27\u6c14\u95ee\u9898\u6700\u5fcc\u8bb3\u7684\u5c31\u662f\u628a\u6050\u614c\u53d8\u6210\u4f53\u529b\u6d88\u8017\u3002\n\n\u68c0\u67e5\u987a\u5e8f\uff1a\u4e2a\u4eba\u4f69\u6234\u8bfb\u6570\uff0c\u8231\u6bb5\u538b\u5dee\uff0c\u6c14\u95f8\u8bb0\u5f55\uff0c\u5236\u6c27\u673a\u8fd1 20 \u5206\u949f\u66f2\u7ebf\u3002\u5982\u679c\u4e24\u4e2a\u4ee5\u4e0a\u8bfb\u6570\u540c\u65f6\u4e0b\u964d\uff0c\u5c31\u6309\u6cc4\u6f0f\u5904\u7406\uff1b\u5982\u679c\u53ea\u6709\u5355\u70b9\u5f02\u5e38\uff0c\u5148\u522b\u628a\u57fa\u5730\u641e\u6210\u620f\u5267\u73b0\u573a\u3002`,
    };
  }

  return {
    effects: { morale: 1 },
    suggestions: getContextSuggestions(),
    task: "\u706b\u661f\u4efb\u52a1\u7f51",
    text:
      `${context}\n\n\u6211\u628a\u4f60\u7684\u8bdd\u6309\u706b\u661f\u57fa\u5730\u7684\u4f18\u5148\u7ea7\u91cd\u65b0\u6392\u4e86\u4e00\u4e0b\uff1a\u5148\u4fdd\u547d\uff0c\u518d\u4fdd\u8bbe\u5907\uff0c\u6700\u540e\u4fdd\u9762\u5b50\u3002\n\n\u73b0\u5728\u6700\u503c\u5f97\u8ffd\u95ee\u7684\u662f\uff1a\u4f60\u60f3\u68c0\u67e5\u67d0\u4e2a\u7cfb\u7edf\uff0c\u8fd8\u662f\u8981\u6211\u63a8\u9001\u4e00\u4e2a\u7a81\u53d1\u4e8b\u4ef6\uff1f\u53f3\u4fa7\u4e5f\u6709\u5f53\u524d\u4e8b\u4ef6\uff0c\u9009\u5b8c\u6211\u4f1a\u7ed9\u4f60\u4e8b\u6545\u540e\u679c\u3002`,
  };
}

function resolveChoice(index) {
  if (isThinking) return;
  const event = events[state.currentEvent % events.length];
  const eventTitleForLog = event.title;
  const choice = event.choices[index];
  addMessage("system", `\u4e8b\u4ef6\u51b3\u7b56\uff1a${choice.text}`);
  isThinking = true;
  pulseNetwork(1.5);
  render();
  window.setTimeout(() => {
    addMessage("ai", `${choice.result}\n\n${getNextEventBridge()}`);
    const changes = applyEffectsWithCausality(choice.effects);
    if (changes.length) addMessage("system", formatEffects(changes));
    state.currentEvent += 1;
    state.knowledgeIndex += 1;
    markProtocolProgress(eventTitleForLog, choice.text);
    state.suggestions = getProtocolSuggestions(getContextSuggestions());
    addMissionLog(eventTitleForLog, choice.text, changes);
    activeNodeIndex = -1;
    inspectorTitle.textContent = "\u540e\u7eed\u98ce\u9669";
    inspectorMeta.textContent = "\u51b3\u7b56\u8def\u5f84\u5df2\u5237\u65b0";
    isThinking = false;
    pulseNetwork(1.8);
    render();
  }, 520);
}

function addMessage(role, text) {
  state.messages.push({ role, text });
  state.messages = state.messages.slice(-28);
}

function applyEffects(effects) {
  const changes = [];
  Object.entries(effects).forEach(([key, value]) => {
    const before = state.metrics[key] ?? 0;
    const after = clamp(before + value);
    state.metrics[key] = after;
    if (after !== before) changes.push({ key, value: after - before, after });
  });
  if (changes.length) pulseNetwork(1 + changes.length * 0.28);
  return changes;
}

function applyEffectsWithCausality(effects) {
  const direct = applyEffects(effects);
  const causalEffects = getCausalEffects(direct);
  const causal = causalEffects.length ? applyEffects(Object.fromEntries(causalEffects)) : [];
  return [...direct, ...causal.map((change) => ({ ...change, causal: true }))];
}

function getCausalEffects(changes) {
  const causal = [];
  const changedKeys = new Set(changes.map((change) => change.key));
  if (changedKeys.has("dust") && state.metrics.dust >= 45 && state.metrics.power > 8) {
    causal.push(["power", -2]);
  }
  if (state.metrics.power < 65 && !changedKeys.has("water") && state.metrics.water > 8) {
    causal.push(["water", -1]);
  }
  if (state.metrics.water < 58 && !changedKeys.has("oxygen") && state.metrics.oxygen > 8) {
    causal.push(["oxygen", -1]);
  }
  if (state.metrics.morale < 50 && !changedKeys.has("power") && state.metrics.power > 8) {
    causal.push(["power", -1]);
  }
  return causal;
}

function getRiskLabel() {
  const { oxygen, water, power, morale, radiation, dust } = state.metrics;
  const pressure = (100 - oxygen) + (100 - water) + (100 - power) + (100 - morale) + radiation + dust;
  if (pressure > 260) return t.danger;
  if (pressure > 210) return t.tense;
  return t.controllable;
}

function getRiskDiagnosis() {
  const entries = Object.entries(state.metrics)
    .map(([key, value]) => {
      const isHazard = key === "radiation" || key === "dust";
      return {
        key,
        value,
        label: metricConfig[key].label,
        score: isHazard ? value + 12 : 100 - value,
      };
    })
    .sort((a, b) => b.score - a.score);
  const [primary, secondary] = entries;
  const protocol = getCurrentProtocol();
  const level = primary.score > 58 ? "\u7acb\u5373\u5904\u7406" : primary.score > 42 ? "\u9700\u76d1\u63a7" : "\u53ef\u63a7";
  const actionMap = {
    oxygen: ["\u6267\u884c\u6c27\u6c14\u6392\u67e5", "\u6c27\u6c14\u4e0b\u964d\u4e86\u600e\u4e48\u529e"],
    water: ["\u68c0\u67e5\u6c34\u5faa\u73af", "\u6c34\u5faa\u73af\u5f02\u5e38\u600e\u4e48\u6392\u67e5"],
    power: ["\u751f\u6210\u8282\u7535\u65b9\u6848", "\u5c18\u66b4\u6765\u4e86\u600e\u4e48\u8282\u7535"],
    morale: ["\u7ef4\u62a4\u5fc3\u7406\u4fe1\u6807", "\u6211\u611f\u89c9\u5f88\u5b64\u72ec\uff0c\u600e\u4e48\u529e"],
    radiation: ["\u590d\u6838\u8f90\u5c04\u7b56\u7565", "\u8f90\u5c04\u98ce\u9669\u4e0a\u5347\u600e\u4e48\u5904\u7406"],
    dust: ["\u8bc4\u4f30\u5c18\u66b4\u524d\u7ebf", "\u68c0\u67e5\u706b\u661f\u5c18\u66b4\u98ce\u9669"],
  };
  const [action, command] = actionMap[primary.key];
  const summary =
    primary.score > 42
      ? `${primary.label}\u662f\u5f53\u524d\u6700\u8106\u5f31\u94fe\u8def\uff0c${secondary.label}\u4f1a\u653e\u5927\u5b83\u7684\u540e\u679c\u3002`
      : `${protocol.title}\u4ecd\u662f\u4e3b\u7ebf\uff0c\u8d44\u6e90\u8bfb\u6570\u6682\u65f6\u6ca1\u6709\u51fa\u73b0\u5355\u70b9\u5931\u63a7\u3002`;
  return {
    level,
    summary,
    chain: [primary.label, secondary.label, protocol.title],
    action,
    command,
  };
}

function getCoreStatus() {
  if (isThinking) return "ANALYZING";
  const risk = getRiskLabel();
  if (risk === t.danger) return "CRITICAL";
  if (risk === t.tense) return "ALERT";
  return "STABLE";
}

function clamp(value) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderSuggestions() {
  const suggestions = state.suggestions?.length ? state.suggestions : quickCommands;
  const positions = getNodePositions(suggestions.length);
  $("#quickActions").innerHTML = suggestions
    .map(([label, command], index) => {
      const position = positions[index];
      const activeClass = index === activeNodeIndex ? " class=\"is-active\"" : "";
      return `<button type="button"${activeClass} data-node-index="${index}" data-command="${escapeHtml(command)}" style="left:${position.x}%;top:${position.y}%">${escapeHtml(label)}</button>`;
    })
    .join("");
  document.querySelectorAll("[data-command]").forEach((button) => {
    button.addEventListener("click", () => {
      activeNodeIndex = Number(button.dataset.nodeIndex);
      inspectorTitle.textContent = button.textContent;
      inspectorMeta.textContent = button.dataset.command;
      pulseNetwork(1.3);
      handleCommand(button.dataset.command);
    });
    button.addEventListener("mouseenter", () => {
      inspectorTitle.textContent = button.textContent;
      inspectorMeta.textContent = button.dataset.command;
    });
  });
}

function getContextLine() {
  const low = Object.entries(state.metrics)
    .filter(([key, value]) => !["radiation", "dust"].includes(key) && value < 55)
    .map(([key]) => metricConfig[key].label);
  const high = [];
  if (state.metrics.radiation > 45) high.push(metricConfig.radiation.label);
  if (state.metrics.dust > 50) high.push(metricConfig.dust.label);
  if (!low.length && !high.length) {
    return "\u5f53\u524d\u57fa\u5730\u8bfb\u6570\u8fd8\u7b97\u7a33\uff0c\u8fd9\u662f\u706b\u661f\u4e0a\u5c11\u6570\u503c\u5f97\u73cd\u60dc\u7684\u65f6\u523b\u3002";
  }
  return `\u6211\u5148\u770b\u4e86\u4e00\u773c\u8bfb\u6570\uff1a${[...low, ...high].join("\u3001")}\u9700\u8981\u7559\u610f\u3002`;
}

function getContextSuggestions() {
  if (state.metrics.morale < 55) return commandDeck.morale;
  if (state.metrics.dust > 48 || state.metrics.power < 60) return commandDeck.storm;
  if (state.metrics.water < 58 || state.metrics.oxygen < 70) return commandDeck.systems;
  return quickCommands;
}

function getProtocolSuggestions(fallback = quickCommands) {
  const protocol = getCurrentProtocol();
  const completed = new Set(state.completedProtocolTasks || []);
  const protocolActions = protocol.tasks
    .filter((task) => !completed.has(task.key))
    .map((task) => [task.label, task.command]);
  const merged = [...protocolActions, ...fallback];
  const seen = new Set();
  return merged.filter(([, command]) => {
    if (seen.has(command)) return false;
    seen.add(command);
    return true;
  }).slice(0, 6);
}

function formatEffects(changes) {
  const details = changes
    .map(({ key, value, after }) => {
      const sign = value > 0 ? "+" : "";
      return `${metricConfig[key].label} ${sign}${value} \u2192 ${after}%`;
    })
    .join("\uff0c");
  return `\u8d44\u6e90\u53d8\u5316\uff1a${details}`;
}

function addMissionLog(title, body, changes = []) {
  const effects = changes.map(({ key, value, after, causal }) => {
    const sign = value > 0 ? "+" : "";
    const suffix = causal ? "\uff08\u56e0\u679c\u8054\u52a8\uff09" : "";
    return `${metricConfig[key].label} ${sign}${value} \u2192 ${after}%${suffix}`;
  });
  state.missionLog.push({
    sol: state.sol,
    title,
    body,
    effects,
  });
  state.missionLog = state.missionLog.slice(-24);
}

function getCurrentProtocol() {
  return solProtocols[(state.protocolIndex || 0) % solProtocols.length];
}

function markProtocolProgress(...signals) {
  const protocol = getCurrentProtocol();
  const completed = new Set(state.completedProtocolTasks || []);
  protocol.tasks.forEach((task) => {
    if (completed.has(task.key)) return;
    if (signals.some((signal) => task.match.some((item) => signal.includes(item) || item.includes(signal)))) {
      completed.add(task.key);
    }
  });
  state.completedProtocolTasks = [...completed];
}

function advanceProtocol() {
  const protocol = getCurrentProtocol();
  const completed = new Set(state.completedProtocolTasks || []);
  const isComplete = protocol.tasks.every((task) => completed.has(task.key));
  if (!isComplete || isThinking) return;
  state.completedPhases = [...(state.completedPhases || []), protocol.title].slice(-12);
  state.protocolIndex = (state.protocolIndex || 0) + 1;
  state.completedProtocolTasks = [];
  state.sol += 1;
  state.delay = getSignalDelay(state.sol);
  state.currentEvent += 1;
  state.knowledgeIndex += 1;
  state.checklist = buildChecklistForProtocol(getCurrentProtocol());
  state.suggestions = getProtocolSuggestions(quickCommands);
  addMessage("system", `Sol ${String(state.sol).padStart(3, "0")} \u5df2\u542f\u52a8\uff1a${getCurrentProtocol().title}`);
  addMissionLog(getCurrentProtocol().title, "\u4efb\u52a1\u534f\u8bae\u5df2\u8fdb\u5165\u4e0b\u4e00\u9636\u6bb5\u3002", [
    { key: "morale", value: 2, after: clamp(state.metrics.morale + 2) },
  ]);
  state.metrics.morale = clamp(state.metrics.morale + 2);
  pulseNetwork(2);
  render();
}

function getBaseStability() {
  const positive = state.metrics.oxygen + state.metrics.water + state.metrics.power + state.metrics.morale;
  const hazards = state.metrics.radiation + state.metrics.dust;
  const completedBonus = Math.min(18, (state.completedPhases?.length || 0) * 4);
  const score = clamp((positive / 4) - hazards * 0.22 + completedBonus);
  if (score >= 78) return { score, label: "\u7a33\u5b9a\u6269\u5c55" };
  if (score >= 62) return { score, label: "\u53ef\u6301\u7eed\u8fd0\u884c" };
  if (score >= 46) return { score, label: "\u538b\u529b\u8fd0\u884c" };
  return { score, label: "\u4e34\u754c\u7ef4\u6301" };
}

function getBasePhaseCaption(stability) {
  if (stability.score >= 78) {
    return "\u57fa\u5730\u5df2\u4ece\u751f\u5b58\u6a21\u5f0f\u8f6c\u5411\u6269\u5c55\u6a21\u5f0f\uff0c\u53ef\u4ee5\u5f00\u59cb\u8003\u8651\u66f4\u8fdc\u7684\u706b\u661f\u533a\u57df\u3002";
  }
  if (stability.score >= 62) {
    return "\u57fa\u5730\u80fd\u7ef4\u6301\u8fde\u7eed\u8fd0\u884c\uff0c\u4f46\u4efb\u4f55\u5916\u90e8\u98ce\u9669\u90fd\u4f1a\u653e\u5927\u8d44\u6e90\u6d88\u8017\u3002";
  }
  if (stability.score >= 46) {
    return "\u57fa\u5730\u4ecd\u5728\u8fd0\u884c\uff0c\u4f46\u7cfb\u7edf\u6ca1\u6709\u592a\u591a\u5197\u4f59\uff0c\u4e0b\u4e00\u6b65\u9700\u8981\u5148\u964d\u4f4e\u8106\u5f31\u94fe\u8def\u3002";
  }
  return "\u57fa\u5730\u5df2\u63a5\u8fd1\u4e34\u754c\u72b6\u6001\uff0c\u5e94\u505c\u6b62\u975e\u5fc5\u8981\u884c\u52a8\uff0c\u4f18\u5148\u4fdd\u547d\u4e0e\u4fdd\u6301\u95ed\u73af\u3002";
}

function buildChecklistForProtocol(protocol) {
  const staticItems = [
    "\u8bb0\u5f55\u5f53\u524d\u516d\u9879\u57fa\u5730\u8bfb\u6570",
    "\u5411\u5730\u7403\u53d1\u9001 280 \u5b57\u4ee5\u5185\u72b6\u6001\u6458\u8981",
  ];
  return [...protocol.tasks.map((task) => task.label), ...staticItems].map((text) => ({ text, done: false }));
}

function getSignalDelay(sol) {
  const minute = 12 + ((sol * 7) % 9);
  const second = 18 + ((sol * 13) % 41);
  return `${minute} \u5206 ${String(second).padStart(2, "0")} \u79d2`;
}

function summarizeCommand(command) {
  if (command.length <= 34) return command;
  return `${command.slice(0, 32)}...`;
}

function getTaskLabel(command) {
  if (command.includes("\u5965\u6797\u5e15\u65af") || command.includes("\u6c14\u95f8")) return "\u5965\u6797\u5e15\u65af\u57fa\u5730";
  if (command.includes("\u6e29\u5ba4")) return "\u6e29\u5ba4\u8231";
  if (command.includes("\u6c34")) return "\u6c34\u5faa\u73af\u6838\u5fc3";
  if (command.includes("\u5c18\u66b4") || command.includes("\u6c99\u5c18")) return "\u5c18\u66b4\u524d\u7ebf";
  if (command.includes("\u5730\u7403") || command.includes("\u901a\u4fe1")) return "\u5730\u7403\u901a\u4fe1";
  if (command.includes("\u5fc3\u7406") || command.includes("\u5b64\u72ec") || command.includes("\u60f3\u5bb6")) return "\u5fc3\u7406\u4fe1\u6807";
  return "\u706b\u661f\u4efb\u52a1\u7f51";
}

function getNextEventBridge() {
  const next = events[(state.currentEvent + 1) % events.length];
  return `\u6211\u5df2\u7ecf\u628a\u540e\u7eed\u98ce\u9669\u63a8\u5230\u51b3\u7b56\u677f\uff1a${next.title}\u3002`;
}

function getThinkingDelay(command) {
  return Math.min(900, Math.max(420, command.length * 28));
}

function getNodePositions(count) {
  const base = [
    { x: 51, y: 27 },
    { x: 73, y: 48 },
    { x: 43, y: 76 },
    { x: 24, y: 48 },
    { x: 62, y: 35 },
    { x: 78, y: 72 },
  ];
  if (count <= base.length) return base.slice(0, count);
  return Array.from({ length: count }, (_, index) => {
    const angle = -Math.PI / 2 + (index / count) * Math.PI * 2;
    return {
      x: 50 + Math.cos(angle) * 34,
      y: 50 + Math.sin(angle) * 34,
    };
  });
}

function initNeuralCanvases() {
  resizeCanvas(neuralCanvas);
  resizeCanvas(neuralBackdrop);
  neuralAnimationFrame = window.requestAnimationFrame(drawNeuralFrame);
}

function resizeCanvas(canvas) {
  const rect = canvas.getBoundingClientRect();
  const scale = window.devicePixelRatio || 1;
  canvas.width = Math.max(1, Math.floor(rect.width * scale));
  canvas.height = Math.max(1, Math.floor(rect.height * scale));
}

function pulseNetwork(amount = 1) {
  neuralPulse = Math.min(3, neuralPulse + amount);
  backdropPulse = Math.min(2.2, backdropPulse + amount * 0.45);
  agentPanel.classList.add("pulse");
  window.setTimeout(() => agentPanel.classList.remove("pulse"), 620);
}

function drawNeuralFrame(time) {
  if (!visualSettings.paused) frozenTime = time;
  drawInterfaceNetwork(frozenTime);
  drawBackdropNetwork(frozenTime);
  neuralPulse *= 0.94;
  backdropPulse *= 0.965;
  neuralAnimationFrame = window.requestAnimationFrame(drawNeuralFrame);
}

function drawInterfaceNetwork(time) {
  const width = neuralCanvas.width;
  const height = neuralCanvas.height;
  const scale = window.devicePixelRatio || 1;
  neuralCtx.clearRect(0, 0, width, height);
  neuralCtx.save();
  neuralCtx.scale(scale, scale);
  const rect = neuralCanvas.getBoundingClientRect();
  const cx = rect.width / 2;
  const cy = rect.height / 2;
  const buttons = [...document.querySelectorAll("#quickActions button")];
  buttons.forEach((button, index) => {
    const nodeRect = button.getBoundingClientRect();
    const hostRect = neuralInterface.getBoundingClientRect();
    const x = nodeRect.left - hostRect.left + nodeRect.width / 2;
    const y = nodeRect.top - hostRect.top + nodeRect.height / 2;
    const shimmer = 0.5 + Math.sin(time / 360 + index * 1.7) * 0.5;
    const isActive = index === activeNodeIndex;
    drawCurve(
      neuralCtx,
      cx,
      cy,
      x,
      y,
      28 + index * 11,
      isActive
        ? `rgba(229, 210, 118, ${0.4 + shimmer * 0.24 + neuralPulse * 0.09})`
        : `rgba(156, 236, 255, ${(0.24 + shimmer * 0.18 + neuralPulse * 0.08) * visualSettings.lineBrightness})`,
      (1 + neuralPulse * 0.52) * visualSettings.lineBrightness,
    );
    drawNode(
      neuralCtx,
      x,
      y - 16,
      (3.6 + shimmer * 2 + neuralPulse * 1.1 + (isActive ? 2 : 0)) * visualSettings.particleScale,
      isActive ? `rgba(229, 210, 118, ${0.74 + shimmer * 0.2})` : `rgba(156, 236, 255, ${0.55 + shimmer * 0.35})`,
    );
    if (neuralPulse > 0.05) {
      const progress = (time / 560 + index * 0.17) % 1;
      const curved = curvePoint(cx, cy, x, y, 28 + index * 11, progress);
      const px = curved.x;
      const py = curved.y;
      drawNode(neuralCtx, px, py, (3 + neuralPulse * 2.2) * visualSettings.particleScale, "rgba(229, 184, 91, 0.82)");
    }
  });
  drawNode(neuralCtx, cx, cy, (10 + neuralPulse * 4) * visualSettings.particleScale, "rgba(156, 236, 255, 0.78)");
  neuralCtx.restore();
}

function drawBackdropNetwork(time) {
  const width = neuralBackdrop.width;
  const height = neuralBackdrop.height;
  const scale = window.devicePixelRatio || 1;
  backdropCtx.clearRect(0, 0, width, height);
  backdropCtx.save();
  backdropCtx.scale(scale, scale);
  const rect = neuralBackdrop.getBoundingClientRect();
  const cx = rect.width * 0.56;
  const cy = rect.height * 0.5;

  cosmicDust.forEach((dust, index) => {
    const x = ((dust.x * rect.width + Math.sin(time / 2400 + index) * 18) % rect.width + rect.width) % rect.width;
    const y = ((dust.y * rect.height + Math.cos(time / 2800 + index) * 14) % rect.height + rect.height) % rect.height;
    drawNode(backdropCtx, x, y, dust.size * visualSettings.particleScale, hexToRgba(dust.color, 0.42));
  });

  starMapNodes.forEach((node, index) => {
    const x = rect.width * node.x + Math.sin(time / 2100 + index) * 8;
    const y = rect.height * node.y + Math.cos(time / 2300 + index * 0.8) * 8;
    const offset = 70 + index * 19;
    drawCurve(
      backdropCtx,
      cx,
      cy,
      x,
      y,
      offset,
      `rgba(156, 236, 255, ${(0.1 + backdropPulse * 0.035) * visualSettings.lineBrightness})`,
      (node.size > 8 ? 1.25 : 0.8) * visualSettings.lineBrightness,
    );
    drawNode(backdropCtx, x, y, (node.size + backdropPulse * 1.6) * visualSettings.particleScale, hexToRgba(node.color, 0.86));
    if (visualSettings.showAllLabels || node.size > 6.1) {
      drawLabel(backdropCtx, node.label, node.sub, x + 12, y - 12, node.size > 7 ? 28 : 16, node.size > 7 ? 0.92 : 0.7);
    }
    if (backdropPulse > 0.05) {
      const progress = (time / (900 + index * 23)) % 1;
      const curved = curvePoint(cx, cy, x, y, offset, progress);
      drawNode(backdropCtx, curved.x, curved.y, (2.2 + backdropPulse * 2.8) * visualSettings.particleScale, "rgba(255, 255, 255, 0.86)");
    }
  });

  drawNode(backdropCtx, cx, cy, (13 + backdropPulse * 5) * visualSettings.particleScale, "rgba(245, 252, 255, 0.95)");
  drawLabel(backdropCtx, "\u795d\u878d-03", "\u4e2d\u592e\u5bfc\u822a\u6838", cx + 18, cy + 6, 24, 0.96);
  backdropCtx.restore();
}

function drawLine(ctx, x1, y1, x2, y2, stroke, width) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = stroke;
  ctx.lineWidth = width;
  ctx.stroke();
}

function drawCurve(ctx, x1, y1, x2, y2, offset, stroke, width) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const distance = Math.max(1, Math.hypot(dx, dy));
  const normalX = -dy / distance;
  const normalY = dx / distance;
  const bend = Math.sin((x2 + y2 + offset) * 0.01) * offset;
  const c1x = x1 + dx * 0.28 + normalX * bend;
  const c1y = y1 + dy * 0.28 + normalY * bend;
  const c2x = x1 + dx * 0.72 - normalX * bend * 0.6;
  const c2y = y1 + dy * 0.72 - normalY * bend * 0.6;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.bezierCurveTo(c1x, c1y, c2x, c2y, x2, y2);
  ctx.strokeStyle = stroke;
  ctx.lineWidth = width;
  ctx.stroke();
}

function curvePoint(x1, y1, x2, y2, offset, tValue) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const distance = Math.max(1, Math.hypot(dx, dy));
  const normalX = -dy / distance;
  const normalY = dx / distance;
  const bend = Math.sin((x2 + y2 + offset) * 0.01) * offset;
  const c1x = x1 + dx * 0.28 + normalX * bend;
  const c1y = y1 + dy * 0.28 + normalY * bend;
  const c2x = x1 + dx * 0.72 - normalX * bend * 0.6;
  const c2y = y1 + dy * 0.72 - normalY * bend * 0.6;
  const mt = 1 - tValue;
  return {
    x: mt ** 3 * x1 + 3 * mt ** 2 * tValue * c1x + 3 * mt * tValue ** 2 * c2x + tValue ** 3 * x2,
    y: mt ** 3 * y1 + 3 * mt ** 2 * tValue * c1y + 3 * mt * tValue ** 2 * c2y + tValue ** 3 * y2,
  };
}

function drawNode(ctx, x, y, radius, fill) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = fill;
  ctx.shadowColor = fill;
  ctx.shadowBlur = radius * 3;
  ctx.fill();
  ctx.shadowBlur = 0;
}

function drawLabel(ctx, label, sub, x, y, size, opacity) {
  ctx.save();
  ctx.font = `800 ${size}px "Microsoft YaHei", sans-serif`;
  ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
  ctx.shadowColor = "rgba(245, 252, 255, 0.8)";
  ctx.shadowBlur = 12;
  ctx.fillText(label, x, y);
  ctx.font = `600 ${Math.max(10, size * 0.42)}px "Microsoft YaHei", sans-serif`;
  ctx.fillStyle = `rgba(156, 236, 255, ${opacity * 0.64})`;
  ctx.shadowBlur = 6;
  ctx.fillText(sub, x, y + size * 0.72);
  ctx.restore();
}

function hexToRgba(hex, alpha) {
  const value = hex.replace("#", "");
  const red = parseInt(value.slice(0, 2), 16);
  const green = parseInt(value.slice(2, 4), 16);
  const blue = parseInt(value.slice(4, 6), 16);
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function fract(value) {
  return value - Math.floor(value);
}
