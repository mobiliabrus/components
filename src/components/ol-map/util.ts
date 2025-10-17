export function parsePoint(point: unknown): [number, number] | void {
  if (typeof point === "string") {
    const [lng, lat] = point.split(",");
    return [Number(lng), Number(lat)];
  }
}

export function parsePoints(points: unknown): any[] | [] {
  if (typeof points === "string") {
    return points.split(/[;|]{1}/).map((points) => points.split(","));
  }
  return [];
}
