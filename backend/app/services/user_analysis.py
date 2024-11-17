import pandas as pd

def analyze_users():
    dataset = pd.read_csv('../data/consolidated.csv')
    non_current = dataset[dataset['donation_type'] != 'Recurrent']
    return non_current.to_dict(orient='records')