import sys

#print(sys.argv[0])
# importing the pandas library
import pandas as pd
# reading the csv file
df = pd.read_csv(sys.argv[3])
prev = df.loc[int(sys.argv[1]), sys.argv[2]]
# updating the column value/data
df.loc[int(sys.argv[1]), sys.argv[2]] = str(int(prev ) +1)

# writing into the file
df.to_csv(sys.argv[3], index=False)

#print(df)
print(prev)