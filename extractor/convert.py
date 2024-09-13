# convert csv to json
import pandas as pd
# read csv file
data = pd.read_csv('./vietin.csv')

# add index to column from 60489
data['id'] = range(0, 60490)

# convert number to currency format vnd (1.000.000)

data['credit'] = data['credit'].apply(lambda x: '{:,.0f}'.format(x))
data['credit'] = data['credit'].apply(lambda x: x.replace(",", ".").format(int))

# convert to json

data.to_json('./vietin.json', orient='records')