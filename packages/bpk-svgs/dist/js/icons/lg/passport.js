import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M16.8 2H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h11.8a3.27 3.27 0 0 0 3.2-3.333V5.333A3.27 3.27 0 0 0 16.8 2zM12 7a3.001 3.001 0 0 1 0 6 3.001 3.001 0 0 1 0-6zm2 11h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2z" /></svg>);