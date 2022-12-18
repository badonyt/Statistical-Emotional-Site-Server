import sys
import pandas as pd
import csv
trust = 0

df = pd.read_csv('./data/data.csv')
found = False
with open("./data/data.csv", "r") as f:
    csvreader = csv.reader(f, delimiter=",")
    for row in csvreader:
        print(row)
        if sys.argv[2] in row[0]:
            print ("2016 spotted")
            found = True
            break
       
        trust+=1


if found == False:     
    df = df.append({'Date':sys.argv[2], 'Super_Happy':0, 'Happy':0, 'Face':0, 'Sad': 0, 'Super_Sad': 0}, ignore_index=True)

df.loc[trust-1,sys.argv[1]] = int(df.loc[trust-1,sys.argv[1]]) + 1


df.to_csv("./data/data.csv", index=False)
