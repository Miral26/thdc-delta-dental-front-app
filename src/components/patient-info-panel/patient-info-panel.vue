<template>
  <b-sidebar
    id="sidebar-right"
    class="patient-detail-sidebar"
    title="Patient Information"
    @change="onSidebarVisibilityChange"
    right
    shadow
  >
    <div class="px-3 py-2">
      <div class="patient-info">
        <div class="left">
          <div class="patient-img">
            <img src="@/assets/images/faces/1.jpg" alt="" />
          </div>
          <div class="patient-detail">
            <h6>{{ getPatientData.name || "Luke Shaw" }}</h6>
            <span>09/03/1978 (7 years old)</span>
          </div>
        </div>
        <div class="right">
          <p>Preferred Days</p>
          <span>[None]</span>
          <p>Preferred Times</p>
          <span>[None]</span>
        </div>
      </div>
      <div class="patient-info-tabs mt-4">
        <div class="time-icon">
          <img src="@/assets/images/clock.svg" alt="image" />
        </div>
        <b-tabs>
          <b-tab title="Appt">
            <div class="appt-form">
              <b-form-group>
                <div class="status-dropdown">
                  <label>Status</label>
                  <b-dropdown id="dropdown-1" text="Unconfirmed">
                    <b-dropdown-item>Unconfirmed</b-dropdown-item>
                  </b-dropdown>
                </div>
                <a href="#" class="schedule-link">Schedule</a>
              </b-form-group>
              <b-form-group>
                <ul class="selection-section mt-4">
                  <li>
                    <label class="checkbox checkbox-outline-primary">
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                      <span>ASAP</span></label
                    >
                  </li>
                  <li>
                    <label class="checkbox checkbox-outline-primary">
                      <input type="checkbox" />
                      <span class="checkmark"></span
                      ><span>Needs Follow-Up</span></label
                    >
                  </li>
                  <li>
                    <label class="checkbox checkbox-outline-primary">
                      <input type="checkbox" />
                      <span class="checkmark"></span
                      ><span>Premedicate</span></label
                    >
                  </li>
                  <li>
                    <label class="checkbox checkbox-outline-primary">
                      <input type="checkbox" />
                      <span class="checkmark"></span><span>Pinned</span></label
                    >
                  </li>
                </ul>
              </b-form-group>
              <b-form-group>
                <div class="tx-planner-wrap mt-4">
                  <div class="row">
                    <div class="col-md-4">
                      <label
                        >Procedure(s) 0 selected<span class="required"
                          >*</span
                        ></label
                      >
                      <div class="search-procedure">
                        <b-form-input
                          type="text"
                          required
                          placeholder="Procedure selected"
                        ></b-form-input>
                        <i class="fa fa-map-marker"></i>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <label>Other</label>
                      <b-form-input
                        type="text"
                        required
                        placeholder="Other"
                      ></b-form-input>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <span class="tx-planner">Add Tx planner</span>
                    </div>
                  </div>
                </div>
              </b-form-group>
              <b-form-group>
                <div class="patient-form-filed mt-3">
                  <div class="row">
                    <div class="col-md-4">
                      <label>Operatory <span class="required">*</span></label>
                      <b-dropdown text="Operatory">
                        <b-dropdown-item>Operatory</b-dropdown-item>
                      </b-dropdown>
                    </div>
                    <div class="col-md-4">
                      <label
                        >Additional Provider
                        <span class="required">*</span></label
                      >
                      <b-dropdown text="Additional Provider">
                        <b-dropdown-item>Additional Provider</b-dropdown-item>
                      </b-dropdown>
                    </div>
                    <div class="col-md-4">
                      <label>Additional Provider</label>
                      <b-dropdown text="Additional Provider">
                        <b-dropdown-item>Additional Provider</b-dropdown-item>
                      </b-dropdown>
                    </div>
                  </div>
                </div>
              </b-form-group>
              <b-form-group>
                <div class="patient-form-filed mt-3">
                  <div class="row">
                    <div class="col-md-3">
                      <label>Date</label>
                      <b-form-datepicker
                        class="icon-none"
                        :date-format-options="{
                          year: 'numeric',
                          month: 'numeric',
                          day: 'numeric',
                        }"
                        v-model="selectedDate"
                        :min="selectedDate"
                      ></b-form-datepicker>
                    </div>
                    <div class="col-md-4">
                      <label>Time</label>
                      <div class="form-row">
                        <div class="col-md-6">
                          <b-form-group>
                            <b-form-timepicker
                              id="time1"
                              now-button
                              class="default-timepicker"
                              reset-button
                              locale="en"
                            ></b-form-timepicker>
                          </b-form-group>
                        </div>
                        <div class="col-md-6">
                          <b-form-timepicker
                            id="time2"
                            now-button
                            class="default-timepicker"
                            reset-button
                            locale="en"
                          ></b-form-timepicker>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-5">
                      <label>Length</label>
                      <div class="form-row">
                        <div class="col-md-6">
                          <div class="d-flex align-items-center">
                            <b-form-input
                              type="text"
                              required
                              placeholder="Time"
                            ></b-form-input>
                            <div class="lenght-lebel">hr</div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="d-flex align-items-center">
                            <b-form-input
                              type="text"
                              required
                              placeholder="Time"
                            ></b-form-input>
                            <div class="lenght-lebel">min</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </b-form-group>
              <b-form-group>
                <div class="patient-form-filed mt-3">
                  <label>Notes</label>
                  <b-form-textarea
                    rows="5"
                    placeholder="Enter Appointment Note"
                  >
                  </b-form-textarea>
                </div>
              </b-form-group>
              <b-form-group>
                <div class="row mt-4">
                  <div class="col-md-8">
                    <div class="form-btn">
                      <b-button variant="primary" class="rounded"
                        >Save</b-button
                      >
                      <b-button variant="outline-primary" class="rounded"
                        >Cancel</b-button
                      >
                    </div>
                  </div>
                  <div class="col-md-4 text-right">
                    <b-button variant="link" class="text-danger"
                      >Delete</b-button
                    >
                  </div>
                </div>
              </b-form-group>
            </div>
          </b-tab>
          <b-tab title="Contact Info"> </b-tab>
          <b-tab title="Rel. Appts"> </b-tab>
          <b-tab title="Med. Alerts"> </b-tab>
          <b-tab title="Lab Case"> </b-tab>
          <b-tab v-if="getPatientData.id" title="Chat"> <Chat /></b-tab>
        </b-tabs>
      </div>
    </div>
  </b-sidebar>
</template>

<script>
import { mapGetters } from "vuex";
import Chat from "../../views/app/apps/chat";
export default {
  data() {
    return {
      selectedDate: new Date(),
    };
  },
  components: { Chat },
  computed: {
    ...mapGetters(["getPatientData"]),
  },
  methods: {
    onSidebarVisibilityChange(e) {
      const element = document.querySelector(".patient-detail-sidebar");
      if (e) {
        element.classList.add("sidebar-open");
      } else {
        element.classList.remove("sidebar-open");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
