import { Component } from '@angular/core';
import { exportElement } from './export-element';

@Component({
  selector: 'my-app',
  template: `
    <button class="k-button" (click)="onClick(drawMe)">Export PDF...</button>
    <div #drawMe>
    <div class="container">
    <div class="row">
      <div class="col-md-2">
        <img style="width: 100%;" id="aqlogo" src="https://shellbopblob.blob.core.windows.net/bopdashboard/aquila.png?sp=r&st=2022-09-26T04:11:17Z&se=3022-09-26T12:11:17Z&sv=2021-06-08&sr=c&sig=P5O2S9JQ7XrQBA2EnPBpskw7uPpifnVai1hdgkVIf20%3D" />
      </div>
      <div class="col-md-10">
        <h4
          class="report-title">
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
    <div class="row">
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
      <div>For more information, please visit <a href="https://subsea-oculus.com/" target="_blank">www.subsea-oculus.com</a>
</div>
    </div>
    <span class="page-break"></span>
    <div class="row">
    <h4 class="heading">Event Manager</h4>
    <div class="label">BOP Health Events - Past 24 hours</div>
        <div class="events" id="bopHealthEvents">
            <table
              id="bopHealthData"
              class="report-table table table-bordered hover"
            >
              <thead>
                <tr class="tb-b">
                  <th>SR.</th>
                  <th>Date</th>
                  <th>Duration</th>
                  <th>Rig</th>
                  <th>BOP</th>
                  <th>Events</th>
                  <th>Desc.</th>
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
          <div class="label">Operational Events - Past 24 hours</div>
        <div class="events" id="operationalEvents">
            <table
              style="width: 100% !important;"
              id="operationalData"
              class="report-table table table-bordered hover"
            >
              <thead>
                <tr class="tb-b">
                  <th>SR.</th>
                  <th>Date</th>
                  <th>Duration</th>
                  <th>Rig</th>
                  <th>BOP</th>
                  <th>Events</th>
                  <th>Desc.</th>
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
          <div class="label">On Deck Events - Past 24 hours</div>
        <div class="events" id="onDeckEvents">
            <table id="ondeckData" class="report-table table table-bordered hover">
              <thead>
                <tr class="tb-b">
                  <th>SR.</th>
                  <th>Date</th>
                  <th>Duration</th>
                  <th>Rig</th>
                  <th>BOP</th>
                  <th>Events</th>
                  <th>Desc.</th>
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

        <div class="label">Failures - Past 24 hours</div>
        <div class="events" id="FailuresEvents">
            <table id="FailuresData" class="report-table table table-bordered hover">
              <thead>
                <tr class="tb-b">
                  <th>ID</th>
                  <th>Title</th>
                  <th>NPT</th>
                  <th>Status</th>
                  <th>Failure Date</th>
                  <th>Update Date</th>
                  <th>Obv.</th>
                  <th>SOF</th>
                  <th>MOC</th>
                  <th>Equipment</th>
                  <th>Issue Type</th>
                  <th>Failed Item</th>
                  <th>Rig</th>
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
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>                
              </tbody>
            </table>
        </div>

        <div class="label">Observations - Past 24 hours</div>
        <div class="events" id="ObservationsEvents">
            <table id="ObservationsData" class="report-table table table-bordered hover">
              <thead>
                <tr class="tb-b">
                  <th>ID</th>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Obsv Date</th>
                  <th>Update Date</th>
                  <th>Obsv Type</th>
                  <th>Attached to Failure</th>
                  <th>Rig</th>
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
                </tr>                
              </tbody>
            </table>
        </div>

        <div class="label">Communication - Past 24 hours</div>
        <div class="events" id="CommunicationEvents">
            <table id="CommunicationData" class="report-table table table-bordered hover">
              <thead>
                <tr class="tb-b">
                  <th>ID</th>
                  <th>Rig</th>
                  <th>Type</th>
                  <th>Time</th>
                  <th>Status</th>
                  <th>Priority</th>
                  <th>Closed-Time</th>
                  <th>Outage-Time</th>
                  <th>Time of Event</th>
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
                </tr>                
              </tbody>
            </table>
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

#aqlogo {
  width: 100%;
}

.heading{
  color:#0E86D4;
  font-weight:600;
  width: 100%;
  font-size:17px;
}
.report-title {
  margin-bottom: 10px;
  font-weight: bold;
  line-height: 1.2;
  font-size: 25px;
  color: black;
}

.tb-b {
  background-color: #418ddf;
  color: white;
  font-size: 14px;
}

.report-table {
  color: black;
  font-size: 12px;
  width: 100%;
  margin-bottom: 1rem;
}
.report-table th,
.report-table td {
  vertical-align: middle;  
  border: 1px solid #2b2c2e;
}
th{
  font-weight:400;
}
.events{
  width:100%;
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
  padding-left:5px;
}
.table {
  width: 100%;
  margin-bottom: 1rem;
  color: #d2d4d7;
}
.table-bordered {
  border: 1px solid #2b2c2e;
}
.container {
  height: 600px;
  overflow-y: scroll;
  font-family: 'Arial';
}
.pdfData {
  padding: 5px;
  padding-top: 10px;
  background-color: white;
  height: auto;
  margin: 10px;
  padding-left: 30px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.section-8 {
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
  position: relative;
  width: 100%;
  margin-bottom:2px;
  border: 1px solid #555657;
  border-right: none;
}

.section-4 {
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  position: relative;
  width: 100%;
  margin-bottom:2px;
  border: 1px solid #555657;
}

.section-12 {
  flex: 0 0 100%;
  max-width: 100%;
  position: relative;
  width: 100%;
  margin-bottom:2px;
  border: 1px solid #555657;
}
.chart-section {
  height: 130px;
}

.comment-section {
  height: 70px;
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
.label{
  color:#0E86D4;
  font-weight:600;
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
      forcePageBreak: '.page-break',
    });
  }
}
