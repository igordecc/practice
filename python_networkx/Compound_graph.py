import networkx
import matplotlib.pyplot as plt


def add_graphs(graph_list):
    """
    create graph from multiple graphs
    :param graph_list:
    :return:
    """

    summed_graph = networkx.Graph()

    low_border = 0

    for i in range(len(graph_list)):

        # extract edges from graph
        # update nodes numbers
        edges = graph_list[i].edges()
        new_edges = [(edge[0] + low_border, edge[1] + low_border) for edge in edges]

        # add bound
        if i > 0:
            bound_edge = [(low_border - 1, low_border)]
            new_edges += bound_edge

        # update low_border
        for edge in new_edges:
            for node in edge:
                if node >= low_border:
                    low_border = node + 1

        summed_graph.add_edges_from(new_edges)

    # final edge to cycle it all
    summed_graph.add_edges_from([(0, low_border)])

    return summed_graph



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