(() => {
let ctx, master, noiseBuf;
function ac() {
  if (!ctx) {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    master = ctx.createDynamicsCompressor();
    master.threshold.value = -18; master.ratio.value = 4; master.attack.value = .01; master.release.value = .1;
    const g = ctx.createGain(); g.gain.value = .8; master.connect(g); g.connect(ctx.destination);
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const d = noiseBuf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  }
  if (ctx.state === "suspended") ctx.resume();
  return ctx;
}
function env(g, t, a, peak, dec) { g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(peak, t + a); g.gain.exponentialRampToValueAtTime(0.0001, t + dec); }
function noise(t, dur, type, freq, q, vol, out) {
  const s = ctx.createBufferSource(); s.buffer = noiseBuf;
  const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; if (q) f.Q.value = q;
  const g = ctx.createGain(); env(g, t, .002, vol, dur);
  s.connect(f); f.connect(g); g.connect(out); s.start(t); s.stop(t + dur + .05);
}
function tone(t, f0, f1, dur, vol, out, type = "sine") {
  const o = ctx.createOscillator(); o.type = type;
  o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f1, t + dur * .8);
  const g = ctx.createGain(); env(g, t, .003, vol, dur);
  o.connect(g); g.connect(out); o.start(t); o.stop(t + dur + .05);
}
const KITS = {
  kick: (t, v, o) => { tone(t, 150, 42, .45, 1 * v, o); noise(t, .02, "lowpass", 1200, 0, .25 * v, o); },
  snare: (t, v, o) => { tone(t, 240, 160, .12, .45 * v, o, "triangle"); noise(t, .2, "highpass", 1400, 0, .6 * v, o); },
  hihat: (t, v, o) => noise(t, .05, "highpass", 7500, 0, .35 * v, o),
  hihatOpen: (t, v, o) => noise(t, .32, "highpass", 7000, 0, .3 * v, o),
  tom1: (t, v, o) => tone(t, 260, 170, .32, .7 * v, o),
  tom2: (t, v, o) => tone(t, 200, 130, .36, .7 * v, o),
  tom3: (t, v, o) => tone(t, 150, 95, .42, .75 * v, o),
  crash: (t, v, o) => { noise(t, 1.4, "highpass", 4500, 0, .35 * v, o); noise(t, .9, "bandpass", 9000, 1, .2 * v, o); },
  ride: (t, v, o) => { noise(t, .6, "bandpass", 8000, 3, .3 * v, o); tone(t, 1200, 1150, .5, .05 * v, o, "square"); },
  click: (t, v, o) => tone(t, 1500, 1400, .04, .5 * v, o, "square"),
  clickAccent: (t, v, o) => tone(t, 2200, 2100, .05, .6 * v, o, "square"),
  stick: (t, v, o) => { noise(t, .06, "bandpass", 3200, 2, .7 * v, o); tone(t, 900, 500, .05, .2 * v, o, "triangle"); }
};
const EZAudio = {
  now: () => ac().currentTime,
  play(kind, when = 0, vol = 1, bus) { const c = ac(); const t = Math.max(c.currentTime, when || c.currentTime); (KITS[kind] || KITS.click)(t, vol, bus || master); },
  bus(gain = 1) { ac(); const g = ctx.createGain(); g.gain.value = gain; g.connect(master); return g; },
  master: () => { ac(); return master; }
};
window.EZAudio = EZAudio;
})();
