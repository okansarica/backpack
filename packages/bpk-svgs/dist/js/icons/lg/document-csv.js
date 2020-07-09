import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path fillRule="evenodd" d="M8.068 2.786A2.885 2.885 0 0 1 10.06 2H18c1.5 0 3 1.5 3 3v14.143C21 20.72 19.656 22 18 22H6c-1.656 0-3-1.28-3-2.857V8.724c0-.711.297-1.394.826-1.898l4.242-4.04zM5.98 7.556a.3.3 0 0 1-.21-.514l2.344-2.315a.3.3 0 0 1 .51.213v2.316a.3.3 0 0 1-.3.3H5.98zM7.408 18c1.21 0 2.149-.792 2.311-2.067.008-.083-.022-.108-.081-.108h-.746c-.044 0-.074.025-.089.083-.206.817-.73 1.125-1.395 1.125-.71 0-1.448-.658-1.448-2.033s.739-2.033 1.448-2.033c.664 0 1.189.308 1.395 1.125.015.058.045.083.089.083h.746c.059 0 .089-.017.081-.083C9.58 12.8 8.62 12 7.408 12 6.24 12 5 12.9 5 15s1.24 3 2.408 3zm4.814 0c1.204 0 1.994-.667 1.994-1.85 0-.925-.834-1.342-1.713-1.617-.658-.208-1.226-.433-1.226-.925 0-.433.384-.641.864-.641.517 0 .915.258.99.775.007.058.021.083.073.083h.783c.052 0 .074-.025.074-.083-.022-.909-.76-1.742-1.905-1.742-.938 0-1.81.592-1.81 1.658 0 .959.657 1.4 1.765 1.717.71.2 1.175.467 1.175.883 0 .459-.392.775-1.02.775-.635 0-1.07-.325-1.122-1-.008-.058-.022-.083-.074-.083h-.776c-.051 0-.073.025-.073.083.007 1.084.849 1.967 2.001 1.967zm4.016-.083h.886c.06 0 .081-.034.096-.084l1.773-5.658c.007-.025.007-.033.007-.042 0-.033-.022-.05-.067-.05h-.856c-.06 0-.089.025-.104.084l-1.197 4.17c-.031.108-.159.108-.19 0l-1.197-4.17c-.015-.059-.045-.084-.104-.084h-.857c-.044 0-.066.017-.066.05 0 .009 0 .017.007.042l1.773 5.658c.015.05.037.084.096.084z" clipRule="evenodd" /></svg>);