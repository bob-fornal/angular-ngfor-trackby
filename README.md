# Angular ngFor trackBy

## Concept

This project is designed to test the difference between loading `ngFor` with and without `trackBy`.

## Data

The data to test and obtain the results is in `src/app/core/services/data.service.ts`.

Basically, the data is 100,000 records with:

* An integer, 0-based `index`.
* An identifier that is a random 50 characters A-Z, a-z, or 0-9.

Each page connects to the service, gets the data and displays the identifier 100,000 times. On one page, we are using `trackBy` and in the other, we are not using it.

## Results

Type    | WITH | WITHOUT
--------|------|--------
data 01 | 6.17 | 6.77
data 02 | 6.14 | 6.29
data 03 | 6.31 | 6.28
data 04 | 6.34 | 6.33
data 05 | 6.23 | 6.06
data 06 | 6.14 | 6.31
data 07 | 6.14 | 6.21
data 08 | 6.46 | 6.22
data 09 | 6.29 | 6.09
data 10 | 6.38 | 6.37
data 11 | 6.22 | 6.22
data 12 | 6.38 | 6.43
data 13 | 6.23 | 6.19
data 14 | 6.22 | 6.15
data 15 | 6.38 | 6.33
data 16 | 6.16 | 6.45
data 17 | 6.32 | 6.19
data 18 | 6.21 | 6.18
data 19 | 6.25 | 6.36
data 20 | 6.16 | 6.17
data 21 | 6.46 | 6.03
data 22 | 6.22 | 6.12
data 23 | 6.30 | 6.44
data 24 | 6.23 | 6.67
data 25 | 6.20 | 5.98
**RESULTS** | **6.26** | **6.27**
