import camelot
import pandas as pd

# process 10 pages per time, total 2009 pages
tables = camelot.read_pdf('./danh-sach-viet-tin.pdf', flavor='lattice', pages='1-end')
# loop through the tables and export them as CSV files
# create new pandas dataframe have columns: 'STT': string, "Ngày GD": string, "Mô Tả": string, "Số tiền": string, "Đối ứng": string

new_pd = pd.DataFrame()


for j in range(tables.n):
    if j == 0:
        # remove 2 first rows
        tables[j].df = tables[j].df[2:]
    # split column first to 2 columns: 'STT' and 'Ngày GD'
    tables[j].df[0] = tables[j].df[1].apply(lambda x: pd.Series(str(x).split(" ")[0]))
    tables[j].df[1] = tables[j].df[1].apply(lambda x: pd.Series(str(x).split(" ", 1)[1]))

    # append dataframe to new_pd
    new_pd = pd.concat([new_pd, tables[j].df])

# export new_pd to csv file
new_pd.to_csv('./danh-sach-viet-tin.csv', index=False)

