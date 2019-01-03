import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

data = [    #from "D:\work\course work\MPInumarray\main\MPI test result\time1"
    1.216715951995866,
    4.5808580910015735,
    10.081182089001231,
    17.561086089997843,
    27.780501199005812,
    39.53818981900258,
    53.39988517400343,
    69.58798229600507,
    88.24286300999665
]

s = pd.Series(data)
print(s)

data_ = [   #from "D:\work\course work\MPInumarray\main\MPI test result\time2"
0.634646195001551,
2.381596686995181,
5.310947589001444,
9.36829575599404,
14.578778593997413,
20.931993808997504,
28.309861048997846,
37.111634426997625,
47.06157154500397,
]

df = pd.DataFrame([data, data_])
print(pd.DataFrame.to_string(df))