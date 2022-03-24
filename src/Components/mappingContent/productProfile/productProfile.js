import React, { useState, useMemo,useRef } from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Divider, Grid, MenuItem, TextField, makeStyles, FormControlLabel, Checkbox, FormControl, FormGroup, } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PieChart from '../../analytics/pieChart/pieChart';
import { GoogleMap, useJsApiLoader, Marker, LoadScript, Polygon } from "@react-google-maps/api";

const district = [
  {
    name: 'ap',
    code: ''
  },
  {
    name: 'ts',
    code: ''
  }
]
const useStyles = makeStyles(theme => ({
  productionBlock: {
    marginTop: '20px',
    borderBottom: "1px solid #d1d1d1"
  },
  tradeBlock: {
    marginTop: '20px',
    borderBottom: "1px solid #d1d1d1"
  },
  untappedBlock: {
    margin: '20px 0px',
    borderBottom: "1px solid #d1d1d1"
  },
  byProductsBlock: {
    margin: '20px 0px',
    borderBottom: "1px solid #d1d1d1"
  },
  vauBlock: {
    margin: '20px 0px',
    borderBottom: "1px solid #d1d1d1"
  },
  buyersSellersBlock: {
    margin: '20px 0px',
    borderBottom: "1px solid #d1d1d1"
  },
  schemesPoliciesBlock: {
    margin: '20px 0px',
    borderBottom: "1px solid #d1d1d1"
  },
  productGuideBlock: {
    margin: '20px 0px',
    borderBottom: "1px solid #d1d1d1"
  },
  footPrintBlock: {
    margin: '20px 0px',
    borderBottom: "1px solid #d1d1d1"
  },
  eximDocsBlock: {
    margin: '20px 0px',
    borderBottom: "1px solid #d1d1d1"
  },

}));

const categoryModelOne = [
  {
    name: 'Production',
    value: 'production',
    // icon: 'fas fa-tractor'
  },
  {
    name: 'Trade',
    value: 'trade',
    // icon: 'fas fa-tractor'
  },
  {
    name: 'Untapped',
    value: 'untapped',
    // icon: 'fas fa-tractor'
  },
  {
    name: 'By - Products',
    value: 'production',
    // icon: 'fas fa-tractor'
  },
  {
    name: 'FPO',
    value: 'fpo',
    // icon: 'fas fa-users',
  },
  {
    name: 'Value Added Units',
    value: 'vad',
    // icon: 'fas fa-warehouse',
  },
  {
    name: 'Market Yards',
    value: 'marketYards',
    // icon: 'fas fa-store',
  },
  {
    name: 'Sellers / Exporters',
    value: 'sellersExporters',
    icon: '',
  },
  {
    name: 'Buyers / Impoters',
    value: 'buyersImporters',
  },
  {
    name: 'Schemes & policies',
    value: 'Schemes & policies',
  },
  {
    name: 'Exim Documentation',
    value: 'Exim Documentation',
  },
  {
    name: 'Packing Guide',
    value: 'Packing Guide',
  },
  {
    name: 'Domestic Market',
    value: 'Domestic Market',
  },
  {
    name: 'World Top 10 Importing Countries',
    value: 'World top 10 Importing Countries',
  },
  {
    name: 'World Top 10 Exporting Countries',
    value: 'World Top 10 exporting countries',
  },
  {
    name: 'Top 10 Importing Countries from India',
    value: 'top 10 Importing countries from India',
  },
  {
    name: 'Top 10 Exporting Countries to India',
    value: 'top 10 exporting countries to India',
  },
]


const data = [
  {
    "code3": "ABW",
    "name": "Aruba",
    "value": 582.34,
    "code": "AW"
  },
  {
    "code3": "AFG",
    "name": "Afghanistan",
    "value": 53.08,
    "code": "AF"
  },
  {
    "code3": "AGO",
    "name": "Angola",
    "value": 23.11,
    "code": "AO"
  },
  {
    "code3": "ALB",
    "name": "Albania",
    "value": 104.97,
    "code": "AL"
  },
  {
    "code3": "AND",
    "name": "Andorra",
    "value": 164.43,
    "code": "AD"
  },
  {
    "code3": "ARE",
    "name": "United Arab Emirates",
    "value": 110.88,
    "code": "AE"
  },
  {
    "code3": "ARG",
    "name": "Argentina",
    "value": 16.02,
    "code": "AR"
  },
  {
    "code3": "ARM",
    "name": "Armenia",
    "value": 102.73,
    "code": "AM"
  },
  {
    "code3": "ASM",
    "name": "American Samoa",
    "value": 278,
    "code": "AS"
  },
  {
    "code3": "ATG",
    "name": "Antigua and Barbuda",
    "value": 229.46,
    "code": "AG"
  },
  {
    "code3": "AUS",
    "name": "Australia",
    "value": 3.15,
    "code": "AU"
  },
  {
    "code3": "AUT",
    "name": "Austria",
    "value": 105.81,
    "code": "AT"
  },
  {
    "code3": "AZE",
    "name": "Azerbaijan",
    "value": 118.04,
    "code": "AZ"
  },
  {
    "code3": "BDI",
    "name": "Burundi",
    "value": 409.82,
    "code": "BI"
  },
  {
    "code3": "BEL",
    "name": "Belgium",
    "value": 374.45,
    "code": "BE"
  },
  {
    "code3": "BEN",
    "name": "Benin",
    "value": 96.42,
    "code": "BJ"
  },
  {
    "code3": "BFA",
    "name": "Burkina Faso",
    "value": 68.15,
    "code": "BF"
  },
  {
    "code3": "BGD",
    "name": "Bangladesh",
    "value": 1251.84,
    "code": "BD"
  },
  {
    "code3": "BGR",
    "name": "Bulgaria",
    "value": 65.66,
    "code": "BG"
  },
  {
    "code3": "BHR",
    "name": "Bahrain",
    "value": 1848.47,
    "code": "BH"
  },
  {
    "code3": "BHS",
    "name": "Bahamas, The",
    "value": 39.08,
    "code": "BS"
  },
  {
    "code3": "BIH",
    "name": "Bosnia and Herzegovina",
    "value": 68.69,
    "code": "BA"
  },
  {
    "code3": "BLR",
    "name": "Belarus",
    "value": 46.83,
    "code": "BY"
  },
  {
    "code3": "BLZ",
    "name": "Belize",
    "value": 16.09,
    "code": "BZ"
  },
  {
    "code3": "BMU",
    "name": "Bermuda",
    "value": 1307.52,
    "code": "BM"
  },
  {
    "code3": "BOL",
    "name": "Bolivia",
    "value": 10.05,
    "code": "BO"
  },
  {
    "code3": "BRA",
    "name": "Brazil",
    "value": 24.84,
    "code": "BR"
  },
  {
    "code3": "BRB",
    "name": "Barbados",
    "value": 662.78,
    "code": "BB"
  },
  {
    "code3": "BRN",
    "name": "Brunei Darussalam",
    "value": 80.3,
    "code": "BN"
  },
  {
    "code3": "BTN",
    "name": "Bhutan",
    "value": 20.93,
    "code": "BT"
  },
  {
    "code3": "BWA",
    "name": "Botswana",
    "value": 3.97,
    "code": "BW"
  },
  {
    "code3": "CAF",
    "name": "Central African Republic",
    "value": 7.38,
    "code": "CF"
  },
  {
    "code3": "CAN",
    "name": "Canada",
    "value": 3.99,
    "code": "CA"
  },
  {
    "code3": "CHE",
    "name": "Switzerland",
    "value": 211.87,
    "code": "CH"
  },
  {
    "code3": "CHL",
    "name": "Chile",
    "value": 24.09,
    "code": "CL"
  },
  {
    "code3": "CHN",
    "name": "China",
    "value": 146.85,
    "code": "CN"
  },
  {
    "code3": "CIV",
    "name": "Cote d'Ivoire",
    "value": 74.52,
    "code": "CI"
  },
  {
    "code3": "CMR",
    "name": "Cameroon",
    "value": 49.58,
    "code": "CM"
  },
  {
    "code3": "COD",
    "name": "Congo, Dem. Rep.",
    "value": 34.73,
    "code": "CD"
  },
  {
    "code3": "COG",
    "name": "Congo, Rep.",
    "value": 15.01,
    "code": "CG"
  },
  {
    "code3": "COL",
    "name": "Colombia",
    "value": 43.85,
    "code": "CO"
  },
  {
    "code3": "COM",
    "name": "Comoros",
    "value": 427.51,
    "code": "KM"
  },
  {
    "code3": "CPV",
    "name": "Cabo Verde",
    "value": 133.89,
    "code": "CV"
  },
  {
    "code3": "CRI",
    "name": "Costa Rica",
    "value": 95.13,
    "code": "CR"
  },
  {
    "code3": "CUB",
    "name": "Cuba",
    "value": 110.32,
    "code": "CU"
  },
  {
    "code3": "CUW",
    "name": "Curacao",
    "value": 359.6,
    "code": "CW"
  },
  {
    "code3": "CYM",
    "name": "Cayman Islands",
    "value": 253.19,
    "code": "KY"
  },
  {
    "code3": "CYP",
    "name": "Cyprus",
    "value": 126.64,
    "code": "CY"
  },
  {
    "code3": "CZE",
    "name": "Czech Republic",
    "value": 136.85,
    "code": "CZ"
  },
  {
    "code3": "DEU",
    "name": "Germany",
    "value": 236.42,
    "code": "DE"
  },
  {
    "code3": "DJI",
    "name": "Djibouti",
    "value": 40.65,
    "code": "DJ"
  },
  {
    "code3": "DMA",
    "name": "Dominica",
    "value": 98.06,
    "code": "DM"
  },
  {
    "code3": "DNK",
    "name": "Denmark",
    "value": 135.54,
    "code": "DK"
  },
  {
    "code3": "DOM",
    "name": "Dominican Republic",
    "value": 220.43,
    "code": "DO"
  },
  {
    "code3": "DZA",
    "name": "Algeria",
    "value": 17.05,
    "code": "DZ"
  },
  {
    "code3": "ECU",
    "name": "Ecuador",
    "value": 65.97,
    "code": "EC"
  },
  {
    "code3": "EGY",
    "name": "Egypt, Arab Rep.",
    "value": 96.13,
    "code": "EG"
  },
  {
    "code3": "ESP",
    "name": "Spain",
    "value": 92.93,
    "code": "ES"
  },
  {
    "code3": "EST",
    "name": "Estonia",
    "value": 31.04,
    "code": "EE"
  },
  {
    "code3": "ETH",
    "name": "Ethiopia",
    "value": 102.4,
    "code": "ET"
  },
  {
    "code3": "FIN",
    "name": "Finland",
    "value": 18.08,
    "code": "FI"
  },
  {
    "code3": "FJI",
    "name": "Fiji",
    "value": 49.19,
    "code": "FJ"
  },
  {
    "code3": "FRA",
    "name": "France",
    "value": 122.16,
    "code": "FR"
  },
  {
    "code3": "FRO",
    "name": "Faroe Islands",
    "value": 35.18,
    "code": "FO"
  },
  {
    "code3": "FSM",
    "name": "Micronesia, Fed. Sts.",
    "value": 149.91,
    "code": "FM"
  },
  {
    "code3": "GAB",
    "name": "Gabon",
    "value": 7.68,
    "code": "GA"
  },
  {
    "code3": "GBR",
    "name": "United Kingdom",
    "value": 271.13,
    "code": "GB"
  },
  {
    "code3": "GEO",
    "name": "Georgia",
    "value": 53.52,
    "code": "GE"
  },
  {
    "code3": "GHA",
    "name": "Ghana",
    "value": 123.96,
    "code": "GH"
  },
  {
    "code3": "GIB",
    "name": "Gibraltar",
    "value": 3440.8,
    "code": "GI"
  },
  {
    "code3": "GIN",
    "name": "Guinea",
    "value": 50.45,
    "code": "GN"
  },
  {
    "code3": "GMB",
    "name": "Gambia, The",
    "value": 201.43,
    "code": "GM"
  },
  {
    "code3": "GNB",
    "name": "Guinea-Bissau",
    "value": 64.57,
    "code": "GW"
  },
  {
    "code3": "GNQ",
    "name": "Equatorial Guinea",
    "value": 43.55,
    "code": "GQ"
  },
  {
    "code3": "GRC",
    "name": "Greece",
    "value": 83.56,
    "code": "GR"
  },
  {
    "code3": "GRD",
    "name": "Grenada",
    "value": 315.64,
    "code": "GD"
  },
  {
    "code3": "GRL",
    "name": "Greenland",
    "value": 0.14,
    "code": "GL"
  },
  {
    "code3": "GTM",
    "name": "Guatemala",
    "value": 154.74,
    "code": "GT"
  },
  {
    "code3": "GUM",
    "name": "Guam",
    "value": 301.66,
    "code": "GU"
  },
  {
    "code3": "GUY",
    "name": "Guyana",
    "value": 3.93,
    "code": "GY"
  },
  {
    "code3": "HKG",
    "name": "Hong Kong SAR, China",
    "value": 6987.24,
    "code": "HK"
  },
  {
    "code3": "HND",
    "name": "Honduras",
    "value": 81.44,
    "code": "HN"
  },
  {
    "code3": "HRV",
    "name": "Croatia",
    "value": 74.6,
    "code": "HR"
  },
  {
    "code3": "HTI",
    "name": "Haiti",
    "value": 393.59,
    "code": "HT"
  },
  {
    "code3": "HUN",
    "name": "Hungary",
    "value": 108.41,
    "code": "HU"
  },
  {
    "code3": "IDN",
    "name": "Indonesia",
    "value": 144.14,
    "code": "ID"
  },
  {
    "code3": "IMN",
    "name": "Isle of Man",
    "value": 146.91,
    "code": "IM"
  },
  {
    "code3": "IND",
    "name": "India",
    "value": 445.37,
    "code": "IN"
  },
  {
    "code3": "IRL",
    "name": "Ireland",
    "value": 68.95,
    "code": "IE"
  },
  {
    "code3": "IRN",
    "name": "Iran, Islamic Rep.",
    "value": 49.29,
    "code": "IR"
  },
  {
    "code3": "IRQ",
    "name": "Iraq",
    "value": 85.66,
    "code": "IQ"
  },
  {
    "code3": "ISL",
    "name": "Iceland",
    "value": 3.35,
    "code": "IS"
  },
  {
    "code3": "ISR",
    "name": "Israel",
    "value": 394.92,
    "code": "IL"
  },
  {
    "code3": "ITA",
    "name": "Italy",
    "value": 206.12,
    "code": "IT"
  },
  {
    "code3": "JAM",
    "name": "Jamaica",
    "value": 266.05,
    "code": "JM"
  },
  {
    "code3": "JOR",
    "name": "Jordan",
    "value": 106.51,
    "code": "JO"
  },
  {
    "code3": "JPN",
    "name": "Japan",
    "value": 348.35,
    "code": "JP"
  },
  {
    "code3": "KAZ",
    "name": "Kazakhstan",
    "value": 6.59,
    "code": "KZ"
  },
  {
    "code3": "KEN",
    "name": "Kenya",
    "value": 85.15,
    "code": "KE"
  },
  {
    "code3": "KGZ",
    "name": "Kyrgyz Republic",
    "value": 31.7,
    "code": "KG"
  },
  {
    "code3": "KHM",
    "name": "Cambodia",
    "value": 89.3,
    "code": "KH"
  },
  {
    "code3": "KIR",
    "name": "Kiribati",
    "value": 141.23,
    "code": "KI"
  },
  {
    "code3": "KNA",
    "name": "St. Kitts and Nevis",
    "value": 210.85,
    "code": "KN"
  },
  {
    "code3": "KOR",
    "name": "Korea, Rep.",
    "value": 525.7,
    "code": "KR"
  },
  {
    "code3": "KWT",
    "name": "Kuwait",
    "value": 227.42,
    "code": "KW"
  },
  {
    "code3": "LAO",
    "name": "Lao PDR",
    "value": 29.28,
    "code": "LA"
  },
  {
    "code3": "LBN",
    "name": "Lebanon",
    "value": 587.16,
    "code": "LB"
  },
  {
    "code3": "LBR",
    "name": "Liberia",
    "value": 47.9,
    "code": "LR"
  },
  {
    "code3": "LBY",
    "name": "Libya",
    "value": 3.58,
    "code": "LY"
  },
  {
    "code3": "LCA",
    "name": "St. Lucia",
    "value": 291.83,
    "code": "LC"
  },
  {
    "code3": "LIE",
    "name": "Liechtenstein",
    "value": 235.41,
    "code": "LI"
  },
  {
    "code3": "LKA",
    "name": "Sri Lanka",
    "value": 338.11,
    "code": "LK"
  },
  {
    "code3": "LSO",
    "name": "Lesotho",
    "value": 72.59,
    "code": "LS"
  },
  {
    "code3": "LTU",
    "name": "Lithuania",
    "value": 45.78,
    "code": "LT"
  },
  {
    "code3": "LUX",
    "name": "Luxembourg",
    "value": 224.72,
    "code": "LU"
  },
  {
    "code3": "LVA",
    "name": "Latvia",
    "value": 31.51,
    "code": "LV"
  },
  {
    "code3": "MAC",
    "name": "Macao SAR, China",
    "value": 20405.57,
    "code": "MO"
  },
  {
    "code3": "MAF",
    "name": "St. Martin (French part)",
    "value": 591.65,
    "code": "MF"
  },
  {
    "code3": "MAR",
    "name": "Morocco",
    "value": 79.04,
    "code": "MA"
  },
  {
    "code3": "MCO",
    "name": "Monaco",
    "value": 19249.5,
    "code": "MC"
  },
  {
    "code3": "MDA",
    "name": "Moldova",
    "value": 108.06,
    "code": "MD"
  },
  {
    "code3": "MDG",
    "name": "Madagascar",
    "value": 42.79,
    "code": "MG"
  },
  {
    "code3": "MDV",
    "name": "Maldives",
    "value": 1425.85,
    "code": "MV"
  },
  {
    "code3": "MEX",
    "name": "Mexico",
    "value": 65.61,
    "code": "MX"
  },
  {
    "code3": "MHL",
    "name": "Marshall Islands",
    "value": 294.81,
    "code": "MH"
  },
  {
    "code3": "MKD",
    "name": "Macedonia, FYR",
    "value": 82.52,
    "code": "MK"
  },
  {
    "code3": "MLI",
    "name": "Mali",
    "value": 14.75,
    "code": "ML"
  },
  {
    "code3": "MLT",
    "name": "Malta",
    "value": 1366.93,
    "code": "MT"
  },
  {
    "code3": "MMR",
    "name": "Myanmar",
    "value": 80.98,
    "code": "MM"
  },
  {
    "code3": "MNE",
    "name": "Montenegro",
    "value": 46.27,
    "code": "ME"
  },
  {
    "code3": "MNG",
    "name": "Mongolia",
    "value": 1.95,
    "code": "MN"
  },
  {
    "code3": "MNP",
    "name": "Northern Mariana Islands",
    "value": 119.62,
    "code": "MP"
  },
  {
    "code3": "MOZ",
    "name": "Mozambique",
    "value": 36.66,
    "code": "MZ"
  },
  {
    "code3": "MRT",
    "name": "Mauritania",
    "value": 4.17,
    "code": "MR"
  },
  {
    "code3": "MUS",
    "name": "Mauritius",
    "value": 622.4,
    "code": "MU"
  },
  {
    "code3": "MWI",
    "name": "Malawi",
    "value": 191.89,
    "code": "MW"
  },
  {
    "code3": "MYS",
    "name": "Malaysia",
    "value": 94.92,
    "code": "MY"
  },
  {
    "code3": "NAM",
    "name": "Namibia",
    "value": 3.01,
    "code": "NA"
  },
  {
    "code3": "NCL",
    "name": "New Caledonia",
    "value": 15.15,
    "code": "NC"
  },
  {
    "code3": "NER",
    "name": "Niger",
    "value": 16.32,
    "code": "NE"
  },
  {
    "code3": "NGA",
    "name": "Nigeria",
    "value": 204.21,
    "code": "NG"
  },
  {
    "code3": "NIC",
    "name": "Nicaragua",
    "value": 51.1,
    "code": "NI"
  },
  {
    "code3": "NLD",
    "name": "Netherlands",
    "value": 505.5,
    "code": "NL"
  },
  {
    "code3": "NOR",
    "name": "Norway",
    "value": 14.34,
    "code": "NO"
  },
  {
    "code3": "NPL",
    "name": "Nepal",
    "value": 202.18,
    "code": "NP"
  },
  {
    "code3": "NRU",
    "name": "Nauru",
    "value": 652.45,
    "code": "NR"
  },
  {
    "code3": "NZL",
    "name": "New Zealand",
    "value": 17.82,
    "code": "NZ"
  },
  {
    "code3": "OMN",
    "name": "Oman",
    "value": 14.3,
    "code": "OM"
  },
  {
    "code3": "PAK",
    "name": "Pakistan",
    "value": 250.63,
    "code": "PK"
  },
  {
    "code3": "PAN",
    "name": "Panama",
    "value": 54.27,
    "code": "PA"
  },
  {
    "code3": "PER",
    "name": "Peru",
    "value": 24.82,
    "code": "PE"
  },
  {
    "code3": "PHL",
    "name": "Philippines",
    "value": 346.51,
    "code": "PH"
  },
  {
    "code3": "PLW",
    "name": "Palau",
    "value": 46.75,
    "code": "PW"
  },
  {
    "code3": "PNG",
    "name": "Papua New Guinea",
    "value": 17.85,
    "code": "PG"
  },
  {
    "code3": "POL",
    "name": "Poland",
    "value": 124.01,
    "code": "PL"
  },
  {
    "code3": "PRI",
    "name": "Puerto Rico",
    "value": 384.59,
    "code": "PR"
  },
  {
    "code3": "PRK",
    "name": "Korea, Dem. People’s Rep.",
    "value": 210.69,
    "code": "KP"
  },
  {
    "code3": "PRT",
    "name": "Portugal",
    "value": 112.72,
    "code": "PT"
  },
  {
    "code3": "PRY",
    "name": "Paraguay",
    "value": 16.93,
    "code": "PY"
  },
  {
    "code3": "PSE",
    "name": "West Bank and Gaza",
    "value": 756.07,
    "code": "PS"
  },
  {
    "code3": "PYF",
    "name": "French Polynesia",
    "value": 76.56,
    "code": "PF"
  },
  {
    "code3": "QAT",
    "name": "Qatar",
    "value": 221.34,
    "code": "QA"
  },
  {
    "code3": "ROU",
    "name": "Romania",
    "value": 85.62,
    "code": "RO"
  },
  {
    "code3": "RUS",
    "name": "Russian Federation",
    "value": 8.81,
    "code": "RU"
  },
  {
    "code3": "RWA",
    "name": "Rwanda",
    "value": 483.08,
    "code": "RW"
  },
  {
    "code3": "SAU",
    "name": "Saudi Arabia",
    "value": 15.01,
    "code": "SA"
  },
  {
    "code3": "SDN",
    "name": "Sudan",
    "value": 16.66,
    "code": "SD"
  },
  {
    "code3": "SEN",
    "name": "Senegal",
    "value": 80.05,
    "code": "SN"
  },
  {
    "code3": "SGP",
    "name": "Singapore",
    "value": 7908.72,
    "code": "SG"
  },
  {
    "code3": "SLB",
    "name": "Solomon Islands",
    "value": 21.42,
    "code": "SB"
  },
  {
    "code3": "SLE",
    "name": "Sierra Leone",
    "value": 102.47,
    "code": "SL"
  },
  {
    "code3": "SLV",
    "name": "El Salvador",
    "value": 306.21,
    "code": "SV"
  },
  {
    "code3": "SMR",
    "name": "San Marino",
    "value": 553.38,
    "code": "SM"
  },
  {
    "code3": "SOM",
    "name": "Somalia",
    "value": 22.82,
    "code": "SO"
  },
  {
    "code3": "SRB",
    "name": "Serbia",
    "value": 80.7,
    "code": "RS"
  },
  {
    "code3": "STP",
    "name": "Sao Tome and Principe",
    "value": 208.24,
    "code": "ST"
  },
  {
    "code3": "SUR",
    "name": "Suriname",
    "value": 3.58,
    "code": "SR"
  },
  {
    "code3": "SVK",
    "name": "Slovak Republic",
    "value": 112.94,
    "code": "SK"
  },
  {
    "code3": "SVN",
    "name": "Slovenia",
    "value": 102.53,
    "code": "SI"
  },
  {
    "code3": "SWE",
    "name": "Sweden",
    "value": 24.36,
    "code": "SE"
  },
  {
    "code3": "SWZ",
    "name": "Swaziland",
    "value": 78.09,
    "code": "SZ"
  },
  {
    "code3": "SXM",
    "name": "Sint Maarten (Dutch part)",
    "value": 1175.56,
    "code": "SX"
  },
  {
    "code3": "SYC",
    "name": "Seychelles",
    "value": 205.82,
    "code": "SC"
  },
  {
    "code3": "SYR",
    "name": "Syrian Arab Republic",
    "value": 100.37,
    "code": "SY"
  },
  {
    "code3": "TCA",
    "name": "Turks and Caicos Islands",
    "value": 36.74,
    "code": "TC"
  },
  {
    "code3": "TCD",
    "name": "Chad",
    "value": 11.48,
    "code": "TD"
  },
  {
    "code3": "TGO",
    "name": "Togo",
    "value": 139.85,
    "code": "TG"
  },
  {
    "code3": "THA",
    "name": "Thailand",
    "value": 134.79,
    "code": "TH"
  },
  {
    "code3": "TJK",
    "name": "Tajikistan",
    "value": 62.94,
    "code": "TJ"
  },
  {
    "code3": "TKM",
    "name": "Turkmenistan",
    "value": 12.05,
    "code": "TM"
  },
  {
    "code3": "TLS",
    "name": "Timor-Leste",
    "value": 85.32,
    "code": "TL"
  },
  {
    "code3": "TON",
    "name": "Tonga",
    "value": 148.78,
    "code": "TO"
  },
  {
    "code3": "TTO",
    "name": "Trinidad and Tobago",
    "value": 266.07,
    "code": "TT"
  },
  {
    "code3": "TUN",
    "name": "Tunisia",
    "value": 73.4,
    "code": "TN"
  },
  {
    "code3": "TUR",
    "name": "Turkey",
    "value": 103.31,
    "code": "TR"
  },
  {
    "code3": "TUV",
    "name": "Tuvalu",
    "value": 369.9,
    "code": "TV"
  },
  {
    "code3": "TZA",
    "name": "Tanzania",
    "value": 62.74,
    "code": "TZ"
  },
  {
    "code3": "UGA",
    "name": "Uganda",
    "value": 206.9,
    "code": "UG"
  },
  {
    "code3": "UKR",
    "name": "Ukraine",
    "value": 77.69,
    "code": "UA"
  },
  {
    "code3": "URY",
    "name": "Uruguay",
    "value": 19.68,
    "code": "UY"
  },
  {
    "code3": "USA",
    "name": "United States",
    "value": 35.32,
    "code": "US"
  },
  {
    "code3": "UZB",
    "name": "Uzbekistan",
    "value": 74.87,
    "code": "UZ"
  },
  {
    "code3": "VCT",
    "name": "St. Vincent and the Grenadines",
    "value": 281.14,
    "code": "VC"
  },
  {
    "code3": "VEN",
    "name": "Venezuela, RB",
    "value": 35.79,
    "code": "VE"
  },
  {
    "code3": "VGB",
    "name": "British Virgin Islands",
    "value": 204.41,
    "code": "VG"
  },
  {
    "code3": "VIR",
    "name": "Virgin Islands (U.S.)",
    "value": 307.17,
    "code": "VI"
  },
  {
    "code3": "VNM",
    "name": "Vietnam",
    "value": 304.99,
    "code": "VN"
  },
  {
    "code3": "VUT",
    "name": "Vanuatu",
    "value": 22.18,
    "code": "VU"
  },
  {
    "code3": "WSM",
    "name": "Samoa",
    "value": 68.95,
    "code": "WS"
  },
  {
    "code3": "YEM",
    "name": "Yemen, Rep.",
    "value": 52.25,
    "code": "YE"
  },
  {
    "code3": "ZAF",
    "name": "South Africa",
    "value": 46.18,
    "code": "ZA"
  },
  {
    "code3": "ZMB",
    "name": "Zambia",
    "value": 22.32,
    "code": "ZM"
  },
  {
    "code3": "ZWE",
    "name": "Zimbabwe",
    "value": 41.75,
    "code": "ZW"
  }
]

const containerStyle = {
  margin: '20px auto',
  width: '100%',
  height: '500px',
  // border:'5px solid white',
  // borderRadius: '15px 15px'
};

const center = {
  lat: 20.5937,
  lng: 78.9629
};

function ProductProfile() {
  const classes = useStyles();
  const options = useMemo(() => ({
    disableDefaultUI: false,
    clickableIcons: true,
  }), [])
  const [findProduct, setFindProduct] = useState({
    productname: '',
    hscode: '',
    selectcountry: '',
    selectstate: '',
    selectdistrict: '',
  })
  const { productname, hscode, selectcountry, selectstate, selectdistrict } = findProduct;

  const searchOnChange = (e) => {
    setFindProduct({ ...findProduct, [e.target.name]: [e.target.value] })
  }

  const searchFormSubmit = (e) => {
    e.preventDefault();
    console.log(findProduct)
  }

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    // googleMapsApiKey: "AIzaSyBqDKAx2B8TSO7nMpz5VXSmDyqSmB5uerM"
    googleMapsApiKey: "AIzaSyB0sR0nQ1Gc4vghLJ-qnEgKlCpwhSxC9zY"
  })
  const [map, setMap] = React.useState(null)
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])
  const onUnmount = React.useCallback(function callback(map) {
    setMap(map)
  }, [])

  // const mapRef = new window.google.maps.current.panTo(position)

  const productPositions = [
    {
      lat: 16.4957,
      lng: 80.6542
    },
    {
      lat: 12.9716,
      lng: 77.5946
    },
    {
      lat: 19.7515,
      lng: 75.7139
    },

    {
      lat: 6.9271,
      lng: 79.8612
    },
    {
      lat: 35.8617,
      lng: 104.1954
    },
    {
      lat: 28.3949,
      lng: 84.1240
    },
    {
      lat: 33.9391,
      lng: 67.7100
    },
    {
      lat: 21.9162,
      lng: 95.9560
    },
    {
      lat: 15.8700,
      lng: 100.9925
    },
    {
      lat: 23.6850,
      lng: 90.3563
    },
    {
      lat: 33.2232,
      lng: 43.6793
    },
  ]

  const buyerPositions = [
    {
      lat: 47.7511,
      lng: -120.7401
    },
    {
      lat: 23.6345,
      lng: -102.5528
    },
    {
      lat: 31.9686,
      lng: -99.9018
    },
    {
      lat: 41.8781,
      lng: -87.6298
    },
    {
      lat:32.7767,
      lng:-96.7970
    },
    {
      lat:-33.8688,
      lng:151.2093
    }
  ]

  const marketPositions = [
    {
      lat:-22.328474,
      lng:24.684866
    },
    {
      lat:7.946527,
      lng:-1.023194
    },
    {
      lat:-11.202692,
      lng:17.873886
    },
  ]
  return (
    <>
      <form onSubmit={searchFormSubmit}>
        <Grid
          container
          lg={12}
          item
          justifyContent="space-between"
          // style={{  alignItems: 'center' }}
          spacing={1}
        >
          <Grid lg={2} md={3} sm={12} xs={12} item>
            <TextField
              fullWidth
              type="text"
              size="small"
              variant="outlined"
              label="Product Name"
              placeholder="Product Name"
              name="productname"
              value={productname}
              onChange={searchOnChange}
              margin="normal"
              style={{ backgroundColor: 'white' }}
              InputLabelProps={{
                style: {
                  color: 'black',
                }
              }}
            />
          </Grid>
          <Grid lg={2} md={3} sm={12} xs={12} item>
            <TextField
              fullWidth
              type="text"
              size="small"
              variant="outlined"
              label="HS Code"
              placeholder="HS Code"
              name="hscode"
              value={hscode}
              onChange={searchOnChange}
              margin="normal"
              style={{ backgroundColor: 'white' }}
              InputLabelProps={{
                style: {
                  color: 'black',
                }
              }}
            />
          </Grid>
          <Grid lg={2} md={3} sm={12} xs={12} item>
            <TextField
              fullWidth
              select
              variant="outlined"
              margin="normal"
              label="Select Country"
              style={{ backgroundColor: 'white' }}
              size="small"
              name="selectcountry"
              value={selectcountry}
              onChange={searchOnChange}
              defaultValue='india'
            >
              <MenuItem value="india">India</MenuItem>
              {/* <MenuItem value="america">America</MenuItem>
              <MenuItem value="australia">Australia</MenuItem> */}
            </TextField>
          </Grid>
          <Grid lg={2} md={3} sm={12} xs={12} item>
            <TextField
              fullWidth
              select
              variant="outlined"
              margin="normal"
              label="Select State"
              style={{ backgroundColor: 'white' }}
              size="small"
              name="selectstate"
              value={selectstate}
              onChange={searchOnChange}
            >
              <MenuItem value="electricitybill">Andhra Pradesh</MenuItem>
              <MenuItem value="waterbill">Telangana</MenuItem>
              <MenuItem value="housetax">Karnataka</MenuItem>
            </TextField>
          </Grid>
          <Grid lg={2} md={3} sm={12} xs={12} item>
            <TextField
              fullWidth
              select
              variant="outlined"
              margin="normal"
              label="Select District"
              style={{ backgroundColor: 'white' }}
              size="small"
              name="selectdistrict"
              value={selectdistrict}
              onChange={searchOnChange}
            >
              <MenuItem value="electricitybill">Krishna</MenuItem>
              <MenuItem value="waterbill">Guntur</MenuItem>
              <MenuItem value="housetax">West Godavari</MenuItem>
            </TextField>
          </Grid>
        </Grid>
        <div>
          <h5>Category Selection</h5>
          <FormGroup row>
            {categoryModelOne.map((item, index) => (
              <Grid item lg={2}>
                <FormControlLabel
                  name={item.name}
                  value={item.value}
                  onChange={searchOnChange}
                  variant="outlined"
                  control={<Checkbox color="primary" />}
                  label={item.name}
                  labelPlacement="end"
                  InputLabelProps={{
                    style: {
                      fontSize: "5px"
                    }
                  }}
                />
                <i class={item.icon}></i>
              </Grid>
            ))}
          </FormGroup>
        </div>
        <Grid container justifyContent="center" style={{ marginTop: '15px' }}>
          <button className="btn btn-warning" type="submit">Search</button>
        </Grid>
      </form>
      {
        isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={3}
            onLoad={onLoad}
            options={options}
            onUnmount={onUnmount}
          >
            <>
              { /* Child components, such as markers, info windows, etc. */}
              {productPositions.map((item, index) => (
                <Marker position={item} key={index} icon={`${process.env.PUBLIC_URL}/assets/mango.png`}></Marker>
              ))}
              {buyerPositions.map((item, index) => (
                <Marker position={item} key={index} icon={`${process.env.PUBLIC_URL}/assets/buyericon.png`}></Marker>
              ))}
              {marketPositions.map((item, index) => (
                <Marker position={item} key={index} icon={`${process.env.PUBLIC_URL}/assets/marketyard.png`}></Marker>
              ))}
            </>
          </GoogleMap>
        ) : <></>
      }
      <div className={classes.productionBlock}>
        <h6>Production</h6>
      </div>
      <div className={classes.tradeBlock}>
        <h6>Trade</h6>
      </div>
      {/* <Divider/> */}
      <div className={classes.untappedBlock}>
        <h6>Untapped</h6>
      </div>
      <div className={classes.byProductsBlock}>
        <h6>By - Products</h6>
      </div>
      <div className={classes.vauBlock}>
        <h6>Value Addition Units</h6>
      </div>
      <div className={classes.buyersSellersBlock}>
        <h6>Buyers Sellers</h6>
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Grid lg={5} style={{ border: "2px solid grey", borderRadius: "10px 10px", padding: '5px' }}>
            <h6 style={{ fontSize: '14px' }}>Buyers</h6>
            <PieChart />
          </Grid>
          <Grid lg={5} style={{ border: "2px solid grey", borderRadius: "10px 10px", padding: '5px' }}>
            <h6 style={{ fontSize: '14px' }}>Sellers</h6>
            <PieChart />
          </Grid>
        </div>
      </div>
      <div className={classes.schemesPoliciesBlock}>
        <h6>Schemes &amp; Policies</h6>
      </div>
      <div className={classes.productGuideBlock}>
        <h6>Product Guide</h6>
      </div>
      <div className={classes.footPrintBlock}>
        <h6>Foot Print</h6>
      </div>
      <div className={classes.eximDocsBlock}>
        <h6>Exim Documentation</h6>
      </div>
    </>
  )
}

export default ProductProfile