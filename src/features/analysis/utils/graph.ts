import type { Character } from '@/types/analysis'
import dagre from 'dagre'

const nodeWidth = 180
const nodeHeight = 60

export function generateGraphFromCharacters(characters: Character[]) {
    const g = new dagre.graphlib.Graph()
    g.setGraph({})
    g.setDefaultEdgeLabel(() => ({}))

    const nodes = characters.map((c) => {
        g.setNode(c.name, { width: nodeWidth, height: nodeHeight })
        return {
            id: c.name,
            data: { label: c.name },
            position: { x: 0, y: 0 }, // temp, dagre will handle
        }
    })

    characters.forEach((c) => {
        c.interactions.forEach((i) => {
            g.setEdge(c.name, i.name)
        })
    })

    dagre.layout(g)

    const laidOutNodes = nodes.map((node) => {
        const pos = g.node(node.id)
        return {
            ...node,
            position: { x: pos.x, y: pos.y },
        }
    })

    const seenPairs = new Set<string>()
    const edges: { id: string; source: string; target: string; label: string; type: string }[] = []

    for (const char of characters) {
        for (const i of char.interactions) {
            const [a, b] = [char.name, i.name].sort()
            const key = `${a}-${b}`

            if (!seenPairs.has(key)) {
                edges.push({
                    id: `${char.name}-${i.name}`,
                    source: char.name,
                    target: i.name,
                    label: `${i.count}`,
                    type: 'default',
                })
                seenPairs.add(key)
            }
        }
    }

    return { nodes: laidOutNodes, edges }
}