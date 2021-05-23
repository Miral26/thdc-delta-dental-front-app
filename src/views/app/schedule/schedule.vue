<template>
  <div class="main-content">
    <!-- <breadcumb :page="'Dashboard'" :folder="'Version 1'" /> -->
    <b-row>
      <b-col lg="9" md="8">
        <!--  <b-card header="Daily Huddle" header-bg-variant="transparent">-->
        <div class="mb-3 page-title">
          <h3 class="font-weight-bold m-0">Schedule</h3>
        </div>

        <div class="schedule-vue-sample">
          <div class="col-md-12 control-section">
            <div class="content-wrapper schedule-container without-date-header">
              <ejs-schedule
                v-if="show"
                id="Schedule"
                ref="ScheduleObj"
                :height="calenderHieght"
                :selectedDate="selectedDate"
                :eventSettings="eventSettings"
                :eventRendered="onEventRendered"
                :group="group"
                :showTimeIndicator="showTimeIndicator"
                :currentView="currentView"
                :actionBegin="onActionBegin"
                :actionComplete="onActionComplete"
                :cellClick="onCellClick"
                :eventClick="onEventClick"
                :popupOpen="onPopupOpen"
                :navigating="onNavigating"
              >
                <e-views>
                  <e-view
                    option="Day"
                    :allowVirtualScrolling="virtualScroll"
                  ></e-view>
                  <!-- <e-view option="Week"></e-view>
                  <e-view option="Month"></e-view>
                  <e-view option="Agenda"></e-view> -->
                </e-views>
                <e-resources>
                  <e-resource
                    field="DoctorId"
                    title="Doctor"
                    name="Doctors"
                    :allowMultiple="allowMultiple"
                    :dataSource="resourceDataSource"
                    textField="Text"
                    idField="Id"
                    groupIDField="DoctorId"
                    colorField="Color"
                  >
                  </e-resource>
                </e-resources>
              </ejs-schedule>
            </div>
          </div>
        </div>
      </b-col>
      <b-col lg="3" md="4">
        <div class="mb-3 page-title">
          <h3 class="font-weight-bold m-0">Appointment Requests</h3>
        </div>
        <div class="appointment-requests-tab">
          <b-tabs content-class="mt-1">
            <b-tab title="ASAP">
              <div class="appointment-list">
                <div
                  class="appointment-card"
                  v-for="num in [1, 2, 3]"
                  :key="num"
                >
                  <div class="appointment-date-time">
                    <span>Mar 19, 2021</span>
                    <span>5:00 PM - 6:00 PM</span>
                  </div>
                  <div class="appointment-title">He - Ryan Smith</div>
                  <div class="contact-info">
                    <span>melissa.luvisi@gmail.com</span>
                    <span>(310)487-4291</span>
                  </div>
                  <div class="submitted-date">
                    <span>Submitted on 3/17/21</span>
                    <i class="fa fa-calendar-check-o"></i>
                  </div>
                </div>
              </div>
            </b-tab>
            <b-tab title="Pinboard" active>
              <div class="appointment-list">
                <div
                  class="appointment-card"
                  v-for="num in [1, 2, 3]"
                  :key="num"
                >
                  <div class="appointment-date-time mb-2">
                    <i class="fa fa-thumb-tack pin-icon"></i>
                    <span> Michelle Taylor Lagunas</span>
                  </div>
                  <div class="appointment-title">
                    <p>Mar 19, 2021</p>
                    <p>Consult for braces</p>
                    <p>Consult, ITERO</p>
                  </div>
                  <div class="submitted-date">
                    <span>Show Production</span>
                  </div>
                </div>
              </div>
            </b-tab>
          </b-tabs>
        </div>
      </b-col>
    </b-row>

    <!-- <b-row>
      <b-col md="12 mt-4">
        <b-button
          class="btn-radius"
          variant="primary ripple m-1"
          v-b-modal.new-appointment
          ><i class="fa fa-plus mr-1"></i> New Appointment</b-button
        >
        <b-button class="btn-radius" variant="outline-primary ripple ml-2"
          >Schedule template</b-button
        >
      </b-col>
    </b-row> -->
  </div>
</template>
<style>
.appointment-list {
  height: -moz-calc(100vh - 200px);
  height: -webkit-calc(100vh - 200px);
  height: calc(100vh - 200px);
  overflow-y: auto;
}
.appointment-card {
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 40px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 5%);
}
.appointment-card:last-child {
  margin-bottom: 0;
}
.appointment-date-time span {
  color: #00c5b4;
  display: block;
  font-size: 16px;
}
.appointment-title {
  color: #12395f;
  font-weight: bold;
  font-size: 17px;
}
.appointment-title p {
  margin-bottom: 0;
  font-size: 14px;
}
.pin-icon {
  float: right;
  color: #d6d6d6;
  font-size: 20px !important;
}
.contact-info span {
  color: #c7cadd;
  display: block;
  font-size: 16px;
}
.contact-info {
  margin-top: 10px;
}
.submitted-date {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 15px;
  color: #c7cadd;
}
.submitted-date i {
  color: #00c5b4;
  font-size: 20px;
}
.appointment-requests-tab .tabs .nav-tabs .nav-item a {
  font-size: 16px;
  margin-left: 0px;
  margin-right: 30px;
}
.appointment-requests-tab .tabs .tab-content {
  padding: 0;
}
#sidebar-right {
  width: 50%;
}
.patient-detail-sidebar .b-sidebar {
  background-color: #fff !important;
}
.sidebar-open:before {
  content: "";
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000;
  opacity: 0.2;
  z-index: 0;
}
.patient-detail-sidebar .b-sidebar-header {
  color: #05070b;
}
.patient-detail-sidebar .b-sidebar-header .close {
  margin-right: 10px !important;
}
.patient-detail-sidebar .b-sidebar-header .close svg {
  border-radius: 100%;
  border: 2px solid #d6d6d6;
  color: #d6d6d6 !important;
  width: 20px;
  height: 20px;
  line-height: 20px;
  vertical-align: top;
}
.patient-info {
  display: flex;
  padding: 20px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}
.right {
  margin-left: auto;
}
.left {
  display: flex;
  align-items: center;
}

.patient-img img {
  border-radius: 100%;
  max-width: 60px;
}

.patient-img {
  margin-right: 10px;
}

.right p {
  margin: 0;
}

.right span {
  margin-bottom: 5px;
  display: block;
  font-weight: 600;
}

.patient-detail h6 {
  font-weight: 600;
  margin: 0;
  font-size: 20px;
}
.status-dropdown {
  display: inline-block;
  position: relative;
}
.status-dropdown label {
  display: block;
  position: absolute;
  top: 10px;
  margin: 0;
  z-index: 9;
  left: 10px;
}
.status-dropdown .dropdown-toggle.btn {
  padding: 0;
  background-color: #fafafa !important;
  border-radius: 10px;
  padding: 30px 50px 10px 10px;
  color: #05070b !important;
  font-size: 16px;
}
.status-dropdown .dropdown-toggle.btn:focus {
  box-shadow: none;
}
.status-dropdown .dropdown-toggle::after {
  content: normal;
}
.status-dropdown .dropdown-menu {
  min-width: 100%;
}
.status-dropdown:after {
  content: "\f107";
  font-family: "FontAwesome";
  border: 0;
  position: absolute;
  right: 10px;
  top: 50%;
  font-size: 24px;
  color: #05070b;
  font-weight: bold;
  -moz-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 9;
}
.schedule-link,
.schedule-link:hover {
  margin-left: 20px;
  color: #00c5b4;
  text-decoration: underline;
}
.tx-planner-wrap {
  background-color: #fafafa;
  padding: 20px;
}
.search-procedure {
  position: relative;
}
.search-procedure i {
  position: absolute;
  right: 12px;
  top: 8px;
  font-size: 16px;
}
.required {
  color: #ac252b;
}
.tx-planner {
  color: #00c5b4;
  margin-top: 15px;
  display: block;
  cursor: pointer;
}
.selection-section {
  margin: 0;
  padding: 0;
}
.selection-section li {
  list-style: none;
  float: left;
  margin-right: 50px;
}
.selection-section li .checkbox {
  margin: 0;
}
.selection-section li .checkbox span {
  vertical-align: middle;
}
.form-group .patient-form-filed label {
  display: block;
  font-size: 16px;
  font-weight: bold;
  color: #05070b;
}
.patient-form-filed .b-dropdown,
.patient-form-filed .b-dropdown .btn {
  width: 100%;
  text-align: left;
}
.time-icon {
  float: right;
  margin-top: 15px;
}
.patient-form-filed .dropdown-toggle,
.patient-form-filed input,
.patient-form-filed textarea {
  padding: 12px 20px;
  border-radius: 10px;
  height: auto;
}
.patient-form-filed .b-form-datepicker,
.patient-form-filed .b-form-btn-label-control.form-control.b-form-timepicker {
  border-radius: 10px;
}
.patient-form-filed .b-form-btn-label-control.form-control > .form-control {
  padding: 12px 20px;
  white-space: nowrap;
  min-height: auto;
  overflow: hidden;
  text-overflow: ellipsis;
}
.lenght-lebel {
  margin-left: 8px;
}
.appt-form .form-btn .btn {
  min-width: 150px;
}
.appt-form .btn + .btn {
  margin-left: 10px;
}
.appt-form .btn-link {
  padding-left: 0;
  padding-right: 0;
  min-width: auto;
}
.appt-form ul.dropdown-menu {
  min-width: auto;
  width: 100%;
}
</style>

<script>
import Vue from "vue";
import fullscreen from "vue-fullscreen";
import { extend } from "@syncfusion/ej2-base";
import { mapActions } from "vuex";
import {
  SchedulePlugin,
  Day,
  Agenda,
  Month,
  Week,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-vue-schedule";
import * as moment from "moment";

Vue.use(SchedulePlugin);
Vue.use(fullscreen);

const resourceData = [
  {
    Id: 1,
    Subject: "Patient 1",
    StartTime: new Date(new Date().setHours(11)),
    EndTime: new Date(new Date().setHours(12)),
    IsAllDay: false,
    ProjectId: 1,
    DoctorId: 2,
  },
  {
    Id: 2,
    Subject: "Patient 2",
    StartTime: new Date(new Date().setHours(14)),
    EndTime: new Date(new Date().setHours(16)),
    IsAllDay: false,
    ProjectId: 1,
    IsAlive: true,
    DoctorId: 1,
  },
];

var contentTemplateVue = Vue.component("contentTemplate", {
  template: `<div class="quick-info-content"><div class="e-cell-content" v-if="data.elementType === 'cell'">
    <div class="content-area"><ejs-textbox ref="titleObj" id="title" placeholder="Title"></ejs-textbox></div>
    <div class="content-area"><ejs-dropdownlist ref="eventTypeObj" id="eventType" :dataSource="roomData" index="0" :fields="fields" 
    popupHeight="150px" placeholder="Choose Type"></ejs-dropdownlist></div>
    <div class="content-area"><ejs-textbox ref="notesObj" id="notes" placeholder="Notes"></ejs-textbox></div></div>
    <div class="event-content" v-else><div class="meeting-type-wrap"><label>Subject</label>:<span>{{data.Subject}}</span></div>
    <div class="meeting-subject-wrap"><label>Type</label>:<span>{{getEventType(data)}}</span></div>
    <div class="notes-wrap"><label>Notes</label>:<span>{{data.Description}}</span></div></div></div>`,
  data() {
    return {
      fields: { text: "CalendarName", value: "CalendarId" },
      roomData: [
        {
          CalendarName: "My Calendar",
          CalendarId: 1,
          CalendarColor: "#c43081",
        },
        { CalendarName: "Company", CalendarId: 2, CalendarColor: "#ff7f50" },
        { CalendarName: "Birthday", CalendarId: 3, CalendarColor: "#AF27CD" },
        { CalendarName: "Holiday", CalendarId: 4, CalendarColor: "#808000" },
      ],
      data: {},
    };
  },
  methods: {
    getEventType: function (data) {
      const scheduleObj = document.querySelector(".e-schedule")
        .ej2_instances[0];
      const resources = scheduleObj.getResourceCollections()[0];
      const resourceData = resources.dataSource.filter(
        (resource) => resource.CalendarId === data.CalendarId
      )[0];
      return resourceData.CalendarText;
    },
  },
});

export default {
  components: {},
  data() {
    return {
      resourceData: [],
      eventSettings: {
        dataSource: extend([], resourceData, null, true),
      },
      selectedDate: new Date(),
      group: { byDate: true, resources: ["Doctors"] },
      allowMultiple: true,
      showTimeIndicator: false,
      resourceDataSource: [
        {
          Text: "OP - 1",
          Id: 1,
          DoctorId: 1,
          Color: "#bbdc00",
          Designation: "Content writer",
        },
        {
          Text: "OP - 2",
          Id: 2,
          DoctorId: 2,
          Color: "#9e5fff",
          Designation: "Designer",
        },
        {
          Text: "OP - 3",
          Id: 3,
          DoctorId: 1,
          Color: "#bbdc00",
          Designation: "Software Engineer",
        },
        {
          Text: "OP - 4",
          Id: 4,
          DoctorId: 2,
          Color: "#9e5fff",
          Designation: "Support Engineer",
        },
        {
          Text: "Other Office",
          Id: 5,
          DoctorId: 1,
          Color: "#bbdc00",
          Designation: "Human Resource",
        },
      ],
      cssClas: "schedule-no-date",
      show: false,
      virtualScroll: true,
      currentView: "Day",
      calenderHieght: window.innerHeight - 200,
      fullscreen: false,
      quickInfoTemplates: {
        content() {
          return { template: contentTemplateVue };
        },
      },
    };
  },
  computed: {},
  mounted() {
    this.setResourceData();
  },
  methods: {
    ...mapActions(["setAppointmentData", "setPatientData"]),
    setResourceData() {
      this.eventSettings.dataSource = resourceData;
      setTimeout(() => {
        this.show = true;
      }, 200);
    },
    onEventRendered: function (args) {
      let categoryColor = args.data.CategoryColor;
      if (args && args.data && args.data.IsAlive) {
        args.element.classList.add('live-event')
      }
      console.log(`args`, args);
      if (!args.element || !categoryColor) {
        return;
      }
      args.element.style.backgroundColor = categoryColor;
    },
    onActionBegin: function (args) {
      if (args.requestType === "toolbarItemRendering") {
        const fullScreenIconItem = {
          align: "Right",
          prefixIcon: "i-Full-Screen",
          cssClass: "full-screen-view-icon",
        };
        args.items.push(fullScreenIconItem);
        const dayNameElement = {
          align: "Left",
          prefixIcon: "",
          text: moment(this.selectedDate).format("dddd"),
          cssClass: "selected-day-name",
        };
        args.items.push(dayNameElement);
      }
    },
    onActionComplete: function (args) {
      let scheduleElement = document.getElementById("Schedule");
      if (args.requestType === "toolBarItemRendered") {
        let fullScreenIconItem = scheduleElement.querySelector(
          ".full-screen-view-icon"
        );
        fullScreenIconItem.onclick = () => {
          this.$fullscreen.toggle(this.$el.querySelector("#Schedule"), {
            wrap: false,
            callback: this.fullscreenChange,
          });
        };
      }
    },
    fullscreenChange(fullscreen) {
      this.fullscreen = fullscreen;
    },
    onNavigating(e) {
      this.selectedDate = e.currentDate;
      const element = document.querySelector(
        ".selected-day-name .e-tbar-btn-text"
      );
      if (element) {
        element.innerHTML = moment(this.selectedDate).format("dddd");
      }
      console.log(`e`, e);
    },
    onEventClick(e) {
      const { event } = e;
      const obj = {
        id: event.Id,
        name: event.Subject,
      };
      this.setPatientData(obj);
      const element = document.querySelector(".patient-detail-sidebar");
      if (element) {
        element.classList.toggle("sidebar-open");
      }
      this.$root.$emit("bv::toggle::collapse", "sidebar-right");
    },
    onCellClick(e) {
      this.setAppointmentData({
        headerSearch: "",
        selectedDate: e.startTime,
        selectedTime: moment(new Date(e.startTime).getTime()).format(
          "HH:MM:ss"
        ),
      });
      this.$bvModal.show("new-appointment");
    },
    onPopupOpen: (args) => {
      args.cancel = true;
    },
  },
  provide: {
    schedule: [Day, Week, Month, Agenda, Resize, DragAndDrop],
  },
};
</script>