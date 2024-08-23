export default function Clock({ time }) {
  let hours = time.getHours();
  const dayOrNight = (hours >= 0 && hours <= 6) ? "night" : "day";

  return (
    <h1 className={dayOrNight}>
      {time.toLocaleTimeString()}
    </h1>
  );
}
