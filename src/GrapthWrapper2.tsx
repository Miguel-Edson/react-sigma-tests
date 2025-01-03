//https://sim51.github.io/react-sigma/docs/example/load-graph#by-using-useloadgraph
//exemplo 1
//Graph property on SigmaContainer

import { FC, CSSProperties } from "react";
import { MultiDirectedGraph } from "graphology";
import React from "react";

import { SigmaContainer } from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";

export const LoadGraphWithProp: FC<{ style: CSSProperties }> = ({ style }) => {
  // Create the graph
  const graph = new MultiDirectedGraph();
  graph.addNode("A", { x: 0, y: 0, label: "Node A", size: 10 });
  graph.addNode("B", { x: 1, y: 1, label: "Node B", size: 10 });
  graph.addEdgeWithKey("rel1", "A", "B", { label: "REL_1" });


  return (
    <SigmaContainer
      style={style}
      graph={graph}
      settings={{ allowInvalidContainer: true }}
    />
  );
};

export default LoadGraphWithProp;