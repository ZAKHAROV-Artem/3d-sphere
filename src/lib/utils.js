import * as THREE from "three";
import { SPHERE_RADIUS } from "./constants";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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
