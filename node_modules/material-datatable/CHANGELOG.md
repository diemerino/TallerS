<a name="0.4.1"></a>
## 0.4.1 (2020-01-16)

* Page should be set to 0, when a filter by text is applied.

<a name="0.4.0"></a>
## 0.4.0 (2019-08-29)

* Removed table cell header and body padding to make it work for Material UI 4

<a name="0.3.9"></a>
## 0.3.9 (2019-06-29)

* Fixed issue with colors in dark mode

<a name="0.3.8"></a>
## 0.3.8 (2019-02-18)

* Set min-Width for multiSelect filter 70

<a name="0.3.7"></a>
## 0.3.7 (2019-01-19)

* Re-worked mechanism working with selections 

<a name="0.3.6"></a>
## 0.3.6 (2019-01-19)

* Updated TS definition. Added rowsSelected to MaterialDatatableState

<a name="0.3.5"></a>
## 0.3.5 (2019-01-19)

* Set rowsPerPage to 10 by default

<a name="0.3.4"></a>
## 0.3.4 (2019-01-19)

* BREAKING CHANGE: onRowClick event provides object in the first param, not an array of strings as before 
* If selectableRows option turned on, user can select record by click on any row cell, not just checkbox as before
* Added option showSelectedRowsToolbar: PropTypes.bool. Default False. When false hide extra toolbar for selected records
* Added option rowCursorHand: PropTypes.bool. Default False.. When true show cursor pointer (hand) on table rows hover
* Added option onlyOneRowCanBeSelected: PropTypes.bool. Default False. When true only one row can be selected
   
<a name="0.3.3"></a>
## 0.3.3 (2018-12-30)

* Fixed bug with search enabled by default     

<a name="0.3.2"></a>
## 0.3.2 (2018-12-30)

* Keep column display setting when componentWillReceiveProps raised    
* Do not need to set componentWillReceiveProps to false anymore to keep onTableChanges working 

<a name="0.3.1"></a>
## 0.3.1 (2018-12-28)

* onTableChange and onServerRequest events provide two new fields in tableState argument: sortColumnIndex: number, sortColumnDirection: string 
* Updated TS definition 

<a name="0.3.0"></a>
## 0.3.0 (2018-12-28)

* Released updated minified js

<a name="0.2.9"></a>
## 0.2.9 (2018-12-28)

* Temporary removed link to travic-ci, due strange issue with code coverage

<a name="0.2.8"></a>
## 0.2.8 (2018-12-28)

* Added options sortColumnIndex: PropTypes.number and sortColumnDirection: PropTypes.string,
* Fixed errors with sorting, filtering and selections

<a name="0.2.7"></a>
## 0.2.7 (2018-12-26)

* Added option componentWillReceiveProps - Enable/disable componentWillReceiveProps function. That option can be used if you subscribed on some event like 'onTableChange' and changing your state. It prevent re-render of table component.

<a name="0.2.6"></a>
## 0.2.6 (2018-12-25)

* Added option searchText?: string
* Added event onTableChange?: (action: string, tableState: MaterialDatatableState) to TS definition
* Renamed MuiDatatablesTableState to MaterialDatatableState in TS definition

<a name="0.2.5"></a>
## 0.2.5 (2018-12-24)

* Avoid crash when changing rows per page

<a name="0.2.4"></a>
## 0.2.4 (2018-12-22)

* Fixed bug with multiselect filter crash when filter item is null  

<a name="0.2.3"></a>
## 0.2.3 (2018-12-21)

* Updated Readme and link to an example 

<a name="0.2.2"></a>
## 0.2.2 (2018-12-21)

* Added new option for column which can be used just with customBodyRender - "customValue(value)"". For example you added some Link into the column, but still wants to use that column for filtering. 
* Added new option for column "customSortValue(value)"". For example you added some data like Date string "Fed 10, 2016" into the column, but still wants to use that column for correct sorting by date.

<a name="0.2.1"></a>
## 0.2.1 (2018-11-17)

* Fixed exception when customBodyRender return null

<a name="0.1.9"></a>
## 0.1.9 (2018-11-08)

* customBodyRender doesn't require anymore rear field name
* Added warning message in case if column field doesn't exist in DTO

<a name="0.1.8"></a>
## 0.1.8 (2018-10-14)

* Fixed readme instructions How to turn off Material UI Typography warnings

<a name="0.1.7"></a>
## 0.1.7 (2018-10-14)

* Updated readme with instructions How to turn off Material UI Typography warnings

## 0.1.6 (2018-10-14)

* Downgrade to "@material-ui/core": "^3.0.2",

## 0.1.5 (2018-10-14)

* Updated material-ui to the latest versi   on 3.2.1

<a name="0.1.4"></a>
## 0.1.4 (2018-10-14)

* Updated material-ui to the latest version 3.0.2
* Removed Deprecated variants for Typography: title => h6,subheading => subtitle1

<a name="0.1.3"></a>
## 0.1.3 (2018-10-14)

* Fixed bugs with filter and search by sub level data
* Fixed bugs with download and print 

<a name="0.1.2"></a>
## 0.1.2 (2018-10-13)

* Added width and headerNoWrap options for columns (table header cell and table body cell)
* Reduced table body cell padding to "4px 8px 4px 8px"

<a name="0.1.1"></a>
## 0.1.1 (2018-10-13)

* Updated readme for new link on sandbox

<a name="0.1.0"></a>
## 0.1.0 (2018-10-13)

* CustomRenderBody receive full object, not just one field

<a name="0.0.9"></a>
## 0.0.9 (2018-10-13)

* updated TS definition for new option usePaperPlaceholder

<a name="0.0.8"></a>
## 0.0.8 (2018-10-13)

* added new option usePaperPlaceholder. By default it is true. Can be turned off if you don't need paper placeholder
* moved back to original styles. Need to fix it in future


