document.getElementById("notefs4").addEventListener("mouseover", async () => {
  await Tone.start();
  const player = new Tone.Player({
    url,
    loop: true,
    autostart: false,
  });
  await Tone.loaded();
  const pitchShift = new Tone
    .PitchShift({pitch: -8})
    .toDestination()
  ;
  player.connect(pitchShift);
  player.start();
});