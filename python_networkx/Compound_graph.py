import networkx
import matplotlib.pyplot as plt


def add_graphs(graphs):
    """
    create graph from multiple graphs
    :param graphs:
    :return:
    """

    accumulator_graph = networkx.Graph()

    # This is the number of a node, which will be connected to a previous graph. This is also used to shift the number
    # of each node in each consequent graph, so they dont collide with the numbers which are already present in
    # accumulator.
    next_graph_node = 0

    for i, graph in enumerate(graphs):

        edges = graph.edges()
        # update nodes numbers
        new_edges = [(n1 + next_graph_node, n2 + next_graph_node) for n1, n2 in edges]

        # connect to previous graph
        if i > 0:
            new_edges.append( (next_graph_node - 1, next_graph_node) )

        # find max_node_number
        # new graph start's from max_node_number
        next_graph_node = max((n for e in new_edges for n in e)) + 1   # flat map

        accumulator_graph.add_edges_from(new_edges)

    # connect the last node to the first
    accumulator_graph.add_edges_from([(0, next_graph_node - 1)])

    return accumulator_graph



if __name__ == '__main__':
    oscillators_number = 10
    reconnectionProbability = 0.15
    neighbours = 3
    m2 = 2  # must be even
    m1 = oscillators_number // 2 - m2 // 2

    graph_list = [
        networkx.scale_free_graph(oscillators_number),
        networkx.complete_graph(oscillators_number),
        networkx.fast_gnp_random_graph(oscillators_number, p=0.5),
        networkx.watts_strogatz_graph(oscillators_number, neighbours, reconnectionProbability),
        networkx.barbell_graph(m1, m2)
    ]

    summed_graph = add_graphs(graph_list)
    networkx.draw_networkx(summed_graph)
    plt.show()