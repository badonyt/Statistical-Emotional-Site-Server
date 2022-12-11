import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import plotly.express as px
import plotly.graph_objects as go
from extra.dayoftheweek import get_week_day


pd.options.plotting.backend = "plotly"
df = pd.read_csv("./../data/11.12.2022.csv", header=0)

#print(df)

#print(df['Super_Happy'].describe())
data_canada = px.data.gapminder().query("country == 'Canada'")
#print(data_canada)
day = '11.12.2022'.split(".")[0]
month = '11.12.2022'.split(".")[1]
year = '11.12.2022'.split(".")[2]

print(get_week_day(int(day),int(month),int(year)) + 1)

dfs = px.data.tips()
print(dfs)
fig = px.pie(dfs, values='tip', names='day')

fig.show()