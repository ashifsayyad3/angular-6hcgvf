import { Component } from '@angular/core';
import { exportElement } from './export-element';

@Component({
  selector: 'my-app',
  template: `
    <button class="k-button" (click)="onClick(drawMe)">Export PDF...</button>
    <div #drawMe>
    <div class="pdfData">
    <div class="row">
      <div class="col-md-3">
        <img style="width: 100%;" id="aqlogo" src="https://shellbopblob.blob.core.windows.net/bopdashboard/aquila.png?sp=r&st=2022-09-26T04:11:17Z&se=3022-09-26T12:11:17Z&sv=2021-06-08&sr=c&sig=P5O2S9JQ7XrQBA2EnPBpskw7uPpifnVai1hdgkVIf20%3D" />
      </div>
      <div class="col-md-9">
        <h4
          class="report-title"
          style="margin-bottom: 10px;font-weight: bold;line-height: 1.2;font-size: 25px;color: black;"
        >
          RTOC Daily Report
        </h4>
        <table class="report-table table-bordered">
          <tr>
            <th class="tb-b">Rig</th>
            <td>Thalassa</td>
            <th class="tb-b">Well Name</th>
            <td>Wells</td>
          </tr>
          <tr>
            <th class="tb-b">Date</th>
            <td>Mm/dd/yyyy</td>
            <th class="tb-b">Report no.</th>
            <td>##</td>
          </tr>
          <tr>
            <th class="tb-b">Active BOP</th>
            <td>##</td>
            <th class="tb-b">Status</th>
            <td>Insert Status</td>
          </tr>
          <tr>
            <th class="tb-b">Current POD</th>
            <td>Yellow</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="row" style="border: 1px solid #000;">
      <div class="section-8">
        <div class="chartTitle">Component Close Cycles</div>
        <div class="chart-section" id="componentCloseCyclesChart"></div>
      </div>
      <div class="section-4">
        <div class="chartTitle">Pod Times</div>
        <div class="chart-section" id="podTimesChart"></div>
      </div>
      <div class="section-8">
        <div class="chartTitle">Depletion Rate Trending</div>
        <div class="chart-section" id="depletionChart"></div>
      </div>
      <div class="section-4">
        <div class="chartTitle">Pump Activity</div>
        <div class="chart-section" id="pumpActivity"></div>
      </div>
      <div class="section-12">
        <div class="chartTitle">Comments</div>
        <div class="comment-section" id="comments"></div>
      </div>
    </div>
    <div class="row">
      <div class="section-12">
        <div>
          <div class="label">BOP Health Events</div>
        </div>
        <div class="" id="bopHealthEvents">
          <div>
            <table
              style="width: 100% !important;"
              id="bopHealthData"
              class="row-border event-table table-bordered hover"
            >
              <thead>
                <tr class="tb-b">
                  <th>SR.</th>
                  <th>Date</th>
                  <th>Duration</th>
                  <th>Rig</th>
                  <th>BOP</th>
                  <th>Events</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Priority</th>
                  <th>Ackn.</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
  
        <div>
          <div class="label">Operational Events</div>
        </div>
        <div class="" id="operationalEvents">
          <div>
            <table
              style="width: 100% !important;"
              id="operationalData"
              class="row-border event-table table-bordered hover"
            >
              <thead>
                <tr class="tb-b">
                  <th>SR.</th>
                  <th>Date</th>
                  <th>Duration</th>
                  <th>Rig</th>
                  <th>BOP</th>
                  <th>Events</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Priority</th>
                  <th>Ackn.</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
  
        <div>
          <div class="label">On Deck Events</div>
        </div>
        <div class="" id="onDeckEvents">
          <div>
            <table style="width: 100% !important;" id="ondeckData" class="row-border event-table table-bordered hover">
              <thead>
                <tr class="tb-b">
                  <th>SR.</th>
                  <th>Date</th>
                  <th>Duration</th>
                  <th>Rig</th>
                  <th>BOP</th>
                  <th>Events</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Priority</th>
                  <th>Ackn.</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  `,
  styles: [
    `
    p {
        font-size: 20px;
    }
    h3
{
  border:1px solid black;
}
#aqlogo {
  width: 100%;
}

.report-title {
  color: black;
}

.tb-b {
  background-color: #418ddf;
  color: white;
  font-size: 14px;
}

.report-table {
  color: black;
  font-size: 14px;
  width: 100%;
  margin-bottom: 1rem;
}
.report-table th,
.report-table td {
  padding: 0.25rem;
  vertical-align: middle;
  border-top: none !important;
}
.event-table {
  color: black;
  font-size: 14px;
  width: 100%;
  margin-bottom: 1rem;
}
.chartTitle {
  background-color: #418ddf;
  color: #fff;
}

.container {
  height: 600px;
  overflow-y: scroll;
}
.pdfData {
  padding: 5px;
  padding-top: 10px;
  background-color: white;
  height: auto;
  margin: 10px;
  // text-align: center;
  padding-left: 30px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.section-8 {
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
  position: relative;
  width: 100%;
  border: #555657;
}

.section-4 {
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  position: relative;
  width: 100%;
  border: #555657;
}

.section-12 {
  flex: 0 0 100%;
  max-width: 100%;
  position: relative;
  width: 100%;
  border: #555657;
}
.chart-section {
  height: 200px;
}

.comment-section {
  height: 100px;
}

.datatable-div {
  margin-left: 5px;
  margin-right: 5px;
  border: 1px solid #9f7070;
  padding: 10px;
  border-radius: 3px;
  margin-bottom: 25px;
}
#DataTables_Table_0_processing {
  display: none;
}
input,
button,
select,
optgroup,
textarea {
  padding: 5px;
}

.table {
  width: 100%;
  margin-bottom: 1rem;
  color: #d2d4d7;
}
.table-bordered {
  border: 1px solid #2b2c2e;
}
.table-bordered th,
.table-bordered td {
  border: 1px solid #2b2c2e;
}
table.dataTable {
  width: 100%;
  margin: 0 auto;
  clear: both;
  border-collapse: separate;
  border-spacing: 0;
  /*
   * Header and footer styles
   */
  /*
   * Body styles
   */
}
table.dataTable thead th,
table.dataTable tfoot th {
  font-weight: bold;
  border: 1px solid #111010;
  font-size: 13px;
  background-color: #373738;
}
table.dataTable thead th,
table.dataTable thead td {
  padding: 10px 15px;
  text-align: center;
  vertical-align: middle;
}
table.dataTable thead th:active,
table.dataTable thead td:active {
  outline: none;
}
table.dataTable tfoot th,
table.dataTable tfoot td {
  padding: 10px 18px 6px 18px;
}
table.dataTable thead .sorting,
table.dataTable thead .sorting_asc,
table.dataTable thead .sorting_desc,
table.dataTable thead .sorting_asc_disabled,
table.dataTable thead .sorting_desc_disabled {
  cursor: pointer;
  *cursor: hand;
  background-repeat: no-repeat;
  background-position: center right;
}
.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(50, 47, 47, 0.85);
}
table.dataTable tbody tr {
  color: #d1cccc;
}
.table th,
.table td {
  padding: 0.75rem;
  vertical-align: middle;
  border-top: none !important;

  /* border-top: 1px solid #dee2e6; */
}
table.dataTable tbody tr.selected {
  background-color: #302d2d;
}
table.dataTable tbody th,
table.dataTable tbody td {
  padding: 8px 5px;
  text-align: center;
  vertical-align: middle;
}
table.dataTable.row-border tbody th,
table.dataTable.row-border tbody td,
table.dataTable.display tbody th,
table.dataTable.display tbody td {
  border-top: 1px solid #383232;
}
table.dataTable.row-border tbody tr:first-child th,
table.dataTable.row-border tbody tr:first-child td,
table.dataTable.display tbody tr:first-child th,
table.dataTable.display tbody tr:first-child td {
  border-top: none;
}
table.dataTable.cell-border tbody th,
table.dataTable.cell-border tbody td {
  border-top: 1px solid #dddddd;
  border-right: 1px solid #dddddd;
}
table.dataTable.cell-border tbody tr th:first-child,
table.dataTable.cell-border tbody tr td:first-child {
  border-left: 1px solid #dddddd;
}
table.dataTable.cell-border tbody tr:first-child th,
table.dataTable.cell-border tbody tr:first-child td {
  border-top: none;
}
table.dataTable.stripe tbody tr.odd,
table.dataTable.display tbody tr.odd {
  background-color: #f9f9f9;
}
table.dataTable.stripe tbody tr.odd.selected,
table.dataTable.display tbody tr.odd.selected {
  background-color: #abb9d3;
}
table.dataTable.hover tbody tr:hover,
table.dataTable.display tbody tr:hover {
  background-color: #6e6262;
}
table.dataTable.hover tbody tr:hover.selected,
table.dataTable.display tbody tr:hover.selected {
  background-color: #a9b7d1;
}
table.dataTable.order-column tbody tr > .sorting_1,
table.dataTable.order-column tbody tr > .sorting_2,
table.dataTable.order-column tbody tr > .sorting_3,
table.dataTable.display tbody tr > .sorting_1,
table.dataTable.display tbody tr > .sorting_2,
table.dataTable.display tbody tr > .sorting_3 {
  background-color: #f9f9f9;
}
table.dataTable.order-column tbody tr.selected > .sorting_1,
table.dataTable.order-column tbody tr.selected > .sorting_2,
table.dataTable.order-column tbody tr.selected > .sorting_3,
table.dataTable.display tbody tr.selected > .sorting_1,
table.dataTable.display tbody tr.selected > .sorting_2,
table.dataTable.display tbody tr.selected > .sorting_3 {
  background-color: #acbad4;
}
table.dataTable.display tbody tr.odd > .sorting_1,
table.dataTable.order-column.stripe tbody tr.odd > .sorting_1 {
  background-color: #f1f1f1;
}
table.dataTable.display tbody tr.odd > .sorting_2,
table.dataTable.order-column.stripe tbody tr.odd > .sorting_2 {
  background-color: #f3f3f3;
}
table.dataTable.display tbody tr.odd > .sorting_3,
table.dataTable.order-column.stripe tbody tr.odd > .sorting_3 {
  background-color: whitesmoke;
}
table.dataTable.display tbody tr.odd.selected > .sorting_1,
table.dataTable.order-column.stripe tbody tr.odd.selected > .sorting_1 {
  background-color: #a6b3cd;
}
table.dataTable.display tbody tr.odd.selected > .sorting_2,
table.dataTable.order-column.stripe tbody tr.odd.selected > .sorting_2 {
  background-color: #a7b5ce;
}
table.dataTable.display tbody tr.odd.selected > .sorting_3,
table.dataTable.order-column.stripe tbody tr.odd.selected > .sorting_3 {
  background-color: #a9b6d0;
}
table.dataTable.display tbody tr.even > .sorting_1,
table.dataTable.order-column.stripe tbody tr.even > .sorting_1 {
  background-color: #f9f9f9;
}
table.dataTable.display tbody tr.even > .sorting_2,
table.dataTable.order-column.stripe tbody tr.even > .sorting_2 {
  background-color: #fbfbfb;
}
table.dataTable.display tbody tr.even > .sorting_3,
table.dataTable.order-column.stripe tbody tr.even > .sorting_3 {
  background-color: #fdfdfd;
}
table.dataTable.display tbody tr.even.selected > .sorting_1,
table.dataTable.order-column.stripe tbody tr.even.selected > .sorting_1 {
  background-color: #acbad4;
}
table.dataTable.display tbody tr.even.selected > .sorting_2,
table.dataTable.order-column.stripe tbody tr.even.selected > .sorting_2 {
  background-color: #adbbd6;
}
table.dataTable.display tbody tr.even.selected > .sorting_3,
table.dataTable.order-column.stripe tbody tr.even.selected > .sorting_3 {
  background-color: #afbdd8;
}
table.dataTable.display tbody tr:hover > .sorting_1,
table.dataTable.order-column.hover tbody tr:hover > .sorting_1 {
  background-color: #eaeaea;
}
table.dataTable.display tbody tr:hover > .sorting_2,
table.dataTable.order-column.hover tbody tr:hover > .sorting_2 {
  background-color: #ebebeb;
}
table.dataTable.display tbody tr:hover > .sorting_3,
table.dataTable.order-column.hover tbody tr:hover > .sorting_3 {
  background-color: #eeeeee;
}
table.dataTable.display tbody tr:hover.selected > .sorting_1,
table.dataTable.order-column.hover tbody tr:hover.selected > .sorting_1 {
  background-color: #a1aec7;
}
table.dataTable.display tbody tr:hover.selected > .sorting_2,
table.dataTable.order-column.hover tbody tr:hover.selected > .sorting_2 {
  background-color: #a2afc8;
}
table.dataTable.display tbody tr:hover.selected > .sorting_3,
table.dataTable.order-column.hover tbody tr:hover.selected > .sorting_3 {
  background-color: #a4b2cb;
}
table.dataTable.no-footer {
  border-bottom: 1px solid #111111;
}
table.dataTable.nowrap th,
table.dataTable.nowrap td {
  white-space: nowrap;
}
table.dataTable.compact thead th,
table.dataTable.compact thead td {
  padding: 4px 17px;
}
table.dataTable.compact tfoot th,
table.dataTable.compact tfoot td {
  padding: 4px;
}
table.dataTable.compact tbody th,
table.dataTable.compact tbody td {
  padding: 4px;
}
table.dataTable th.dt-left,
table.dataTable td.dt-left {
  text-align: left;
}
table.dataTable th.dt-center,
table.dataTable td.dt-center,
table.dataTable td.dataTables_empty {
  text-align: center;
}
table.dataTable th.dt-right,
table.dataTable td.dt-right {
  text-align: right;
}
table.dataTable th.dt-justify,
table.dataTable td.dt-justify {
  text-align: justify;
}
table.dataTable th.dt-nowrap,
table.dataTable td.dt-nowrap {
  white-space: nowrap;
}
table.dataTable thead th.dt-head-left,
table.dataTable thead td.dt-head-left,
table.dataTable tfoot th.dt-head-left,
table.dataTable tfoot td.dt-head-left {
  text-align: left;
}
table.dataTable thead th.dt-head-center,
table.dataTable thead td.dt-head-center,
table.dataTable tfoot th.dt-head-center,
table.dataTable tfoot td.dt-head-center {
  text-align: center;
}
table.dataTable thead th.dt-head-right,
table.dataTable thead td.dt-head-right,
table.dataTable tfoot th.dt-head-right,
table.dataTable tfoot td.dt-head-right {
  text-align: right;
}
table.dataTable thead th.dt-head-justify,
table.dataTable thead td.dt-head-justify,
table.dataTable tfoot th.dt-head-justify,
table.dataTable tfoot td.dt-head-justify {
  text-align: justify;
}
table.dataTable thead th.dt-head-nowrap,
table.dataTable thead td.dt-head-nowrap,
table.dataTable tfoot th.dt-head-nowrap,
table.dataTable tfoot td.dt-head-nowrap {
  white-space: nowrap;
}
table.dataTable tbody th.dt-body-left,
table.dataTable tbody td.dt-body-left {
  text-align: left;
}
table.dataTable tbody th.dt-body-center,
table.dataTable tbody td.dt-body-center {
  text-align: center;
}
table.dataTable tbody th.dt-body-right,
table.dataTable tbody td.dt-body-right {
  text-align: right;
}
table.dataTable tbody th.dt-body-justify,
table.dataTable tbody td.dt-body-justify {
  text-align: justify;
}
table.dataTable tbody th.dt-body-nowrap,
table.dataTable tbody td.dt-body-nowrap {
  white-space: nowrap;
}

table.dataTable,
table.dataTable th,
table.dataTable td {
  box-sizing: content-box;
}

/*
 * Control feature layout
 */
.dataTables_wrapper {
  position: relative;
  clear: both;
  *zoom: 1;
  zoom: 1;
}
.dataTables_wrapper .dataTables_length {
  float: left;
}
.dataTables_wrapper .dataTables_filter {
  float: right;
  text-align: right;
}
.dataTables_wrapper .dataTables_filter input {
  margin-left: 0.5em;
  height: 30px;
  border-radius: 5px;
}
.dataTables_wrapper .dataTables_info {
  clear: both;
  float: left;
  padding-top: 0.755em;
}
.dataTables_wrapper .dataTables_paginate {
  float: right;
  text-align: right;
  padding-top: 0.25em;
}
.dataTables_wrapper .dataTables_paginate .paginate_button {
  box-sizing: border-box;
  display: inline-block;
  min-width: 1.5em;
  padding: 0.5em 1em;
  margin-left: -1px;
  text-align: center;
  text-decoration: none !important;
  cursor: pointer;
  color: #f3f1f1 !important;
  border: 1px solid #805050;
  border-radius: 0px;
}
.dataTables_wrapper .dataTables_paginate .paginate_button.current,
.dataTables_wrapper .dataTables_paginate .paginate_button.current:hover {
  color: #333333 !important;
  border: 1px solid #979797;
  background-color: white;
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, white), color-stop(100%, gainsboro));
  /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(top, white 0%, gainsboro 100%);
  /* Chrome10+,Safari5.1+ */
  background: -moz-linear-gradient(top, white 0%, gainsboro 100%);
  /* FF3.6+ */
  background: -ms-linear-gradient(top, white 0%, gainsboro 100%);
  /* IE10+ */
  background: -o-linear-gradient(top, white 0%, gainsboro 100%);
  /* Opera 11.10+ */
  background: linear-gradient(to bottom, white 0%, gainsboro 100%);
  /* W3C */
}
.dataTables_wrapper .dataTables_paginate .paginate_button.disabled,
.dataTables_wrapper .dataTables_paginate .paginate_button.disabled:hover,
.dataTables_wrapper .dataTables_paginate .paginate_button.disabled:active {
  cursor: default;
  color: #f6f0f0 !important;
  border: 1px solid #805050;
  background: transparent;
  box-shadow: none;
}
.dataTables_wrapper .dataTables_paginate .paginate_button:hover {
  color: white !important;
  border: 1px solid #111111;
  background-color: #585858;
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #585858), color-stop(100%, #111111));
  /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(top, #585858 0%, #111111 100%);
  /* Chrome10+,Safari5.1+ */
  background: -moz-linear-gradient(top, #585858 0%, #111111 100%);
  /* FF3.6+ */
  background: -ms-linear-gradient(top, #585858 0%, #111111 100%);
  /* IE10+ */
  background: -o-linear-gradient(top, #585858 0%, #111111 100%);
  /* Opera 11.10+ */
  background: linear-gradient(to bottom, #585858 0%, #111111 100%);
  /* W3C */
}
.dataTables_wrapper .dataTables_paginate .paginate_button:active {
  outline: none;
  background-color: #2b2b2b;
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #2b2b2b), color-stop(100%, #0c0c0c));
  /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(top, #2b2b2b 0%, #0c0c0c 100%);
  /* Chrome10+,Safari5.1+ */
  background: -moz-linear-gradient(top, #2b2b2b 0%, #0c0c0c 100%);
  /* FF3.6+ */
  background: -ms-linear-gradient(top, #2b2b2b 0%, #0c0c0c 100%);
  /* IE10+ */
  background: -o-linear-gradient(top, #2b2b2b 0%, #0c0c0c 100%);
  /* Opera 11.10+ */
  background: linear-gradient(to bottom, #2b2b2b 0%, #0c0c0c 100%);
  /* W3C */
  box-shadow: inset 0 0 3px #111;
}
.dataTables_wrapper .dataTables_paginate .ellipsis {
  padding: 0 1em;
}
.dataTables_wrapper .dataTables_processing {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 40px;
  margin-left: -50%;
  margin-top: -25px;
  padding-top: 20px;
  text-align: center;
  font-size: 1.2em;
  background-color: #01010100;
}
.dataTables_wrapper .dataTables_length,
.dataTables_wrapper .dataTables_filter,
.dataTables_wrapper .dataTables_info,
.dataTables_wrapper .dataTables_paginate {
  color: #f6f0f0;
}
.dataTables_wrapper .dataTables_processing {
  color: #01010100;
}
.dataTables_wrapper .dataTables_scroll {
  clear: both;
}
.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody {
  *margin-top: -1px;
  -webkit-overflow-scrolling: touch;
}
.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody > table > thead > tr > th,
.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody > table > thead > tr > td,
.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody > table > tbody > tr > th,
.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody > table > tbody > tr > td {
  vertical-align: middle;
}
.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody > table > thead > tr > th > div.dataTables_sizing,
.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody > table > thead > tr > td > div.dataTables_sizing,
.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody > table > tbody > tr > th > div.dataTables_sizing,
.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody > table > tbody > tr > td > div.dataTables_sizing {
  height: 0;
  overflow: hidden;
  margin: 0 !important;
  padding: 0 !important;
}
.dataTables_wrapper.no-footer .dataTables_scrollBody {
  border-bottom: 1px solid #111111;
}
.dataTables_wrapper.no-footer div.dataTables_scrollHead table.dataTable,
.dataTables_wrapper.no-footer div.dataTables_scrollBody > table {
  border-bottom: none;
}
.dataTables_wrapper:after {
  visibility: hidden;
  display: block;
  content: '';
  clear: both;
  height: 0;
}

@media screen and (max-width: 767px) {
  .dataTables_wrapper .dataTables_info,
  .dataTables_wrapper .dataTables_paginate {
    float: none;
    text-align: center;
  }
  .dataTables_wrapper .dataTables_paginate {
    margin-top: 0.5em;
  }
}
@media screen and (max-width: 640px) {
  .dataTables_wrapper .dataTables_length,
  .dataTables_wrapper .dataTables_filter {
    float: none;
    text-align: center;
  }
  .dataTables_wrapper .dataTables_filter {
    margin-top: 0.5em;
  }
}

.icon-group {
  display: flex;
  justify-content: center;
}

.icon-right {
  margin-right: 14%;
}

.label {
  white-space: nowrap;
  color: #000000;
}

.arrow-container {
  padding-right: 15px;
}
.blinking {
  animation: blinkingText 2s infinite;
  color: #404448 !important;
}

a.blinking {
}

@keyframes blinkingText {
  0%,
  49% {
    background-color: #ff9800;
  }

  50%,
  100% {
    background-color: #f8f9fa00;
  }
}

.closed {
  color: #68bd02 !important;
}

.savedData {
  color: green;
  text-align: center;
  font-size: 13px;
}

.errorData {
  color: red;
  text-align: center;
  font-size: 13px;
}

.progress-bar {
  white-space: nowrap;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  border-radius: 5px;
}

.progress-bar > .progress-type {
  padding-left: 10px;
}

.progress-meter {
  min-height: 0px;
}

.progress-meter > .meter {
  position: relative;
  float: left !important;
  min-height: 1px;
  border-width: 0px;
  border-style: solid;
  border-color: #212529;
}

.progress-meter > .meter-left {
  border-left-width: 0px;
}

.progress-meter > .meter-right {
  border-right-width: 0px;
}

.progress-meter > .meter > .meter-text {
  position: absolute;
  display: inline-block;
  bottom: 18px;
  width: 100%;
  margin-left: -2px;
  font-size: 9px;
  color: #ececec;
}

.progress-meter > .meters {
  position: relative;
  float: left !important;
  min-height: 1px;
  border-width: 0px;
  border-style: solid;
  border-color: #212529;
}

.progress-meter > .meters-left {
  border-left-width: 0px;
}

.progress-meter > .meters-right {
  border-right-width: 0px;
}

.progress-meter > .meters > .meter-btmtext {
  position: absolute;
  display: inline-block;
  bottom: -14px;
  width: 100%;
  text-align: center;
  margin-left: -2px;
  font-size: 9px;
  color: #e2e0e0;
}
/*****/
.progressBar {
  height: 16px;
  margin-bottom: 0px;
  overflow: hidden;
  background-color: #dadada;
  border-radius: 3px;
  /* border-bottom: 1px solid #9C27B0; */
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: inset 1px 1px 6px 1px rgba(0, 0, 0, 0.39);
  /* background-image: linear-gradient(90deg, #21252900 10%, #dbdbdb2e 0%, transparent); */
  /* background-size: 1rem 1rem; */
}

.progress-bars {
  float: left;
  /* width: 0%; */
  height: 100%;
  font-size: 11px;
  line-height: 16px;
  color: #fff;
  text-align: center;
  background-color: #337ab7;
  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  -webkit-transition: width 0.6s ease;
  -o-transition: width 0.6s ease;
  transition: width 0.6s ease;
}

.progress-striped .progress-bars,
.progress-bars-striped {
  background-image: -webkit-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-image: -o-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  -webkit-background-size: 40px 40px;
  background-size: 40px 40px;
}

.progress-bars-striped {
  background-image: linear-gradient(90deg, rgba(214, 212, 212, 0.15) 10%, transparent 25%, transparent);
  background-size: 1rem 1rem;
}

.progress.active .progress-bars,
.progress-bars.active {
  -webkit-animation: progress-bar-stripes 2s linear infinite;
  -o-animation: progress-bar-stripes 2s linear infinite;
  animation: progress-bar-stripes 2s linear infinite;
}

.progress-bars-success {
  background-color: #5cb85c;
}

.progress-striped .progress-bars-success {
  background-image: -webkit-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-image: -o-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
}

.progress-bars-info {
  background-color: #5bc0de;
}

.progress-striped .progress-bars-info {
  background-image: -webkit-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-image: -o-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
}

.progress-bars-warning {
  background-color: #f0ad4e;
}

.progress-striped .progress-bars-warning {
  background-image: -webkit-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-image: -o-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
}

.progress-bars-danger {
  background-color: #d9534f;
}

.progress-striped .progress-bars-danger {
  background-image: -webkit-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-image: -o-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
}

.center {
  text-align: center;
}

.eventTitle {
  color: #ffc107;
}

.pending {
  background: #ffff00;
  color: black;
}
.rounded-btn {
  border: 1px solid !important;
  height: 25px !important;
  width: 25px !important;
  border-radius: 50% !important;
}
@keyframes anim-glow1 {
  0% {
    box-shadow: 0 0 rgba(#ffff00, 1);
  }
  100% {
    box-shadow: 0 0 10px 8px transparent;
    border-width: 2px;
  }
}

.yellowColor {
  border-radius: 50%;
  border: 2px solid #ffff00;
  background-color: #ffff00;
  width: 16px;
  height: 16px;
  text-align: center;
  position: relative;
  animation: anim-glow1 2s ease infinite;
}

.corrected {
  background: #1deb1d;
  color: black;
}

.critical {
  background: #ff1100;
  color: black;
}
.critical-light {
  color: red !important;
}
.corrected-light {
  color: green !important;
}
.major {
  background: #ef7751;
  color: black;
}

.minor {
  background: #f3c23a;
  color: black;
}
.btn-sm,
.btn-group-sm > .btn {
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 2px;
  border: 2px #fafafa;
  background: rgba(0, 0, 0, 0.01);
  color: #f2f4f6;
}

.warning {
  background-color: #ffff00 !important;
  color: black !important;
}

.true {
  color: #ffffff;
  background-color: #0ec30e;
}

.false {
  color: #ffffff;
  background-color: #f54336;
}

.truegray {
  color: #ffffff;
  background-color: #82c718;
}

.falsegray {
  color: #ffffff;
  background-color: #e05d5d;
}

.tdIcons {
  font-size: 18px;
}

.update {
  color: #ffffff;
  background-color: #0ec30e;
}

.fault {
  background: #ffcb00 !important;
}

.right {
  float: right;
  color: #000000;
}

.font18 {
  font-size: 16px;
}

.lighton {
  color: #ffa50a;
}

  `,
  ],
})
export class AppComponent {
  public onClick(element) {
    exportElement(element, {
      paperSize: 'A4',
      keepTogether: 'p',
      landscape: true,
    });
  }
}
