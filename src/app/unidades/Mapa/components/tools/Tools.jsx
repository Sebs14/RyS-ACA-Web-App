import { useEffect, useState } from "react";

export default function Tools({
  currentActiveTool,
  distancePointA,
  distancepointB,
}) {
  const [activeTool, setActiveTool] = useState(currentActiveTool);

  useEffect(() => {
    console.log("Current tool " + currentActiveTool);
    setActiveTool(currentActiveTool);
  }, [currentActiveTool]);

  const distanceMeasurementDisplay = () => (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Datos de medida:
          </Typography>
        </CardContent>
      </Card>
    </div>
  );

  return <div></div>;
}
