import networkx
from matplotlib import pyplot


def plot_graph(G):
    networkx.draw(G)
    pyplot.show()


def graph_example(
    # define parameters
    ):
    # define graph
    # plot graph
    return 0


def _scale_free(
        oscillators_number=10,
):
    Graph = networkx.scale_free_graph(oscillators_number)
    plot_graph(Graph)


if __name__ == '__main__':
    _scale_free()