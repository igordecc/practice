import networkx


def Example0():
    import networkx
    import matplotlib.pyplot as plt

    x = [(i, i + 3) for i in range(10)]

    graph_x = networkx.Graph(x)
    networkx.draw(graph_x)
    plt.show()


def Example1():
    # IGOR GRAPH!
    # MIT LICENSE!
    # ALL RIGHTS (C)
    import networkx
    import matplotlib.pyplot as plt

    n = 10
    x = [(i, i+n) for i in range(n)]
    y = [(i+1, i+2) for i in range(n-1)] + [(1,n)]
    x += y

    graph_x = networkx.Graph(x)
    networkx.draw(graph_x)
    plt.show()
    return graph_x


def Example2():
    # modular graph
    # connected by IGOR GRAPH
    import networkx
    import matplotlib.pyplot as plt
    IGOR_graph = Example1()

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

    graph_list = [networkx.to_undirected(graph) for graph in graph_list]
    graph_list[0] = networkx.Graph(list(set(graph_list[0].edges())))
    print(graph_list[1].edges())


    def build_graphs(graph_list):
        summed_graph = networkx.Graph()
        for graph in graph_list:
            graph.edges()
            print()

        low_border = 0
        for i in range(len(graph_list)):

            # extract edges from graph
            # update nodes numbers
            x = [(edge[0]+low_border, edge[1]+low_border) for edge in graph_list[i].edges()]

             #update low_border
            for edge in x:
                for node in edge:
                    if node >= low_border:
                        low_border = node + 1

            summed_graph.add_edges_from(x)
            print(x)
        # summ_graph.add_edges_from(graph_list[0].edges())
        return summed_graph


    summed_graph = build_graphs(graph_list)
    networkx.draw(summed_graph)
    plt.show()

    G = networkx.scale_free_graph(oscillators_number)
    networkx.to_undirected(G)


if __name__ == '__main__':
    Example1()
