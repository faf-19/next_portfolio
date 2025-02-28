
import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = "none";

    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const handleLinkHoverEvents = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", () => setLinkHovered(true));
        el.addEventListener("mouseleave", () => setLinkHovered(false));
      });
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    addEventListeners();
    handleLinkHoverEvents();

    return () => {
      removeEventListeners();
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <>
      <div
        className={`fixed pointer-events-none z-50 rounded-full mix-blend-difference transition-transform duration-150 ease-out ${
          hidden ? "opacity-0" : "opacity-100"
        } ${clicked ? "scale-75" : ""} ${
          linkHovered ? "scale-150" : ""
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: "30px",
          height: "30px",
          backgroundColor: "white",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className={`fixed pointer-events-none z-50 rounded-full border border-white mix-blend-difference transition-all duration-300 ease-out ${
          hidden ? "opacity-0" : "opacity-100"
        } ${clicked ? "scale-75" : ""} ${
          linkHovered ? "scale-150" : ""
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: "40px",
          height: "40px",
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
}
