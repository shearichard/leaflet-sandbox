import csv
import pprint

INPUT_DATA = "cities.csv"

def main():
    #The 'skip headers' processing is based on 
    #https://stackoverflow.com/questions/7588426/how-to-skip-pre-header-lines-with-csv-dictreader
    #
    with open(INPUT_DATA) as csvfile:
        '''
        csvfile.seek(0)
        next(csvfile)
        reader = csv.DictReader(csvfile, dialect=dialect)
        '''
        #dialect = csv.Sniffer().sniff(csvfile.read(1024))
        #print(dialect)
        #import pdb;pdb.set_trace()
        lst_dic_cities = []
        reader = csv.DictReader(csvfile, delimiter = ',')
        for row in reader:
            row_work = {}
            row_work['id'] = int(reader.line_num)
            for k, v in row.items():
                row_work[k.lower()] = v
            row_work['lat_lng_as_string'] = '{0}_{1}'.format(   str(row_work['latitude']),
                                                                str(row_work['longitude']))
            lst_dic_cities.append(row_work)
        #
        lst_countries = []
        #
        for dic_city in lst_dic_cities:
            if dic_city['country'] in lst_countries:
                pass
            else:
                lst_countries.append(dic_city['country'])
    #
    lst_countries.sort()
    pprint.pprint(lst_countries)
    pprint.pprint(lst_dic_cities)


if __name__ == "__main__":
    main()
