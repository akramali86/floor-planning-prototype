const CHAIR_WIDTH = 30;
const CHAIR_HEIGHT = 24;

function TableIcon({ top, left }: { top: number; left: number }) {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ top: `${top}px`, left: `${left}px`, position: "fixed" }}
    >
      <circle
        cx="40"
        cy="40"
        r="39"
        fill="white"
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  );
}

function ChairIcon({ top, left, rotation }: { top: number; left: number, rotation: number }) {
  return (
    <svg
      width={`${CHAIR_WIDTH}`}
      height={`${CHAIR_HEIGHT}`}
      viewBox={`0 0 ${CHAIR_WIDTH} ${CHAIR_HEIGHT}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ top: `${top}px`, left: `${left}px`, position: "fixed", transform: `rotate(${rotation}deg)` }}
    >
      <rect
        x="3"
        y="1"
        width="24"
        height="17"
        rx="3"
        fill="white"
        stroke="black"
        strokeWidth="2"
      />
      <rect
        x="1"
        y="18"
        width="28"
        height="5"
        rx="2.5"
        fill="white"
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  );
}

export function CircleTable({ seats, top, left, rotation = 0 }: { seats: number, top: number, left: number, rotation?: number }) {
  const centerOffet = 15; // Padding to space chair from table
  const radius = 40 + centerOffet
  const center = radius; // Center point
  const offsetRadians = rotation * Math.PI / 180

  const chairs = Array.from({ length: seats }).map((_, i) => {
    const angle = ((2 * Math.PI) / seats) * i + offsetRadians; // Divide the circle into equal parts based on the number of chairs
    const x = (radius * Math.cos(angle) + center + left) - (CHAIR_WIDTH / 2) - centerOffet;
    const y = (radius * Math.sin(angle) + center + top) - (CHAIR_HEIGHT / 2) - centerOffet;
    const rotation = 180 * angle / Math.PI - 90; // convert radian to degree and subtract 90 degrees
    return <ChairIcon key={i} top={y} left={x} rotation={rotation} />;
  });
  return (
    <>
      <TableIcon top={top} left={left} />
      {chairs}
    </>
  );
}
