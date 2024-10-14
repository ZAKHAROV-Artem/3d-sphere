import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as THREE from "three";

import { SPHERE_RADIUS } from "../constants";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export function getClosestItem(camera, categories) {
  let closestItem = null;
  let closestItemCategoryGroupIndex = null;
  let minDistance = Infinity;

  categories.forEach((categoryItems, i) => {
    categoryItems.forEach((item) => {
      const radian = THREE.MathUtils.degToRad(72 * i);
      const itemPosition = new THREE.Vector3(...item.position).applyAxisAngle(
        new THREE.Vector3(0, 1, 0),
        radian,
      );
      const distance = camera.position.distanceTo(itemPosition);

      if (distance < minDistance) {
        closestItemCategoryGroupIndex = i;
        closestItem = item;
        minDistance = distance;
      }
    });
  });

  return { closestItem, closestItemCategoryGroupIndex };
}

export function getCoordinates(x, y) {
  const z = Math.sqrt(SPHERE_RADIUS ** 2 - x ** 2 - y ** 2) + 0.1;
  return [x, y, z];
}

export function getCameraTargetPositionAfterRotation(
  closestItemPosition,
  rotationAngleMultiplier = 0,
) {
  return new THREE.Vector3(
    closestItemPosition[0],
    closestItemPosition[1],
    closestItemPosition[2] + 0.2,
  ).applyAxisAngle(
    new THREE.Vector3(0, 1, 0),
    THREE.MathUtils.degToRad(72 * rotationAngleMultiplier),
  );
}

export function lookAtPoint(camera, targetPoint) {
  camera.lookAt(targetPoint);
}
export function moveAtPosition(
  camera,
  targetPosition,
  interpolationValue = 0.1,
) {
  camera.position.lerp(targetPosition, interpolationValue);
}
export function isValidCoordinate(coordinate) {
  return (
    Array.isArray(coordinate) &&
    coordinate.length === 3 &&
    coordinate.every((val) => typeof val === "number" && !isNaN(val))
  );
}

export function createCirclePoints(radius, segments) {
  console.log("CREATE CIRCLE POINTS");

  const points = [];
  for (let i = 0; i <= segments; i++) {
    const angle = (i / segments) * Math.PI * 2;
    points.push(
      new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius),
    );
  }
  return points;
}

export function calculateControlPoint(start, end) {
  const startVec = new THREE.Vector3(...start);
  const endVec = new THREE.Vector3(...end);
  const midVec = new THREE.Vector3()
    .addVectors(startVec, endVec)
    .multiplyScalar(0.5);
  const offsetVec = midVec
    .clone()
    .normalize()
    .multiplyScalar(SPHERE_RADIUS * 1.135);
  return offsetVec.toArray();
}

export function convertRGBToThreeJS(r, g, b) {
  return new THREE.Color(r / 255, g / 255, b / 255);
}

export function roundedGeometry(w, h, r, s) {
  // This function uses width (w), height (h), corner radius (r), and smoothness (s)

  const pi2 = Math.PI * 2;
  const n = (s + 1) * 4; // number of segments for rounding each corner
  let indices = [];
  let positions = [];
  let uvs = [];
  let qu, sgx, sgy, x, y;

  // Generate indices for the geometry
  for (let j = 1; j < n + 1; j++) indices.push(0, j, j + 1); // 0 is center
  indices.push(0, n, 1);

  // Center position of the rectangle
  positions.push(0, 0, 0);
  uvs.push(0.5, 0.5); // Center UV coordinate

  // Calculate the positions for the rounded corners
  for (let j = 0; j < n; j++) contour(j);

  // Create the BufferGeometry
  const geometry = new THREE.BufferGeometry();
  geometry.setIndex(new THREE.BufferAttribute(new Uint32Array(indices), 1));
  geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(new Float32Array(positions), 3),
  );
  geometry.setAttribute(
    "uv",
    new THREE.BufferAttribute(new Float32Array(uvs), 2),
  );

  return geometry;

  // Helper function to calculate the rounded corners
  function contour(j) {
    qu = Math.trunc((4 * j) / n) + 1; // quadrant: qu = 1..4
    sgx = qu === 1 || qu === 4 ? 1 : -1; // x signum: right (1) or left (-1)
    sgy = qu < 3 ? 1 : -1; // y signum: top (1) or bottom (-1)

    // Calculate corner position using cosine and sine for the rounded part
    x = sgx * (w / 2 - r) + r * Math.cos((pi2 * (j - qu + 1)) / (n - 4)); // Adjust for corner circle
    y = sgy * (h / 2 - r) + r * Math.sin((pi2 * (j - qu + 1)) / (n - 4)); // Adjust for corner circle

    // Push calculated positions and UV coordinates
    positions.push(x, y, 0);
    uvs.push(0.5 + x / w, 0.5 + y / h);
  }
}
