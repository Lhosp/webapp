import React, { useRef } from "react";
import { useSprings, animated } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import clamp from "./clamp";

const fn =
  (order: number[], active = false, originalIndex = 0, curIndex = 0, y = 0) =>
  (index: number) =>
    active && index === originalIndex
      ? {
          y: curIndex * 50,
          scale: 1.1,
          zIndex: 0,
          shadow: 15,
          immediate: (key: string) => key === "y" || key === "zIndex",
        }
      : {
          y: order.indexOf(index) * 50,
          scale: 1,
          zIndex: 0,
          shadow: 1,
          immediate: false,
        };

function move(array: any[], moveIndex: number, toIndex: number) {
  /* #move - Moves an array item from one position in an array to another.
      
           Note: This is a pure function so a new array will be returned, instead
           of altering the array argument.
      
          Arguments:
          1. array     (String) : Array in which to move an item.         (required)
          2. moveIndex (Object) : The index of the item to move.          (required)
          3. toIndex   (Object) : The index to move item at moveIndex to. (required)
        */
  let item = array[moveIndex];
  let length = array.length;
  let diff = moveIndex - toIndex;

  if (diff > 0) {
    // move left
    return [
      ...array.slice(0, toIndex),
      item,
      ...array.slice(toIndex, moveIndex),
      ...array.slice(moveIndex + 1, length),
    ];
  } else if (diff < 0) {
    // move right
    return [
      ...array.slice(0, moveIndex),
      ...array.slice(moveIndex + 1, toIndex + 1),
      item,
      ...array.slice(toIndex + 1, length),
    ];
  }
  return array;
}

function DraggableList({ items }: { items: string[] }) {
  const order = useRef(items.map((_, index) => index)); // Store indicies as a local ref, this represents the item order
  const [springs, api] = useSprings(items.length, fn(order.current)); // Create springs, each corresponds to an item, controlling its transform, scale, etc.
  const bind = useDrag(({ args: [originalIndex], active, movement: [, y] }) => {
    const curIndex = order.current.indexOf(originalIndex);
    const curRow = clamp(
      Math.round((curIndex * 100 + y) / 100),
      0,
      items.length - 1
    );

    const newOrder = move(order.current, curIndex, curRow);
    api.start(fn(newOrder, active, originalIndex, curIndex, y)); // Feed springs new style data, they'll animate the view without causing a single render
    if (!active) order.current = newOrder;
  });

  const colors = [
    "#93CCEA",
    "#F8A9D4",
    "#6EDC99",
    "#D8B8FF",
    "#F5E273",
    "#C2F0E0",
    "#FFB36C",
    "#A7D5FF",
    "#E4A8CC",
    "#79E6C6",
    "#FFD394",
    "#B6F0FF",
    "#FEB2D7",
    "#82E1AB",
    "#E5C2FF",
    "#F7D95E",
    "#C4FFB8",
    "#FF8F8F",
    "#94EAD6",
    "#FFD0A2",
    "#9FE6FF",
    "#FDC3E6",
    "#7AE8C3",
    "#DF9FFF",
    "#9FFFD8",
    "#FFABAB",
    "#A7FFD2",
    "#FFA2A2",
    "#8FFFE1",
    "#FFC4C4",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  return (
    <div className={"styles.content"} style={{ height: items.length *50}}>
      {springs.map(({ zIndex, shadow, y, scale }, i) => (
        <animated.div
          {...bind(i)}
          key={i}
          style={{
            backgroundColor: colors[i],
            color: "white",
            position: "absolute",
            width: "400px",
            padding: "10px",
            zIndex,
            boxShadow: shadow.to(
              (s) => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`
            ),
            y,
            scale,
          }}
          children={items[i]}
        />
      ))}
    </div>
  );
}
export default DraggableList;
