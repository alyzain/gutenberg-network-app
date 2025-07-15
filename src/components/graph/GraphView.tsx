'use client'

import React from 'react'
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow'
import 'reactflow/dist/style.css'

interface GraphViewProps {
  nodes: any[]
  edges: any[]
}

export function GraphView({ nodes, edges }: GraphViewProps) {
  return (
    <div className="h-[400px] w-full border rounded-lg overflow-hidden bg-white">
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  )
}