"""
This module is set of simple graph modules examples. Each function in this module can be copy-pasted as independent
program and used in python environment. Module was created for practice purposes to avoid creating several
mini-programs with the same goal.
"""
import networkx


def Example0():
    """
    Create graph from edge list. Draw it using matplotlib.
    """
    import networkx
    import matplotlib.pyplot as plt

    x = [(i, i + 3) for i in range(10)]

    graph_x = networkx.Graph(x)
    networkx.draw(graph_x)
    plt.show()

# create
def Example1():
    """
    Create graph with topology similar to a sun.
    :return:
    """
    import networkx
    import matplotlib.pyplot as plt

    n = 10
    x = [(i, i+n) for i in range(n)]    # create the sun rays
    y = [(i+1, i+2) for i in range(n-1)] + [(1,n)]  # create closed the circle
    x += y

    graph_x = networkx.Graph(x)
    # pos = networkx.drawing.random_layout(graph_x)
    # pos = networkx.drawing.bipartite_layout(graph_x)
    # pos = networkx.drawing.circular_layout(graph_x)
    pos = networkx.drawing.fruchterman_reingold_layout(graph_x)
    networkx.draw_networkx(graph_x, pos)
    plt.show()

if __name__ == '__main__':
    Example1()
