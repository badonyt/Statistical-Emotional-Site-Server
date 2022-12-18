import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import plotly.express as px
import plotly.graph_objects as go


pd.options.plotting.backend = "plotly"
df = pd.read_csv("./data/data.csv", header=0)

print(df)

print(df['Day 1'].describe())